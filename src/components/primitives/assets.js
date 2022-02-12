import { useContext } from "react";
import Templates from "./styled-templates";
import { SizeContext, DEFAULT_SIZE_VALUES } from "./size-provider";

export const Text = (props) => {
  const { SIZE_VALUES } = useContext(SizeContext);

  return (
    <Templates.TextTemplate SIZE_VALUES={SIZE_VALUES || DEFAULT_SIZE_VALUES} {...props}>
      {props.children}
    </Templates.TextTemplate>
  );
};

export const Box = (props) => {
  const { SIZE_VALUES } = useContext(SizeContext);
  return (
    <Templates.BoxTemplate SIZE_VALUES={SIZE_VALUES || DEFAULT_SIZE_VALUES} {...props}>
      {props.children}
    </Templates.BoxTemplate>
  );
};

export const Select = (props) => {
  const { SIZE_VALUES } = useContext(SizeContext);
  return (
    <Templates.SelectTemplate SIZE_VALUES={SIZE_VALUES || DEFAULT_SIZE_VALUES} {...props}>
      {props.children}
    </Templates.SelectTemplate>
  );
};

export const Input = (props) => {
  const { SIZE_VALUES } = useContext(SizeContext);
  return (
    <Templates.InputTemplate SIZE_VALUES={SIZE_VALUES || DEFAULT_SIZE_VALUES} {...props}>
      {props.children}
    </Templates.InputTemplate>
  );
};

export const Img = (props) => {
  const { SIZE_VALUES } = useContext(SizeContext);
  return (
    <Templates.ImgTemplate SIZE_VALUES={SIZE_VALUES || DEFAULT_SIZE_VALUES} {...props}>
      {props.children}
    </Templates.ImgTemplate>
  );
};

export const Button = (props) => {
  const { SIZE_VALUES } = useContext(SizeContext);
  return (
    <Templates.ButtonTemplate SIZE_VALUES={SIZE_VALUES || DEFAULT_SIZE_VALUES} {...props}>
      {props.children}
    </Templates.ButtonTemplate>
  );
};

export const Separator = (props) => {
  const { SIZE_VALUES } = useContext(SizeContext);
  return (
    <Templates.SeparatorTemplate SIZE_VALUES={SIZE_VALUES || DEFAULT_SIZE_VALUES} {...props}>
      {props.children}
    </Templates.SeparatorTemplate>
  );
};

export const CardBoard = (props) => {
  const { SIZE_VALUES } = useContext(SizeContext);
  return (
    <Templates.CardBoardTemplate SIZE_VALUES={SIZE_VALUES || DEFAULT_SIZE_VALUES} {...props}>
      {props.children}
    </Templates.CardBoardTemplate>
  );
};

export const ControlBar = (props) => {
  const { SIZE_VALUES } = useContext(SizeContext);
  return (
    <Templates.ControlBarTemplate SIZE_VALUES={SIZE_VALUES || DEFAULT_SIZE_VALUES} {...props}>
      {props.children}
    </Templates.ControlBarTemplate>
  );
};

export const Indicator = (props) => {
  const { SIZE_VALUES } = useContext(SizeContext);
  return (
    <Templates.IndicatorTemplate SIZE_VALUES={SIZE_VALUES || DEFAULT_SIZE_VALUES} {...props}>
      {props.children}
    </Templates.IndicatorTemplate>
  );
};
