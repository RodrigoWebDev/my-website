import { route } from "preact-router";
import { useEffect } from "preact/hooks";
import { IPage } from "../../model";

interface IRedirect extends IPage {
  to: string;
}

const Redirect = (props: IRedirect) => {
  useEffect(() => {
    route(props.to, true);
  }, []);

  return <></>;
};

export default Redirect;
