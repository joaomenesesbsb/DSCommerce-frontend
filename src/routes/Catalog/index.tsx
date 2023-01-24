import DSCBtnNextPage from "../../components/Buttons/NextPage";
import DSCCardCatalog from "../../components/CardCatalog";
import DSCHeader from "../../components/HeaderClient";
import DSCSearchBar from "../../components/SearchBar";

export default function Catalog() {
    return (
        <>
            <DSCHeader />
            <main>
                <section id="catalog-section" className="dsc-container">
                    <DSCSearchBar />
                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        <DSCCardCatalog />
                        <DSCCardCatalog />
                        <DSCCardCatalog />
                        <DSCCardCatalog />
                        <DSCCardCatalog />
                        <DSCCardCatalog />
                        <DSCCardCatalog />
                        <DSCCardCatalog />
                        <DSCCardCatalog />
                        <DSCCardCatalog />
                        <DSCCardCatalog />
                        <DSCCardCatalog />
                    </div>
                    <DSCBtnNextPage />
                </section>
            </main>
        </>
    );
}