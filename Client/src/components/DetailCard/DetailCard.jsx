import React, { useEffect, useState } from 'react'
import { Container, Discount, Feature, Features, Heading, Hr, Left, ModelName, OptionBox, OriginalPrice, Price, PriceDiv, Rams, Rating, Right, Storages, Wrapper } from './style'
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import ColorOption from '../utils//ColorOption/ColorOption';
import Buttons from '../utils/Buttons/Buttons';
import Highlights from '../Highlights/Highlights';
import { Error } from './style';

function DetailCard({  noCombination, newRom, newRam, setNewRam, setNewColor, setNewRom, mobile }) {



  const [uniqueRams, setUniqueRams] = useState([]);
  const [uniqueRoms, setUniqueRoms] = useState([]);
  const [selectedRam, setSelectedRam] = useState(parseInt(newRam));
  const [selectedRom, setSelectedRom] = useState(parseInt(newRom));

  useEffect(() => {
    setSelectedRam(parseInt(newRam));
    setSelectedRom(parseInt(newRom))
  }, [newRam, newRom]);


  useEffect(() => {
    if (mobile.specs?.length > 0) {
      // Use a Set to store unique values
      const ramSet = new Set(mobile.specs.map((spec) => spec.ram));
      const romSet = new Set(mobile.specs.map((spec) => spec.rom));
      // Convert Set to an array
      const uniqueRamArray = [...ramSet];
      const uniqueRomArray = [...romSet];
      setUniqueRams(uniqueRamArray);
      setUniqueRoms(uniqueRomArray);
    }
  }, [mobile.specs]);

  const handleRamClick = (ram) => {
      setNewRam(ram)
  }
  const handleRomClick = (rom) => {
   setNewRom(rom)
  }

  
  return (
    <Wrapper>

      <Container>

        <Left>
          {noCombination && <Error >{`No Combination for ${newRam}Gb Ram and ${newRom}Gb Rom `}</Error>}

          <ModelName>{mobile.modelName} (black color, {mobile.rom}Gb) ({mobile.ram}Gb ram)</ModelName>
          <Rating>4.3<GradeOutlinedIcon /> </Rating>
          <PriceDiv>
            <Price><CurrencyRupeeOutlinedIcon />{mobile.price}</Price>
            <OriginalPrice><CurrencyRupeeOutlinedIcon style={{ fontSize: 12 }} />{mobile.actualPrice}</OriginalPrice>
            <Discount>21% off</Discount>
          </PriceDiv>
          <Features>
            <Feature> {mobile.ram} gb RAM | {mobile.rom} gb ROM</Feature>
            <Feature>{mobile.display}cm (4.57inch) Full HD+ Display</Feature>
            <Feature>{mobile.backCamera} MP back camera | {mobile.frontCamera} MP Front Camera</Feature>
            <Feature>{mobile.battery} MaH Battery</Feature>
            <Feature>{mobile.processor} Processor</Feature>
            <Feature>{mobile.os} operating System</Feature>
          </Features>
          <Heading>Color</Heading>
          <ColorOption />

          <Buttons specId={mobile.specId} noCombination={noCombination} newRam={newRam} newRom={newRom}/>
        </Left>
        <Right>
          <Heading>Ram</Heading>
          <Rams>
            {uniqueRams?.length > 0 &&
              uniqueRams.map((spec) => (
                <OptionBox
                  style={{ border: selectedRam === spec ? "2px solid blue" : "2px solid gray" }}
                  key={spec}
                  onClick={() => handleRamClick(spec)}
                  selected={selectedRam === spec}
                >
                  {spec} gb
                </OptionBox>
              ))}
          </Rams>

          <Hr />
          <Heading>Storage</Heading>
          <Storages>
            {uniqueRoms?.length > 0 &&
              uniqueRoms.map((spec) => {

                return <OptionBox style={{ border: selectedRom === spec ? "2px solid blue" : "2px solid gray" }}
                  onClick={() => handleRomClick(spec)}>{spec} gb</OptionBox>
              })}
          </Storages>
        </Right>

      </Container>

      <Highlights />
    </Wrapper>

  )
}

export default DetailCard