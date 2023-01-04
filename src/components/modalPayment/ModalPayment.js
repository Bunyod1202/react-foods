import { Cash, CreditCard, Paypal } from '../../assets/icons/Icons'
import './mosdalpayment.scss'
import { Input } from "../ui/input/Input"
import { Select } from "../ui/select/Select"
import { Button } from "../ui/button/Button"
import { useContext, useState } from 'react'
import { ModalContext } from '../../context/ModalContext'


export const ModalPayment = () => {
  const { modalPayments, setModalPayment } = useContext(ModalContext)
  const [inputName, setInputName] = useState("")
  const [inputCardNumber, setInputCardNumber] = useState("")
  const [inputExpirationDater, setInputExpirationDate] = useState("")
  const [inputCVV, setInputCVV] = useState("")
  const [inputOrderType, setInputOrderType] = useState("")
  const [inputTableno, setInputTableno] = useState("")
  const [inputCardRadio, setInputCardRadio] = useState("")

  const btn = (e) => {
    e.preventDefault();
  }
  return (
    <div className={modalPayments === false ? " modal-payment " : 'modal-payment show'}>
      <div className="modal-payment-inner">
        <div className="modal-payment-header">
          <p className="modal-payment-header-title">
            Payment
          </p>
          <p className="modal-payment-header-text">
            3 payment method available
          </p>
        </div>
        <form>
          <div className="payment-method-group">
            <p className='payment-method-title'>Payment Method</p>
            <div className="card-wrapper">
              <label>
                <Input className='card-input visually-hidden' onChange={(e) => setInputCardRadio( e.target.value)} value="CreditCard" type="radio" name='card' />
                <span className='card-group'>
                  <span className='card-group-check'></span>
                  <CreditCard />
                  <span className='card-group-text'>Credit Card</span>
                </span>
              </label>
              <label>
                <Input className='card-input visually-hidden' onChange={(e) => setInputCardRadio( e.target.value)} value="Paypal" type="radio" name='card' />
                <span className='card-group'>
                  <span className='card-group-check'></span>
                  <Paypal />
                  <span className='card-group-text'>Paypal</span>
                </span>
              </label>
              <label>
                <Input className='card-input visually-hidden' onChange={(e) => setInputCardRadio( e.target.value)} value="Cash" type="radio" name='card' />
                <span className='card-group'>
                  <span className='card-group-check'></span>
                  <Cash />
                  <span className='card-group-text'>Cash</span>
                </span>
              </label>
            </div>
            <div className="input-group">
              <label>
                <span className='input-title'>Cardholder Name</span>
                <Input className='full-input' type="text" onChange={(e) => setInputName(e.target.value,)} placeholder='Enter yout name' name="ardholder_cname"  required />
              </label>
              <label>
                <span className='input-title'>Card Number</span>
                <Input className='full-input' type="number" onChange={(e) => setInputCardNumber(e.target.value)} placeholder='Enter yout card number' required />
              </label>
              <div className="expiration-date">
                <label>
                  <span className='input-title'>Expiration Date</span>
                  <Input className='full-input' type="number" onChange={(e) => setInputExpirationDate(e.target.value)} placeholder='Enter yout Name' required />
                </label>
                <div className="box"></div>
                <label>
                  <span className='input-title'>CVV</span>
                  <Input className='full-input' type="password" onChange={(e) => setInputCVV(e.target.value)} placeholder='Enter yout Name' required />
                </label>
              </div>

            </div>
            <div className="select-group">
              <label>
                <span className='input-title'>Order Type</span>
                <Select className="foodsform-select selects" onChange={(e) => setInputOrderType(e.target.value)} required>
                  <option >Product category </option>
                  <option >Product category </option>
                  <option >Dine in</option>
                  <option >Dine in</option>
                  <option >Dine in</option>
                </Select>
              </label>
              <span className='box'></span>
              <label>
                <span className='input-title'>Table no.</span>
                <Input className='full-input' type="number" onChange={(e) => setInputTableno(e.target.value)} placeholder='Enter yout table no' required />
              </label>
            </div>
            <div className="btn-group">
              <Button className='btn-view' onClick={() => setModalPayment(!modalPayments)} type='button'>Cancel</Button>
              <span className='boxs'></span>
              <Button className='btn-payment ' onClick={btn} type='submit'>ConfirmPayment</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
