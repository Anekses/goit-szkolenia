import axios from "axios";

// const URL = 'someUrl/a/b/c'

const fetchArticlesWithQuery = async (searchQuery) => {
    const response = await axios.get(`/search?query=${searchQuery}`)
    return response.data.hits
}

const consoleLogAbba = () => {
    console.log('abba')
    somePrivateFunction()
}

const somePrivateFunction = () => {
    console.log('Im Private')
}

export {
    fetchArticlesWithQuery,
    consoleLogAbba
}