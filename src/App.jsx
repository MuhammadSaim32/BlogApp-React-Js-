import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Container from "./Components/Container";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>

      <Footer />
    </>
  );
}

export default App;
