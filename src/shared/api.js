import fetch from 'isomorphic-fetch'

export function fetchPopularRepos(language = 'all') {
    
    // const uri = encodeURI(`http://api.github.com/search/repositories?q=stars:&gt+language:${language}&sort=stars&order=desc&type=Repositories`);
    const uri = encodeURI(`http://localhost/repositories.json?language=${language}`);
    
    return fetch(uri)
        .then((data) => data.json())
        .then((repos) => repos.items)
        .catch((error) => {
            console.warn(error);
            return null;
        });

}