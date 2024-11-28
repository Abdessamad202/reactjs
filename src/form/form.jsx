import { useRef, useState } from "react";
export default function Form() {
  const [formValues, setFormValues] = useState({"name":"","age":null,"city":"","country":"MA","acceptConditions":false});
  const inputNameRef = useRef()
  const inputAgeRef = useRef()
  const inputCityRef = useRef()
  const inputCountryRef = useRef()
  const acceptConditionsRef = useRef()
  const handelClick = () => {
    let values = {
      "name" : inputNameRef.current.value,
      "age" : inputAgeRef.current.value,
      "city" : inputCityRef.current.value,
      "country" : inputCountryRef.current.value,
      "acceptConditions" : acceptConditionsRef.current.checked
    }
    setFormValues(values)
    console.log(values, formValues);




    function HelloToMyProfile() {
      console.log("my name is abdessamad kechchaf im a software developper");
    }
    HelloToMyProfile()






    
  }
  // const handleChange = (e) => {
  //   const id = e.target.id
  //   let value = e.target.value
  //   switch (e.target.type) {
  //     case "number":
  //       value = parseInt(e.target.value)
  //       break;
  //     case "checkbox":
  //       value = e.target.checked
  //       break;
  //     default:
  //       console.error("invalid type");
  //       break;
  //   }
  //   setFormValues(prevState=> ({...prevState,[id]:value}));
  // }
  return (
    <div className={"container my-4"}>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            ref={inputNameRef}
            id="name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            ref={inputCityRef}
            id="city"
            className="form-control"
          />
        </div>
          <div className="form-group">
            <label>country</label>
            <select  ref={inputCountryRef} className="form-control" id="country">
              <option value="MA">Morocco</option>
              <option value="DZ">Algery</option>
              <option  value="TN">Tunisia</option>
            </select>
          </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            id="age"
            ref={inputAgeRef}
            className="form-control"
          />
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            ref={acceptConditionsRef}
            id="acceptConditions"
            className="form-check-input"
          />
          <label className="form-check-label">
            Accept our rules
          </label>
        </div>

        <button type="button" className="btn btn-primary" onClick={handelClick}>
          Submit
        </button>
      </form>
      <div>{JSON.stringify(formValues)}</div>
    </div>
  );
}