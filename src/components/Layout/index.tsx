import { ReactElement } from "preact/compat";
import Footer from "../Footer";
import Header from "../Header";
import { Hero } from "../Hero";

interface ILayout {
  children: ReactElement;
}

const Layout = (props: ILayout) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />

      {/* <div class="area">
        <ul class="circles">
          <li>☕</li>
          <li>🎎</li>
          <li>🚕</li>
          <li>🎠</li>
          <li>📱</li>
          <li>⌚️</li>
          <li>🧚‍♀️</li>
          <li>🪬</li>
          <li>👽</li>
          <li>👾</li>
        </ul>
      </div> */}
    </>
  );
};

export default Layout;
