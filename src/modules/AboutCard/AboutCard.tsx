import React from "react";
import { useParams } from "react-router-dom";
import { getSingleCard } from "../../service/getDetails";
import { CiHeart, CiStar } from "react-icons/ci";

const SingleCardPage: React.FC = () => {
    const { category, id } = useParams<{ category: string; id: string }>();

    const { data, isLoading, isError } = getSingleCard(category, id);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading card data</p>;
    if (!data) return <p>No data found</p>;

    return (
        <div className="containers">
            <div className="wrapper mt-[50px] flex gap-[50px]">
                <div className="flex items-center gap-[50px]">
                    <div className="flex flex-col py-[20px] gap-[20px]">
                        <img
                            className="w-[100px]  object-cover h-[100px] mr-[20px] bg-[#F5F5F5]"
                            src={data.detailed_images[0]}
                            alt={data.title}
                        />
                        <img
                            className="w-[100px]  object-cover h-[100px] mr-[20px] bg-[#F5F5F5]"
                            src={data.detailed_images[1]}
                            alt={data.title}
                        />
                        <img
                            className="w-[100px]  object-cover h-[100px] mr-[20px] bg-[#F5F5F5]"
                            src={data.detailed_images[2]}
                            alt={data.title}
                        />
                        <img
                            className="w-[100px]  object-cover h-[100px] mr-[20px] bg-[#F5F5F5]"
                            src={data.detailed_images[3]}
                            alt={data.title}
                        />
                    </div>
                    <div>
                        <img
                            className="w-[404px] object-cover h-[404px]"
                            src={data.main_image}
                            alt={data.title}
                        />
                    </div>
                </div>
                <div className="w-[600px]">
                    <div className="flex items-center justify-between mb-[20px]">
                        <div>
                            <h1 className="font-bold text-[28px]">
                                {data.title}
                            </h1>
                            <p className="font-bold text-[22px]">
                                ${data.price}
                            </p>
                        </div>
                        <div className=" flex ml-[50px]">
                            <div className="flex items-center gap-[20px]">
                                <div className="flex items-center gap-[5px]">
                                    <CiStar />
                                    <CiStar />
                                    <CiStar />
                                    <CiStar />
                                    <CiStar />
                                </div>
                                <div>
                                    <p>{data.views} Customer Review</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-[20px]">
                        <p className="font-[500]">Short Description:</p>
                        <p className="text-[16px] text-[#A5A5A5]">
                            {data.short_description}
                        </p>
                        <p className="font-[500] mt-[10px]">Size:</p>
                        <div className="text-[16px] text-[#A5A5A5] flex items-center gap-[10px] cursor-pointer mt-[10px]">
                            <p className="rounded-[50%] border border-[#A5A5A5] px-3 py-1">
                                S
                            </p>
                            <p className="rounded-[50%] border border-[#A5A5A5] px-2  py-1">
                                M
                            </p>
                            <p className="rounded-[50%] border border-[#A5A5A5] px-3  py-1">
                                L
                            </p>
                            <p className="rounded-[50%] border border-[#A5A5A5] px-2  py-1">
                                XL
                            </p>
                        </div>
                        <div className="flex items-center gap-[10px] mt-[20px]">
                            <div className="flex gap-3 cursor-pointer items-center">
                                <button className="w-[35px] h-[35px] bg-[#46A358] rounded-full text-white">
                                    -
                                </button>
                                <h3 className="font-medium text-[20px]">0</h3>
                                <button className="w-[35px] h-[35px] bg-[#46A358] rounded-full text-white">
                                    +
                                </button>
                            </div>
                            <div className="flex gap-3">
                                <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-[130px] h-[40px]">
                                    BUY NOW
                                </button>
                                <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-[130px] h-[40px] border border-[#46A358] bg-transparent">
                                    <p className="text-black">ADD TO CARD</p>
                                </button>

                                <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-[40px] h-[40px] bg-transparent border border-[#46A358] text-[20px] ">
                                    <CiHeart color="#46A358" size={24} />
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="mt-[20px]">
                                <span className="font-bold">SKU: </span>
                                <span className="ant-descriptions-item-content">
                                    {data._id}
                                </span>
                            </div>
                            <div className="">
                                <span className="font-bold">Category: </span>
                                <span className="ant-descriptions-item-content">
                                    {data.category}
                                </span>
                            </div>
                            <div className="ant-descriptions-item-container">
                                <span className="ant-descriptions-item-label font-bold">
                                    Tags:
                                </span>
                                <span className="ant-descriptions-item-content">
                                    Home, Garden, Plants
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCardPage;
