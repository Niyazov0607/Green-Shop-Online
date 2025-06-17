"use client";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../hooks/instance";
import type { CardType } from "antd/es/card/Card";

export const getCards = (category: string, type: string) => {
    const { data, isLoading, isError } = useQuery<CardType[]>({
        queryKey: ["cards", category, type],
        queryFn: () =>
            instance()
                .get(
                    `/flower/category/${category}?type=${type}&access_token=64bebc1e2c6d3f056a8c85b7`
                )
                .then((res) => res.data.data),
    });

    return { data, isLoading, isError };
};
