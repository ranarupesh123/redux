import store from "./store/store";
import {
  bugAdded,
  bugResolved,
  bugRemoved,
  getUnresolved,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { projectRemoved, projectAdded } from "./store/project";
import { userAdded } from "./store/users";

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugAdded({ description: "Bug 4" }));
store.dispatch(bugAdded({ description: "Bug 5" }));
store.dispatch(bugResolved({ id: 3 }));
store.dispatch(bugRemoved({ id: 1 }));
store.dispatch(bugAssignedToUser({ bugId: 3, userId: 1 }));

store.dispatch(projectAdded({ name: "javascript" }));
store.dispatch(projectAdded({ name: "c++" }));
store.dispatch(projectAdded({ name: "java" }));
store.dispatch(projectAdded({ name: "node" }));
store.dispatch(projectAdded({ name: "c#" }));
store.dispatch(projectRemoved({ id: 2 }));

store.dispatch(userAdded({ name: "user1" }));
store.dispatch(userAdded({ name: "user2" }));
store.dispatch(userAdded({ name: "user3" }));

const unresolved = getUnresolved(store.getState());
// console.log(unresolved);

const bugs = getBugsByUser(1)(store.getState());
console.log(bugs);

console.log(store.getState());
