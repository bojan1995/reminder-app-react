import React, { useState } from "react";
import Navbar from "./components/Navbar"; // Navigation bar
import WordsReminder from "./components/WordsReminder"; // Words Reminder component
import CodingPage from "./components/CodingPage"; // Code Reminder component

function App() {
  // State to track active page
  const [activePage, setActivePage] = useState("wordsReminder");

  // Render the active page based on state
  const renderPage = () => {
    switch (activePage) {
      case "wordsReminder":
        return <WordsReminder />;
      case "codingPage":
        return <CodingPage />;
      default:
        return <h1>404 - Page Not Found</h1>;
    }
  };

  return (
    <div className="App">
      <Navbar setActivePage={setActivePage} /> {/* Pass setActivePage to Navbar */}
      {renderPage()} {/* Dynamically render the active page */}
    </div>
  );
}

export default App;
