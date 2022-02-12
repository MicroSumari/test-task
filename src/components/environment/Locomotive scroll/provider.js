import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "./locomotive-styles.css";

export default function ScrollForList({ children }) {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        repeat: true,
      }}
      containerRef={containerRef}
      watch={[]}
    >
      <main data-scroll-container ref={containerRef} id="app">
        {children}
      </main>
    </LocomotiveScrollProvider>
  );
}
