"use client";
import { useState, useEffect } from "react";
import { contactItems } from "@/data/contact";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: null, message: "" });

  const getAuthToken = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_RAZORIT_API_URL}/auth/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (response.ok && result.access_token) {
        localStorage.setItem("razorit_token", result.access_token);
        return result.access_token;
      } else {
        throw new Error("Failed to retrieve token");
      }
    } catch (error) {
      console.error("Auth error:", error);
      setStatus({ success: false, message: "Authentication failed. Try again later." });
      return null;
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: null, message: "Sending..." });

    try {
      // Check for token, get one if missing
      let authToken = localStorage.getItem("razorit_token");
      if (!authToken) {
        authToken = await getAuthToken();
        if (!authToken) {
          setStatus({ success: false, message: "Could not authenticate. Please try again." });
          return;
        }
      }

      // Send the contact form request
      const response = await fetch(`${process.env.NEXT_PUBLIC_RAZORIT_API_URL}/send-contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: "RazorIT Information Request",
          message: formData.message,
          reply_to: formData.email,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        if (response.status === 401) {
          // If unauthorized, try again after getting a new token
          localStorage.removeItem("razorit_token");
          authToken = await getAuthToken();
          if (authToken) {
            return handleSubmit(e);
          }
        }
        setStatus({ success: false, message: result.detail || "Failed to send message." });
      }
    } catch (error) {
      setStatus({ success: false, message: "Something went wrong. Try again later." });
    }
  };

  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-4 mb-md-50 mb-sm-30 position-relative z-index-1">
          <h2 className="section-caption-fancy mb-20 mb-xs-10">Contact Us</h2>
          <h3 className="section-title mb-50 mb-sm-30">
            We’re open. <br /> Let's talk.
          </h3>

          <div className="row">
            <div className="col-md-11">
              {contactItems.map((item, index) => (
                <div key={index} className={`contact-item ${index !== 3 ? "mb-40 mb-sm-20" : ""}`}>
                  <div className="ci-icon">
                    <i className={item.iconClass} />
                  </div>
                  <h4 className="ci-title visually-hidden">{item.title}</h4>
                  <div className="ci-text">{item.text}</div>
                  <div>
                    <a href={item.link.url} target={item.link.target} rel={item.link.rel} className="link-hover-anim">
                      <span className="link-strong link-strong-unhovered">
                        {item.link.text} <i className="mi-arrow-right size-18" aria-hidden="true"></i>
                      </span>
                      <span className="link-strong link-strong-hovered" aria-hidden="true">
                        {item.link.text} <i className="mi-arrow-right size-18" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-8 col-xl-7 offset-xl-1">
          <div className="position-relative">
            <div className="decoration-11 d-none d-xl-block">
              <div className="wow fadeInUp">
                <Image src="/assets/images/demo-fancy/contact-section-image.png" width={225} height={250} alt="" />
              </div>
            </div>

            <div className="box-shadow round p-4 p-sm-5">
              <h4 className="h3 mb-30">Take 30 Seconds, and Get Started</h4>

              <form onSubmit={handleSubmit} className="form contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="input-lg round form-control"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="input-lg round form-control"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message {process.env.NEXT_PUBLIC_RAZORIT_API_URL} ..message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="input-lg round form-control"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ height: 130 }}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 col-xl-5">
                    <div className="pt-3">
                      <button type="submit" className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim">
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-7 d-flex align-items-center">
                    <div className="form-tip w-100 pt-3 mt-sm-20">
                      <i className="icon-info size-16" />
                      All fields are required. By sending the form you agree to the{" "}
                      <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
                    </div>
                  </div>
                </div>

                {status.message && (
                  <div className={`alert ${status.success ? "alert-success" : "alert-danger"} mt-3`} role="alert">
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
