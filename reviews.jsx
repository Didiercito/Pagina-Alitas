import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Reviews/Reviews.css';
import Table from 'react-bootstrap/Table';
import InfoRe from '../../../store/ReviewsDataBase';


function Reviews() {
  return (
    <>
      {InfoRe.Data2.map((Data2, index) => (
        <Card key={index} className='conteiner'>
          <Card.Img variant="top" src={Data2.img} className='img-conteiner' />
          <Card.Body>
            <Card.Title className='text'>{Data2.titulo}</Card.Title>
            <Card.Text>
              <Table striped bordered hover className='table'>
                <thead>
                  <tr>
                    <th>{Data2.tituloCantidad}</th>
                    <th>{Data2.tituloTabla}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{Data2.cantidad1}</td>
                    <td>{Data2.ingrediente1}</td>
                  </tr>
                  <tr>
                    <td>{Data2.cantidad2}</td>
                    <td>{Data2.ingrediente2}</td>
                  </tr>
                  <tr>
                    <td>{Data2.cantidad3}</td>
                    <td>{Data2.ingrediente3}</td>
                  </tr>

                  <tr>
                    <td>{Data2.cantidad4}</td>
                    <td>{Data2.ingrediente4}</td>
                  </tr>

                  <tr>
                    <td>{Data2.cantidad5}</td>
                    <td>{Data2.ingrediente5}</td>
                  </tr>

                  <tr>
                    <td>{Data2.cantidad6}</td>
                    <td>{Data2.ingrediente6}</td>
                  </tr>

                  <tr>
                    <td>{Data2.cantidad7}</td>
                    <td>{Data2.ingrediente7}</td>
                  </tr>

                  <tr>
                    <td>{Data2.cantidad8}</td>
                    <td>{Data2.ingrediente8}</td>
                  </tr>

                  <tr>
                    <td>{Data2.cantidad9}</td>
                    <td>{Data2.ingrediente9}</td>
                  </tr>
                  
                </tbody>
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}


export default Reviews;
