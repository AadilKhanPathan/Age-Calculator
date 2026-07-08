import React, { useState } from "react";

function App() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");
  const [totalWeeks, setTotalWeeks] = useState();
  const [totalMonths, setTotalMonths] = useState();
  const [totalDays, setTotalDays] = useState();
  const [totalHours, setTotalHours] = useState();

  function CalculateAge() {
    const today = new Date();
    const dateOfBirth = new Date(birthDate);

    TotalCalculation(today, dateOfBirth);

    let years = today.getFullYear() - dateOfBirth.getFullYear();
    let months = today.getMonth() - dateOfBirth.getMonth();
    let days = today.getDate() - dateOfBirth.getDate();

    if (days < 0) {
      months--;

      const daysInPreviousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0,
      ).getDate();

      days += daysInPreviousMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge(`${years} years, ${months} months, ${days} days`);
  }

  function TotalCalculation(today, dob) {
    const differenceInMilliseconds = today - dob;

    const days = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  setTotalDays(`${days} Total Days`);
  setTotalWeeks(`${Math.floor(days / 7)} Total Weeks`);
  setTotalMonths(`${Math.floor(days / 30.44)} Total Months`);
  setTotalHours(`${days * 24 } Total hours`);
  }

  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <hr />
      <label>Date of birth</label>
      <div>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)
          }
        />
        <button onClick={CalculateAge}>Calculate age</button>
      </div>
      {age &&
      <div>
      <div className="answer">
        your age is<p>{age}</p>
      </div>

      <div className="Days_Weeks">
        <span>{totalDays}</span>
        <span>{totalWeeks}</span>
      </div>

      <div className="Months_Hours">
        <span>{totalMonths}</span>
        <span>{totalHours}</span>
      </div>
      </div>
      }
    </div>
  );
}

export default App;
