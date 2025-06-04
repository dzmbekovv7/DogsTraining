import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import Loading from '../components/Loading';

const AshleyArticleDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recentArticles, setRecentArticles] = useState([]);
  const [lastUpdatedArticles, setLastUpdatedArticles] = useState([]);
  const [prevArticle, setPrevArticle] = useState(null);
  const [nextArticle, setNextArticle] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase.from('dogstraining_articles').select('*');

      if (!error && data) {
        const found = data.find((a) => slugify(a.title) === slug);
        if (found) {
          setArticle(found);

          const sortedByDate = data.sort(
            (a, b) => new Date(b.published_date) - new Date(a.published_date)
          );
          // Recent - топ 5 самых новых по published_date
          setRecentArticles(sortedByDate.slice(0, 5));

          // Last Updates - топ 5 самых новых по updated_at (если есть поле updated_at, если нет - используем published_date)
          // Для примера пусть будет updated_at или fallback:
          const sortedByUpdate = data
            .slice()
            .sort(
              (a, b) =>
                new Date(b.updated_at || b.published_date) -
                new Date(a.updated_at || a.published_date)
            );
          setLastUpdatedArticles(sortedByUpdate.slice(0, 5));

          // Для навигации по статьям
          const sorted = data.sort(
            (a, b) => new Date(a.published_date) - new Date(b.published_date)
          );
          const currentIndex = sorted.findIndex((a) => slugify(a.title) === slug);

          setPrevArticle(sorted[currentIndex - 1] || null);
          setNextArticle(sorted[currentIndex + 1] || null);
        }
      }

      setLoading(false);
    };

    fetchArticle();
  }, [slug]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || !article) return;

    const newComment = {
      name,
      message,
      created_at: new Date().toISOString(),
    };

    const updatedComments = article.comments
      ? [...article.comments, newComment]
      : [newComment];

    const { error } = await supabase
      .from('dogstraining_articles')
      .update({ comments: updatedComments })
      .eq('id', article.id);

    if (!error) {
      setArticle((prev) => ({ ...prev, comments: updatedComments }));
      setName('');
      setMessage('');
    }
  };

  const keywords = [
    'Special training',
    'Basic training',
    'Behavioral correction',
    'Training by age and breed',
  ];

  if (loading) return <Loading />;
  if (!article) return <p>Article not found</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10 flex flex-col lg:flex-row gap-10 bg-gradient-to-b from-[#f7f3ee] via-[#f9f6f0] to-[#f7f3ee] rounded-xl shadow-lg">
      <div className="lg:w-2/3">
        {/* Навигация по статьям */}
        <div className="mb-6 flex flex-col sm:flex-row gap-6 justify-between">
          {prevArticle && (
            <Link
              to={`/articles/${slugify(prevArticle.title)}`}
              className="flex-1 bg-white border border-gray-200 hover:shadow-md transition p-4 rounded-2xl flex items-center gap-4"
            >
              <div className="text-2xl text-green-700 hidden sm:block">←</div>
              <img
                src={prevArticle.image}
                alt={prevArticle.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Previous Article</span>
                <h4 className="text-md font-semibold text-green-900 line-clamp-2">
                  {prevArticle.title}
                </h4>
                <span className="text-xs text-gray-400">
                  {new Date(prevArticle.published_date).toLocaleDateString()}
                </span>
              </div>
            </Link>
          )}

          {nextArticle && (
            <Link
              to={`/articles/${slugify(nextArticle.title)}`}
              className="flex-1 bg-white border border-gray-200 hover:shadow-md transition p-4 rounded-2xl flex items-center gap-4 justify-end"
            >
              <div className="flex flex-col text-right">
                <span className="text-xs text-gray-500">Next Article</span>
                <h4 className="text-md font-semibold text-green-900 line-clamp-2">
                  {nextArticle.title}
                </h4>
                <span className="text-xs text-gray-400">
                  {new Date(nextArticle.published_date).toLocaleDateString()}
                </span>
              </div>
              <img
                src={nextArticle.image}
                alt={nextArticle.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="text-2xl text-green-700 hidden sm:block">→</div>
            </Link>
          )}
        </div>

        {/* Статья */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <h1 className="text-3xl font-bold text-green-900 mb-4">{article.title}</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6 gap-6">
            <span>⏱ {article.reading_time} min read</span>
            <span>📅 {new Date(article.published_date).toLocaleDateString()}</span>
            <span>👤 {article.author}</span>
          </div>
          <p className="text-gray-700 whitespace-pre-line">{article.content}</p>
        </div>

        {/* Комментарии */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold text-green-900 mb-4">Comments</h2>
          {article.comments && article.comments.length > 0 ? (
            article.comments.map((c, i) => (
              <div key={i} className="mb-4 border-b border-gray-200 pb-3">
                <p className="text-gray-800 font-medium">{c.name}</p>
                <p className="text-gray-600 text-sm mb-1 whitespace-pre-line">{c.message}</p>
                <span className="text-xs text-gray-400">{new Date(c.created_at).toLocaleString()}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}

          <form onSubmit={handleCommentSubmit} className="mt-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <textarea
              placeholder="Your comment"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              required
            />
            <button
              type="submit"
              className="self-start px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full hover:from-green-700 hover:to-emerald-600 transition duration-300"
            >
              Add Comment
            </button>
          </form>
        </div>
      </div>

      {/* Сайдбар с навигацией и списком статей (можно оставить, убрать или адаптировать) */}
      <aside className="lg:w-1/3 flex flex-col gap-6">
       {/* Recent Articles */}
       <section className="mb-10">
  <h3 className="text-2xl font-semibold text-green-900 mb-4">Recent Articles</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {recentArticles.map((a) => (
      <Link
        key={a.id}
        to={`/articles/${slugify(a.title)}`}
        className=" gap-4 bg-white rounded-lg shadow hover:shadow-md transition p-3 items-start"
        style={{ minHeight: '80px' }} // чтобы выравнивание по высоте было аккуратным
      >
        <img
          src={a.image}
          alt={a.title}
          className="w-40 h-20 object-cover rounded-lg flex-shrink-0"
        />
        <div className="flex flex-col overflow-hidden" style={{ maxWidth: 'calc(100% - 80px)' }}>
          <h4 className="font-semibold text-green-900 line-clamp-3 break-words">
            {a.title}
          </h4>
          <span className="text-xs text-gray-500 mt-auto">
            {new Date(a.published_date).toLocaleDateString()}
          </span>
        </div>
      </Link>
    ))}
  </div>
</section>

{/* Last Updates */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-green-900 mb-4">Last Updates</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 flex gap-4">
    {lastUpdatedArticles.map((a) => (
      <Link
        key={a.id}
        to={`/articles/${slugify(a.title)}`}
        className=" gap-4 bg-white rounded-lg shadow hover:shadow-md transition p-3 items-start"
        style={{ minHeight: '80px' }}
      >
        <img
          src={a.image}
          alt={a.title}
          className="w-40 h-20 object-cover rounded-lg flex-shrink-0"
        />
        <div className="flex flex-col overflow-hidden" style={{ maxWidth: 'calc(100% - 80px)' }}>
          <h4 className="font-semibold text-green-900 line-clamp-3 break-words">
            {a.title}
          </h4>
          <span className="text-xs text-gray-500 mt-auto">
            {new Date(a.updated_at || a.published_date).toLocaleDateString()}
          </span>
        </div>
      </Link>
    ))}
  </div>
</section>

        {/* Keywords buttons */}
        <section>
          <h3 className="text-2xl font-semibold text-green-900 mb-4">Keywords</h3>
          <div className="flex flex-wrap gap-4">
            {keywords.map((keyword, i) => (
              <button
                key={i}
                onClick={() => navigate(`/type/${encodeURIComponent(keyword)}`)}
                className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition"
              >
                {keyword}
              </button>
            ))}
          </div>
        </section>
      </aside>
    </div>
  );
};

export default AshleyArticleDetailPage;
