import axios from "axios";
export const fetchTrendings = async () => { 
    

 axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day';
    const KEY = `9974480522bc7822e6ea6c551c75459b`;


  const response = await  axios.get('', {
        params: {
            api_key: KEY,
        },
    });  

    
    return response;

};



export const fetchMovieById = async (id) => { 
    

 axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/';
    const KEY = `9974480522bc7822e6ea6c551c75459b`;


  const response = await  axios.get(`${id}`, {
        params: {
          api_key: KEY,
            
        },
    });  

    
    return response;

};

export const fetchCast = async (id) => { 
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/';
    const KEY = `9974480522bc7822e6ea6c551c75459b`;


  const response = await  axios.get(`${id}/credits`, {
        params: {
          api_key: KEY,
            
        },
    });  

    
    return response;

};

export const fetchReviewsById = async (id) => { 
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/';
    const KEY = `9974480522bc7822e6ea6c551c75459b`;


  const response = await  axios.get(`${id}/reviews`, {
        params: {
          api_key: KEY,
            
        },
    });  

    
    return response;

};

export const fetchMovieByQuery = async (query) => {
  
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
    const KEY = `9974480522bc7822e6ea6c551c75459b`;


  const response = await  axios.get(``, {
        params: {
          api_key: KEY,
          language: "en-US",
          query,
          page: 1,
          include_adult: true,
          
            
        },
    });  

    
    return response;
    
};