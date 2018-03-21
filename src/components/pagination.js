import React, { Component } from 'react'
import '../styles/styles.css'

export default class Pagination extends Component {

    constructor(props) {
        super(props)
        this.state = {
          tweets: [],
          currentPage: 1,
          tweetsPerPage: 10
        }
        this.handleClick = this.handleClick.bind(this);
        this.tweets = this.props.tweets
      }

      handleClick(event) {
        this.setState({ currentPage: Number(event.target.id) })
      }

      render() {
        const pageNumbers = [];          
        const { currentPage, tweetsPerPage } = this.state

        const indexOfLastTweet = currentPage * tweetsPerPage
        const indexOfFirstTweet = indexOfLastTweet - tweetsPerPage
        const currentTweets = this.tweets.slice(indexOfFirstTweet, indexOfLastTweet)

        const renderTweets = currentTweets.map((tweetObj, index) => {
          return <li key={index}>{tweetObj.tweet}</li>
        });

        for (let i = 1; i <= Math.ceil(this.tweets.length / tweetsPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
          );
        });

        return (
          <div>
            <ul className={'tweets'}>
              {renderTweets}
            </ul>
            <ul id={"page-numbers"} className={'pages'}>
              {renderPageNumbers}
            </ul>
          </div>
        );
      }
    }