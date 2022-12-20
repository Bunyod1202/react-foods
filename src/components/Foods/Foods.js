import React from "react"
import FoodsForm from "./FoodsForm/FoodsForm"
import "./foods.scss"
import { FoodsHeader } from "./FoodsHeader/FoodsHeader"
import { Outlet } from "react-router-dom"

function Foods() {
  return (
    <>
      <div className="foods-wrap">
        <FoodsHeader/>
        <FoodsForm />
        <Outlet />
      </div>
    </>
  )
}
export default Foods
