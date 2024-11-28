import { useRef, useState } from "react";
export default function Form() {
  const [formValues, setFormValues] = useState({"name":"","age":null,"city":"","country":"MA","acceptConditions":false});
  const inputNameRef = useRef()
  const inputAgeRef = useRef()
  const inputCityRef = useRef()
  const inputCountryRef = useRef()
  const acceptConditionsRef = useRef()
  // email regex :^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// console.log(emailRegex.test("test@example.com")); // true
// console.log(emailRegex.test("invalid-email"));   // false

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Contact form</h1>
            <form>
                {/* Name */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                {/* Email Address */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                {/* Message */}
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Write your message"></textarea>
                </div>
                {/* Country */}
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <select className="form-select" id="country">
                        <option selected>Select country</option>
                        <option value="1">USA</option>
                        <option value="2">Canada</option>
                        <option value="3">UK</option>
                        {/* Add more countries as needed */}
                    </select>
                </div>
                {/* Accept Terms */}
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="acceptTerms" />
                    <label className="form-check-label" htmlFor="acceptTerms">
                        Accept all conditions
                    </label>
                </div>
                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    );
}
