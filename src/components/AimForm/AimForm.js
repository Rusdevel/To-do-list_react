import "./AimForm.css";
import {useState} from 'react';
function AimForm (props) {

  const [input, setInput] = useState('');  
// сабмит формы
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTask(input)
    //обнуляем инпут после ввода
    setInput('');
  }

const handleChange = (e)=> {
setInput(e.currentTarget.value)
}

    return (
        <section className="AimForm">
          <form onSubmit={handleSubmit} className="AimForm__group">
            <div className="AimForm__container">
              <input
                className="AimForm__input"
                maxLength="30"
                type="text"
                placeholder="Задача"
                onChange={handleChange}
                value={input}
                required
              />
              <button
                className="AimForm__button"
                type="submit"
              >
                Внести
              </button>
            </div>
          </form>
        </section>
      );
    }

export default AimForm;