import React from 'react'

function CoinInfo({coins}) {
    return (
        <div>
            <h1>Coins</h1>
            {coins.map(coin => coin.name ==="Bitcoin" ? 
            <div className="div-coins-padre">
            <div className="div-coin">
                <img src={coin.image} alt="bitcion" />
                <p>{coin.name}</p>
                <p>${coin.current_price}</p>
            </div>
            </div> :null
            )}
            {coins.map(coin => coin.name ==="Ethereum" ? 
            <div className="div-coins-padre">
            <div className="div-coin">
                <img src={coin.image} alt="bitcion" />
                <p>{coin.name}</p>
                <p>${coin.current_price}</p>
            </div>
            </div> :null
            )}
            {coins.map(coin => coin.name ==="Binance Coin" ? 
            <div className="div-coins-padre">
            <div className="div-coin">
                <img src={coin.image} alt="bitcion" />
                <p>{coin.name}</p>
                <p>${coin.current_price}</p>
            </div>
            </div> :null
            )}
        </div>
    )
}

export default CoinInfo
