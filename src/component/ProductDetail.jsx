import React from 'react';
import { useParams } from 'react-router-dom';
import ProductData from './ProductData';

const ProductDetail = () => {
  const { id } = useParams();
  const product = ProductData.find((item) => item.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail w-full min-h-screen px-12 relative">
      <div className="heading flex justify-between items-center pb-4 text-center">
        <p className="text-2xl font-medium mt-5 tracking-wide">{product.name}</p>
      </div>
      <div className="product-detail-container flex flex-col items-center">
        <img
          className="product_img w-full max-w-[500px] h-auto"
          src={`./public/${product.image}`}
          alt={product.name}
        />
        <div className="product-details mt-5">
          <div className="info text-[#9e3500] font-medium tracking-wider mt-2.5 text-[18px]">
            {product.about}
          </div>
          <p className="shoe_name mt-2 text-[18.5px] font-medium text-[#111111]">
            {product.name}
          </p>
          <p className="shoe_category text-[#707072] mt-1.25 text-[17px]">
            {product.category}
          </p>
          <div className="shoe_colours text-[#707072] mt-[-3px] mb-[6px] text-[17px]">
            {product.colors}
          </div>
          <span className="shoe_price text-[#111111] font-medium text-[18.5px]">
            MRP: {product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
