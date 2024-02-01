import { useReducer, useState } from "react";

//"dispatch" - replaces setCount() and tells d reducer function what to do.
//"payload" - sends some information to the reducer function.
//Question: convert useState() hook operation for this counter app to useReducer() hook operation

const initialState = {
    count: 0
}

const countReducer = (state, action) => {

    if (action.type === "SUBTRACT") {
        console.log("subtract action detected");
       // console.log(action.type)
       // console.log(action.payload);
       //console.log(state.count)
       return {
           count: state.count - 1
       }
   }
   if (action.type === "ADD") {
       console.log("addition action detected");
       return {
           count: state.count + 1
       }
   }
   
   return state;

   // switch(action.type) {
    //     case "RESET":
    //     return {
    //         count: 0
    //     }
    //     default:
    //         return state;
    //         //throw new Errow()
    // }
    
}


const Basics = () => {
  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(countReducer, initialState)

  const handleSubtract = () => {
    const id = "12345";
    dispatch({
        //dispatching actions(events)
        type: "SUBTRACT",
        payload: id // sends "id" data(info) along with your action into the countReducer function that is up there.
    });
  };
  const handleAdd = () => {
    const id = "12345";
    dispatch({
        type: "ADD",
        payload: id 
    });
  };
  const handleReset = () => {
    const id = "12345";
    dispatch({
        type: "RESET",
        payload: id 
    });
  };

//   const handleSubtract = () => {
//     setCount(count - 1);
//   };
//   const handleReset = () => {
//     setCount(0);
//   };
//   const handleAdd = () => {
//     setCount(count + 1);
//   };


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
};

export default Basics;
