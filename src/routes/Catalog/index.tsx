import DSCButton from "../../components/Button";
import DSCCardCatalog from "../../components/CardCatalog";
import DSCHeader from "../../components/Header";
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
                    <DSCButton />
                </section>
            </main>
        </>
    );
}