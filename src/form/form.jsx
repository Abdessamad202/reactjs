import { useState } from "react";
export default function Form() {
  const [formValues, setFormValues] = useState({"name":"","age":null,"city":"","country":"MA","acceptConditions":false});
  const handleChange = (e) => {
    const id = e.target.id
    let value = e.target.value
    switch (e.target.type) {
      case "number":
        value = parseInt(e.target.value)
        break;
      case "checkbox":
        value = e.target.checked
        break;
      default:
        console.error("invalid type");
        break;
    }
    setFormValues(prevState=> ({...prevState,[id]:value}));
  }
  return (
    <div className={"container my-4"}>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            onChange={handleChange}
            id="name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            onChange={handleChange}
            id="city"
            className="form-control"
          />
        </div>
          <div class="form-group">
            <label for="">country</label>
            <select class="custom-select" onChange={handleChange} className="form-control" id="country">
              <option selected value="MA">Morocco</option>
              <option value="DZ">Algery</option>
              <option  value="TN">Tunisia</option>
            </select>
          </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            id="age"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            onChange={handleChange}
            id="acceptConditions"
            className="form-check-input"
          />
          <label htmlFor="accept" className="form-check-label">
            Accept our rules
          </label>
        </div>

        <button type="button" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div className="mt-3">
        <p>
          <strong>Output:</strong>
        </p>
        {JSON.stringify(formValues)}
        <p>Name: {formValues.name}</p>
        <p>City: {formValues.city}</p>
        <p>Age: {formValues.age}</p>
        <p>Accepted Conditions: {formValues.acceptConditions ? "True" : "False"}</p>
      </div>
    </div>
  );
}