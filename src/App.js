import React from 'react';
import supernatural from './supernatural.png';
import './App.css';
import 'ohblogmenu';
import 'ohblogpost';
import 'ohblogtempo';
import { Route, Switch } from 'react-router-dom'
import MarvelPage from './pages/marvelpage';
import MarvelpostsPage from './pages/marvelpostspage';
import MarveltempoPage from './pages/marveltempo';
//import { queryAllByAltText } from '@testing-library/react';
//import { Prop } from 'ohblogmenu/dist/types/stencil-public-runtime';
//import axios from 'axios'





const MainMenu = () => (

  <ohblog-menu  titulos='Homem de Ferro,Capião América,Hulk,Thor' 
                urls='/info/Iron Man,/info/Captain America,/info/Hulk,/info/Thor' 
                imagem='http://www.clker.com/cliparts/1/L/z/D/d/A/blog-icon-md.png' >
   </ohblog-menu>
);

//<img src={ximagem} className="img-supernatural" alt="Supernatural" />




var surl = 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/portrait_xlarge.jpg';

const MainDivImagemPerfil = () => (
  <div className="div-img-round" >
      <img src={surl} className="img-supernatural" alt="Supernatural" />
  </div>
);

const MainDivAreaSuperiorEsquerda = () => (
  <div className="div-AreaSuperior-Esquerda">
    <div width='100%' align='center'>
    <MainDivImagemPerfil />
    </div>
  </div> 
);


const MainDivNomePerfil = () => (
  <div className="div-NomeBlogueiro">
    Dean Winchester
  </div>
);

const MainDivDescricaoPerfil = () => (
<div className="div-BiografiaBlogueiro">
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</div>
);

const MainDivAreaSuperiorDireita = () => (
    <div className="div-AreaSuperior-Direita">
      <MainDivNomePerfil />
      <MainDivDescricaoPerfil />
    </div>
  );

  const MainDivAreaSuperior = () => (
    <span>
    <MainDivAreaSuperiorDireita />
    <MainDivAreaSuperiorEsquerda />
    </span>
  );

  

function cidade(nome){

  var id = '1009368';
  if (nome=="Iron Man"){
    id='new york';
  } else if (nome=='Captain America'){
    id='brooklyn';
  } else if (nome=='Hulk'){
    id='Dayton';
  } else if (nome=='Thor'){
    id='Asgard';
  }
  return id;
}


const TempoAgora = ()=> (
        <label>

        <div class="div-Tempo div-Tempo-personagem"  >
          <Switch>
                  <Route path="/info/:id" component={MarveltempoPage} />
          </Switch>
        </div>

        <div class="div-Tempo"  >
          <ohblog-tempo entcidade="brasilia"></ohblog-tempo>
        </div>    

        <div class="div-Tempo"  >
          <ohblog-tempo entcidade="sao paulo"></ohblog-tempo>
        </div>    

        <div class="div-Tempo" >
          <ohblog-tempo entcidade="rio de janeiro"></ohblog-tempo>
        </div>    

        <div class="div-Tempo" >
          <ohblog-tempo entcidade="belo horizonte"></ohblog-tempo>
        </div>



        </label>
);



function App() {

  return (

  <div className="div-Fragmento">
  

       <div className="div-AreaSuperior">
            <MainMenu />
            <div className="div-AreaSuperiorAlinhada">
            <Switch>
                <Route path="/info/:id" component={MarvelPage} />
            </Switch>
            </div>
        </div>
        <div className="div-Tempos" >
            <TempoAgora />
        </div>
        
        <div className="div-Titulo-Postagens">Últimas do blog</div>
            <Switch>
                <Route path="/info/:id" component={MarvelpostsPage} />
            </Switch>

        <div className="div-MenuInferior"><a href="#" class="botao--verde">Ver todos</a></div>
  </div>

    

  



)}

export default App;
