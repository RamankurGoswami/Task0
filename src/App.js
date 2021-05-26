import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from "react-redux";
import { incCount } from "./actions/index";

export const App = () => {
  const myState = useSelector((state) => state.incNum);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
      <div>
      <button className="count__button" onClick={ () => dispatch(incCount())}>Click Me</button>
      </div>
      <div>
      <input name="count__value" type="text" className="in__count" value={myState} />
      </div>
      </div>
    </div>
  )
}

export default App