import BtnPrimary from '../../components/Buttons/BtnPrimary';
import BtnSecundary from '../../components/Buttons/BtnSecundary';
import DSCHeader from '../../components/HeaderClient';
import DSCProductDetailCard from '../../components/ProductDetailCard';
import './styles.css';
import { ProductDTO } from '../../models/product';

const product: ProductDTO = {
    id: 2,
    name: "Smart Tv",
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

export default function ProductDetails() {
    return (
        <>
            <DSCHeader />
            <main>
                <section id="product-details-section" className="dsc-container">
                    <DSCProductDetailCard product={product}/>
                    <div className="dsc-btn-page-container">
                        <BtnPrimary name="Comprar" />
                        <BtnSecundary name="Inicio" />
                    </div>
                </section>
            </main>
        </>
    );
}