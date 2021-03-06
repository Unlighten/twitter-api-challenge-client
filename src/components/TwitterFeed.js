import React, { Component } from 'react'
import '../styles/styles.css'

import Pagination from './Pagination'

export default class TwitterFeed extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tweets: [],
      fetched: false,
      ascending: true
    }
  }

  fetchTweets = (event) => {
    fetch("http://localhost:3000/")
    .then((res) => res.json())
    .then((data) => {
      this.setState({ tweets: data, fetched: true })
    })
    event.preventDefault()
  } 

  ascending = () => {
    this.setState({ 
      tweets: this.state.tweets.sort((a, b) => {
        let first = a.tweet.toUpperCase()
        let second = b.tweet.toUpperCase()
        return ( first < second ) ? -1 : ( first > second ) ? 1 : 0
      }),
      ascending: false
    })
  }

  descending = () => {
    if (!this.state.ascending) {
      this.setState({ 
        tweets: this.state.tweets.reverse(),
        ascending: true
      })
    }
  }

  render() {
    return (
      <div className={'container'}>
        <div className={'borderTop'}/>
        <img className={'title'} src={require('../assets/ign.png')} alt="IGN Tweets" />
        <div className={'buttonsContainer'}>
          { this.state.tweets.length ? 
            <button onClick={ this.ascending }>Ascending</button> 
            : null 
          }        
          { !this.state.fetched ? 
            <button onClick={ this.fetchTweets }>View Tweets</button> 
            : null 
          }
          { this.state.tweets.length ? 
            <button onClick={ this.descending }>Descending</button> 
          : null 
          }
        </div>
        { this.state.tweets.length ?  
          <Pagination tweets={this.state.tweets} /> 
          : null 
        }
      </div>
    )
  }
}