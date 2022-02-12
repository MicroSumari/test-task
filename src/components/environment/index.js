import React from "react";
import ScrollForList from "./Locomotive scroll/provider";
import ThemeProvider from "./Theming/responsive";
import ConnectionProvider from "./Client/provider";

const Environment = (props) => {
  return (
    <ConnectionProvider>
      <ScrollForList>
        <ThemeProvider>
          {props.children}
        </ThemeProvider>
      </ScrollForList>
    </ConnectionProvider>
  );
};

export default Environment;
