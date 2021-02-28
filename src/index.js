import store from "./store";
import { bugAdded, bugResolved, bugRemoved } from "./actions";

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugAdded("Bug 2"));
store.dispatch(bugAdded("Bug 3"));
store.dispatch(bugAdded("Bug 4"));
store.dispatch(bugAdded("Bug 5"));

store.dispatch(bugResolved(1));

store.dispatch(bugRemoved(1));
