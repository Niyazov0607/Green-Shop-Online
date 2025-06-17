"use client";
import { useSearchParams } from "react-router";
import { getCategories } from "../../../service/getCategories";
import Discount from "./Discount/Discount";

const Categories = () => {
    const { data, isLoading, isError } = getCategories();
    const [searchParams, setSearchParams] = useSearchParams();

    const selectedCategory = searchParams.get("category") || "house-plants";

    const updateSort = (sortType: string) => {
        searchParams.set("category", sortType);
        setSearchParams(searchParams);
    };

    if (isError) {
        return (
            <div className="w-[290px] bg-[#FBFBFB] flex items-center justify-center h-full">
                <span className="text-red-500">Error loading categories.</span>
            </div>
        );
    }

    return (
        <div className="w-[290px] bg-[#FBFBFB]">
            <div className="py-[14px] px-[20px]">
                <p className="font-bold text-[18px]">Categories</p>

                {isLoading
                    ? Array.from({ length: 9 }).map((_, idx) => (
                          <div
                              key={idx}
                              className="flex gap-2 justify-between py-[7px] animate-pulse"
                          >
                              <div className="h-4 w-[220px] bg-gray-300 rounded" />
                          </div>
                      ))
                    : data?.map((cat) => (
                          <div
                              key={cat._id}
                              onClick={() => updateSort(cat.route_path)}
                              className={`flex justify-between gap-2 cursor-pointer py-[7px] hover:text-green-600 ${
                                  selectedCategory === cat.route_path
                                      ? "text-green-600 font-semibold"
                                      : ""
                              }`}
                          >
                              <p>{cat.title}</p>
                              <p>({cat.count})</p>
                          </div>
                      ))}
            </div>
            <Discount />
        </div>
    );
};

export default Categories;
