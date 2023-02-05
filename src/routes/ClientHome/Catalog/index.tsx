import axios from "axios";
import { useEffect, useState } from "react";
import DSCBtnNextPage from "../../../components/Buttons/NextPage";
import CardCatalog from "../../../components/CardCatalog";
import DSCSearchBar from "../../../components/SearchBar";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";

export default function Catalog() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [productName, setProductName] = useState('');

    useEffect(() => {
        productService.findPageRequest(0,productName)
        .then(response => {
            setProducts(response.data.content);
        })
    }, [productName]);

    function handleSearch(searchText : string){
        setProductName(searchText);
    }

    return (
        <main>
            <section id="catalog-section" className="dsc-container">
                <DSCSearchBar onSearch={handleSearch} />
                <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                    {
                        products.map(product => <CardCatalog key={product.id} product={product} />)
                    }
                </div>
                <DSCBtnNextPage />
            </section>
        </main>
    );
}