import React from 'react'
import { countReducer, initialState } from './CountReducer';

const Count = () => {

    const [state, dispatch] = React.useReducer(countReducer, initialState);

    const handleSubtract = () => {
        dispatch({
            type: "SUBTRACT",
            payload: "subtraction opeartion"
        })
    }
    const handleReset = () => {
        dispatch({
            type: "RESET",
            payload: "reset opeartion"
        })
    }
    const handleAdd = () => {
        dispatch({
            type: "ADD",
            payload: "adddition operation"
        })
    }



    return (
        <section className="--flex-center --100vh --bg-primary">
          <div className="container --bg-light --p2 --m2 --center-all">
            <h3>React Counter App</h3>
    
            <h1>{state.count}</h1>
    
            <div className="buttons --flex-center">
              <button className=" --btn --btn-danger" onClick={handleSubtract}>
                Subtract
              </button>
              <button className=" --btn" onClick={handleReset}>
                Reset
              </button>
              <button className=" --btn --btn-primary" onClick={handleAdd}>
                Add
              </button>
            </div>
          </div>
        </section>
      );
}

export default Count