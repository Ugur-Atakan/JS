import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Urunler() {
  const [foods, setFoods] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://192.168.1.112:3002/foods/${id}`)
      .then(res => {
        setFoods(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [id]);

  return (
    <Row xs={1} md={5} className="g-4">
      {foods.map((food) => (
        <Col key={food.id}>
          <Card style={{ width: '18rem', height: '30rem'}}>
            <Card.Img variant="top" src={food.foodImg} style={{height: '15rem',  objectFit:'cover'}} />
            <Card.Body>
              <Card.Title>{food.foodName}</Card.Title>
              <Card.Text>
                {food.foodDesc}
              </Card.Text>
              <Button variant="primary">Satın Al {food.foodPrice} TL</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Urunler;