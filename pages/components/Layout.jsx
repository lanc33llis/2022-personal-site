import Header from "./Header"
import Footer from "./Footer"

// do transition stuff

const Layout = ({children}) => {
  return (
    <main id="app">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout