import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import NavbarPersonaggi from './NavbarPersonaggi';
import Titano from './Titan';
import Cacciatore from './Hunter';
import Stregone from './Warlock';
import './Personaggi.css'
export const ContentCacciatore=createContext()
export const ContentStregone=createContext()
export const ContentTitano=createContext()
const Personaggi = () => {
  const [HidStregone, setHidStregone] = useState("");
  const [HidTitano, setHidTitano] = useState("");
  const [HidHunter, setHidHunter] = useState("");

  const [HArrayHashStregone, setStregoneArray] = useState([]);
  const [HArrayHashTitano, setTitanoArray] = useState([]);
  const [HArrayHashHunter, setHunterArray] = useState([]);

  const [tempArrayHunter, setTempArrayHunter] = useState([]);
  const [tempArrayTitano, setTempArrayTitano] = useState([]);
  const [tempArrayStregone, setTempArrayStregone] = useState([]);

  const [dataReady, setDataReady] = useState(false);

  const fetchData = async () => {
    try {
      const apiKey = "05f7a0c815e94107935de956387dcef1";
      const characterIdHunter = '2305843009309317571'; //Cacciatore
      const characterIdTitano = '2305843009393842456'; //Titano
      const characterIdStregone = '2305843009317854512'; //Stregone

      const result = await axios.get(`https://www.bungie.net//Platform/Destiny2/2/Profile/4611686018471905751/?components=205`, {
        headers: {
          'x-api-key': apiKey,
        },
        crossdomain: true,
      });

      console.log("Risultato Richiesta API", result);


const itemHashArrayHunter = result.data.Response.characterEquipment.data[characterIdHunter].items.map(item => item.itemHash);
console.log("Contenuto array Hunter:", itemHashArrayHunter);
setHidHunter(characterIdHunter);
console.log("ID Hunter:", characterIdHunter);
const tempArrayHunter = [...itemHashArrayHunter]; // Copia dell'array
setHunterArray(tempArrayHunter);

const itemHashArrayTitano = result.data.Response.characterEquipment.data[characterIdTitano].items.map(item => item.itemHash);
console.log("Contenuto array Titano:", itemHashArrayTitano);
setHidTitano(characterIdTitano);
console.log("ID Titano:", characterIdTitano);
const tempArrayTitano = [...itemHashArrayTitano]; // Copia dell'array
setTitanoArray(tempArrayTitano);

const itemHashArrayStregone = result.data.Response.characterEquipment.data[characterIdStregone].items.map(item => item.itemHash);
console.log("Contenuto array Stregone:", itemHashArrayStregone);
setHidStregone(characterIdStregone);
console.log("ID Stregone:", characterIdStregone);
const tempArrayStregone = [...itemHashArrayStregone]; // Copia dell'array
setStregoneArray(tempArrayStregone);

setTempArrayHunter([...itemHashArrayHunter]);
setTempArrayTitano([...itemHashArrayTitano]);
setTempArrayStregone([...itemHashArrayStregone]);

      setDataReady(true); //Da il valore agli hooks solo dopo che la axios è terminata
    } catch (error) {
      console.error("Errore nella richiesta API", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  // Utilizza i dati solo quando sono pronti
  console.log("Alla fine di tutto")
  console.log("Hooks", HidHunter, HidStregone, HidTitano);
  console.log("HOOKS ARRAY", HArrayHashHunter, HArrayHashStregone, HArrayHashTitano);
  console.log("HOOKS TEMPARRAY", tempArrayHunter, tempArrayTitano,tempArrayStregone );
  if (!dataReady) { //Stampa la navbar per vedere gli oggetti equipaggiati dopo che ha ottenuto tutti i dati
    return <div className='container font'>Caricamento...</div>;
  }
  ContentCacciatore.Provider.value={HArrayHashHunter}
  ContentStregone.Provider.value={HArrayHashStregone}
  ContentTitano.Provider.value={HArrayHashTitano}

  return (
    <div className="row">
      <div className="col-12">
        <div className='col-12'>
        <NavbarPersonaggi />
      <Routes>
        <Route path="Titano" element={<Titano  />} />
        <Route path="Cacciatore" element={<Cacciatore />} />
        <Route path="Stregone" element={<Stregone />} />
      </Routes>
        </div>
      </div>
    </div>
  );
};

export default Personaggi;
