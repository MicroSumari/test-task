import React, { useState, useEffect, createContext } from "react";
import { AssignValuesToSizes, DEFAULT_ROOT_INDEX, SIZE_VALUES as DEFAULT_SIZE_VALUES } from "./values/sizes";

export const SizeContext = createContext({});

export {
  DEFAULT_SIZE_VALUES,
  DEFAULT_ROOT_INDEX
}

export const SizeProvider = (props) => {
  const { children, root_value } = props;

  const [rootSize, setRootSize] = useState(root_value || DEFAULT_ROOT_INDEX);

  useEffect(() => {
    setRootSize(root_value);
  }, [root_value]);

  const DYNAMIC_SIZE_VALUES = AssignValuesToSizes(rootSize);

  return (
    <SizeContext.Provider value={{ SIZE_VALUES: DYNAMIC_SIZE_VALUES || DEFAULT_SIZE_VALUES}}>
      {children}
    </SizeContext.Provider>
  );
};

export default SizeProvider;
