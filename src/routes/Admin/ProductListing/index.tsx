import './styles.css';
import editIcon from '../../../assets/edit.svg';
import deleteIcon from '../../../assets/delete.svg';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';

type QueryParams = {
  page: number,
  name: string
}

export default function ProductListing(){

  const [isLastPage, setIsLastPage] = useState(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: ''
});

useEffect(() => {
    productService.findPageRequest(queryParams.page, queryParams.name)
        .then(response => {
            setProducts(products.concat(response.data.content));
            setIsLastPage(response.data.last);
        })
}, [queryParams]);

    return (
      <main>
      <section id="product-listing-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>

        <div className="dsc-btn-page-container dsc-mb20">
          <div className="dsc-btn dsc-btn-white">Novo</div>
        </div>

        <form className="dsc-search-bar">
          <button type="submit">🔎︎</button>
          <input type="text" placeholder="Nome do produto" />
          <button type="reset">🗙</button>
        </form>

        <table className="dsc-table dsc-mb20 dsc-mt20">
          <thead>
            <tr>
              <th className="dsc-tb576">ID</th>
              <th></th>
              <th className="dsc-tb768">Preço</th>
              <th className="dsc-txt-left">Nome</th>
              <th></th>
              <th></th>  
            </tr>
          </thead>
          <tbody>
            {
              products.map(item =>
                <tr key={item.id}>
              <td className="dsc-tb576">{item.id}</td>
              <td><img className="dsc-product-listing-image" src={item.imgUrl} alt="Computer"/></td>
              <td className="dsc-tb768">R$ {item.price.toFixed(2)}</td>
              <td className="dsc-txt-left">{item.name}</td>
              <td><img className="dsc-product-listing-btn" src={editIcon} alt="Editar"/></td>
              <td><img className="dsc-product-listing-btn" src={deleteIcon} alt="Deletar"/></td>
            </tr> )
            }
            
           </tbody>
        </table>

        <div className="dsc-btn-next-page">Carregar mais</div>
      </section>
    </main>
    );
}