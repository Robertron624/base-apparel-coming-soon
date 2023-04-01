import { useState } from "react";
import "./App.scss";

function App() {
    const [emailError, setEmailError] = useState(false);

    function handleSubmit (e) {

        e.preventDefault();
        const rawEmail = e.target[0].value;

        // regex for email validation 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailRegex.test(rawEmail) === false) {
            setEmailError(true);
        }else {
            setEmailError(false);
            console.log("email is valid, sending...")
        }
    }

    return (
        <div className="App">
            <header>
                <img src="/logo.svg" alt="logo" />
            </header>
            <main>
                    <div className="heroes">
                        <img className="hero-mobile" src="/hero-mobile.jpg" alt="hero" />
                        <img className="hero-desktop" src="/hero-desktop.jpg" alt="hero" />
                    </div>
                <div className="container">
                    <div className="logo-desktop-container">
                        <img src="/logo.svg" alt="desktop logo" className="desktop-logo"/>
                    </div>
                    <div className="main-text">
                        <h1>We're <strong>coming soon</strong></h1>
                        <p>
                            {" "}
                            Hello fellow shoppers! We're currently building our new
                            fashion store. Add your email below to stay up-to-date with
                            announcements and our launch deals.
                        </p>
                        <form action="POST" onSubmit={handleSubmit}>
                            <div className="input-container">
                                <input
                                    className={`${emailError ? "email-error" : ""}`}
                                    type="text"
                                    name="email"
                                    placeholder="Email Address"
                                />
                                {   emailError && (<img src="/icon-error.svg" className="error-icon"/>)}
                                <div>
                                    
                                </div>
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="20"
                                    >
                                        <path
                                            fill="none"
                                            stroke="#FFF"
                                            strokeWidth="2"
                                            d="M1 1l8.836 8.836L1 18.671"
                                        />
                                    </svg>
                                </button>
                                {   emailError && (<div className="input-error">Please provide a valid email</div>)}
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
