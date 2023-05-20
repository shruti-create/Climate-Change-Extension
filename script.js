async function fetchData(){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '<insert your rapid API key here>',
            'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://climate-news-feed.p.rapidapi.com/?limit=1', options)
    const record = await res.json()

    console.log('record',record)

    document.getElementById("article").innerHTML = record.articles.map(item => item.title);
    document.getElementById("urls").innerHTML = "<a href=" + record.articles.map(item => item.url) + " \" target=\"_blank\">Click here </a>to view the full article";
}

fetchData();