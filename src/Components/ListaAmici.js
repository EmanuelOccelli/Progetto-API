import React, { useEffect } from 'react';
import axios from 'axios';
import './Friendlist.css'

const FriendList = () => {
    const accessToken='CN32BRKGAgAg4tTIBzgC+xy9+i6NotcgiPTGTRIG/aI2hJs+9DeOM5bgAAAAj91j9qNaTgMEWLhfnh3fVgeVR/8Ss1SEvatAOSvGraDf3utmefepBfroOQQ70uFYalm+HsBIjTEmGvqur1fa9gNT0f+RkQ6+MAK7hp2xCEKPjKyJ9I1CkZgvFcx339GMhdUlOfgFAPDiGCdTXpT14dgg4hxvhpBit65DMBnWSqwzURfniVFfKnYyMHD1jjFwZDY30+BbwdVKPUbkcRCoRQi6UK7RADhyWQ3whLvhgUL6nhlh0QeA2nWa4oKVzcOLP9+wK+fvOguD1lsBjPhUTXxdc2aWP1/79BqzPd9q4Uo='
  useEffect(() => {
    const getFriendList = async () => {
      try {
        const apiKey = '05f7a0c815e94107935de956387dcef1';
        const membershipType = 2; //Piattaforma dell'utente
        const membershipId = '4611686018471905751';

        const response = await axios.get(
          `https://www.bungie.net/Platform/Social/Friends/${accessToken}`,
          {
            headers: {
              'X-API-Key': apiKey,
              'Authorization': `Bearer ${accessToken}`,
            },
            crossdomain: true,
          })
            .then((result) => {
                console.log(result)
          }
        );

        //Lista amici
        console.log(response.data);
      } catch (error) {
        console.error('Errore nella richiesta:', error);
        
      }
    };

    getFriendList();
  }, [accessToken]); //per richiamarla ogni volta che l'accesstoken cambia

  return (
    <div className="FONT">
      <p>Ci dispiace questa pagina non è ancora disponibile</p>
    </div>
  );
};

export default FriendList;
