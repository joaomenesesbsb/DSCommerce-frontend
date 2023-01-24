import DSCBtnNextPage from "../../components/Buttons/NextPage";
import DSCCardCatalog from "../../components/CardCatalog";
import DSCHeader from "../../components/HeaderClient";
import DSCSearchBar from "../../components/SearchBar";
import { ProductDTO } from '../../models/product';

const product: ProductDTO = {
    id: 2,
    name: "Notebook",
    description: "Essa tv e muito boa",
    price: 5000,
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/10-big.jpg",
    categories: [
        {
            id: 2,
            name: "Eletrônicos"
        },
        {
            id: 3,
            name: "Smart"
        }
    ]
}

export default function Catalog() {
    return (
        <>
            <DSCHeader />
            <main>
                <section id="catalog-section" className="dsc-container">
                    <DSCSearchBar />
                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        <DSCCardCatalog product={product} />
                        <DSCCardCatalog product={product} />
                        <DSCCardCatalog product={product} />
                        <DSCCardCatalog product={product} />
                        <DSCCardCatalog product={product} />
                        <DSCCardCatalog product={product} />
                        <DSCCardCatalog product={product} />
                        <DSCCardCatalog product={product} />
                        <DSCCardCatalog product={product} />
                        <DSCCardCatalog product={product} />
                        <DSCCardCatalog product={product} />
                        <DSCCardCatalog product={product} />
                    </div>
                    <DSCBtnNextPage />
                </section>
            </main>
        </>
    );
}