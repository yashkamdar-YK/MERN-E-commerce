import React, { useState } from "react";
// import ReactPaginate from "react-paginate";

// const items = Array.from({ length: 1120 }, (_, i) => i + 1); // Simulated items for pagination
// import {
//   Dialog,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import {
//   ChevronDownIcon,
//   MinusIcon,
//   PlusIcon,
// } from "@heroicons/react/20/solid";

// const sortOptions = [
//   { name: "Most Popular", href: "#", current: true },
//   { name: "Best Rating", href: "#", current: false },
//   { name: "Newest", href: "#", current: false },
//   { name: "Price: Low to High", href: "#", current: false },
//   { name: "Price: High to Low", href: "#", current: false },
// ];

// const subCategories = [
//   { name: "Lifestyle", href: "#" },
//   { name: "Jorden", href: "#" },
//   { name: "Airmax", href: "#" },
//   { name: "SuperStar", href: "#" },
//   { name: "Training & Gym", href: "#" },
//   { name: "Running", href: "#" },
//   { name: "Collabaration", href: "#" },
//   { name: "Special Addition", href: "#" },
//   { name: "Retro", href: "#" },
// ];

// const filters = [
//   {
//     id: "color",
//     name: "Color",
//     options: [
//       { value: "white", label: "White", checked: false },
//       { value: "beige", label: "Beige", checked: false },
//       { value: "blue", label: "Blue", checked: true },
//       { value: "brown", label: "Brown", checked: false },
//       { value: "green", label: "Green", checked: false },
//       { value: "purple", label: "Purple", checked: false },
//     ],
//   },
//   {
//     id: "Gender",
//     name: "Gender",
//     options: [
//       { value: "Male", label: "Male", checked: false },
//       { value: "Women", label: "Women", checked: false },
//       { value: "Unisex", label: "Unisex", checked: true },
//     ],
//   },
//   {
//     id: "Shop By Price",
//     name: "Shop By Price",
//     options: [
//       { value: "2500.00", label: "Under-2500.00", checked: false },
//       { value: "7500.00", label: "Under-7500.00", checked: false },
//       { value: "Under-10000.00", label: "under-10000.00", checked: false },
//       { value: "Over-10000", label: "Over-10000.00", checked: false },
//     ],
//   },
//   {
//     id: "Sale & Offers",
//     name: "Sale & Offers",
//     options: [
//       { value: "Sale & Offers", label: "Sale", checked: false },
//     ],
//   },
//   {
//     id: "Brand",
//     name: "Brand",
//     options: [
//       { value: "Nike", label: "Nike", checked: false },
//       { value: "Addidas", label: "Addidas", checked: false },
//       { value: "Puma", label: "Puma", checked: true },
//       { value: "New Balance", label: "New Balance", checked: true },
//       { value: "Air Jorden", label: "Air Jorden", checked: true },
//       { value: "Converse", label: "Converse", checked: true },
//       { value: "Reebok", label: "Reebok", checked: true },
//     ],
//   },
//   {
//     id: "Top Collection",
//     name: "Top Collection",
//     options: [
//       { value: "Air Max", label: "Air Max", checked: false },
//       { value: "Nike Dunk", label: "Nike Dunk", checked: false },
//       { value: "Air Force 1", label: "Air Force 1", checked: true },
//       { value: "Addidas SuperNova", label: "Addidas SuperNova", checked: false },
//       { value: "Addidas SuperStar", label: "Addidas SuperStar", checked: false },
//       { value: "Addidas RunFalcone", label: "Addidas RunFalcone", checked: false },
//       { value: "Puma X MMQ", label: "Puma X MMQ", checked: false },
//       { value: "Puma X Ferrari", label: "Puma X Ferrari", checked: false },
//     ],
//   },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }
const Product = () => {
  // const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // const [currentPage, setCurrentPage] = useState(0);
  // const itemsPerPage = 20;

  // const handlePageClick = (event) => {
  //   setCurrentPage(event.selected);
  // };

  // const displayItems = items.slice(
  //   currentPage * itemsPerPage,
  //   (currentPage + 1) * itemsPerPage
  // );

  return (
    <div className="w-full h-screen px-12 relative">
      <div className="heading flex justify-between items-center pb-4 text-center">
        <p className="text-2xl font-medium mt-5 tracking-wide">
          Men's Shoes12 (1120)
        </p>
        <div className="flex gap-4 items-center text-center text-lg mt-5">
          <p className="cursor-pointer">Hide Filter</p>
          <p className="cursor-pointer">Sort By</p>
        </div>
      </div>
      {/* <div className="flex mt-5 ">
        <div className="Filter-section sticky overflow-y-auto top-0 w-64 h-[580px]"> */}
      {/* <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
            <button
              type="button"
              className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
              onClick={() => setMobileFiltersOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div> */}
      {/* <form className="mt-[-30px]">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="pt-[26px] pb-[40px] font-medium text-gray-900">
              {subCategories.map((Gender) => (
                <li key={Gender.name}>
                  <a href={Gender.href} className="block pr-2 pb-[10px]">
                    {Gender.name}
                  </a>
                </li>
              ))}
            </ul>

            {filters.map((section) => (
              <Disclosure
                as="div"
                key={section.id}
                className="border-t border-gray-200 px-4 py-4"
              >
                {({ open }) => (
                  <>
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              defaultChecked={option.checked}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </form>
        </div> */}
      <div className="Product-section flex m-0 h-full">
        <div className="product_container flex flex-wrap gap-8">
          {[
            5, 4, 3, 9, 7, 6, 1, 8, 2, 3, 4, 5, 9, 4, 3, 9, 7, 6, 1, 8, 2, 3, 4,
            5, 5, 4, 3, 9, 7, 6, 1, 8, 2, 3, 4, 5, 9, 4, 3, 9, 7, 6, 1, 8, 2, 3, 4,
            5,
          ].map((item, index) => (
            <div
              key={index}
              className="product bg-white w-full md:w-[calc(25%-1.5rem)] h-[520px]"
            >
              <img
                className="product_img w-full"
                src={`./public/img-${item}.png`}
                alt="Product Image"
              />
              <div className="product-details">
                <div className="bestseller text-[#9e3500] font-medium tracking-wider mt-2.5 text-[18px]">
                  Bestseller
                </div>
                <p className="shoe_name mt-2 text-[18.5px] font-medium text-[#111111]">
                  Nike Air Max Pulse Roam
                </p>
                <p className="shoe_catogory text-[#707072] mt-1.25 text-[17px]">
                  Men's Shoes
                </p>
                <div className="shoe_colours text-[#707072] mt-[-3px] mb-[6px] text-[17px]">
                  1 Colour
                </div>
                <span className="Shoe_price text-[#111111] font-medium text-[18.5px]">
                  MRP : ₹ 8 295.00
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(items.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination flex justify-center my-4"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link p-2 border border-gray-300 rounded mx-1 text-blue-500 hover:bg-gray-200"}
        previousLinkClassName={"page-link p-2 border border-gray-300 rounded mx-1 text-blue-500 hover:bg-gray-200"}
        nextLinkClassName={"page-link p-2 border border-gray-300 rounded mx-1 text-blue-500 hover:bg-gray-200"}
        breakLinkClassName={"page-link p-2 border border-gray-300 rounded mx-1 text-blue-500 hover:bg-gray-200"}
        activeClassName={"active"}
        activeLinkClassName={"page-link p-2 border border-gray-300 rounded mx-1 bg-blue-500 text-white"}
      /> */}
    

    </div>
  );
};

export default Product;
