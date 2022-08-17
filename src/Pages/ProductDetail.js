import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap'
import { useThemeHook } from '../GlobalComponents/ThemeProvider';



function ProductDetail(props) {

  const [theme] = useThemeHook();
  const [productData, setProductData] = useState([]);

  async function getResponse() {
    const res = await fetch(`https://fakestoreapi.com/products/${props.id}`)
      .then(res => res.json());
    setProductData(await res);
  }


  useEffect(() => {
    getResponse();
  }, [])


  return (
    <div className={theme ? 'bg-black border-bottom' : 'bg-light-2'}
      style={{ height: '100vh', width: '100%', background: 'white' }}>
      <Container className='py-4'>
        <Row className='justify-content-center'>
          <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
            <h1 className={theme ? 'text-light my-5' : 'text-black my-5'}> Product Detail </h1>
          </Col>
        </Row>
        <Row>
          <Card className={` ${theme ? 'bg-light-black text-light' : 'bg-light text-black'} 
                          text-center p-0 overflow-hidden shadow mx-auto `}>
            <div style={{
              background: 'white', height: '20rem', overflow: 'hidden',
              display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit'
            }} >
              <div style={{ width: '15rem' }}>
                <Card.Img style={{ width: '13rem' }} className='mx-auto mt-4 mb-2 img-fluid' variant="top" src={productData['image']} />
              </div>
            </div>

            <Card.Body>
              <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                {productData['title']}
              </Card.Title>
              <Card.Title>
                $<span className='h3' >{productData['price']}</span>
              </Card.Title>
              <Card.Text>
                {productData['description']}
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail