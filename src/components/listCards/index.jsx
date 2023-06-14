import React from 'react';
import {Container, ImageCard, NameProduct, PriceProduct} from './styles';

export default function ListCards({product}) {
 return (
   <Container>
    <ImageCard
    source={{uri: product.image}}
    />
    <NameProduct>
      {product.name}
    </NameProduct>
    <PriceProduct>
      {product.price}
    </PriceProduct>
   </Container>
  );
}

