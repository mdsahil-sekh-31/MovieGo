const base_url="https://image.tmdb.org/t/p/w500"
const apiKey = import.meta.env.VITE_TMBD_API_KEY
const response=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_original_language=hi&sort_by=popularity.desc&page=1`)
