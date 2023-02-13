import BtnPrimary from '../../../components/Buttons/BtnPrimary';
import BtnSecundary from '../../../components/Buttons/BtnSecundary';
import DSCProductDetailCard from '../../../components/ProductDetailCard';
import './styles.css';
import * as productService from '../../../services/product-service';
import * as cartService from '../../../services/cart-service';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import { ContextCartCount } from '../../../utils/context-cart';

export default function ProductDetails() {

    const params = useParams();

    const navigate = useNavigate();

    const { setContextCartCount } = useContext(ContextCartCount);

    const [product, setProduct] = useState<ProductDTO>();

    useEffect(() => {
        productService.findById(Number(params.productId))
            .then(response => {
                setProduct(response.data)
            })
            .catch(() => {
                navigate('/');
            });
    }, []);

    function handleBuyClik() {
        if (product) {
            cartService.addProduct(product);
            setContextCartCount(cartService.getCart().items.length);
            navigate('/cart');
        }

    }

    return (
        <main>
            <section id="product-details-section" className="dsc-container">
                {
                    product &&
                    <DSCProductDetailCard product={product} />
                }
                <div className="dsc-btn-page-container">
                    <div onClick={handleBuyClik}>
                        <BtnPrimary name="Comprar" />
                    </div>
                    <Link to={"/"}>
                        <BtnSecundary name="Inicio" />
                    </Link>
                </div>
            </section>
        </main>
    );
}