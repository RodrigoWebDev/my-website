import Footer from "../Footer";
import Header from "../Header";

const Layout = (props: any) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />

      <div class="area">
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
      </div>
    </>
  );
};

export default Layout;
