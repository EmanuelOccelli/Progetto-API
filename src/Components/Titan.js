import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Hunter.css'
import NavbarPersonaggi from './NavbarPersonaggi'
let arrayHash=[53159280 /*primaria */, 660037107 /*Casco*/, 2448010882 /*braccia */, 722380134,/*torso*/ 238766140 /*scarpe */, 1040474575 /*mantello */, 997920960 /*skinspettro */, 2550323932,
1907674139, 152583919, 3183180185, 1410465636] //Array hash di stregone non riesco a passarglielo come parametro e quindi lo ricavo da personaggi ma lo metto in modo statico dentro l'equipment loadout di ognuno

const Titan = () => {
  const [primaria,setprimaria] = useState()
  const [imgprimaria,setimgprimaria] = useState()
  const [artefatto,setartefatto] = useState()
  const [imgartefatto,setimgartefatto] = useState()
  const [casco,setcasco] = useState()
  const [imgcasco,setimgcasco] = useState()
  const [braccia,setbraccia] = useState()
  const [imgbraccia,setimgbraccia] = useState()
  const [torso,settorso] = useState()
  const [imgtorso,setimgtorso] = useState()
  const [gambe,setgambe] = useState()
  const [imggambe,setimggambe] = useState()
  const [mantello,setmantello] = useState()
  const [imgmantello,setimgmantello] = useState()
  const [skinspettro,setskinspettro] = useState()
  const [imgskinspettro,setimgskinspettro] = useState()
  useEffect(() => {
    const apiKey = "05f7a0c815e94107935de956387dcef1";
    arrayHash.forEach((hash)=>{
      axios.get(`https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/${hash}/`, {
      headers: {
        'x-api-key': apiKey,
      },
      crossdomain: true,
    })
      .then((result) => {
        console.log(result)
       console.log(result.data.Response.displayProperties.name) //passa i nomi di tutti gli oggetti del personaggio attualmente equipaggiati
       console.log(result.data.Response.displayProperties.icon)


       if(hash=='53159280'){ //primaria
        let nome=result.data.Response.displayProperties.name
        console.log(nome)
        let icona=result.data.Response.displayProperties.icon
        console.log(icona)
        setprimaria(nome)
        setimgprimaria(icona)
        console.log("Nome:" + primaria + " " + "Percorso icona: " + imgprimaria)
       }
       if(hash=='660037107'){ // Casco
        let nome=result.data.Response.displayProperties.name
        console.log(nome)
        let icona=result.data.Response.displayProperties.icon
        console.log(icona)
        setcasco(nome)
        setimgcasco(icona)
        console.log("Nome:" + casco + " " + "Percorso icona: " + imgcasco)

       }
       if(hash=='2448010882'){ // Braccia
        let nome=result.data.Response.displayProperties.name
        console.log(nome)
        let icona=result.data.Response.displayProperties.icon
        console.log(icona)
        setbraccia(nome)
        setimgbraccia(icona)
        console.log("Nome:" + braccia + " " + "Percorso icona: " + imgbraccia)

       }
       if(hash=='722380134'){ // Torso
        let nome=result.data.Response.displayProperties.name
        console.log(nome)
        let icona=result.data.Response.displayProperties.icon
        console.log(icona)
        settorso(nome)
        setimgtorso(icona)
        console.log("Nome:" + torso + " " + "Percorso icona: " + imgtorso)

       }
       if(hash=='238766140'){ // Gambe
        let nome=result.data.Response.displayProperties.name
        console.log(nome)
        let icona=result.data.Response.displayProperties.icon
        console.log(icona)
        setgambe(nome)
        setimggambe(icona)
        console.log("Nome:" + gambe + " " + "Percorso icona: " + imggambe)

       }
       if(hash=='1040474575'){ // Mantello
        let nome=result.data.Response.displayProperties.name
        console.log(nome)
        let icona=result.data.Response.displayProperties.icon
        console.log(icona)
        setmantello(nome)
        setimgmantello(icona)
        console.log("Nome:" + mantello + " " + "Percorso icona: " + imgmantello)

       }
       if(hash=='997920960'){ // Skin spettro
        let nome=result.data.Response.displayProperties.name
        console.log(nome)
        let icona=result.data.Response.displayProperties.icon
        console.log(icona)
        setskinspettro(nome)
        setimgskinspettro(icona)
        console.log("Nome:" + skinspettro + " " + "Percorso icona: " + imgskinspettro)

       }
       if(hash=='1410465636'){ // Artefatto
        let nome=result.data.Response.displayProperties.name
        console.log(nome)
        let icona=result.data.Response.displayProperties.icon
        console.log(icona)
        setartefatto(nome)
        setimgartefatto(icona)
        console.log("Nome:" + artefatto + " " + "Percorso icona: " + imgartefatto)

       }
      })
    })
    
  }, []);  
    return (
      <div className='container font'>
      <NavbarPersonaggi />
    <div className="row animate__animated animate__slideInRight">
      <div className="col-md-3 col-sm-6">
        <div className="row">
          <div className="col-12">Primaria</div>
          <div className="col-12">
            <img src={`https://www.bungie.net${imgprimaria}`} alt="Icona arma primaria" />
          </div>
          <div className="col-12">{primaria}</div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="row">
          <div className="col-12">Secondaria</div>
          <div className="col-12">
           Non posseduto
          </div>
          <div className="col-12"></div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="row">
          <div className="col-12">Pesante</div>
          <div className="col-12">
           Non posseduto
          </div>
          <div className="col-12"></div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="row">
          <div className="col-12">Casco</div>
          <div className="col-12">
            <img src={`https://www.bungie.net${imgcasco}`} alt="Icona casco" />
          </div>
          <div className="col-12">{casco}</div>
        </div>
      </div>
    </div>
    <div className="row animate__animated animate__slideInRight">
      <div className="col-md-3 col-sm-6">
        <div className="row">
          <div className="col-12">Braccia</div>
          <div className="col-12">
            <img src={`https://www.bungie.net${imgbraccia}`} alt="Icona braccia" />
          </div>
          <div className="col-12">{braccia}</div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="row">
          <div className="col-12">Torso</div>
          <div className="col-12">
            <img src={`https://www.bungie.net${imgtorso}`} alt="Icona torso" />
          </div>
          <div className="col-12">{torso}</div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="row">
          <div className="col-12">Gambe</div>
          <div className="col-12">
            <img src={`https://www.bungie.net${imggambe}`} alt="Icona gambe" />
          </div>
          <div className="col-12">{gambe}</div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="row">
          <div className="col-12">Mantello</div>
          <div className="col-12">
            <img src={`https://www.bungie.net${imgmantello}`} alt="Icona mantello" />
          </div>
          <div className="col-12">{mantello}</div>
        </div>
      </div>
    </div>
    <div className="row animate__animated animate__slideInRight">
      <div className="col-md-6 col-sm-12">
        <div className="row">
          <div className="col-12">Skin spettro</div>
          <div className="col-12">
            <img src={`https://www.bungie.net${imgskinspettro}`} alt="Icona skin spettro" />
          </div>
          <div className="col-12">{skinspettro}</div>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="row">
          <div className="col-12">Artefatto stagionale</div>
          <div className="col-12">
            <img src={`https://www.bungie.net${imgartefatto}`} alt="Icona artefatto" />
          </div>
          <div className="col-12">{artefatto}</div>
        </div>
      </div>
    </div>
  </div>
      );
    };

export default Titan