/* @flow */

import type {SearchRecord} from "../../types"
import type {Thunk} from "../types"
import {
  restoreSearchBar,
  setInnerTimeWindow,
  setOuterTimeWindow
} from "../actions"

export function restoreSearch(search: SearchRecord): Thunk {
  return function(dispatch) {
    dispatch(
      restoreSearchBar({
        current: search.program,
        previous: "",
        pinned: search.pins,
        editing: null,
        error: null
      })
    )
    dispatch(setOuterTimeWindow(search.span))
    dispatch(setInnerTimeWindow(null))
  }
}