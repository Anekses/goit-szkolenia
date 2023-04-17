import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";
import { rootReducer } from "./reducer";

const enhacer = devToolsEnhancer()
export const store = createStore(rootReducer, enhacer)