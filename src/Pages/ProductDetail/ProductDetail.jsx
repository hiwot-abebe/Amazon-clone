import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LayOut from '../../Components/LayOut/LayOut';
import { productUrl } from '../../Api/endpoints';
import ProductCard from '../../Components/ProductP/ProductCard';
import Loader from '../../Components/Loader/Loader';

function ProductDetail() {
  const {productId} = useParams()
  const [product, setProduct] = useState({})
  const [isloding, setIsloding] = useState(false);

  useEffect(() => {
    setIsloding(true);
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) =>{
        setProduct(res.data)
        setIsloding(false);
      }).catch((err) => {
        console.log(err)
        setIsloding(false);
      })
  },[])
  
 return (
   <LayOut>
     {isloding ? (<Loader/>) : (
       <ProductCard
         product={product}
         flex={true}
         renderDesc={true}
       renderAdd={true}/>
     )}
   </LayOut>
 );
}

export default ProductDetail