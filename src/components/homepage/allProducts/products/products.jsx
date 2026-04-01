// import React from 'react';
// import Card from '../../../ui/Card';

// const Products = ({ productsData, productCart, setProductCart }) => {
//     return (
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full'>
//             {productsData.map(product => (
//                 <Card
//                     key={product.id}
//                     product={product}
//                     productCart={productCart}
//                     setProductCart={setProductCart}
//                 />
//             ))}
//         </div>
//     );
// };

// export default Products;

import React from 'react';
import Card from '../../../ui/Card';

const Products = ({ productsData, productCart, setProductCart }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full'>
            {productsData.map(product => (
                <Card
                    key={product.id}
                    product={product}
                    productCart={productCart}
                    setProductCart={setProductCart}
                />
            ))}
        </div>
    );
};

export default Products;