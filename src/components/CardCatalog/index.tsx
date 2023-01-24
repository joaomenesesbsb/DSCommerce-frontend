import './styles.css';
import computer from '../../assets/computer.png';
import { ProductDTO } from '../../models/product';

type Props = {
    product: ProductDTO
}

export default function DSCCardCatalog({ product }: Props) {
    return (
        <div className="dsc-card">
            <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={computer} alt="Computer" />
            </div>
            <div className="dsc-catalog-card-bottom">
                <h3>R$ {product.price} </h3>
                <h4> {product.name} </h4>
            </div>
        </div>
    );
}