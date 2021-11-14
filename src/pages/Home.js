import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import Clock from "../utils/Clock";

export function Home() {
  return (
    <div>
      <div class="header">
        <h1 class="header-text">Focus.</h1>
      </div>
      <div className="timer">
        <Clock />
      </div>

      <div class="description">
        <h2>Create timers that match your study style!</h2>
      </div>
      <div class="card-section">
        <div class="card card-one">
          <h2 class="card-title">Pomodoro</h2>
          <nav>
            <div class="nav-button">
              <Link class="navigator" to="about">
                Create
              </Link>
            </div>
          </nav>
        </div>
        <div class="card card-two">
          <h2 class="card-title">Seinfield</h2>
          <nav>
            <div class="nav-button">
              <Link class="navigator" to="about">
                Create
              </Link>
            </div>
          </nav>
        </div>
        <div class="card card-three">
          <h2 class="card-title">Custom</h2>
          <nav>
            <div class="nav-button">
              <Link class="navigator" to="about">
                Create
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div className="todo">
        <h1>Todo</h1>
        <Form />
      </div>
    </div>
  );
}
