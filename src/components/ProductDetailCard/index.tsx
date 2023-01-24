import './styles.css';
import Category from '../Category';
import { ProductDTO } from '../../models/product';

type Props = {
    product: ProductDTO
}

export default function DSCProductDetailCard({ product }: Props) {
    return (
        <>
            <div className="dsc-card dsc-mb20">
                <div className="dsc-product-details-top dsc-line-bottom">
                    <img src={product.imgUrl} alt="Computador" />
                </div>
                <div className="dsc-product-details-bottom">
                    <h3>R$ {product.price.toFixed(2)}</h3>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <div className="dsc-category-container">
                        {
                            product.categories.map(item => (
                                <Category key={item.id} name={item.name} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>

    );
}