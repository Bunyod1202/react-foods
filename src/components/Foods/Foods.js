import React from "react"
import FoodsItem from "./FoodsItem/FoodsItem"
import FoodsForm from "./FoodsForm/FoodsForm"
import "./foods.scss"

function Foods() {
  return (
    <>
      <div className="foods-wrap">
        <FoodsForm />
        <ul className="foods-list">
          <FoodsItem />
        </ul>
      </div>
    </>
  )
}
export default Foods
