import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { useThemeHook } from '../GlobalComponents/ThemeProvider'
import { BiSearch } from 'react-icons/bi'
import SearchFilter from 'react-filter-search'
import ProductCard from '../components/ProductCard';
import { Link } from "@reach/router";
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/TEEN_VOGUE.jpg';
import image2 from '../images/classic-men.jpg';



function Home() {

  const [theme] = useThemeHook();
  const [searchInput, setSearchInput] = useState('');
  const [productData, setProductData] = useState([]);

  async function getResponse() {
    const res = await fetch('https://fakestoreapi.com/products')
      .then(res => res.json());
    setProductData(await res)

  }


  useEffect(() => {
    getResponse();
  }, [])

  return (
    <Container className='py-4'>
      <Row className='justify-content-center car-margin'>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 image-height"
              src={image2}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 image-height"
              src={image1}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 image-height"
              src={image2}
              alt="Third slide"
            />  
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className='justify-content-center'>
        <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
          <h1 className={`${theme ? 'text-light my-5' : 'text-black my-5'} font`}> Search product </h1>
          <InputGroup className="mb-3">
            <InputGroup.Text className={theme ? 'bg-black text-dark-primary' : 'bg-light text-light-primary'}>
              <BiSearch size="2rem" />
            </InputGroup.Text>
            <FormControl
              placeholder="Seerch"
              className={theme ? 'bg-light-black text-light' : 'bg-light text-black'}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </InputGroup>
        </Col>
        <SearchFilter
          value={searchInput}
          data={productData}
          renderResults={results => (
            <Row className="justify-content-center">
              {results.map((item, i) => (
                <ProductCard data={item} key={i} />
              ))}
            </Row>
          )}
        />


      </Row>
    </Container>
  )
}

export default Home