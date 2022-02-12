export const SearchByKey = (property, object, result = []) => {
    try {
      if (property && object && result) {
        Object.keys(object).forEach((key) => {
          if (key === property) {
            result.push(object[key]);
            return result;
          }
          if (typeof object[key] === "object") {
            SearchByKey(property, object[key], result);
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  
    return result;
  };
  
  export const ExtractAllTreeKeys = (obj, extractedKeys = []) => {
    if (obj && extractedKeys) {
      Object.keys(obj).forEach((key) => {
        const value = obj[key];
        extractedKeys.push(key);
        if (typeof value === "object") {
          ExtractAllTreeKeys(value, extractedKeys);
        }
      });
    }
  
    return extractedKeys;
  };
  
  export const ExtractNoObjectTreeKeys = (obj, extractedKeys = []) => {
    if (obj && extractedKeys) {
      Object.keys(obj).forEach((key) => {
        const value = obj[key];
        if (typeof value === "object") {
          ExtractAllTreeKeys(value, extractedKeys);
        } else {
          extractedKeys.push(key);
        }
      });
    }
  
    return extractedKeys;
  };
  
  export const filterArray = (arr1, arr2) => {
    const filtered = arr1.filter((el) => {
      return arr2.indexOf(el) === -1;
    });
    return filtered;
  };
  
  export const SortObjectsKeysByValuesLength = (
    arr1 = [{}],
    arr2 = [],
    exceptions = [],
    includePromedy = false
  ) => {
    let result = [];
  
    try {
      if (arr1.length > 1 && arr2.length > 1) {
        let allQueries = {};
  
        // ---- Avoiding Exceptions
        let noExceptionArr2 = !!exceptions.length
          ? filterArray(arr2, exceptions)
          : arr2;
  
        //Setting the queries pomedy
        noExceptionArr2.forEach((que) => {
          allQueries[que] = {};
          allQueries[que].promedy = 0;
  
          arr1.forEach((per, idx) => {
            let value = SearchByKey(que, per)[0];
  
            if (value) allQueries[que].promedy += value.toString().length;
  
            if (idx === arr1.length - 1) {
              allQueries[que].promedy = allQueries[que].promedy / idx;
            }
          });
        });
  
        for (let query in allQueries) {
          result.push([query, allQueries[query].promedy]);
        }
  
        result.sort((a, b) => {
          return a[1] - b[1];
        });
      } else {
        return arr2;
      }
    } catch (err) {
      console.log(err);
    }
  
    try {
      if (!includePromedy) result = result.map((query) => query[0]);
      if (!!exceptions.length) result = [...exceptions, ...result];
    } catch (err) {
      console.log(err);
    }
  
    return result;
  };
  
  export const Keyify = (obj, prefix = "") =>
    Object.keys(obj).reduce((res, el) => {
      if (Array.isArray(obj[el])) {
        return res;
      } else if (typeof obj[el] === "object" && obj[el] !== null) {
        return [...res, ...Keyify(obj[el], prefix + el + ".")];
      }
      return [...res, prefix + el];
    }, []);
  
  const Functions = {
    SearchByKey,
    ExtractAllTreeKeys,
    ExtractNoObjectTreeKeys,
    filterArray,
    SortObjectsKeysByValuesLength,
    Keyify
  };
  
  export default Functions;
  