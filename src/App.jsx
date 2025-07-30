import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 5000,
    expectedReturn: 7,
    duration: 10,
  });

  const isValidInput = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [inputIdentifier]: +newValue,
    }));
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onUserInputChange={handleChange} />
      {!isValidInput && (
        <p className="center">
          Please enter a valid duration (at least 1 year).
        </p>
      )}
      {/* Only render Results if the input is valid */}
      {isValidInput && <Results userInput={userInput} />}
    </>
  );
}

export default App;
