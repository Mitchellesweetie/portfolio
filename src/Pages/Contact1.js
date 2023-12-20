import React from "react";
import Contacts from "./Contacts";
import "./pages.css";

export function Contact1(props) {
  return (
    <div className="contact-card">
      <div className="form">
        <div className="tittle">
          <h4>Let's work together</h4>
        </div>
        <div>
          <form>
            <div>
              <label>Name</label>
              <br></br>
              <input type="text" id="text" name="text" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <br></br>
              <input type="email" name="emai" />
            </div>

            <div>
              <label htmlFor="text">Subject</label>
              <br></br>
              <input type="text" name="subject" />
            </div>
            <div>
              <label>Message</label>
              <br></br>
              <textarea type="text" name="message" />
            </div>
            <div>
              <button>send</button>
            </div>
          </form>
        </div>
      </div>
      <div className="contact">
        {" "}
        <div className="tittle">
          <h4>Contact Info</h4>
        </div>
        <div className="mail">
          <h4>Mail</h4>
          <div className="mail1">
            <span class="material-symbols-outlined">mail</span>
          </div>
          <div className="contacts-details">
            <h6>{props.email}</h6>
            <h6>{props.email1}</h6>
          </div>
        </div>
        <div className="contacts">
          <h4>Dial</h4>
          <div>
            <span class="material-symbols-outlined">call</span>
          </div>
          <div className="contacts-details">
            <h6>0791300237</h6>
            <h6>0708607402</h6>
            <h6>0731314732</h6>
          </div>
        </div>
        <div className="location">
          <span class="material-symbols-outlined">location_on</span>
          <div className="contacts-details">
            <h6>Mombasa,Kenya</h6>
          </div>
        </div>
        <div className="social">
          <div className="contacts-details">
            <h4>Social handles</h4>
            <h6>twitter</h6>
            <h6>LinkedIn</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
