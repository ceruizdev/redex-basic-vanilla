import { Reducer, Action } from "../ngrx-test/ngrx";
import reducer from "../reducer/counter.reducer";
import { incAction } from "../counter/counter.actions";

class Store<T>{

    constructor( private reducer: Reducer<T>,
                 private state: T  ){ 
    }
    getState(){
        return this.state;
    }

    dispatch(action:Action)
    {
        this.state = this.reducer(this.state, action);
    }
}
const store = new Store(reducer, 10);
console.log(store.getState())
store.dispatch(incAction);
store.dispatch(incAction);

console.log(store.getState())