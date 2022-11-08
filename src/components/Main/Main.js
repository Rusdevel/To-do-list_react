import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AimForm from "../AimForm/AimForm";
import List from "../List/List";


function Main() {
  return (
    <div className="Main">
      <Header />
      <AimForm />
      <List />
      <Footer />
    </div>
  );
}

export default Main;
