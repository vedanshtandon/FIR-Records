export const provider = (state = {}, action) => {
  switch (action.type) {
    case "PROVIDER_LOADED":
      return { ...state, connection: action.connection };
    case "NETWORK_LOADED":
      return { ...state, chainId: action.chainId };
    case "ACCOUNT_LOADED":
      return {
        ...state,
        account: action.account,
      };
    case "ETHER_BALANCE_LOADED":
      return {
        ...state,
        balance: action.balance,
      };
    default:
      return state;
  }
};
const DEFAULT_FIR_STATE = {
  loaded: false,
  contract: {},
  transaction: {
    isSuccessful: false,
  },
  allFir: {
    loaded: false,
    data: [],
  },
  deleteFir: {
    loaded: false,
    data: [],
  },
  events: [],
};
export const fir = (state = DEFAULT_FIR_STATE, action) => {
  let index, data;
  switch (action.type) {
    case "FIR_LOADED":
      return {
        ...state,
        loaded: true,
        contract: action.fir,
      };
    case "ALL_FIR_RECORDS":
      return {
        ...state,
        allFir: {
          loaded: true,
          data: action.firRecords,
        },
      };
    case "ALL_DELETED_RECORDS":
      return {
        ...state,
        deleteFIR: {
          loaded: true,
          data: action.deleteRecords,
        },
      };
    case "NEW_RECORD_LOADED":
      return {
        ...state,
        transaction: {
          isPending: true,
          isSuccessful: false,
        },
      };
    case "NEW_RECORD_SUCCESS":
      index = state.allFir.data.findIndex(
        (order) =>
          order.recordId.toString() === action.firOrder.recordId.toString()
      );
      if (index === -1) {
        data = [...state.allFir.data, action.firOrder];
      } else {
        data = state.allFir.data;
      }
      return {
        ...state,
        allFIR: {
          ...state.allFir,
          data,
        },
        transaction: {
          isPending: false,
          isSuccessful: true,
        },
        events: [action.event, ...state.events],
      };
    case "NEW_RECORD_FAIL":
      return {
        ...state,
        transaction: {
          isPending: false,
          isError: true,
          isSuccessful: false,
        },
      };
    case "DELETE_REQUEST_INNITIALIZED":
      return {
        ...state,
        transaction: {
          isPending: true,
          isSuccessful: false,
        },
      };
    case "DELETE_REQUEST_SUCCESS":
      index = state.deleteFIR.data.findIndex(
        (order) =>
          order.recordId.toString() === action.deleteOrder.recordId.toString()
      );
      if (index === -1) {
        data = [...state.deleteFIR.data, action.deleteOrder];
      } else {
        data = state.deleteFIR.data;
      }
      return {
        ...state,
        deleteFIR: {
          ...state.deleteFIR,
          data,
        },
        transaction: {
          isPending: false,
          isSuccessful: true,
        },
        events: [action.event, ...state.events],
      };
    case "DELETE_REQUEST_FAILED":
      return {
        ...state,
        transaction: {
          isPending: false,
          isError: true,
          isSuccessful: false,
        },
      };
    default:
      return state;
  }
};
