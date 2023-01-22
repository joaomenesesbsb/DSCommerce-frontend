import BtnPrimary from '../../components/Buttons/BtnPrimary';
import BtnSecundary from '../../components/Buttons/BtnSecundary';
import DSCHeader from '../../components/Header';
import DSCProductDetailCard from '../../components/ProductDetailCard';
import './styles.css';

export default function ProductDetails() {
    return (
        <>
            <DSCHeader />
            <main>
                <section id="product-details-section" className="dsc-container">
                    <DSCProductDetailCard />
                    <div className="dsc-btn-page-container">
                        <BtnPrimary />
                        <BtnSecundary />
                    </div>
                </section>
            </main>
        </>
    );
}