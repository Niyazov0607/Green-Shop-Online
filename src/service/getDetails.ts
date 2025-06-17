"use client";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../hooks/instance";
import type { CardsDetailType } from "../types/CardsDetailType";

export const getSingleCard = (
    category: string | undefined,
    id: string | undefined
) => {
    return useQuery<CardsDetailType>({
        queryKey: ["single_card", category, id],
        queryFn: async () => {
            const response = await instance().get(
                `/flower/category/${category}/${id}?access_token=64bebc1e2c6d3f056a8c85b7`
            );
            console.log("📦 API response:", response.data);
            return response.data.data;
        },
        enabled: Boolean(category && id),
    });
};
