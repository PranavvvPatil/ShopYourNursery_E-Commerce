import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
