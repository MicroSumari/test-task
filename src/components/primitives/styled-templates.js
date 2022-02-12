import styled from "styled-components";

import { COLOR_PALETTE } from "./values/colors";

export const TextTemplate = styled.span`
  font-size: ${(props) =>
    props["SIZE_VALUES"][props.size] || props["SIZE_VALUES"].sm}px;
  font-weight: ${(props) => props.weight || "regular"};
  color: ${(props) => COLOR_PALETTE[props.color]};
  line-height: 1;

  position: relative;

  /* Padding */
  padding: ${(props) => props["SIZE_VALUES"][props.pad]}px;

  padding-top: ${(props) => props["SIZE_VALUES"][props["pad-h"]]}px;
  padding-bottom: ${(props) => props["SIZE_VALUES"][props["pad-h"]]}px;

  padding-left: ${(props) => props["SIZE_VALUES"][props["pad-w"]]}px;
  padding-right: ${(props) => props["SIZE_VALUES"][props["pad-w"]]}px;

  padding-left: ${(props) => props["SIZE_VALUES"][props["pad-l"]]}px;
  padding-right: ${(props) => props["SIZE_VALUES"][props["pad-r"]]}px;
  padding-top: ${(props) => props["SIZE_VALUES"][props["pad-t"]]}px;
  padding-bottom: ${(props) => props["SIZE_VALUES"][props["pad-b"]]}px;

  /* Margin */
  margin: ${(props) => props["SIZE_VALUES"][props.mar]}px;

  margin-top: ${(props) => props["SIZE_VALUES"][props["mar-h"]]}px;
  margin-bottom: ${(props) => props["SIZE_VALUES"][props["mar-h"]]}px;

  margin-left: ${(props) => props["SIZE_VALUES"][props["mar-w"]]}px;
  margin-right: ${(props) => props["SIZE_VALUES"][props["mar-w"]]}px;

  margin-left: ${(props) => props["SIZE_VALUES"][props["mar-l"]]}px;
  margin-right: ${(props) => props["SIZE_VALUES"][props["mar-r"]]}px;
  margin-top: ${(props) => props["SIZE_VALUES"][props["mar-t"]]}px;
  margin-bottom: ${(props) => props["SIZE_VALUES"][props["mar-b"]]}px;
`;

export const BoxTemplate = styled.div`
  width: fit-content;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => COLOR_PALETTE[props.color]};

  /* Padding */
  padding: ${(props) => props["SIZE_VALUES"][props.pad]}px;

  padding-top: ${(props) => props["SIZE_VALUES"][props["pad-h"]]}px;
  padding-bottom: ${(props) => props["SIZE_VALUES"][props["pad-h"]]}px;

  padding-left: ${(props) => props["SIZE_VALUES"][props["pad-w"]]}px;
  padding-right: ${(props) => props["SIZE_VALUES"][props["pad-w"]]}px;

  padding-left: ${(props) => props["SIZE_VALUES"][props["pad-l"]]}px;
  padding-right: ${(props) => props["SIZE_VALUES"][props["pad-r"]]}px;
  padding-top: ${(props) => props["SIZE_VALUES"][props["pad-t"]]}px;
  padding-bottom: ${(props) => props["SIZE_VALUES"][props["pad-b"]]}px;

  /* Margin */
  margin: ${(props) => props["SIZE_VALUES"][props.mar]}px;

  margin-top: ${(props) => props["SIZE_VALUES"][props["mar-h"]]}px;
  margin-bottom: ${(props) => props["SIZE_VALUES"][props["mar-h"]]}px;

  margin-left: ${(props) => props["SIZE_VALUES"][props["mar-w"]]}px;
  margin-right: ${(props) => props["SIZE_VALUES"][props["mar-w"]]}px;

  margin-left: ${(props) => props["SIZE_VALUES"][props["mar-l"]]}px;
  margin-right: ${(props) => props["SIZE_VALUES"][props["mar-r"]]}px;
  margin-top: ${(props) => props["SIZE_VALUES"][props["mar-t"]]}px;
  margin-bottom: ${(props) => props["SIZE_VALUES"][props["mar-b"]]}px;
`;

