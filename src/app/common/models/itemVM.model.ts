export interface ItemVM {
    name: string,
    category: string,
    description: string,
    price: number,
    discount?: number,
    images: File[],
    isNew?: boolean,
    createdAt?: Date,
    id?: number,
    updatedAt?: Date,
    user_id?: number
}
