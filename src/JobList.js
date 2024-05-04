import React from "react";

const JobList = ({ jobs, crewCatalog }) => {
    console.log({jobs, crewCatalog})
  const calculateCost = (job) => {
    let totalCost = 0;
    console.log({ job });
    job.crewRequirements.forEach((crew) => {
      const crewType = crewCatalog.find((type) => type.type === crew.type);
      console.log({ crew, crewType });
      if (crewType) {
        totalCost += crewType.pricePerUnit * (crew.endTime - crew.startTime); 
      }
    });
    return totalCost;
  };

  return (
    <div>
      <h2>Job List</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <div>Job Name: {job.jobName}</div>
            <div>
              Crew Requirements:{" "}
              {job.crewRequirements.map((crew, idx) => (
                <div key={idx}>
                  {crew.type}: Start Time {crew.startTime}- End Time {crew.endTime} = {Math.abs(crew.endTime-crew.startTime)} {"hrs"}
                </div>
              ))}
            </div>
            <div>Total Cost: ${calculateCost(job)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
