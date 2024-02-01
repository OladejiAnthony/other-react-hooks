import React from 'react'

const CountBasics = () => {

    const initialState = {
        count: 0
    }

    const countReducer = (state, action) => {
        if(action.type === "SUBTRACT") {
            console.log(action.payload);
            return {
                count: state.count -1
            }
        } else if (action.type === "RESET_COUNT") {
            console.log(action.payload);
            return {
                count: 0
                //count: state.count = 0
            }
        } else if (action.type === "ADD") {
            console.log(action.payload);
            return {
                count: state.count + 1
            }
        }
        return state;
    }
    const [state, dispatch] = React.useReducer(countReducer, initialState);

    const handleSubtract = () => {
        const id = "subtraction operation"
        dispatch({
            type: "SUBTRACT",
            payload: id
        })
    }
    const handleReset = () => {
        const id = "reset operation"
        dispatch({
            type: "RESET_COUNT",
            payload: id
        })
    }
    const handleAdd = () => {
        const id = "addition operation"
        dispatch({
            type: "ADD",
            payload: id
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

export default CountBasics