export const SelectTemplate = styled.select`
  background: transparent;
  border: none;
  color: ${(props) => COLOR_PALETTE[props.color]};
  font-size: ${(props) =>
    props["SIZE_VALUES"][props.fontSize] || props["SIZE_VALUES"].sm}px;

  cursor: pointer;

  option {
    color: ${(props) => COLOR_PALETTE[props["option-color"]]};
    background-color: ${(props) => COLOR_PALETTE[props["option-bg"]]};
    border: 12px solid red !important;
  }

  /* Padding */
  padding: ${(props) => props["SIZE_VALUES"][props.pad]}px;

  padding-top: ${(props) => props["SIZE_VALUES"][props["pad-h"]]}px;
  padding-bottom: ${(props) => props["SIZE_VALUES"][props["pad-h"]]}px;

  padding-left: ${(props) => props["SIZE_VALUES"][props["pad-w"]]}px;
  padding-right: ${(props) => props["SIZE_VALUES"][props["pad-w"]]}px;

  padding-left: ${(props) => props["SIZE_VALUES"][props["pad-l"]]}px;
  padding-right: ${(props) => props["SIZE_VALUES"][props["pad-r"]]}px;
  padding-top: ${(props) => props["SIZE_VALUES"][props["pad-t"]]}px;
  padding-bottom: ${(props) => props["SIZE_VALUES"][props["pad-b"]]}px;

  /* Margin */
  margin: ${(props) => props["SIZE_VALUES"][props.mar]}px;

  margin-top: ${(props) => props["SIZE_VALUES"][props["mar-h"]]}px;
  margin-bottom: ${(props) => props["SIZE_VALUES"][props["mar-h"]]}px;

  margin-left: ${(props) => props["SIZE_VALUES"][props["mar-w"]]}px;
  margin-right: ${(props) => props["SIZE_VALUES"][props["mar-w"]]}px;

  margin-left: ${(props) => props["SIZE_VALUES"][props["mar-l"]]}px;
  margin-right: ${(props) => props["SIZE_VALUES"][props["mar-r"]]}px;
  margin-top: ${(props) => props["SIZE_VALUES"][props["mar-t"]]}px;
  margin-bottom: ${(props) => props["SIZE_VALUES"][props["mar-b"]]}px;
`;

export const InputTemplate = styled.input`
  background: transparent;
  border: none;
  color: ${(props) => COLOR_PALETTE[props.color]};
  font-size: ${(props) =>
    props["SIZE_VALUES"][props.fontSize] || props["SIZE_VALUES"].sm}px;

  /* Padding */
  padding: ${(props) => props["SIZE_VALUES"][props.pad]}px;

  padding-top: ${(props) => props["SIZE_VALUES"][props["pad-h"]]}px;
  padding-bottom: ${(props) => props["SIZE_VALUES"][props["pad-h"]]}px;

  padding-left: ${(props) => props["SIZE_VALUES"][props["pad-w"]]}px;
  padding-right: ${(props) => props["SIZE_VALUES"][props["pad-w"]]}px;

  padding-left: ${(props) => props["SIZE_VALUES"][props["pad-l"]]}px;
  padding-right: ${(props) => props["SIZE_VALUES"][props["pad-r"]]}px;
  padding-top: ${(props) => props["SIZE_VALUES"][props["pad-t"]]}px;
  padding-bottom: ${(props) => props["SIZE_VALUES"][props["pad-b"]]}px;

  /* Margin */
  margin: ${(props) => props["SIZE_VALUES"][props.mar]}px;

  margin-top: ${(props) => props["SIZE_VALUES"][props["mar-h"]]}px;
  margin-bottom: ${(props) => props["SIZE_VALUES"][props["mar-h"]]}px;

  margin-left: ${(props) => props["SIZE_VALUES"][props["mar-w"]]}px;
  margin-right: ${(props) => props["SIZE_VALUES"][props["mar-w"]]}px;

  margin-left: ${(props) => props["SIZE_VALUES"][props["mar-l"]]}px;
  margin-right: ${(props) => props["SIZE_VALUES"][props["mar-r"]]}px;
  margin-top: ${(props) => props["SIZE_VALUES"][props["mar-t"]]}px;
  margin-bottom: ${(props) => props["SIZE_VALUES"][props["mar-b"]]}px;

  ::-webkit-search-cancel-button {
    transition: 0.2s ease-in-out;
    padding: 0.2rem;
    color: red;
    cursor: pointer;
    z-index: 10;
    filter: saturate(0) contrast(10) invert(1)
      drop-shadow(0px 0px 9px rgba(0, 0, 0, 0.9));

    :hover {
      transform: scale(1.1);
    }
  }

  &[type="number"] {
    text-align:center;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    :focus {
      pointer-events: none;
    }
  }
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    /* -webkit-appearance: none; */
  }
`;

