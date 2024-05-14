import React, { useState } from 'react';
import axios from 'axios';
import './ricerca.css'

const apiKey = '05f7a0c815e94107935de956387dcef1'; 
const baseUrl = 'https://www.bungie.net/Platform';

const CercaArmiArmature = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const searchDestinyArmory = async () => {
    try {
      //Contr5olla se l'input è vuoto o sbagliato
      if (!searchTerm.trim()) {
        setError('Inserisci un oggetto esatto.');
        return;
      }

      const response = await axios.get(
        `${baseUrl}/Destiny2/Armory/Search/DestinyInventoryItemDefinition/${searchTerm}/?page=0`,
        {
          headers: {
            'X-API-Key': apiKey,
          },
          crossdomain: true,
        }
      );

      const data = response.data;

      if (data.Response.results.results.length > 1) {
        let arrayrobe = [...data.Response.results.results];
        setResults(arrayrobe);
      } else {
        let result = [data.Response.results.results[0]];
        setResults(result);
      }
    } catch (error) {
      setError(error.response?.data || 'è scoppiato');
      console.error('errore nella fetch:', error.message);
    }
  };

  return (
    <div className="scr">
  <div className="row justify-content-center align-items-center">
    <div className="col-md-6 col-sm-8">
      <input
        type="text"
        className="form-control destiny-input"
        placeholder="Cerca..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-primary destiny-button" onClick={searchDestinyArmory}>Cerca</button>
    </div>
  </div>
  <div className="row">
    <div className="col-12">
      {results.map((result, index) => (
        <div key={index}>
          <div>{result.displayProperties.name}</div>
          <div>
            <img
              src={`https://www.bungie.net${result.displayProperties.icon}`}
              alt={result.displayProperties.name}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  
  );
};

export default CercaArmiArmature;
