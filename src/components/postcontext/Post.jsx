import { useEffect, useReducer , createContext} from "react";
import { useForm } from "./Formcontext/Form";
// import ClipLoader from "react-spinners/ClipLoader";
export const PostContext = createContext()


function Post(){
    const {state, dispatch } = useForm();

    const info = {
        title: state.Surname,
        // body: state.Content,
        userId: 1,
    }
   
    function handleSubmit(e){
        e.preventDefault()
        dispatch({type: "START_FETCH"});
        fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({info}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        dispatch({type: "DATA_FETCHED", payload: json});})
        
        .catch((error) => {
            console.log(error);
            dispatch({type: "ERROR"})
        })
    
    
      }

      return (
        <PostContext.Provider value={{ handleSubmit }}>
          {/* {children} */}
        </PostContext.Provider>
      );
      
   
  
   
//    function getTitle(e) {
//     dispatch({ type: 'DATA_FETCHED', payload: e.target.value });
//   }

//   function getContent(e) {
//     dispatch({ type: 'DATA_FETCHED', payload: e.target.value });
//   }

}
export default Post