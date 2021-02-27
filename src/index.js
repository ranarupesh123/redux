import store from "./store";
import { bugAdded, bugResolved, bugRemoved } from "./actions";

store.dispatch(bugAdded("Bug 1"));
console.log(store.getState());
store.dispatch(bugResolved(1));
console.log(store.getState());
store.dispatch(bugRemoved(1));
console.log(store.getState());
