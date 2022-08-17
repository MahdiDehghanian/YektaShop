import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { BsCartCheck, BsCartX } from 'react-icons/bs'


function Cart() {

  const [theme] = useThemeHook();
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();



  return (
    <Container className='py-4 mt-5'>
      <h1 className={`${theme ? 'text-light my-5 text-center' : 'text-light-primary my-5 text-center'} font`}
      >
        {isEmpty ? 'Your Cart is Empty' : 'The Cart'}
      </h1>
      <Row className='justify-content-center'>
        <Table responsive="sm" striped bordered hover variant={theme ? 'dark' : 'light'}
          className='mb-5 font'
        >
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div style={{
                      background: 'white', height: '8rem', overflow: 'hidden',
                      display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                      <div style={{ padding: '0.5rem' }}>
                        <img src={item.image} style={{ width: '4rem' }} alt={item.title}/>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {item.title}
                    </h6>
                  </td>
                  <td>
                    ${item.price}
                  </td>
                  <td>
                    Quantity ({item.quantity})
                  </td>
                  <td>
                    <Button onClick={()=> updateItemQuantity(item.id , item.quantity - 1)} className="ms-2 mt-1">-</Button>
                    <Button onClick={()=> updateItemQuantity(item.id , item.quantity + 1)} className="ms-2 mt-1">+</Button>
                    <Button variant="danger" onClick={() => removeItem(item.id)} className="ms-2 mt-1">Remove Item</Button>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </Table>
        {!isEmpty &&
        <Row
          style={{ borderRadius: '10px', padding: '1rem' }}
          className={`${theme? 'bg-light-black text-light' : 'bg-light text-black' } justify-content-center w-100 `}
        >
          <Col className='py-2 font' >
              <h4>Total Price ${cartTotal} </h4>
          </Col>
          <Col className='p-0' md={4}>
            <Button variant='danger'
            className='m-2'
            onClick={()=> emptyCart()}
            >
              <BsCartX size="1.5rem"/>
              
            </Button>
            <Button variant='success'
            className='m-2'
            >
              <BsCartCheck size="1.5rem"/>
              Check Out
            </Button>
          </Col>
        </Row>
        }
      </Row>
    </Container>
  )
}

export default Cart