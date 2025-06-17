import { memo } from "react";
import { Skeleton } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const api = "https://green-shop-backend.onrender.com/api";

interface DiscountData {
    title: string;
    discount_up_to: number;
    poster_image_url: string;
}

interface DiscountResponse {
    data: DiscountData;
    additional_info: string;
}

const fetchCategories = async (): Promise<DiscountResponse> => {
    const { data } = await axios.get(
        `${api}/features/discount?access_token=64bebc1e2c6d3f056a8c85b7`
    );
    return data;
};

const Discount = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["categories", "type"],
        queryFn: fetchCategories,
    });

    if (isLoading) {
        return (
            <div className="mt-[20px] bg-[#d9fae0] h-[400px] flex flex-col items-center p-4">
                <Skeleton.Input
                    active
                    style={{ width: 200, height: 40, marginTop: 18 }}
                />
                <Skeleton.Input
                    active
                    style={{ width: 180, height: 30, marginTop: 12 }}
                />
                <Skeleton.Image
                    active
                    style={{ width: 200, height: 180, marginTop: 20 }}
                />
            </div>
        );
    }

    if (error instanceof Error) {
        return <p>Xatolik yuz berdi: {error.message}</p>;
    }

    return (
        <div className="mt-[20px] text-start bg-[#d9fae0] h-[400px] flex flex-col items-center">
            <h1 className="mt-[18px] text-[#46A358] text-4xl font-bold text-center">
                {data?.data?.title}
            </h1>
            <p className="mt-[11px] text-2xl font-bold">
                UP TO {data?.data?.discount_up_to}% OFF
            </p>
            <img
                src={data?.data?.poster_image_url}
                alt="Discount Image"
                className="my-[10px] h-[180px]"
            />
        </div>
    );
};

export default memo(Discount);
