import axios from "axios"

async function getItems() {
    const response = await axios.post( 'http://5.35.93.135:5374/api/catalog/products')
    console.log(response.data)
  }
export {getItems}

