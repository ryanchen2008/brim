/* @flow */

import {createSelector} from "reselect"

import type {RecordData} from "../../types/records"
import type {State} from "../types"
import type {TabState} from "../Tab/types"
import {toHistory} from "./reducer"
import Log from "../../models/Log"
import activeTabSelect from "../Tab/activeTabSelect"
import brim from "../../brim"
import interop from "../../brim/interop"

const getLogDetails = activeTabSelect((state: TabState) => {
  return state.logDetails
})

const getPosition = activeTabSelect((state: TabState) => {
  return state.logDetails.position
})

const getPrevPosition = activeTabSelect((state: TabState) => {
  return state.logDetails.prevPosition
})

const getHistory = createSelector<State, void, *, *>(
  getLogDetails,
  (logDetails) => toHistory(logDetails)
)

const getPrevExists = createSelector<State, void, *, *>(getHistory, (history) =>
  history.prevExists()
)

const getNextExists = createSelector<State, void, *, *>(getHistory, (history) =>
  history.nextExists()
)

const getIsGoingBack = createSelector<State, void, *, *, *>(
  getPosition,
  getPrevPosition,
  (position, prevPosition) => prevPosition - position < 0
)

const build = createSelector<State, void, *, *>(getHistory, (history) => {
  let entry = history.getCurrent()
  if (entry && entry.log) {
    let record = brim.record(entry.log)
    return interop.recordToLog(record)
  } else {
    return null
  }
})

const getUidLogs = createSelector<State, void, *, *>(getHistory, (history) => {
  let entry = history.getCurrent()
  return entry ? entry.uidLogs : []
})

const getUidStatus = createSelector<State, void, *, *>(
  getHistory,
  (history) => {
    let entry = history.getCurrent()
    return entry ? entry.uidStatus : "INIT"
  }
)

const getConnLog = createSelector<State, void, ?Log, RecordData[]>(
  getUidLogs,
  (uids) => {
    return uids
      .map(brim.record)
      .map(brim.interop.recordToLog)
      .find((log) => log.getString("_path") === "conn")
  }
)

export default {
  getConnLog,
  getUidStatus,
  getUidLogs,
  getLogDetails,
  getPosition,
  getPrevPosition,
  build,
  getIsGoingBack,
  getNextExists,
  getPrevExists,
  getHistory
}
