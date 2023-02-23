import './styles.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';
import * as productService from '../../../services/product-service';


export default function ProductForm() {

  const params = useParams();

  const isEditing = params.productId !== 'create';

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "nome",
    },
    price: {
      value: "",
      id: "price",
      name: "price",
      type: "number",
      placeholder: "preço",
      validation: function (v: any) {
        return Number(v) > 0;
      },
      message: 'Favor informar um valor positivo'
    },
    imgUrl: {
      value: "",
      id: "imgUrl",
      name: "imgUrl",
      type: "text",
      placeholder: "img",
    }
  })

  useEffect(() => {
    if (isEditing) {
      productService.findById(Number(params.productId))
        .then(response => {
          setFormData(forms.updateAll(formData, response.data))
        })
    }
  }, [])

  function handleInputChange(e: any) {
    const dataUpdated = forms.update(formData, e.target.name, e.target.value);
    const dataValidated = forms.validate(dataUpdated, e.target.name);
    setFormData(dataValidated);
  }

  function handleTurnDirty(name : string){
    setFormData(forms.toDirty(formData, name));
  }

  return (
    <main>
      <section id="product-form-section" className="dsc-container">
        <div className="dsc-product-form-container">
          <form className="dsc-card dsc-form">
            <h2>Dados do produto</h2>
            <div className="dsc-form-controls-container">
              <div>
                <FormInput
                  {...formData.name}
                  className="dsc-form-control"
                  onChange={handleInputChange}
                />
                <div className='dsc-form-error'>{formData.name.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.price}
                  className="dsc-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className='dsc-form-error'>{formData.price.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.imgUrl}
                  className="dsc-form-control"
                  onChange={handleInputChange}
                />
                <div className='dsc-form-error'>{formData.imgUrl.message}</div>
              </div>

            </div>

            <div className="dsc-product-form-buttons">
              <Link to='/admin/products'>
                <button type="reset" className="dsc-btn dsc-btn-white">Cancelar</button>
              </Link>
              <button type="submit" className="dsc-btn dsc-btn-blue">Salvar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}