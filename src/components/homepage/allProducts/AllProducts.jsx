import React, { useEffect, useState } from 'react';
import Products from './products/Products';
import Cart from './cart/cart';

const AllProducts = ({productCart, setProductCart}) => {
    const [productsData, setProductsData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('products');


    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setProductsData(data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className='max-w-7xl mx-auto mb-10 mt-10'>
            <div className="flex flex-col items-center text-center gap-4">
                <h2 className='text-5xl font-semibold'>Premium Digital Tools</h2>
                <p className='max-w-lg'>
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>

                <div className='flex bg-gray-200 p-2 rounded-full'>
                    <button
                        type="button"
                        className={`btn ${selectedCategory === 'products' ? 'btn-primary' : 'btn-ghost'} rounded-full`}
                        onClick={() => setSelectedCategory('products') }
                    >
                        Products
                    </button>

                    <button
                        type="button"
                        className={`btn ${selectedCategory === 'cart' ? 'btn-primary' : 'btn-ghost'} rounded-full`}
                        onClick={() => setSelectedCategory('cart')}
                    >
                        Cart ({productCart.length})
                    </button>
                </div>
            </div>

            {
                selectedCategory === 'products'
                    ? <Products
                        productsData={productsData}
                        productCart={productCart}
                        setProductCart={setProductCart}
                    />
                    : <Cart
                        productCart={productCart}
                        setProductCart={setProductCart}
                    />
            }
        </div>
    );
};

export default AllProducts;