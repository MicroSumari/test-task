import { useUrlQuery } from "../../../../helpers/hooks/useUrlQuery";
import { useHistory } from "react-router-dom";
import { ObjectToQueryString } from "./functions";

export const useUrlParams = (initialState = {}) => {
  const urlParamsReceived = useUrlQuery();

  let defaultParams = initialState;
  urlParamsReceived.forEach((value, key) => {
    defaultParams[key] = value;
  });

  return defaultParams;
};

export { ObjectToQueryString };

export const useHistoryParams = (newUrlParams) => {
  const history = useHistory();

  history.replace({
    search: ObjectToQueryString(newUrlParams),
  });
};
