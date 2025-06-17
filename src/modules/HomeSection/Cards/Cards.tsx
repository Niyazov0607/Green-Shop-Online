"use client";
import { NavLink, useSearchParams } from "react-router-dom";
import { getCards } from "../../../service/getCards";
import { Skeleton } from "antd";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Cards = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category") || "house-plants";
    const sort = searchParams.get("sort") || "default";

    const { data, isLoading } = getCards(category, sort);

    const updateSort = (newSort: string) => {
        searchParams.set("sort", newSort);
        setSearchParams(searchParams);
    };

    const skeletonArray = new Array(8).fill(null);

    return (
        <div className="w-[970px]">
            <div>
                {/* Header */}
                <div className="flex justify-between mb-[30px] cursor-pointer">
                    <div className="gap-[34px] flex items-center">
                        <h3
                            onClick={() => updateSort("all-plants")}
                            className="cursor-pointer hover:text-[#46A358]"
                        >
                            All Plants
                        </h3>
                        <h3
                            onClick={() => updateSort("new-arrivals")}
                            className="cursor-pointer hover:text-[#46A358]"
                        >
                            New Arrivals
                        </h3>
                        <h3
                            onClick={() => updateSort("sale")}
                            className="cursor-pointer hover:text-[#46A358]"
                        >
                            Sale
                        </h3>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <span>Sort by:</span>
                        <select
                            value={sort}
                            onChange={(e) => updateSort(e.target.value)}
                            className="ml-2 border border-gray-300 rounded"
                        >
                            <option value="default">Default Sorting</option>
                            <option value="the-cheapest">The Cheapest</option>
                            <option value="most-expensive">
                                Most Expensive
                            </option>
                        </select>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-3 gap-5 relative">
                    {isLoading
                        ? skeletonArray.map((_, i) => (
                              <div key={i} className="p-4 bg-[#FBFBFB]">
                                  <Skeleton.Image
                                      style={{ width: 250, height: 200 }}
                                      active
                                  />
                                  <Skeleton active paragraph={{ rows: 1 }} />
                              </div>
                          ))
                        : data?.map((product: any) => (
                              <div
                                  key={product._id}
                                  className="p-4 bg-[#FBFBFB] group relative"
                              >
                                  <img
                                      src={product.main_image}
                                      alt={product.title}
                                      className="object-cover w-[280px] h-[200px]"
                                  />
                                  <div className="flex justify-center items-center mt-2 gap-[20px] cursor-pointer absolute top-[60%] left-1/2 -translate-x-1/2 hidden group-hover:flex transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                      <div className="bg-white p-2 rounded-full shadow-lg hover:bg-[#46A358] hover:text-white transition-colors duration-300">
                                          <IoCartOutline size={20} />
                                      </div>
                                      <div className="bg-white p-2 rounded-full shadow-lg hover:bg-[#46A358] hover:text-white transition-colors duration-300">
                                          <FaRegHeart size={20} />
                                      </div>
                                      <div className="bg-white p-2 rounded-full shadow-lg hover:bg-[#46A358] hover:text-white transition-colors duration-300">
                                          <NavLink
                                              to={`/modules/AboutCard/AboutCard/${product.category}/${product._id}`}
                                          >
                                              <CiSearch size={24} />
                                          </NavLink>
                                      </div>
                                  </div>
                                  {/* Product Title & Price */}
                                  <div className="items-end mt-2">
                                      <h3 className="font-semibold text-lg mb-1">
                                          {product.title}
                                      </h3>
                                      <p className="text-[#46A358] text-start font-bold">
                                          ${product.price}
                                          <span className="font-thin text-[#A5A5A5] ml-[5px] line-through">
                                              ${product.discount_price}
                                          </span>
                                      </p>
                                  </div>
                              </div>
                          ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;
