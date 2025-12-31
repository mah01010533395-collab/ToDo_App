import React, { useState } from "react";

export default function LoanForm() {
  const [loanInput, setLoanInput] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleFormSubmit(event) {
  event.preventDefault();

  console.log("Submitted:", loanInput);

 
  setLoanInput({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });



  }

  const btnIsDisabled =
    loanInput.name === "" ||
    loanInput.phoneNumber === "" ||
    loanInput.age === "";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        background: "#0f172a",
      }}
    >
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          width: "400px",
          flexDirection: "column",
          background: "#112dd4",
          boxShadow: "0px 10px 20px rgba(0,0,0,0.4)",
          padding: "25px",
          borderRadius: "20px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Requesting a Loan</h1>

        <hr style={{ width: "100%", marginBottom: "15px" }} />

        {/* Name */}
        <label>Name</label>
        <input
          type="text"
          value={loanInput.name}
          onChange={(e) =>
            setLoanInput({ ...loanInput, name: e.target.value })
          }
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        {/* Phone */}
        <label>Phone Number</label>
        <input
          type="text"
          value={loanInput.phoneNumber}
          onChange={(e) =>
            setLoanInput({ ...loanInput, phoneNumber: e.target.value })
          }
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        {/* Age */}
        <label>Age</label>
        <input
          type="number"
          value={loanInput.age}
          onChange={(e) =>
            setLoanInput({ ...loanInput, age: e.target.value })
          }
          style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        />

        {/* Employee */}
        <label style={{ marginBottom: "5px" }}>
          <input
            type="checkbox"
            checked={loanInput.isEmployee}
            onChange={(e) =>
              setLoanInput({ ...loanInput, isEmployee: e.target.checked })
            }
            style={{ marginRight: "8px" }}
          />
          Are you an employee?
        </label>

        {/* Salary */}
        <label>Salary Range</label>
        <select
          value={loanInput.salaryRange}
          onChange={(e) =>
            setLoanInput({ ...loanInput, salaryRange: e.target.value })
          }
          style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
        >
          <option value="">Select salary</option>
          <option value="less-500">Less than 500$</option>
          <option value="500-2000">Between 500$ and 2000$</option>
          <option value="above-2000">Above 2000$</option>
        </select>

        {/* Submit */}
        <button
          type="submit"
          disabled={btnIsDisabled}
          style={{
            border: "none",
            fontSize: "18px",
            padding: "12px",
            borderRadius: "8px",
            background: btnIsDisabled ? "#888" : "rgb(211,0,127)",
            color: "white",
            cursor: btnIsDisabled ? "not-allowed" : "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
