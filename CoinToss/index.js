// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    heads: 0,
    tails: 0,
    total: 0,
  }

  tossTheCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        total: prevState.total + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        total: prevState.total + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {imageUrl, heads, tails, total} = this.state

    return (
      <div className="bg-cont">
        <div className="card">
          <h1 className="title">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img src={imageUrl} className="img" alt="toss result" />
          <button
            type="button"
            className="toss-button"
            onClick={this.tossTheCoin}
          >
            Toss Coin
          </button>
          <div className="result-cont">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
