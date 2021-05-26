const initialState = 0;

const incNum = (state = initialState, action) => {
    if(action.type === "INCREMENT_COUNT" ){
        return state+1;
    }else{
      return state;
    }
}

export default incNum;