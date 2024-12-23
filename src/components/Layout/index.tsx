import Footer from "../Footer"
import Header from "../Header"

const Layout = (props: any) => {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout