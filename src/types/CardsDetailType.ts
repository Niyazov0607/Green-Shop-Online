export interface CardsDetailType {
    _id: string;
    title: string;
    category: string;
    price: number;
    discount: boolean;
    discount_price: string;
    main_image: string;
    detailed_images: string[];
    short_description: string;
    description: string;
    tags: string[];
    rate: number;
    views: number;
    sold_times: number;
    comments: any[];
    created_at: string;
    created_by: string;
    __v: number;
    count: number;
}
