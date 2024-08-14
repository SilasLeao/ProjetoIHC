import "./page.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Form />
        <Footer />
      </div>
    </>
  );
}
