import { Route, Routes } from 'react-router-dom'
import './setting.scss'
import { Modal } from '../ui/modal/Modal';
import { Input } from '../ui/input/Input';
import { Select } from '../ui/select/Select';
import { Button } from '../ui/button/Button';
import * as Yup from "yup"
import { SettingsHeader } from './settinsHeader/SettingsHeader'
import { Downland } from '../../assets/icons/Icons';
import { useContext } from 'react';
import { ModalContextAdd, ModalContextEdit, PutContextEdit } from '../../context/ModalContext';
import SettingAddList from './SettingAddList/SettingAddList';
import { ErrorMessage, Field, Form, Formik } from 'formik';
// import { api } from '../../API/API';
import axios from 'axios';

export const Setting = () => {
  const { modalAdd,setModalAdd } = useContext(ModalContextAdd)
  const { modalEdit,setModalEdit } = useContext(ModalContextEdit)
  const {putEdit} = useContext(PutContextEdit)
  // axios.get("http://172.17.13.155:5000/category").then((response) => console.log(response))

  const btnDel = async () => {
    const delId = await axios.delete(`http://172.17.13.155:5000/food/${putEdit}`)
    console.log(delId);
    setModalEdit(false)

  }

  const initialValues = {
    name: "",
    bowls: "",
    price: "",
    categore: null,
    file: "",
  }
  const onSubmit = (values) => {
    let formData = new FormData()
    formData.append("name", values.name)
    formData.append("price", values.price)
    formData.append("bowls", values.bowls)
    formData.append("category_id", Number(values.categore))
    formData.append("food_img", values.file)
    const postproduct = async () => {
      const data = await axios.post("http://172.17.13.155:5000/food", formData)
      console.log(data);
    }
    postproduct()
    setModalAdd(false)
  }
  const validationSchema = Yup.object({ 
    name: Yup.string().required("Required!!!"),
    bowls: Yup.number().required("Required!!!"),
    price: Yup.number().required("Required!!!"),
    categore: Yup.number(),
    file: Yup.string(),
  })
//3 edit
  const editInitialValues = {
    name: "",
    bowls: "",
    price: "",
    categore: null,
    file: "",
  }
  const editOnSubmit = (values) => {
    let formData = new FormData()
    formData.append("name", values.name)
    formData.append("price", values.price)
    formData.append("bowls", values.bowls)
    formData.append("category_id", Number(values.categore))
    formData.append("food_img", values.file)
   
    const postproduct = async () => {
      const data = await axios.put(`http://172.17.13.155:5000/food/${putEdit}`, formData)
  console.log(data);
    }
    postproduct()
    setModalEdit(false)
  }
  const editValidationSchema = Yup.object({ 
    name: Yup.string().required("Required!!!"),
    bowls: Yup.number().required("Required!!!"),
    price: Yup.number().required("Required!!!"),
    categore: Yup.number(),
    file: Yup.string(),
  })
  return (
    <div className='setings'>
      <SettingsHeader />
      <Routes>
        <Route index element={<SettingAddList id="1" />} />
        <Route path="Colddishes" element={<SettingAddList  id="2"  />} />
        <Route path="Soup" element={<SettingAddList  id="3" />} />
        <Route path="Grill" element={<SettingAddList  id="4" />} />
        <Route path="Appetizer" element={<SettingAddList  id="5" />} />
        <Route path="Dessert" element={<SettingAddList id="6" />} />
      </Routes>

      <Modal className={modalAdd === true ? 'modal modal-show' : "modal"} title="Add new product item to list" >
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form>
              <div className="mb-3">
                <label className='form-label' htmlFor="name"></label>
                <Field className='full-input input-add' type="text" placeholder='Enter yout Product name' name="name" required />
                <ErrorMessage component="span" className='text-danger' name='name' />
              </div>
              <div className="mb-3">
                <label className='form-label' htmlFor="bowls"></label>
                <Field className='full-input input-add' type="number" placeholder='Enter yout Product bowls' name="bowls" required />
                <ErrorMessage component="span" className='text-danger' name='bowls' />
              </div>
              <div className="mb-3">
                <label className='form-label' htmlFor="price"></label>
                <Field className='full-input input-add' type="number" placeholder='Enter yout Product price' name="price" required />
                <ErrorMessage component="span" className='text-danger' name='price' />
              </div>
              <div className="mb-3">
                <label className='form-label' htmlFor="categore"></label>
                <Select className="foodsform-select   modal-selects input-add" onChange={(e) => formik.setFieldValue("categore",Number( e.target.value))} name="categore" required>
                  <option value={1} >Hot Dishes</option>
                  <option value={2} >Cold Dishes</option>
                  <option value={3} >Soup</option>
                  <option value={4} >Grill</option>
                  <option value={5} >Appetizer</option>
                  <option value={6} >Dessert</option> 
                </Select>
                <ErrorMessage component="span" className='text-danger' name='categore' />
              </div>
              <div className="mb-3">
                <label className='setting-add-file input-add' >
                  <Input className=' visually-hidden' type="file" placeholder='Enter yout file' name="file" required onChange={(e) => formik.setFieldValue("file", e.target.files[0])} />
                  <span className='setting-add-content'>
                    <Downland />
                    <p className='setting-add-title' >Click or drag file to this area to upload</p>
                    <p className='setting-add-text'>Support for a single or bulk upload.</p>
                  </span>
                </label>
                <ErrorMessage component="span" className='text-danger' name='file' />
              </div>

              <div className="modal-btn-group">
                <Button className='btn-view' type='button'>Cancel</Button>
                <span className='boxs'></span>
                <Button className='btn-payment m' type='submit'>Add   </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>

      <Modal className={modalEdit === true ? 'modal modal-show' : "modal"} title="Edit or delete product item " >
        <Formik
          initialValues={editInitialValues}
          onSubmit={editOnSubmit}
          validationSchema={editValidationSchema}>
        {(formik) => (
           <Form>
           <div className="mb-3">
             <label className='form-label' htmlFor="name"></label>
             <Field className='full-input input-add' type="text" placeholder='Enter yout Product name' name="name" required />
             <ErrorMessage component="span" className='text-danger' name='name' />
           </div>
           <div className="mb-3">
             <label className='form-label' htmlFor="bowls"></label>
             <Field className='full-input input-add' type="number" placeholder='Enter yout Product bowls' name="bowls" required />
             <ErrorMessage component="span" className='text-danger' name='bowls' />
           </div>
           <div className="mb-3">
             <label className='form-label' htmlFor="price"></label>
             <Field className='full-input input-add' type="number" placeholder='Enter yout Product price' name="price" required />
             <ErrorMessage component="span" className='text-danger' name='price' />
           </div>
           <div className="mb-3">
             <label className='form-label' htmlFor="categore"></label>
             <Select className="foodsform-select   modal-selects input-add" onChange={(e) => formik.setFieldValue("categore",Number( e.target.value))} name="categore" required>
               <option value={1} >Hot Dishes</option>
               <option value={2} >Cold Dishes</option>
               <option value={3} >Soup</option>
               <option value={4} >Grill</option>
               <option value={5} >Appetizer</option>
               <option value={6} >Dessert</option> 
             </Select>
             <ErrorMessage component="span" className='text-danger' name='categore' />
           </div>
           <div className="mb-3">
             <label className='setting-add-file input-add' >
               <Input className=' visually-hidden' type="file" placeholder='Enter yout file' name="file" required onChange={(e) => formik.setFieldValue("file", e.target.files[0])} />
               <span className='setting-add-content'>
                 <Downland />
                 <p className='setting-add-title' >Click or drag file to this area to upload</p>
                 <p className='setting-add-text'>Support for a single or bulk upload.</p>
               </span>
             </label>
             <ErrorMessage component="span" className='text-danger' name='file' />
           </div>

           <div className="modal-btn-group">
                <Button className='btn-view' onClick={btnDel} type='button'>Delete</Button>
                <span className='boxs'></span>
                <Button className='btn-payment m' type='submit'>Edit  </Button>
              </div>
         </Form>
            )}
     </Formik>
      </Modal>
    </div>
  )
}

