import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Card/Card.css';
import infoCard from '../../../store/CardDataBase';

function Cards() {
  return (
    <>
      {infoCard.Date.map((Date, index) => {
        return (
          <Card key={index} className='card-primary'>
            <Card.Img variant="top" src={Date.img} className='img-card'/>
            <Card.Body>
              <Card.Title className='text'>{Date.titulo}</Card.Title>
              <Card.Text className='text'>{Date.texto}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default Cards;
