import { useState } from "react";
import { FakestoreProducts } from "./fakestore-product";


export function FakestoreIndex() {

    const [category, setCategory] = useState('');
    const [sendCategory, setSendCategory] = useState('');

    function handleCategoryChange(e) {
        setCategory(e.target.value);
    }

    function handleSerchClick() {
        setSendCategory(category);
    }

    return (
        <div className="container-fluid p-2">
            <header className="d-flex justify-content-between align-items-center p-3 border border-2">

                <span className="fs-4 fw-bold text-primary" >Fakestore</span>
                <div>
                    <div className="input-group">
                        <input type="text" className="form-control" onChange={handleCategoryChange} placeholder="Search By Category" name="txtInput" id="" style={{ border: '1px solid' }} />
                        <button onClick={handleSerchClick} className="btn btn-warning bi  bi-search"></button>

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