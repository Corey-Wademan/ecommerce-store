import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product'

const products = [
    {id: 1, name: 'Harness', description: 'climbing harness', price: '$50'},
    {id: 2, name: 'Shoes', description: 'climbing shoes', price: '$85'},
    {id: 3, name: 'Surfboard', description: 'surfboard', price: '$600'},
    {id: 4, name: 'Chalk bag', description: 'climbing chalk bag', price: '$20'},
]

const Products = () => {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/> 
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;