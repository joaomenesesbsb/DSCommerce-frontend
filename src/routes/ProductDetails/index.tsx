import BtnPrimary from '../../components/Buttons/BtnPrimary';
import BtnSecundary from '../../components/Buttons/BtnSecundary';
import DSCProductDetailCard from '../../components/ProductDetailCard';
import './styles.css';
import * as productService from "../../services/product-service";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../models/product';
import axios from 'axios';

export default function ProductDetails() {

    const params = useParams();

    const [product, setProduct] = useState<ProductDTO>();

    useEffect(() => {
        productService.findById(Number(params.productId))
        .then(response => {
           setProduct(response.data);
        })
    }, []);

    
    return (
        <main>
            <section id="product-details-section" className="dsc-container">
                {
                    product &&
                    <DSCProductDetailCard product={product} />
                }
                <div className="dsc-btn-page-container">
                    <BtnPrimary name="Comprar" />
                    <Link to={"/"}>
                        <BtnSecundary name="Inicio" />
                    </Link>
                </div>
            </section>
        </main>
    );
}