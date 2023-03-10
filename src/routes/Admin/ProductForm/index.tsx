import './styles.css';
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';
import * as productService from '../../../services/product-service';
import * as categoryService from '../../../services/category-service';
import FormTextArea from '../../../components/FormTextArea';
import { CategoryDTO } from '../../../models/category';
import FormSelect from '../../../components/FormSelect';
import { selectStyles } from '../../../utils/select';


export default function ProductForm() {

  const params = useParams();

  const navigate = useNavigate();

  const isEditing = params.productId !== 'create';

  const [categories, setCategories] = useState<CategoryDTO[]>([]);

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "nome",
      validation: function (v: string) {
        return v.length >= 3 && v.length <= 80;
      },
      message: 'Favor informar um nome de 3 a 80 caracteres.'
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
      message: 'Favor informar um valor positivo.'
    },
    imgUrl: {
      value: "",
      id: "imgUrl",
      name: "imgUrl",
      type: "text",
      placeholder: "imagem",
    },
    description: {
      value: "",
      id: "description",
      name: "description",
      type: "text",
      placeholder: "descrição",
      validation: function (v: string) {
        return v.length >= 10
      },
      message: 'Favor colocar pelo menos 10 caracteres.'
    },
    categories: {
      value: [],
      id: "categories",
      name: "categories",
      placeholder: "categorias",
      validation: function (v: CategoryDTO[]) {
        return v.length > 0;
      },
      message: 'Escolha ao menos uma categoria'

    }
  })

  useEffect(() => {
    categoryService.findPageRequest()
      .then(response => {
        setCategories(response.data);
      })
  }, []);

  useEffect(() => {
    if (isEditing) {
      productService.findById(Number(params.productId))
        .then(response => {
          setFormData(forms.updateAll(formData, response.data))
        })
    }
  }, [])

  function handleInputChange(e: any) {
    setFormData(forms.updateAndValidate(formData, e.target.name, e.target.value));
  }

  function handleTurnDirty(name: string) {
    setFormData(forms.dirtyAndValidate(formData, name));
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    const formDataValidated = forms.dirtyAndValidateAll(formData);
    if (forms.hasAnyInvalid(formDataValidated)) {
      setFormData(formDataValidated);
      return;
    }
    const requestBody = forms.toValues(formData);

    if (isEditing) {
      requestBody.id = params.productId;
    }

    const request = isEditing
      ? productService.updateRequest(requestBody)
      : productService.insertRequest(requestBody)

    request
      .then(response => {
        navigate('/admin/products');
      })
      .catch(error => {
        console.log(error.response.data.errors)
        const newInputs = forms.setBackendErrors(formData, error.response.data.errors);
        setFormData(newInputs);
      })
  }

  return (
    <main>
      <section id="product-form-section" className="dsc-container">
        <div className="dsc-product-form-container">
          <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
            <h2>Dados do produto</h2>
            <div className="dsc-form-controls-container">
              <div>
                <FormInput
                  {...formData.name}
                  className="dsc-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className='dsc-form-error'>{formData.name.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.price}
                  className="dsc-form-control "
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className='dsc-form-error'>{formData.price.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.imgUrl}
                  className="dsc-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className='dsc-form-error'>{formData.imgUrl.message}</div>
              </div>
              <div>
                <FormSelect
                  {...formData.categories}
                  className="dsc-form-control dsc-form-select-container"
                  styles={selectStyles}
                  options={categories}
                  onChange={(obj: any) => {
                    setFormData(forms.updateAndValidate(formData, "categories", obj));
                  }}
                  onTurnDirty={handleTurnDirty}
                  isMulti
                  getOptionLabel={(obj: any) => obj.name}
                  getOptionValue={(obj: any) => String(obj.id)}
                />
                <div className='dsc-form-error'>{formData.categories.message}</div>
              </div>
              <div>
                <FormTextArea
                  {...formData.description}
                  className="dsc-form-control dsc-textarea"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className='dsc-form-error'>{formData.description.message}</div>
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