import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  function signUp(formData) {
    const data = Object.fromEntries(formData);
    const dietaryData = formData.getAll("dietaryRestrictions");
    const allData = {
      ...data,
      dietaryData
    }
    let json = JSON.stringify(allData, null, 2);
    console.log(typeof json);
    console.log(json);
    
    
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          defaultValue="joe@schmoe.com"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          defaultValue="password123"
          type="password"
          name="password"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          defaultValue="This is a description"
        ></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input
              type="radio"
              name="employmentStatus"
              aria-label="unenployed"
              value="unenployed"
            />
            Unemployed
          </label>
          <label>
            <input
              type="radio"
              name="employmentStatus"
              aria-label="Part-time"
              value="part-time"
              defaultChecked={true}
            />
            Part-time
          </label>
          <label>
            <input
              type="radio"
              name="employmentStatus"
              aria-label="full-time"
              value="full-time"
            />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              aria-label="vegan"
              value="vegan"
            />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              aria-label="kosher"
              value="kosher"
            />
            Kosher
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              aria-label="gluten-free"
              value="glutten-free"
            />
            Gluten free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color ?</label>
        <select name="favColor" id="favColor" defaultValue="red" required>
          <option value="" disabled>
            {" "}
            -- Choose a color --{" "}
          </option>
          <option value="red">Red</option>
          <option value="organge">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Ingigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>
      </form>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/**

{email: "joe@schmoe.com", password: "password123", description: "This is a description", employmentStatus: "full-time", dietaryRestrictions: "gluten-free", favColor: "orange"}

 */
