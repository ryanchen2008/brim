/* @flow */

import type {Thunk} from "../types"
import {clearErrors} from "../errors"
import {
  clearNotifications,
  clearSearchBar,
  clearSearchHistory,
  clearSpaces,
  clearStarredLogs,
  clearTimeWindows
} from "../actions"
import {clearSearches} from "../searches/actions"
import {clearViewer} from "../viewer/actions"

export const disconnect = (): Thunk => (dispatch) => {
  dispatch(clearSearchBar())
  dispatch(clearSpaces())
  dispatch(clearTimeWindows())
  dispatch(clearStarredLogs())
  dispatch(clearSearchHistory())
  dispatch(clearViewer())
  dispatch(clearSearches())
  dispatch(clearErrors())
  dispatch(clearNotifications())
}