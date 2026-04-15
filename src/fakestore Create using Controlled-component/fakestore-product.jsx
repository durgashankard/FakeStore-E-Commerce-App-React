
import axios from "axios"

import { useEffect, useState } from "react"



export function FakestoreProducts(props) {

    const [products, setProducts] = useState([{
        id: 0,
        title: null,
        description: null,
        image: null,
        price: 0,
        category: null,
        rating: {
            rate: 0,
            count: 0
        }
    }]);

    const [categories, setCategories] = useState([]);



    function LoadProduct() {
        if (props.category === '') {
            axios.get(`https://fakestoreapi.com/products`)
                .then(Response => {
                    setProducts(Response.data);
                })
        } else {
            axios.get(`https://fakestoreapi.com/products/category/${props.category}`)
                .then(Response => {
                    setProducts(Response.data);
                })
        }
    }
    function LoadCategories() {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(Response => {
                Response.data.unshift("all");
                setCategories(Response.data);
            }
            )
    }

    function LoadProducts(url) {
        axios.get(url)
            .then(Response => {
                setProducts(Response.data);
            }
            )
    }

    function categoryCange(e) {
        if (e.target.value == "all") {
            LoadProducts(`https://fakestoreapi.com/products`)
        } else {
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)

        }
    }

    useEffect(() => {
        LoadProduct();
        LoadCategories();
    }, [props.category]);



    return (
        <div className="container-fluid row">
            <nav className=" col-2 p-3 bg-light overflow-auto" style={{ height: 600 }}>
                <h4> Select Categories </h4>
                <select onChange={categoryCange} className=" form-select">
                    {
                        categories.map(category =>
                            <option value={category} key={category} >
                                {category.toUpperCase()}
                            </option>
                        )
                    }
                </select>
            </nav>
            <div className="d-flex flex-wrap overflow-auto col-10 " style={{ height: '600px' }}>
                {
                    products.map(product => (
                        <div key={product.id} className="card m-2 p-2" style={{ width: '260px' }}>

                            <img src={product.image} className="card-img-top" height={120} />

                            <div className="card-header overflow-auto" style={{ height: '100px' }}>

                                {product.title}

                            </div>

                            <div className="card-body">

                                <dl>

                                    <dt className="">Price</dt>

                                    <dd className="fw-bold fs-5 text-primary">{product.price.toLocaleString('en-in', { style: 'currency', currency: 'INR' })}</dd>

                                    <dt>Rating</dt>

                                    <dd className="text-success">{product.rating.rate} <span className="bi bi-star-fill text-warning"></span> </dd>

                                </dl>

                            </div>

                            <div className="card-footer">

                                <button className="btn btn-warning w-100 bi bi-cart4"> Add to Cart</button>

                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}