import React, { useEffect, useState } from 'react'
import { ClearAll, Container, FilterDiv, FilterToggle, Heading, Input, Left, LeftWrapper, Max, Min, PriceRange, Right, SearchInput, SelectDiv, SelectTag, Wrapper } from './style'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function Filters({filteredMobiles, setFilteredMobiles}) {
    const [model, setModel] = useState("");
    const [priceRange, setPriceRange] = useState([0, 150000]);
    const [brand, setBrand] = useState('');
    const [processor, setProcessor] = useState('');
    const [os, setOs] = useState('');
    const [ram, setRam] = useState('');
    const [rom, setRom] = useState('');

    const handleResetFilters = () => {
        setModel(prevModel => "");
        setPriceRange(prevPriceRange => [0, 150000]);
        setBrand(prevBrand => "");
        setProcessor(prevProcessor => "");
        setOs(prevOs => "");
        setRam(prevRam => "");
        setRom(prevRom => "");
      }
    
    
      useEffect(() => {
        const fetchFilteredMobiles = async () => {
          try {
            const response = await fetch(
              `http://localhost:5000/api/mobile/filtered?model=${model}&price=${priceRange[1]}&brand=${brand}&processor=${processor}&os=${os}&ram=${ram}&rom=${rom}`
            );
            const data = await response.json();
            setFilteredMobiles(data.mobiles);
            console.log(data)
          } catch (error) {
            console.error('Error fetching filtered mobiles:', error);
          }
        };
    
        fetchFilteredMobiles();
      }, [model, priceRange, brand, processor, os, ram, rom]);
    
    
      const handleFilterTogle = () => {
        const leftFilter = document.querySelector('.left-filter');
    
        leftFilter.classList.toggle("leftDisplay");
    
      }

  return (
<>
    {/* <Wrapper> */}


      <FilterToggle onClick={handleFilterTogle} className='filterToggle'>Filter <KeyboardArrowDownOutlinedIcon /></FilterToggle>
      <Left className='left-filter '>
        <LeftWrapper >
          <FilterDiv>
            <Heading>Filter Mobiles</Heading>
            <ClearAll onClick={handleResetFilters} >Reset </ClearAll>
          </FilterDiv>
          <hr />
          <label>Model</label>
          <SearchInput value={model} placeholder='search by name' onChange={(e) => (setModel(e.target.value))} />
          <hr />
          <lable>Price Range</lable>
          <Input type='range' min={0} max={150000}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
          />
          <PriceRange>
            <Min>{priceRange[0]}</Min>
            <Max>{priceRange[1]?.toLocaleString('en-IN')}</Max>
          </PriceRange>
          <hr />
          <SelectDiv>
            <label>Brand</label>
            <SearchInput value={brand} placeholder='search by company' onChange={(e) => setBrand(e.target.value)} />
            <hr />
            <label htmlFor="" id="processor" value={processor} onChange={(e) => setProcessor(e.target.value)}>Processor</label>
            <SelectTag name="processor" value={processor} id="processor" onChange={(e) => (setProcessor(e.target.value))}>
              <option value="">any</option>
              <option value="kirin">Kirin</option>
              <option value="snapdragon">Snapdragon</option>
              <option value="a14 Bionic">A14 Bionic</option>
              <option value="a15 Bionic">A15 Bionic</option>
            </SelectTag>
          </SelectDiv>
          <hr />
          <SelectDiv>
            <label>OS</label>
            <SelectTag name="os" id="os" value={os} onChange={(e) => setOs(e.target.value)}>
              <option value="">any</option>
              <option value="ios">IOS</option>
              <option value="android">Android</option>
            </SelectTag>
          </SelectDiv>
          <hr />
          <SelectDiv>
            <label>Ram</label>
            <SelectTag name="ram" id="ram" value={ram} onChange={(e) => setRam(e.target.value)}>
              <option value="">any</option>
              <option value="4">4 Gb</option>
              <option value="3">3 gb</option>
              <option value="2">2 Gb</option>
              <option value="8">8 Gb</option>
            </SelectTag>
          </SelectDiv>
          <hr />
          <SelectDiv>
            <label>Rom</label>
            <SelectTag name="rom" id="rom" value={rom} onChange={(e) => setRom(e.target.value)}>
              <option value="">any</option>
              <option value="32">32 Gb</option>
              <option value="64">64 Gb</option>
              <option value="128">128 Gb</option>
              <option value="256">256 Gb</option>
            </SelectTag>
          </SelectDiv>

        </LeftWrapper>
      </Left>


    {/* </Wrapper> */}
    </>
  )
}

export default Filters