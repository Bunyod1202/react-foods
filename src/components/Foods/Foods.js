import React from "react"
import FoodsForm from "./FoodsForm/FoodsForm"
import "./foods.scss"
import { FoodsHeader } from "./FoodsHeader/FoodsHeader"
import { FoodsList } from "./FoodsList/FoodsList"
import {  Route, Routes } from "react-router-dom"
import { ModalPayment } from "../modalPayment/ModalPayment"


function Foods() {
  return (
    <>
      <div className="foods-wrap">
        <FoodsHeader />
        <FoodsForm />
        <Routes>
          <Route index element={<FoodsList id="1" />} />
          <Route path="colddishes" element={<FoodsList id="2" />} />
          <Route path="soup" element={<FoodsList id="3" />} />
          <Route path="grill" element={<FoodsList id="4" />} />
          <Route path="appetizer" element={<FoodsList id="5" />} />
          <Route path="dessert" element={<FoodsList id="6" />} />
        </Routes>
        <ModalPayment />
      </div>
    </>
  )
}
export default Foods
