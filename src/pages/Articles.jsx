import React, { useEffect, useState, useMemo } from 'react'
import { supabase } from '../supabase'
import { Search, Clock } from 'lucide-react'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

const DogsTrainingPage = () => {
  const [articles, setArticles] = useState([])
  const [visibleCount, setVisibleCount] = useState(9)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('newest')

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('dogstraining_articles')
        .select('*')
        .order('published_date', { ascending: false })

      if (error) setError(error.message)
      else setArticles(data)
      setLoading(false)
    }
    fetchArticles()
  }, [])

  const handleShowMore = () => setVisibleCount(prev => prev + 9)

  const slugify = text =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")

  const filteredArticles = articles
    .filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (filter === 'newest') return new Date(b.published_date) - new Date(a.published_date)
      if (filter === 'oldest') return new Date(a.published_date) - new Date(b.published_date)
      if (filter === 'popular') return b.reading_time - a.reading_time
      return 0
    })

  // Функция для рандомной перестановки массива индексов
  const shuffledIndices = useMemo(() => {
    let arr = [...Array(filteredArticles.length).keys()]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }, [filteredArticles.length])

  // Цветовая палитра
  const palette = {
    background: '#FFF1DC',
    text: '#4B2E2E',
    accent: '#EFAE62',
  }

  const baseClasses = "rounded-3xl shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-[1.03] animate-fade-in"

  // 5 вариантов карточек с твоей палитрой
  const cardStyles = [
    (article) => (
      <Link
        key={article.id}
        to={`/articles/${slugify(article.title)}`}
        className={`${baseClasses} flex flex-col md:flex-row bg-[${palette.background}] text-[${palette.text}]`}
        style={{ background: palette.background, color: palette.text }}
      >
        <img
          src={article.image}
          alt={article.title}
          className="md:w-48 w-full h-40 object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
          style={{ borderBottomRightRadius: '1.5rem' }}
        />
        <div className="p-6 flex flex-col justify-between flex-grow">
          <h2 className="text-2xl font-bold mb-2 font-serif" style={{ color: palette.text }}>{article.title}</h2>
          <p className="text-sm mb-4 line-clamp-3" style={{ color: palette.text }}>{article.summary}</p>
          <div className="flex items-center gap-3">
            <img
              src={article.avatar}
              alt={article.author}
              className="w-10 h-10 rounded-full border-2"
              style={{ borderColor: palette.accent }}
            />
            <div>
              <p className="font-semibold" style={{ color: palette.text }}>{article.author}</p>
              <p className="text-xs" style={{ color: palette.accent }}>⏱ {article.reading_time} min</p>
            </div>
          </div>
        </div>
      </Link>
    ),

    (article) => (
      <Link
        key={article.id}
        to={`/articles/${slugify(article.title)}`}
        className={`${baseClasses} relative bg-white text-[${palette.text}]`}
        style={{ background: palette.background, color: palette.text }}
      >
        <div className="relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-52 object-cover rounded-t-3xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-[rgba(239,174,98,0.4)] backdrop-blur-sm rounded-b-3xl p-4 text-[${palette.background}]">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-xs truncate">{article.summary}</p>
          </div>
        </div>
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={article.avatar} alt={article.author} className="w-8 h-8 rounded-full border border-[${palette.accent}]" />
            <span className="text-sm font-medium" style={{ color: palette.text }}>{article.author}</span>
          </div>
          <div className="text-xs flex gap-4" style={{ color: palette.accent }}>
            <span>⏱ {article.reading_time} min</span>
            <span>📅 {new Date(article.published_date).toLocaleDateString()}</span>
          </div>
        </div>
      </Link>
    ),

    (article) => (
      <Link
        key={article.id}
        to={`/articles/${slugify(article.title)}`}
        className={`${baseClasses} flex flex-col items-center p-6 text-center`}
        style={{ background: palette.accent, color: palette.background }}
      >
        <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4" style={{ borderColor: palette.text }}>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
        <p className="mb-4 text-sm opacity-90 line-clamp-4">{article.summary}</p>
        <div className="flex items-center gap-3">
          <img src={article.avatar} alt={article.author} className="w-10 h-10 rounded-full border-2" style={{ borderColor: palette.background }} />
          <span className="font-semibold">{article.author}</span>
        </div>
        <div className="mt-3 text-xs opacity-80">
          <span>⏱ {article.reading_time} min</span> | <span>📅 {new Date(article.published_date).toLocaleDateString()}</span>
        </div>
      </Link>
    ),

    (article) => (
      <Link
        key={article.id}
        to={`/articles/${slugify(article.title)}`}
        className={`${baseClasses} bg-[${palette.background}] flex flex-col md:flex-row text-[${palette.text}]`}
        style={{ background: palette.background, color: palette.text }}
      >
        <div className="p-6 flex flex-col justify-between flex-grow order-2 md:order-1">
          <h2 className="text-3xl font-extrabold mb-3" style={{ color: palette.accent }}>{article.title}</h2>
          <p className="mb-6 text-base opacity-90 line-clamp-5" style={{ color: palette.text }}>{article.summary}</p>
          <div className="flex items-center gap-3">
            <img src={article.avatar} alt={article.author} className="w-12 h-12 rounded-full border-2" style={{ borderColor: palette.accent }} />
            <div>
              <p className="font-semibold" style={{ color: palette.text }}>{article.author}</p>
              <p className="text-sm" style={{ color: palette.accent }}>⏱ {article.reading_time} min</p>
            </div>
          </div>
        </div>
        <img
          src={article.image}
          alt={article.title}
          className="md:w-56 w-full h-44 object-cover rounded-3xl order-1 md:order-2"
          style={{ boxShadow: `0 10px 15px -3px ${palette.accent}80` }}
        />
      </Link>
    ),

    (article) => (
      <Link
        key={article.id}
        to={`/articles/${slugify(article.title)}`}
        className={`${baseClasses} bg-gradient-to-r from-[${palette.accent}] to-[${palette.background}] text-[${palette.text}] p-6 flex flex-col justify-between`}
        style={{ background: `linear-gradient(135deg, ${palette.accent} 0%, ${palette.background} 100%)`, color: palette.text }}
      >
        <h2 className="text-2xl font-bold mb-3">{article.title}</h2>
        <p className="text-sm mb-5 line-clamp-3">{article.summary}</p>
        <div className="flex items-center gap-3">
          <img src={article.avatar} alt={article.author} className="w-10 h-10 rounded-full border-2" style={{ borderColor: palette.text }} />
          <div>
            <p className="font-semibold">{article.author}</p>
            <p className="text-xs opacity-80">⏱ {article.reading_time} min</p>
          </div>
        </div>
        <img
          src={article.image}
          alt={article.title}
          className="mt-6 w-full h-40 object-cover rounded-2xl"
        />
      </Link>
    ),
  ]

  // Функция рендера карточки с рандомным стилем из 5 по индексу, чтобы порядок был разным
  const renderCard = (article, index) => {
    const styleIndex = shuffledIndices[index] % cardStyles.length
    return cardStyles[styleIndex](article)
  }

  if (loading) return <Loading />
  if (error) return <div className="text-red-600 font-bold text-center mt-10">{error}</div>

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10 py-10">
      <header className="mb-10 text-center">
        <p className="text-xl italic" style={{ color: palette.accent }}>Train your dog with love and patience 🐾</p>
      </header>
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
  <input
    type="search"
    placeholder="Search articles..."
    value={searchTerm}
    onChange={e => setSearchTerm(e.target.value)}
    className="border border-[#EFAE62] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EFAE62] w-full max-w-sm"
  />
  <button
    onClick={() => setFilter(prev => (prev === 'newest' ? 'oldest' : 'newest'))}
    className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EFAE62] ${
      (filter === 'newest' || filter === 'oldest') ? 'bg-[#EFAE62] text-[#4B2E2E]' : ''
    }`}
  >
    {filter === 'newest' ? 'Newest' : 'Oldest'}
  </button>

</div>


      <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredArticles.length === 0 ? (
          <p className="text-center col-span-full" style={{ color: palette.text }}>No articles found.</p>
        ) : (
          filteredArticles.slice(0, visibleCount).map((article, idx) => renderCard(article, idx))
        )}
      </main>

      {visibleCount < filteredArticles.length && (
        <div className="flex justify-center mt-14">
          <button
            onClick={handleShowMore}
            className="bg-[#EFAE62] text-[#4B2E2E] px-10 py-3 rounded-full font-semibold shadow-lg hover:bg-[#d9983f] transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  )
}

export default DogsTrainingPage
