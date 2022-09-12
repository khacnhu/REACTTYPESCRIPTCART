import React from 'react'
import storeItems from '../data/items.json';
import {Col, Row} from "react-bootstrap";
import StoreItem from '../components/StoreItem';


const Store = () => {
  return (
    <>
        <h1>Store</h1>
        <Row>
            {
                storeItems.map((item)=>(
                    <Col
                        key = {item.id}                      
                    >
                        <StoreItem {...item} />
                    </Col> 
                    
                ))
            }
        </Row>
    
    
    </>
  )
}

export default Store;
