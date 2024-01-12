import React, { useState } from 'react';
import { Container, Image, SmallImage, SmallImageDiv, Wrapper } from './style';
import photo from './phone.png';

function ImageCard() {
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleMouseEnter = (index)=>{
    setImageIndex(index);
    setSelectedImage(index);
  }

  const images = [
    'https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg',
    'https://www.sahivalue.com/product-images/14+pro+max.jpg/293890000021697778/400x400',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLS-pg9Z3iVyBSYqaRGkmYAIjY9M5tOCaRfQ&usqp=CAU',
    'https://images.samsung.com/is/image/samsung/assets/in/explore/brand/latest-5g-mobile-phone-online/banner-mobile-720x761.jpg?$720_N_JPG$',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDZXBqIHjdy5VZ5T2P8246-_cOnBh8v7g84w&usqp=CAU',
  ];

  return (
    <Container>
      <Image src={images[imageIndex]} />

      <SmallImageDiv>
        {images.map((image, index) => (
          <SmallImage
            key={index}
            style={{ border: selectedImage === index ? '2px solid blue' : '2px solid lightgray' }}
            onMouseEnter={()=>handleMouseEnter(index)}
            src={image}
          />
        ))}
      </SmallImageDiv>
    </Container>
  );
}

export default ImageCard;
