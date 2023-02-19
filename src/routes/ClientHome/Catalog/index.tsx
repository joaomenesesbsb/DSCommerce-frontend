import { useEffect, useState } from "react";
import DSCBtnNextPage from "../../../components/Buttons/NextPage";
import CardCatalog from "../../../components/CardCatalog";
import DSCSearchBar from "../../../components/SearchBar";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";

type QueryParams = {
    page: number,
    name: string
}

export default function Catalog() {

    const [isLastPage, setIsLastPage] = useState(false);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        name: ''
    });

    useEffect(() => {
        productService.findPageRequest(queryParams.page, queryParams.name)
            .then(response => {
                setProducts(products.concat(response.data.content));
                setIsLastPage(response.data.last);
            })
    }, [queryParams]);

    function handleSearch(searchText: string) {
        setProducts([]);
        setQueryParams({ ...queryParams, page: 0, name: searchText });
    }

    function handleNextPage() {
        setQueryParams({ ...queryParams, page: queryParams.page + 1 });
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

                {
                    !isLastPage &&
                    <div onClick={handleNextPage}>
                        <DSCBtnNextPage />
                    </div>
                }
            </section>
        </main>
    );
}