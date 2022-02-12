import SizeProvider from "../../primitives/size-provider";
import useMediaQuery from "../../../helpers/hooks/useMediaQuery";

const ThemeProvider = (props) => {
  let mobileSMScreen = useMediaQuery("(max-width: 420px)");
  let mobileLGScreen = useMediaQuery("(max-width: 576px)");
  let tabScreen = useMediaQuery("(max-width: 768px)");
  let bigScreen = useMediaQuery("(max-width: 1100px)");

  const GetTheScreenSettings = () => {
    if (mobileSMScreen) return 2.1;
    if (mobileLGScreen) return 2.4;
    if (tabScreen) return 2.6;
    if (bigScreen) return 3.2;
  };

  return (
    <SizeProvider root_value={props.value || GetTheScreenSettings()}>
      {props.children}
    </SizeProvider>
  );
};

export { useMediaQuery };
export default ThemeProvider;
