const redux =require('redux')
const createStore=redux.createStore;
const {combineReducers}=require('redux')

const BUY_FOOTBALL='BUY_FOOTBALL'
const RESTOCK_FOOTBALL='RESTOCK_FOOTBALL'
const BUY_JERSSY='BUY_JERSSY'
const RESTOCK_JERSSY='RESTOCK_JERSSY'



function buyFootball() {
    return {
       type: BUY_FOOTBALL
    };
 }
 

function restockFootball(qty = 1) {
    return {
       type: RESTOCK_FOOTBALL,
       quantity: qty
    };
 }
function buyJerssy() {
    return {
       type: BUY_JERSSY
    };
 }
 

function restockJerssy(qty = 1) {
    return {
       type: RESTOCK_JERSSY,
       quantity: qty
    };
 }
 
const initState={
    numOfFootball:10,
    numOfJerssy:12
}

const footballReducer=(state=initState,action)=>{
    switch(action.type){
        case BUY_FOOTBALL:
            return{
                ...state,
                numOfFootball:state.numOfFootball -1
            }
        case RESTOCK_FOOTBALL:
            return{
                ...state,
                numOfFootball:state.numOfFootball + action.quantity
            }
        default:
            return state;
    }
}
const JerssyReducer=(state=initState,action)=>{
    switch(action.type){
        case BUY_JERSSY:
            return{
                ...state,
                numOfJerssy:state.numOfJerssy -1
            }
        case RESTOCK_JERSSY:
            return{
                ...state,
                numOfJerssy:state.numOfJerssy + action.quantity
            }
        default:
            return state;
    }
}

const MultipleReducers=combineReducers({footballReducer,JerssyReducer})

const store=createStore(MultipleReducers)
console.log('INITIAL STATE: ',store.getState())

const unsubscribe=store.subscribe(()=>console.log('UPDATE STATE: ',store.getState()))

store.dispatch(buyFootball())
store.dispatch(buyJerssy())

unsubscribe()