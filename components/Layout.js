import Footer from "./Footer";
import Header from "./Header";
import SEO from "./SEO";

const Layout = ({ children }) => {
  return (
    <div className="bg-bc min-h-screen">
      <SEO />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
