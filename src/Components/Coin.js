import React from 'react'
import { Link } from 'react-router-dom'
const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
  todayhigh,
  todaylow,
  marketCapRank,
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <button
            className='coin-symbol'
            type='button'
            class='btn btn-sm'
            data-bs-toggle='modal'
            data-bs-target='#staticBackdrop'
          >
            {symbol}
          </button>
          <p>Current Price: ₹{price}</p>
          <p>Volume : ₹{volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}
          <p>Mkt Cap: ₹{marketcap.toLocaleString()}</p>
        </div>
        <div
          class='modal fade'
          id='staticBackdrop'
          data-bs-backdrop='static'
          data-bs-keyboard='false'
          tabindex='-1'
          aria-labelledby='staticBackdropLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog modal-dialog-scrollable modal-dialog-centered'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h3 class='modal-title' id='staticBackdropLabel'>
                  {name}
                </h3>
              </div>
              <div class='modal-body'>
                <h4>Current Price = ₹{price}</h4>
                <h4>Current Volume = ₹{volume}</h4>
                <h4>
                  Price Change 24h ={' '}
                  {priceChange < 0 ? (
                    <h4 className='coin-percent red'>
                      {priceChange.toFixed(2)}%
                    </h4>
                  ) : (
                    <h4 className='coin-percent green'>
                      {priceChange.toFixed(2)}%
                    </h4>
                  )}
                </h4>
                <h4>Market Capitalization = ₹{marketcap}</h4>
                <h4>Market Capitalization Rank = {marketCapRank}</h4>
                <h4>High 24h = ₹{todayhigh}</h4>
                <h4>Low 24h = ₹{todaylow}</h4>
              </div>
              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Got It !!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coin
