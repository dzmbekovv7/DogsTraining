import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../supabase'
import Loading from '../components/Loading'

const CategoryArticlesPage = () => {
  const { typename } = useParams()
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('dogstraining_articles')
        .select('*')
        .eq('type', typename)
        .order('published_date', { ascending: false })

      if (error) {
        setError(error.message)
      } else {
        setArticles(data)
      }
      setLoading(false)
    }

    fetchArticles()
  }, [typename])

  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F0E6] via-[#E7D8BF] to-[#D3B58A] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#7A5230] text-center mb-12 tracking-wide">
          {typename.replace(/-/g, ' ')}
        </h1>

        {loading ? (
          <Loading />
        ) : error ? (
          <p className="text-center text-red-700 font-semibold">{error}</p>
        ) : articles.length === 0 ? (
          <p className="text-center text-[#6B533B] italic">
            Нет статей по теме «{typename}»
          </p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {articles.map(article => (
              <Link
                key={article.id}
                to={`/articles/${slugify(article.title)}`}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col cursor-pointer transform hover:-translate-y-2"
              >
                <div className="relative h-52 w-full overflow-hidden rounded-t-3xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#7A5230]/90 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    {new Date(article.published_date).toLocaleDateString()}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-[#7A5230] mb-3 leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-[#8C7A5B] flex-grow mb-4 text-sm leading-relaxed">
                    {article.summary.length > 120
                      ? article.summary.slice(0, 120) + "..."
                      : article.summary}
                  </p>
                  <div className="flex items-center justify-between text-[#A49071] text-sm font-medium">
                    <div className="flex items-center gap-3">
                      <img
                        src={article.avatar}
                        alt={article.author}
                        className="w-8 h-8 rounded-full border-2 border-[#D3B58A]"
                      />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#A49071]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3"
                        />
                      </svg>
                      <span>{article.reading_time} мин</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryArticlesPage
