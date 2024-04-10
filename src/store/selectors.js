import { get, reject } from "lodash";
import moment from "moment/moment";
import { createSelector } from "reselect";

const allData = (state) => get(state, "fir.allFir.data", []);
const deleteData = (state) => get(state, "fir.deleteFIR.data", []);
const account = (state) => get(state, "provider.account");
const events = (state) => get(state, "fir.events");
const openData = (state) => {
  const all = allData(state);
  const delet = deleteData(state);
  const openData = reject(all, (data) => {
    const dataDeleted = delet.some(
      (o) => o.recordId.toString() === data.recordId.toString()
    );
    return dataDeleted;
  });
  return openData;
};
export const dataBookSelector = createSelector(openData, (data) => {
  data = decorateOpenData(data);
  console.log(data);
  return data;
});
const decorateOpenData = (datas) => {
  return datas.map((data) => {
    data = decorateOrder(data);
    return data;
  });
};
export const decorateOrder = (data) => {
  const precision = 100000;
  let recordIdNew = Math.round(data.recordId * precision) / precision;
  return {
    ...data,
    recordIdNew,
    formattedTimestamp: moment
      .unix(data.timestamp)
      .format("h:mm:ssa d MMM yyyy"),
  };
};

export const myEventsSelector = createSelector(
  account,
  events,
  (account, events) => {
    return events;
  }
);
