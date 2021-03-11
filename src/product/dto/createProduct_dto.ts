type CreateProductDto = {
    id: string,
    kind: string,
    name: string,
    price: string,
    discount: string,
    images: string[],
    detail: any 
}

export default CreateProductDto;