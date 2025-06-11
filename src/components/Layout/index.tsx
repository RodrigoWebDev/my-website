import { ReactNode } from "preact/compat";
import Footer from "../Footer";
import Header from "../Header";
//import { Hero } from "../Hero";

interface ILayout {
  children: ReactNode;
}

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
