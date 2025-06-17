import { route } from "preact-router";
import { useEffect } from "preact/hooks";
import { IRedirect } from "../../model/other";

const Redirect = (props: IRedirect) => {
  useEffect(() => {
    route(props.to, true);
  }, []);

  return <></>;
};

export default Redirect;