export const ImgTemplate = styled.img`
  max-width: ${(props) => props["SIZE_VALUES"][props.size]}px;

  /* Padding */
  padding: ${(props) => props["SIZE_VALUES"][props.pad]}px;

  padding-top: ${(props) => props["SIZE_VALUES"][props["pad-h"]]}px;
  padding-bottom: ${(props) => props["SIZE_VALUES"][props["pad-h"]]}px;

  padding-left: ${(props) => props["SIZE_VALUES"][props["pad-w"]]}px;
  padding-right: ${(props) => props["SIZE_VALUES"][props["pad-w"]]}px;

  padding-left: ${(props) => props["SIZE_VALUES"][props["pad-l"]]}px;
  padding-right: ${(props) => props["SIZE_VALUES"][props["pad-r"]]}px;
  padding-top: ${(props) => props["SIZE_VALUES"][props["pad-t"]]}px;
  padding-bottom: ${(props) => props["SIZE_VALUES"][props["pad-b"]]}px;

  /* Margin */
  margin: ${(props) => props["SIZE_VALUES"][props.mar]}px;
  margin: ${(props) => props["SIZE_VALUES"][props["mar-h"]]}px
    ${(props) => props["SIZE_VALUES"][props["mar-w"]]}px;
  margin-left: ${(props) => props["SIZE_VALUES"][props["mar-l"]]}px;
  margin-right: ${(props) => props["SIZE_VALUES"][props["mar-r"]]}px;
  margin-top: ${(props) => props["SIZE_VALUES"][props["mar-t"]]}px;
  margin-bottom: ${(props) => props["SIZE_VALUES"][props["mar-b"]]}px;
`;

export const ButtonTemplate = styled.button`
  width: fit-content;
  border: none;
  overflow: hidden;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    COLOR_PALETTE[props.color] || props.color || "transparent"};

  border-radius: ${(props) =>
    !props.radius
      ? "100vh"
      : props["SIZE_VALUES"][props.radius] === undefined
      ? props.radius
      : props["SIZE_VALUES"][props.radius] + "px"};

  cursor: ${(props) => !props.disabled && "pointer"};

  /* Text */
  color: ${(props) => COLOR_PALETTE[props.fontColor]};
  font-weight: ${(props) => props.fontWeight || "regular"};
  font-size: ${(props) =>
    props["SIZE_VALUES"][props.fontSize] || props["SIZE_VALUES"].sm}px;

  /* Padding */
  padding: ${(props) => props["SIZE_VALUES"][props.pad] || 0}px;

  padding-top: ${(props) => props["SIZE_VALUES"][props["pad-h"]]}px;
  padding-bottom: ${(props) => props["SIZE_VALUES"][props["pad-h"]]}px;

  padding-left: ${(props) => props["SIZE_VALUES"][props["pad-w"]]}px;
  padding-right: ${(props) => props["SIZE_VALUES"][props["pad-w"]]}px;

  padding-left: ${(props) => props["SIZE_VALUES"][props["pad-l"]]}px;
  padding-right: ${(props) => props["SIZE_VALUES"][props["pad-r"]]}px;
  padding-top: ${(props) => props["SIZE_VALUES"][props["pad-t"]]}px;
  padding-bottom: ${(props) => props["SIZE_VALUES"][props["pad-b"]]}px;

  /* Margin */
  margin: ${(props) => props["SIZE_VALUES"][props.mar]}px;

  margin-top: ${(props) => props["SIZE_VALUES"][props["mar-h"]]}px;
  margin-bottom: ${(props) => props["SIZE_VALUES"][props["mar-h"]]}px;

  margin-left: ${(props) => props["SIZE_VALUES"][props["mar-w"]]}px;
  margin-right: ${(props) => props["SIZE_VALUES"][props["mar-w"]]}px;

  margin-left: ${(props) => props["SIZE_VALUES"][props["mar-l"]]}px;
  margin-right: ${(props) => props["SIZE_VALUES"][props["mar-r"]]}px;
  margin-top: ${(props) => props["SIZE_VALUES"][props["mar-t"]]}px;
  margin-bottom: ${(props) => props["SIZE_VALUES"][props["mar-b"]]}px;

  /* Control */
  ::after {
    transition: 0.2s ease-in-out;
    content: "████";
    font-size: 100vh;
    position: absolute;
  }

  /* Is selected */
  ::after {
    color: white;
    opacity: ${(props) => (props.selected ? 0.2 : 0)};
  }

  /* Is disabled */
  opacity: ${(props) => props.disabled && 0.5};
  filter: saturate(${(props) => props.disabled && 0.6});

  /* Hover */
  :hover {
    transition: 0.2s ease-in-out;
    filter: saturate(${(props) => (!props.disabled ? 1.1 : "inherit")});
    ::after {
      opacity: ${(props) => !props.disabled && 0.2};
    }
  }
`;

