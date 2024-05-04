import React, { useState } from "react";

const JobForm = ({ addJob, crewCatalog }) => {
  const [jobName, setJobName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [crewRequirements, setCrewRequirements] = useState([]);

  const handleAddCrew = () => {
    setCrewRequirements([...crewRequirements, { type: "", hours: 0 }]);
  };

  const handleCrewChange = (index, value) => {
    const updatedCrew = [...crewRequirements];
    updatedCrew[index].type = value;
    setCrewRequirements(updatedCrew);
  };

  const handleHoursChange = (index, value) => {
    const updatedCrew = [...crewRequirements];
    updatedCrew[index].hours = parseInt(value);
    setCrewRequirements(updatedCrew);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { jobName, startTime, endTime, crewRequirements };
    addJob(newJob);
    setJobName("");
    setStartTime("");
    setEndTime("");
    setCrewRequirements([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Job Name"
        value={jobName}
        onChange={(e) => setJobName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Start Time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="End Time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
      {crewRequirements.map((crew, index) => (
        <div key={index}>
          <select onChange={(e) => handleCrewChange(index, e.target.value)}>
            {crewCatalog.map((crewType) => (
              <option key={crewType.id} value={crewType.type}>
                {crewType.type}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={crew.hours}
            onChange={(e) => handleHoursChange(index, e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddCrew}>
        Add Crew
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobForm;
