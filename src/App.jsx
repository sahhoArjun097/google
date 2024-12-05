import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  const jobs = [
    { title: "Technical Support Specialist", location: "Dhaka, Bangladesh", salary: "$20,000 - $25,000", company: "Google Inc.", remote: true },
    { title: "Senior UX Designer", location: "Dhaka, Bangladesh", salary: "$20,000 - $25,000", company: "Google Inc.", remote: true },
    // Add more jobs here...
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <SearchBar />
        <div className="job-list">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
