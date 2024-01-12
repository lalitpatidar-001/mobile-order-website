import React, { useEffect, useState } from 'react'
import { Container } from './style'
import ImageCard from '../../components/ImageCard/ImageCard'
import DetailCard from '../../components/DetailCard/DetailCard'
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';

const Mobile = () => {
  const {id} = useParams();
  const searchParams = new URLSearchParams(window.location.search);
  const ram = searchParams.get('ram');
  const rom = searchParams.get('rom');
  console.log("1",ram,rom);

  console.log("mobileId",id)

  const [mobileData , setMobileData] = useState([]);
  const [newRam,setNewRam] = useState(ram);
  const [newColor,setNewColor] = useState("");
  const [newRom, setNewRom] = useState(rom);
  const [noCombination , setNoCombination]= useState(false);

  useEffect(()=>{
    async function getMobile(){
      try {
        setNoCombination(false)
        const response = await axios.get(`http://localhost:5000/api/mobile/get/${id}?ram=${ram}&rom=${rom}`);
        console.log(response); 
        console.log("combination data ",response.data.combinedData);
        setMobileData(response.data.combinedData)
      } catch (error) {
        console.log(error)
      }
      // setNewRam(ram)
      // setNewRom(rom)
    }
    getMobile();
  },[]);

  useEffect(()=>{
    async function getMobile(){
      
      try {
        setNoCombination(false);
        console.log("called ram-> " ,newRam)
        console.log("called rom-> " ,newRom)
        const response = await axios.get(`http://localhost:5000/api/mobile/get/${id}?ram=${newRam}&rom=${newRom}&color=${newColor}`);
        // console.log(response);
        console.log(response.data.combinedData);
        setMobileData(response.data.combinedData);
      } catch (error) {
        console.log(error)
        if(error.response.status === 404 && error.response.data.msg === "No matching specs"){
          setNoCombination(true);
        }
      }
     
    }

    getMobile();
  },[newRam,newColor,newRom]);

  return (
    <>
    <Navbar/>
    <Container>
            <ImageCard/>
            <DetailCard mobile={mobileData} newRam={newRam} newRom={newRom} noCombination={noCombination}  setNewRam={setNewRam} setNewColor={setNewColor} setNewRom={setNewRom}/>
    </Container>
    </>
  )
}

export default Mobile