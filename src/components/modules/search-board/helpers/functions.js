export const ObjectToQueryString = (obj) => {
    const queryString =
      "?" +
      Object.keys(obj)
        .map((key) => obj[key] && `${key}=${obj[key]}`)
        .join("&");
  
    return queryString;
  };
  
  export const arraySubgroupOf = (arr, size) =>
    arr.reduce(
      (acc, e, i) => (
        // eslint-disable-next-line no-sequences
        i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc
      ),
      []
    );
  
    export const numberToArray = (num) => {
      let array = [];
      for (let i = 1; i <= num; i++) array.push(i);
      return array;
    };
  