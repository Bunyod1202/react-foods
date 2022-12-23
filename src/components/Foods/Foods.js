import React from "react"
import FoodsForm from "./FoodsForm/FoodsForm"
import "./foods.scss"
import { FoodsHeader } from "./FoodsHeader/FoodsHeader"
import { Outlet } from "react-router-dom"
import { ModalPayment } from "../modalPayment/ModalPayment"


function Foods() {
  return (
    <>
      <div className="foods-wrap">
        <FoodsHeader />
        <FoodsForm />
        <Outlet />
        <ModalPayment/>
      </div>
    </>
  )
}
export default Foods
