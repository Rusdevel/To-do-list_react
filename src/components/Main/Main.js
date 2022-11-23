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
      {props.purposes.map((purpose) => {
        return(
<List  purpose={purpose}
      key={purpose.id}
      toggleTask={props.toggleTask}
      deleteTask={props.deleteTask}
      />
        )
        
      })}
      
      <Footer />
    </div>
  );
}

export default Main;
