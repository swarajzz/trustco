"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { User, Mail, Building2, Phone } from "lucide-react";
import "../styles/contact-form.css";

interface ContactFormProps {
  title: string;
  description: string;
  termsText: string;
  termsLink: string;
  submitText: string;
}

export function ContactForm({
  title,
  description,
  termsText,
  termsLink,
  submitText,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    agreeTerms: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      agreeTerms: e.target.checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    setFormSubmitted(true);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      agreeTerms: false,
    });
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="contact-form-container">
          <div className="contact-form-header">
            <h2 className="contact-form-title">{title}</h2>
            <p className="contact-form-description">{description}</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <User size={18} className="form-icon" />
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <Mail size={18} className="form-icon" />
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <Building2 size={18} className="form-icon" />
                <input
                  type="text"
                  name="company"
                  className="form-control"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <Phone size={18} className="form-icon" />
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Contact number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                className="form-control form-textarea"
                placeholder="How we can help?"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-checkbox">
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  id="terms"
                  name="agreeTerms"
                  className="checkbox-input"
                  checked={formData.agreeTerms}
                  onChange={handleCheckboxChange}
                  required
                />
              </div>
              <label htmlFor="terms" className="checkbox-label">
                {termsText.split("Terms & Conditions")[0]}
                <Link href={termsLink} className="terms-link">
                  Terms & Conditions
                </Link>
              </label>
            </div>

            <div className="form-submit">
              <button type="submit" className="submit-button">
                {submitText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
