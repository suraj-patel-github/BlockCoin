import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SingleNews from '../Components/SingleNews'
import { Link } from 'react-router-dom'
import Loading from '../Components/Loading'

const News = () => {
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])
  useEffect(() => {
    setLoading(true)
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7db576246c354b3a90d179c8cde0a380'
      )
      .then((res) => {
        setNews(res.data.articles)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }, [])
  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div class='row row-cols-1 row-cols-md-3 g-4'>
          {news.map((one) => {
            return (
              <SingleNews
                key={one.url}
                image={one.urlToImage}
                title={one.title}
                content={one.content}
                description={one.description}
                time={one.publishedAt}
                mainlink={one.url}
              />
            )
          })}
        </div>
      )}
    </>
  )
}

export default News
