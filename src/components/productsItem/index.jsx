import React from 'react';
import { Text, View } from 'react-native';

export default function ProductsItem({product}) {
 return (
   <View style={{width: 100, height: 150, backgroundColor: 'red', margin: 10, alignItems: 'center', justifyContent: 'center'}}>
    <Text>
       {product.name}
    </Text>
   </View>
  );
}

