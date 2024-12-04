import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Form.css"


const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailPhone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    emailPhone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.emailPhone) {
      newErrors.emailPhone = "Email or Phone is required";
    } else if (
      !/\S+@\S+\.\S+/.test(formData.emailPhone) &&
      !/^\d{10}$/.test(formData.emailPhone)
    ) {
      newErrors.emailPhone =
        "Please enter a valid email or 10-digit phone number";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);

      setFormData({ name: "", emailPhone: "", message: "" });
    }
  };

  return (
    <div className="above-class">
      <div className="info-card">
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} />

          <a
            href="https://www.google.com/maps/place/17%C2%B026'38.4%22N+78%C2%B027'48.1%22E/@17.4439962,78.4607764,801m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d17.4439962!4d78.4633513?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            &nbsp;&nbsp;&nbsp;1-10-74/B&C Flat No: T-402/B,
            <br />
            &nbsp;&nbsp;&nbsp;Technopolis Galada Complex,
            <br />
            &nbsp;&nbsp;&nbsp;Dwaraka Das Colony, Begumpet 500016
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          <a href="mailto:vishcom.net">
            VISHWASRITECHNOLOGIES
            <br />
            @vishcom.net
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} />{" "}
          <a href="tel:7330696716">7330696716</a>
        </p>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>

          <label>
            Email / Phone No
            <input
              type="text"
              name="emailPhone"
              value={formData.emailPhone}
              onChange={handleInputChange}
            />
            {errors.emailPhone && (
              <span className="error">{errors.emailPhone}</span>
            )}
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </label>

          <button class="my-custom-button">Submit</button>
        </form>
      </div>
      <div>
      
      </div>
    </div>
  );
};

export default Form;