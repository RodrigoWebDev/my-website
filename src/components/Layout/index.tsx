import Footer from "../Footer";
import Header from "../Header";
import { ILayout } from "../../model/components";

const Layout = (props: ILayout) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
