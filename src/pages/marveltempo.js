import React, { useState, useEffect } from 'react'

export default function MarveltempoPage(props) {
  // Setting initial state
  const initialMarveltempoState = {
    marveltempo: {},
    loading: true,
  }

  function cidade(nome){

    var localnasc = '';
    if (nome=="Iron Man"){
        localnasc='new york';
    } else if (nome=='Captain America'){
        localnasc='brooklyn';
    } else if (nome=='Hulk'){
        localnasc='Dayton';
    } else if (nome=='Thor'){
        localnasc='new york';
    }
    return localnasc;
  }
  
  const [marveltempo, setMarvelposts] = useState(initialMarveltempoState)

  useEffect(() => {
    const getMarvelposts = async () => {

/*
      var nome = props.match.params.id;
      var id = '1009368';
      if (nome=="Iron Man"){
        id='1009368';
      } else if (nome=='Captain America'){
        id='1009220';
      } else if (nome=='Hulk'){
        id='1009351';
      } else if (nome=='Thor'){
        id='1009664';
      }
      dId=id;


      const { data } = await axios(
        'https://gateway.marvel.com/v1/public/characters/'+id+'/events?'+accesskey+limitereg 
        )
*/
      const data = cidade(props.match.params.id);
  
      setMarvelposts(data)
    }

    getMarvelposts()
  }, []) 


  return marveltempo.loading ? (
    <span>...</span>   
  ) : (
    <span>
       <ohblog-tempo entcidade={cidade(props.match.params.id)} ></ohblog-tempo>
    </span>
  )
}