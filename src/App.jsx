import { useState } from "react";
import "./App.scss";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <header>
                <img src="/logo.svg" alt="logo" />
            </header>
            <main>
                <img src="/hero-desktop.jpg" alt="hero" />
                <div className="container">
                  <h1>We're <strong>coming soon</strong></h1>
                  <p>
                      {" "}
                      Hello fellow shoppers! We're currently building our new
                      fashion store. Add your email below to stay up-to-date with
                      announcements and our launch deals.
                  </p>
                  <form action="POST">
                      <div className="input-container">
                          <input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                          />
                          <span>
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="20"
                              >
                                  <path
                                      fill="none"
                                      stroke="#FFF"
                                      stroke-width="2"
                                      d="M1 1l8.836 8.836L1 18.671"
                                  />
                              </svg>
                          </span>
                      </div>
                  </form>
                </div>
            </main>
        </div>
    );
}

export default App;
