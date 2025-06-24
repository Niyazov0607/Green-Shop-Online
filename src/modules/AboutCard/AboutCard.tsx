import React from "react";
import { useParams } from "react-router-dom";
import { getSingleCard } from "../../service/getDetails";
import { CiHeart, CiStar } from "react-icons/ci";

const SkeletonBox = ({ className = "" }: { className?: string }) => (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

const SingleCardPage: React.FC = () => {
    const { category, id } = useParams<{ category: string; id: string }>();
    const { data, isLoading, isError } = getSingleCard(category, id);

    if (isError) return <p>Error loading card data</p>;

    return (
        <div className="containers">
            <div className="wrapper mt-[50px] flex gap-[50px]">
                {/* Image column */}
                <div className="flex items-center gap-[50px]">
                    <div className="flex flex-col py-[20px] gap-[20px]">
                        {(isLoading
                            ? Array(4).fill(null)
                            : data?.detailed_images
                        )?.map((img, i) => (
                            <div key={i}>
                                {isLoading ? (
                                    <SkeletonBox className="w-[100px] h-[100px]" />
                                ) : (
                                    <img
                                        className="w-[100px] h-[100px] object-cover bg-[#F5F5F5]"
                                        src={img}
                                        alt={data?.title}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <div>
                        {isLoading ? (
                            <SkeletonBox className="w-[404px] h-[404px]" />
                        ) : (
                            <img
                                className="w-[404px] h-[404px] object-cover"
                                src={data?.main_image}
                                alt={data?.title}
                            />
                        )}
                    </div>
                </div>

                {/* Right side info */}
                <div className="w-[600px]">
                    <div className="flex items-center justify-between mb-[20px]">
                        <div>
                            {isLoading ? (
                                <>
                                    <SkeletonBox className="w-[200px] h-[30px] mb-2" />
                                    <SkeletonBox className="w-[100px] h-[24px]" />
                                </>
                            ) : (
                                <>
                                    <h1 className="font-bold text-[28px]">
                                        {data?.title}
                                    </h1>
                                    <p className="font-bold text-[22px]">
                                        ${data?.price}
                                    </p>
                                </>
                            )}
                        </div>
                        {!isLoading && (
                            <div className="flex ml-[50px]">
                                <div className="flex items-center gap-[20px]">
                                    <div className="flex items-center gap-[5px]">
                                        <CiStar />
                                        <CiStar />
                                        <CiStar />
                                        <CiStar />
                                        <CiStar />
                                    </div>
                                    <div>
                                        <p>{data?.views} Customer Review</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <hr />

                    <div className="mt-[20px]">
                        {isLoading ? (
                            <>
                                <SkeletonBox className="w-[300px] h-[16px] mb-2" />
                                <SkeletonBox className="w-[100%] h-[40px]" />
                            </>
                        ) : (
                            <>
                                <p className="font-[500]">Short Description:</p>
                                <p className="text-[16px] text-[#A5A5A5]">
                                    {data?.short_description}
                                </p>
                            </>
                        )}

                        <p className="font-[500] mt-[10px]">Size:</p>
                        <div className="text-[16px] text-[#A5A5A5] flex items-center gap-[10px] cursor-pointer mt-[10px]">
                            {["S", "M", "L", "XL"].map((size) => (
                                <p
                                    key={size}
                                    className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#A5A5A5]"
                                >
                                    {size}
                                </p>
                            ))}
                        </div>

                        {!isLoading && (
                            <>
                                {/* Quantity + Buttons */}
                                <div className="flex items-center gap-[10px] mt-[20px]">
                                    <div className="flex gap-3 cursor-pointer items-center">
                                        <button className="w-[35px] h-[35px] bg-[#46A358] rounded-full text-white">
                                            -
                                        </button>
                                        <h3 className="font-medium text-[20px]">
                                            0
                                        </h3>
                                        <button className="w-[35px] h-[35px] bg-[#46A358] rounded-full text-white">
                                            +
                                        </button>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-[130px] h-[40px]">
                                            BUY NOW
                                        </button>
                                        <button className="bg-transparent border border-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-black w-[130px] h-[40px]">
                                            ADD TO CARD
                                        </button>
                                        <button className="bg-transparent border border-[#46A358] flex rounded-md items-center justify-center w-[40px] h-[40px] text-[20px]">
                                            <CiHeart
                                                color="#46A358"
                                                size={24}
                                            />
                                        </button>
                                    </div>
                                </div>

                                {/* SKU & Category */}
                                <div className="mt-[20px]">
                                    <p>
                                        <span className="font-bold">SKU: </span>
                                        {data?._id}
                                    </p>
                                    <p>
                                        <span className="font-bold">
                                            Category:{" "}
                                        </span>
                                        {data?.category}
                                    </p>
                                    <p>
                                        <span className="font-bold">
                                            Tags:{" "}
                                        </span>
                                        Home, Garden, Plants
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCardPage;
