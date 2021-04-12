import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      {/* <Image src="/id.png" width={128} height={110} /> */}
      <Nav />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
