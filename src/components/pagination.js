import React, { Component } from 'react'
import '../styles/styles.css'

export default class Pagination extends Component {

    constructor() {
        super();
        this.state = {
          tweets: [],
          currentPage: 1,
          tweetsPerPage: 10
        };
        this.handleClick = this.handleClick.bind(this);
      }

      componentWillReceiveProps = () => {
        let tweets = this.props.tweets
        this.setState({tweets})
      }

      handleClick(event) {
        this.setState({ currentPage: Number(event.target.id) });
      }

      render() {
        const pageNumbers = [];          
        const { currentPage, tweetsPerPage } = this.state;
        

        const indexOfLastTodo = currentPage * tweetsPerPage;
        const indexOfFirstTodo = indexOfLastTodo - tweetsPerPage;
        const currentTweets = this.props.tweets.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTweets = currentTweets.map((index) => {
          return <li key={index}>{index.tweet}</li>;
        });

        for (let i = 1; i <= Math.ceil(this.props.tweets.length / tweetsPerPage); i++) {
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