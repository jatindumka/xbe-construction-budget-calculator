import './App.css';
import React, { useState } from "react";
import JobForm from "./JobForm";
import CrewCatalog from "./CrewCatalog";
import JobList from "./JobList";

function App() {
  const [jobs, setJobs] = useState([]);
  const [crewCatalog, setCrewCatalog] = useState([
    { id: 1, type: "Foreman", pricePerUnit: 50 },
    { id: 2, type: "Operator", pricePerUnit: 40 },
  ]);

  const addJob = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  return (
    <div>
      <h1>Construction Labor Cost Calculator</h1>
      <JobForm addJob={addJob} crewCatalog={crewCatalog} />
      <CrewCatalog crewCatalog={crewCatalog} />
      <JobList jobs={jobs} />
    </div>
  );
};

export default App;
