import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from '../Components/Coin'
import { Link } from 'react-router-dom'

import Carousel from '../Components/carousel.js'
import Loading from '../Components/Loading'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    setLoading(true)
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <div className='flex-container-home-title'>
        <div className='title-contents'>
          <h1 className='title-h1'>Meet BlockCoin -</h1>
          <h3 className='title-h3'>A social cryptocurrency tracker.</h3>
        </div>
        <div className='carousels'>
          <Carousel />
        </div>
      </div>
      <div className='coin-app'>
        <form className='coin-search'>
          <input
            type='text'
            className='coin-input'
            placeholder='Search a Currency. . . .'
            onChange={handleChange}
          />
        </form>
        {filteredCoins.length < 1 ? (
          loading === true ? (
            <Loading />
          ) : (
            <h1>Nothing match your search</h1>
          )
        ) : (
          <div className='coin-list'>
            {filteredCoins.map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  marketcap={coin.market_cap}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                  volume={coin.total_volume}
                  todayhigh={coin.high_24h}
                  todaylow={coin.low_24h}
                  marketCapRank={coin.market_cap_rank}
                />
              )
            })}
          </div>
        )}
      </div>
      <div className='news'>
        <h1 className='news-h1'>
          Be Updated With The Latest Business, Economic And Financial News In
          India
        </h1>
        <Link
          type='button'
          class='headline btn btn-lg btn-outline-light'
          to='./news'
        >
          Top Headlines
        </Link>
      </div>
    </>
  )
}

export default Home
