"use client";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../hooks/instance";
import type { CategoryType } from "../types/CategoryType";

export const getCategories = () => {
    const { data, isLoading, isError } = useQuery<CategoryType[]>({
        queryKey: ["categories"],
        queryFn: () =>
            instance()
                .get(`/flower/category?access_token=64bebc1e2c6d3f056a8c85b7`)
                .then((res) => res.data.data),
    });

    return { data, isLoading, isError };
};
