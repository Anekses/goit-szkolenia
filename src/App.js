import { Component } from 'react';
import axios from "axios";
import ContentLoader from 'react-content-loader';

import './App.css';
import ArticleList from './components/ArticleList';
import Container from './components/Container';
import ErrorBoundary from './components/ErrorBoundary';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

import { consoleLogAbba, fetchArticlesWithQuery } from './utils/getArticles';
// import * as api from './utils/getArticles'

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";
// axios.defaults.baseURL = "https://hn.algolasdasdasdasdia.com/api/v1";
class App extends Component {
  state = {
    articles: [],
    // query: '/search?query=react',
    query: 'react',
    isLoading: false,
    error: ''
    // isError: boolean
  }

  async componentDidMount() {
    // if (this.state.query === '') {
    //   const response = await axios.get('/search?query=mostAwesomeProducts')
    //   this.setState(...)
    // }

    // this.setState({
    //   isLoading: true
    // })

    await this.getInitialData()
    // await setTimeout(async () => {
    // }, 10000)
  }

  getInitialData = async () => {
    consoleLogAbba()

    try {
      const articles = await fetchArticlesWithQuery(this.state.query)
      this.setState({ articles })
    } catch (error) {
      console.log('error')
      this.setState({ error })
    } finally {
      console.log('finally')
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <>
        {/* {isLoading ? <ContentLoader /> : <ArticleList articles={articles} />} */}
        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && <ContentLoader />}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </>
    );
  }

}

export default App;
