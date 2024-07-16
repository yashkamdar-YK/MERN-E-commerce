import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ProductData from "./ProductData";


const Product = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20;

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const displayItems = ProductData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="w-full min-h-screen px-12 relative">
      <div className="heading flex justify-between items-center pb-4 text-center">
        <p className="text-2xl font-medium mt-5 tracking-wide">
          Men's Shoes (1120)
        </p>
        <div className="flex gap-4 items-center text-center text-lg mt-5">
          <p className="cursor-pointer">Hide Filter</p>
          <p className="cursor-pointer">Sort By</p>
        </div>
      </div>

      <div className="Product-section flex m-0 mb-5  h-full">
      <div className="product_container flex flex-wrap gap-8">
      {displayItems.map((item) => (
        
        <div
          key={item.id}
          className="product bg-white w-full md:w-[calc(25%-1.5rem)] h-[520px]">
          <img
            className="product_img w-full"
            src={`./public/${item.image}`}
            alt={item.name}
          />
          <div className="product-details ">
            <div className="info text-[#9e3500] font-medium tracking-wider mt-2.5 text-[18px]">
              {item.about}
            </div>
            <p className="shoe_name mt-2 text-[18.5px] font-medium text-[#111111]">
              {item.name}
            </p>
            <p className="shoe_catogory text-[#707072] mt-1.25 text-[17px]">
              {item.category}
            </p>
            <div className="shoe_colours text-[#707072] mt-[-3px] mb-[6px] text-[17px]">
              {item.colors}
            </div>
            <span className="Shoe_price text-[#111111] font-medium text-[18.5px]">
              MRP: {item.price}
            </span>
          </div>
        </div>
      ))}
    </div>
      </div>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(ProductData.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination flex justify-center p-4 mt-[90px]"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link p-2 border border-gray-300 rounded mx-1 text-500 hover:bg-gray-200"}
        previousLinkClassName={"page-link p-2 border border-gray-300 rounded mx-1 text-500 hover:bg-gray-200"}
        nextLinkClassName={"page-link p-2 border border-gray-300 rounded mx-1 text-500 hover:bg-gray-200"}
        breakLinkClassName={"page-link p-2 border border-gray-300 rounded mx-1 text-500 hover:bg-gray-200"}
        activeClassName={"active"}
        activeLinkClassName={"page-link p-2 border border-gray-300 rounded mx-1 bg-500 text-zinc-900"}
      />
    </div>
  );
};

export default Product;
