import React from "react";
import { Link } from "react-router-dom";
import { Text } from "../primitives/assets";
import styled from "styled-components";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const LinkMain = styled(Link)`
  text-decoration: none;
  width: fit-content;
`;

export const RouteLink = (props) => {
  const { children, to, className } = props;

  const { scroll } = useLocomotiveScroll();

  const ScrollTop = () => {
    scroll.scrollTo("top", {duration: 5});
  };

  return (
    <LinkMain to={to} className={className} onClick={ScrollTop}>
      <Text {...props}>{children}</Text>
    </LinkMain>
  );
};

export default RouteLink;
