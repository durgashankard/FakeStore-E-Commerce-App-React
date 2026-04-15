

import { useState } from "react";

import { FakestoreProducts } from "./fakestore-products";





export function FakestoreIndex() {

    const [category, setCategory] = useState('');

    const [sendCategory, setSendCategory] = useState('');



    function handleCategoryChange(e) {

        setCategory(e.target.value);

    }

    function handleSearchClick() {

        setSendCategory(category);

    }

    return (

        <div className="container-fluid">

            <header className="border border-1 p-3 d-flex justify-content-between align-items-center">

                <span className="fs-4 fw-bold">Fakestore</span>

                <div>

                    <div className="input-group">

                        <input className="form-control" onChange={handleCategoryChange} type="text" placeholder="search by category" />

                        <button onClick={handleSearchClick} className="btn btn-warning bi-search"></button>

                    </div>

                </div>

                <div>

                    <button className="btn position-relative btn-warning bi bi-cart3">

                        <span className="badge position-absolute rounded rounded-circle"></span>

                    </button>

                </div>

            </header>

            <section className="mt-4">

                <FakestoreProducts category={sendCategory} />

            </section>

        </div>

    )

}
