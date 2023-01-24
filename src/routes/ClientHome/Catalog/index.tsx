import DSCBtnNextPage from "../../../components/Buttons/NextPage";
import CardCatalog from "../../../components/CardCatalog";
import DSCCardCatalog from "../../../components/CardCatalog";
import DSCSearchBar from "../../../components/SearchBar";
import * as productService from "../../../services/product-service";

export default function Catalog() {
    return (
        <main>
            <section id="catalog-section" className="dsc-container">
                <DSCSearchBar />
                <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                    {
                        productService.findAll().map(product => <CardCatalog key={product.id} product={product} />)
                    }
                </div>
                <DSCBtnNextPage />
            </section>
        </main>
    );
}