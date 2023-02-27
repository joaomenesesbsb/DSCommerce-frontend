import './styles.css';
import editIcon from '../../../assets/edit.svg';
import deleteIcon from '../../../assets/delete.svg';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';
import SearchBar from '../../../components/SearchBar';
import DSCBtnNextPage from '../../../components/Buttons/NextPage';
import BtnSecundary from '../../../components/Buttons/BtnSecundary';
import DialogInfo from '../../../components/DialogInfo';
import DialogConfirmation from '../../../components/DialogConfirmation';
import { useNavigate } from 'react-router-dom';

type QueryParams = {
  page: number,
  name: string
}

export default function ProductListing() {

  const navigate = useNavigate();

  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: 'Operação com sucesso!'
  });

  const [dialogConfirmationData, setDialogConfirmationData] = useState({
    id: 0,
    visible: false,
    message: 'Tem certeza?'
  });

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

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPage() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  function handleDialogInfoClose() {
    setDialogInfoData({ ...dialogInfoData, visible: false });
  }

  function handleDeleteClick(productId: number) {
    setDialogConfirmationData({ ...dialogConfirmationData, id: productId, visible: true });
  }

  function handleUpdateClick(productId: number) {
    navigate(`/admin/products/${productId}`)
  }

  function handleDialogConfirmationAnswer(answer: boolean, productId: number) {
    if (answer) {
      productService.deleteById(productId)
        .then(() => {
          setProducts([]);
          setQueryParams({ ...queryParams, page: 0 });
        })
        .catch(error => {
          setDialogInfoData({
            visible: true,
            message: error.response.data.error
          })
        })
    }
    setDialogConfirmationData({ ...dialogConfirmationData, visible: false });
  }

  function handleNewProductClick() {
    navigate('/admin/products/create')
  }

  

  return (
    <main>
      <section id="product-listing-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>

        <div className="dsc-btn-page-container dsc-mb20" onClick={handleNewProductClick}>
          <BtnSecundary name="Novo" />
        </div>


        <SearchBar onSearch={handleSearch} />

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
                  <td><img className="dsc-product-listing-image" src={item.imgUrl} alt={item.name} /></td>
                  <td className="dsc-tb768">R$ {item.price.toFixed(2)}</td>
                  <td className="dsc-txt-left">{item.name}</td>
                  <td><img onClick={() => handleUpdateClick(item.id)} className="dsc-product-listing-btn" src={editIcon} alt="Editar" /></td>
                  <td><img onClick={() => handleDeleteClick(item.id)} className="dsc-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
                </tr>)
            }

          </tbody>
        </table>
        {
          !isLastPage &&
          <div onClick={handleNextPage}>
            <DSCBtnNextPage />
          </div>
        }

      </section>

      {
        dialogInfoData.visible &&
        <DialogInfo
          message={dialogInfoData.message}
          onDialogClose={handleDialogInfoClose}
        />
      }
      {
        dialogConfirmationData.visible &&
        <DialogConfirmation
          id={dialogConfirmationData.id}
          message={dialogConfirmationData.message}
          onDialogAnswer={handleDialogConfirmationAnswer}
        />
      }

    </main>
  );
}