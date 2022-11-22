import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AimForm from "../AimForm/AimForm";
import List from "../List/List";


function Main(props) {
  return (
    <div className="Main">
      <Header />
      <AimForm addTask={props.addTask} />
      <List  propose={props.propose}
      key={props.propose.id}
      toggleTask={props.toggleTask}
      deleteTask={props.deleteTask}
      />
      <Footer />
    </div>
  );
}

export default Main;