export const SeparatorTemplate = styled.div`
  border-left: ${(props) =>
      !props.width
        ? "2px"
        : !props["props['SIZE_VALUES']"][props.width]
        ? props.width
        : props["SIZE_VALUES"][props.width] + "px"}
    solid ${(props) => COLOR_PALETTE[props.color] || props.color};

  opacity: ${(props) => props.opacity};

  height: ${(props) =>
    !props.height
      ? "25px"
      : !props["props['SIZE_VALUES']"][props.height]
      ? props.height
      : props["SIZE_VALUES"][props.height] + "px"};

  /* Padding */
  padding: ${(props) => props["SIZE_VALUES"][props.pad]}px;

  padding-top: ${(props) => props["SIZE_VALUES"][props["pad-h"]]}px;
  padding-bottom: ${(props) => props["SIZE_VALUES"][props["pad-h"]]}px;

  padding-left: ${(props) => props["SIZE_VALUES"][props["pad-w"]]}px;
  padding-right: ${(props) => props["SIZE_VALUES"][props["pad-w"]]}px;

  padding-left: ${(props) => props["SIZE_VALUES"][props["pad-l"]]}px;
  padding-right: ${(props) => props["SIZE_VALUES"][props["pad-r"]]}px;
  padding-top: ${(props) => props["SIZE_VALUES"][props["pad-t"]]}px;
  padding-bottom: ${(props) => props["SIZE_VALUES"][props["pad-b"]]}px;

  /* Margin */
  margin: ${(props) => props["SIZE_VALUES"][props.mar]}px;

  margin-top: ${(props) => props["SIZE_VALUES"][props["mar-h"]]}px;
  margin-bottom: ${(props) => props["SIZE_VALUES"][props["mar-h"]]}px;

  margin-left: ${(props) => props["SIZE_VALUES"][props["mar-w"]]}px;
  margin-right: ${(props) => props["SIZE_VALUES"][props["mar-w"]]}px;

  margin-left: ${(props) => props["SIZE_VALUES"][props["mar-l"]]}px;
  margin-right: ${(props) => props["SIZE_VALUES"][props["mar-r"]]}px;
  margin-top: ${(props) => props["SIZE_VALUES"][props["mar-t"]]}px;
  margin-bottom: ${(props) => props["SIZE_VALUES"][props["mar-b"]]}px;
`;

//Advanced

export const CardBoardTemplate = styled(BoxTemplate)`
  width: 99%;
  display: grid;
  gap: ${(props) => props["SIZE_VALUES"][props.gap] || 15}px;
  grid-auto-flow: dense;
  grid-auto-rows: ${(props) => props.autoRows};
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      ${(props) => props.minCol || "15rem"},
      ${(props) => props.maxCol || "1fr"}
    )
  );
`;

export const ControlBarTemplate = styled(BoxTemplate)`
  border-radius: 100vh;

  width: clamp(5rem, 800px, 90%);

  * {
    color: ${(props) => COLOR_PALETTE[props.fontColor]};
  }
`;

export const IndicatorTemplate = styled(ButtonTemplate)`
  background: none;

  border-radius: ${(props) =>
    !props.radius
      ? "1vh"
      : props["SIZE_VALUES"][props.radius] === undefined
      ? props.radius
      : props["SIZE_VALUES"][props.radius] + "px"};

  cursor: ${(props) => !props.disabled && "pointer"};

  * {
    z-index: ${(props) => (props.disabled ? -2 : 3)};
    pointer-events: ${(props) => props.disabled && "none"};
  }

  /* Control */
  ::after {
    transition: 0.2s ease-in-out;
    content: "████";
    font-size: 100vh;
    position: absolute;
    z-index: ${(props) => (props.highlight ? 2 : 1)};
  }

  /* Is selected */
  ::after {
    color: ${(props) => COLOR_PALETTE[props.color] || props.color};
    opacity: ${(props) => (props.highlight ? props.opacity || 0.2 : 0)};
  }

  /* Is disabled */
  opacity: ${(props) => props.disabled && 0.5};
  filter: saturate(${(props) => props.disabled && 0.6});

  /* Hover */
  :hover {
    transition: 0.2s ease-in-out;
    filter: saturate(${(props) => (!props.disabled ? 1.1 : "inherit")});
    ::after {
      display: ${(props) => !props.showOnHover && "none"};
      display: ${(props) => props.highlight && "none"};
      opacity: ${(props) => !props.disabled && (props.opacity || 0.2)};
    }
  }
`;

const Templates = {
  TextTemplate,
  BoxTemplate,
  SelectTemplate,
  InputTemplate,
  ImgTemplate,
  ButtonTemplate,
  SeparatorTemplate,
  CardBoardTemplate,
  ControlBarTemplate,
  IndicatorTemplate,
};

export default Templates;
