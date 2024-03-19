// export const startAction = {
//     type: "rotate",
//     payload: true
//   };

//   export const stopAction = {
//     type: "rotate",
//     payload: false
//   };

export default function actions(state_value){
    return(
        {type:"rotate",
         payload:state_value
        }
    )
}