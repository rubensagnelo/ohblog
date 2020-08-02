import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function MarvelPage(props) {
  // Setting initial state
  const initialMarvelState = {
    marvel: {},
    loading: true,
  }
  const credencial = 'ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b';
  const limitereg = '&limit=10';

  const [marvel, setMarvel] = useState(initialMarvelState)
  const accesskey = 'ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b'
  
  useEffect(() => {
    const getMarvel = async () => {
      const { data } = await axios(
        'https://gateway.marvel.com/v1/public/characters?'+accesskey+limitereg+'&name='+props.match.params.id
      )

      setMarvel(data)
    }

    getMarvel()
  }, []) 

  return marvel.loading ? ( <div className="container">
         <span>
            <div className="div-AreaSuperior-Direita">
                <div className="div-NomeBlogueiro">
                    ...
                </div>
                    <div className="div-BiografiaBlogueiro">
                    Carregando...
                    </div>
            </div>
            <div className="div-AreaSuperior-Esquerda">
                <div width='100%' align='center'>
                    <div className="div-img-round" >
                     Carregando...
                    </div>
                </div>
            </div> 
        </span>
    </div>
  ) : (
    <div className="container">
         <span>
            <div className="div-AreaSuperior-Direita">
                <div className="div-NomeBlogueiro">
                        {marvel.data.results[0].name + " (ID:"+ marvel.data.results[0].id+") "}
                </div>
                    <div className="div-BiografiaBlogueiro">
                    {marvel.data.results[0].description}
                    </div>
            </div>
            <div className="div-AreaSuperior-Esquerda">
                <div width='100%' align='center'>
                    <div className="div-img-round" >
                            <img src={marvel.data.results[0].thumbnail.path+'.'+marvel.data.results[0].thumbnail.extension} className="img-supernatural" alt="Supernatural" />
                    </div>
                </div>
            </div> 
        </span>
    </div>
  )
}