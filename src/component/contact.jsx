import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xnjlzyww");

  if (state.succeeded) {
    return <p className="text-center text-green-500">Thanks! Message sent.</p>;
  }

  return (
    <section id="contact" className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Join <span className="text-red-500">Our Gym</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Fill the form below and start your fitness journey today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <h3 className="text-2xl font-semibold text-red-500">
              Get in Touch
            </h3>
            <p className="text-gray-400 mt-4">
              Contact us for plans, training, or inquiries.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 p-6 rounded-2xl border border-gray-800 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-3 rounded-xl bg-gray-800"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-xl bg-gray-800"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 rounded-xl bg-gray-800"
            />

            <select
              name="program"
              className="w-full p-3 rounded-xl bg-gray-800"
            >
              <option>Select Program</option>
              <option>Strength Training</option>
              <option>Cardio Program</option>
              <option>Personal Training</option>
              <option>Yoga Class</option>
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-xl bg-gray-800"
            />

            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default ContactForm;