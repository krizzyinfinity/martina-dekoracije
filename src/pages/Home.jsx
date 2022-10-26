import { Box, } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

  import Arr1 from "../images/arr1.png" 
  import Arr2 from "../images/arr2.png" 
  import To1 from "../images/to1.png" 
  import To2 from "../images/to2.png" 
  const handleDragStart = (e) => e.preventDefault();

const items = [
 

    <Box sx={{display: "flex", alignItems:"center",
     justifyContent:"center", paddingTop:{xs:20, lg:10, sm:30}
    }}
     >
    
  <img className='myimg' style={{ padding:20, 
}} src={Arr1} onDragStart={handleDragStart} role="presentation" />
  <Typography sx={{fontSize:{md:40,xs:16, sm:25 }, width:{xs:100, md:600, sm:280}}}>Aranzmani kao dekoracija za dom</Typography>
 
  </Box>,
  <Box sx={{ 
     display: "flex", alignItems:"center", justifyContent:"center",paddingTop:{xs:20,lg:5, sm:30}}}>
 
 <img className='myimg '  src={Arr2} onDragStart={handleDragStart} role="presentation" />
  <Typography sx={{fontSize:{md:40,xs:16, sm:25 }}}>Aranzmani za groblja</Typography>
 
  </Box>,
  <Box sx={{
     display: "flex", alignItems:"center", justifyContent:"center",  paddingTop:{lg:20,xs:20, sm:40}}}>
 
  <img className='myimg' style={{padding: 20}} src={To1} onDragStart={handleDragStart} role="presentation" />
  <Typography sx={{fontSize:{md:40,xs:16, sm:25 }}}>Kolaci za sve prilike</Typography>

  
  </Box>,
  <Box sx={{ 
     display: "flex", alignItems:"center", justifyContent:"center",  paddingTop:{lg:20,xs:20, sm:40}}}>

  <img className='myimg' style={{ padding: 20}} src={To2} onDragStart={handleDragStart} role="presentation" />
  <Typography  sx={{fontSize:{md:40,xs:16, sm:25 },width:{xs:100, md:600, sm:400} }}>Torte za rodjendane i razna slavlja</Typography>


</Box>


];
const Home = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};
  
  return (
  <div className='container'>
    <AliceCarousel
   
  all
  space
  disableDotsControls
        controlsStrategy="responsive"
        autoPlay={true}
        autoPlayInterval={2000}
        infinite={true}
        responsive={responsive}
       mouseTracking items={items}
       
         />
      </div>
     
  )
}

export default Home