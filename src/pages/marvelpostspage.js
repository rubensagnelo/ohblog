import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function MarvelpostsPage(props) {
  // Setting initial state
  const initialMarvelpostsState = {
    marvelposts: {},
    loading: true,
  }
  //const credencial = 'ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b';

  const limitereg = '';//'&limit=10';
  var qtdposts = 0;

  const [marvelposts, setMarvelposts] = useState(initialMarvelpostsState)
  const accesskey = 'ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b'
  
  useEffect(() => {
    const getMarvelposts = async () => {
      const { data } = await axios(
        'https://gateway.marvel.com/v1/public/characters/1009220/events?'+accesskey+limitereg 
        )

        
  
      setMarvelposts(data)

    }

    getMarvelposts()
  }, []) 

  return marvelposts.loading ? ( <div className="container">
         <span>
            Carregando...
        </span>
    </div>
  ) : (
    <div className="container">
         <span>
            <ohblog-post 
                titulo={marvelposts.data.results[marvelposts.data.count-1].title}
                texto={marvelposts.data.results[marvelposts.data.count-1].description}
                data={marvelposts.data.results[marvelposts.data.count-1].modified} 
                redator=""
            ></ohblog-post>

            <ohblog-post 
                titulo={marvelposts.data.results[marvelposts.data.count-2].title}
                texto={marvelposts.data.results[marvelposts.data.count-2].description}
                data={marvelposts.data.results[marvelposts.data.count-2].modified} 
                redator=""
            ></ohblog-post>

            <ohblog-post 
                titulo={marvelposts.data.results[marvelposts.data.count-3].title}
                texto={marvelposts.data.results[marvelposts.data.count-3].description}
                data={marvelposts.data.results[marvelposts.data.count-3].modified} 
                redator=""
            ></ohblog-post>
        </span>
    </div>
  )
}