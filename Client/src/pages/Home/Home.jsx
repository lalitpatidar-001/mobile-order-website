import React, { useEffect, useState } from 'react'
import './home.css'
import Navbar from '../../components/Navbar/Navbar'
import {  Container, Right} from './homeStyles'
import MobileCart from '../../components/MobileCard/MobileCart'
import NoResult from '../../components/utils/NoResultMatched/NoResult'
import Filters from '../../components/Filters/Filters'

function Home() {
  const [filteredMobiles, setFilteredMobiles] = useState([]);

  useEffect(() => {
    // Fetch all mobiles when the component render first time
    const fetchAllMobiles = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/mobile/getall');
        const data = await response.json();
        console.log(data.combinedMobiles)
        setFilteredMobiles(data.combinedMobiles);
      } catch (error) {
        console.error('Error fetching all mobiles:', error);
      }
    };

    // Calling the function to fetch all mobiles
    fetchAllMobiles();
  }, []);

  return (
    <>
     <Navbar/>
      <Container>

      <Filters setFilteredMobiles={setFilteredMobiles} filteredMobiles={filteredMobiles}/>
      <Right>

        {filteredMobiles.length === 0 ? (
          <NoResult />
        ) : (
          filteredMobiles.map((mobile) => {
            return <MobileCart key={mobile.specsId} mobile={mobile}></MobileCart>;
          })
        )}
      </Right>
      </Container>
    </>

  )
}

export default Home