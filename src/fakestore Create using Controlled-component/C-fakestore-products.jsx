import axios from "axios"

import { useEffect, useState } from "react"





export function FakestoreProducts(props) {



    const [products, setProducts] = useState([{ id: 0, title: null, description: null, image: null, category: null, price: 0, rating: { rate: 0, count: 0 } }])



    function LoadProducts() {

        if (props.category === '') {

            axios.get(`https://fakestoreapi.com/products`)

                .then(response => {

                    setProducts(response.data);

                })

        } else {

            axios.get(`https://fakestoreapi.com/products/category/${props.category}`)

                .then(response => {

                    setProducts(response.data);

                })

        }

    }



    useEffect(() => {

        LoadProducts();

    }, [props.category]);



    return (

        <div className="d-flex flex-row flex-wrap overflow-auto" style={{ height: '500px' }}>

            {

                products.map(product =>

                    <div className="card m-2 p-2" key={product.id} style={{ width: '200px' }}>

                        <img className="card-img-top" src={product.image} height="120" />

                        <div className="card-header overflow-auto" style={{ height: '100px' }}>

                            {product.title}

                        </div>

                        <div className="card-body">

                            <div>{product.price.toLocaleString('en-us', { style: 'currency', currency: 'USD' })}</div>

                        </div>

                        <div className="card-footer">

                            <button className="btn btn-warning w-100">Add to Cart</button>

                        </div>

                    </div>

                )

            }

        </div>

    )

}