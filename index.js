const redux=require('redux')
const createStore=redux.createStore;

const BUY_FOOTBALL='BUY_FOOTBALL'
const RESTOCK_FOOTBALL='RESTOCK_FOOTBALL'
const BUY_JERSSY='BUY_JERSSY'
const RESTOCK_JERSSY='RESTOCK_JERSSY'

//action creator
function buyFootball(qty=1){
    return{
        type:BUY_FOOTBALL,
        quantity:qty
    }
}

function buyJerssy(qty=1){
    return{
        type:BUY_JERSSY,
        quantity:qty
    }
}

//restock football
function restockFootball(){
    return{
        type:RESTOCK_FOOTBALL
    }
}

function restockJerssy(qty){
    return{
        type:RESTOCK_JERSSY,
        quantity:qty
    }
}

//initial state declare
const initState={
    numofFootball:10,
    numOfJersy:12
}

//reducer function
const footballReducer=(state=initState,action)=>{
    switch(action.type){
        case BUY_FOOTBALL:
            return{
                ...state,
                numofFootball: state.numofFootball - action.quantity
            }
        case RESTOCK_FOOTBALL:
            return{
                ...state,
                numofFootball: state.numofFootball + 1
            }
        default:
            return state
    }
}
const JerssyReducer=(state=initState,action)=>{
    switch(action.type){
        case BUY_JERSSY:
            return{
                ...state,
                numOfJersy: state.numOfJersy - 1
            }
        case RESTOCK_JERSSY:
            return{
                ...state,
                numOfJersy: state.numOfJersy + action.quantity
            }
        default:
            return state
    }
}

//combine reducers
const MultipleReducers=redux.combineReducers({
    football:footballReducer,
    jerssy:JerssyReducer
})

// create store
const store=createStore(MultipleReducers)
console.log('INITIAL STATE',store.getState())

const unsubscribe=store.subscribe(()=>console.log('UPDATED STATE',store.getState()))

//dispatch by calling action dispatcher
store.dispatch(buyFootball())
store.dispatch(buyFootball())
store.dispatch(buyFootball(5))
store.dispatch(buyJerssy())
store.dispatch(restockJerssy(5))

unsubscribe()