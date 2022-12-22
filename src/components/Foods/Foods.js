import React from "react"
import FoodsForm from "./FoodsForm/FoodsForm"
import "./foods.scss"
import { FoodsHeader } from "./FoodsHeader/FoodsHeader"
import { Outlet } from "react-router-dom"
import Total from "../Total/Total"
import Report from "../Total/Report/Report"

function Foods() {
  return (
    <>
      <div className="foods-wrap">
        <FoodsHeader />
        <FoodsForm />
        <Total>

        <Report />
        </Total>
        <Outlet />
      </div>
    </>
  )
}
export default Foods
