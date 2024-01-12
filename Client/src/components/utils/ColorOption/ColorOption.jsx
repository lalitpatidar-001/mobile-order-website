import React from 'react'
import { ColorBox, ColorImg, Container } from './style.js';
import photo from './phone.png'

function ColorOption() {
    return (
        <Container>
            <ColorBox>
            <ColorImg src={photo} />
            </ColorBox>
            <ColorBox>
            <ColorImg src={photo} />
            </ColorBox>
            <ColorBox>
            <ColorImg src={photo} />
            </ColorBox>
            <ColorBox>
            <ColorImg src={photo} />
            </ColorBox>
        </Container>
    )
}

export default ColorOption