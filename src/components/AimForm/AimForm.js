import "./AimForm.css";

function AimForm () {
    
    return (
        <section className="AimForm">
          <form className="AimForm__group">
            <div className="AimForm__container">
              <input
                className="AimForm__input"
                maxLength="30"
                type="text"
                placeholder="Задача"
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