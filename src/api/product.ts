import axios from "axios"

export type Product = {
    depth: number
    description: string
    height: number
    id: string
    images: string[]
    kilocalorie: number
    name: string
    price: number
    weight: number
    width: number
}

export async function getItems() {
    const response = await axios.post<Product[]>( 'http://5.35.93.135:5374/api/catalog/products', {})
    console.log(response.data)
    return ProductListMapper(response.data)
  }


function ProductListMapper(ProductList:Product[]) {
    ProductList.forEach((Product) => {
        Product.images = Product.images.map((ImageName) => {
            return 'http://5.35.93.135:5374/media/' + ImageName
        })
    })
    return ProductList
}