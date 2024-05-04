import React from "react";

const JobList = ({ jobs }) => {
  return (
    <div>
      <h2>Job List</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <div>Job Name: {job.jobName}</div>
            <div>Start Time: {job.startTime}</div>
            <div>End Time: {job.endTime}</div>
            <div>
              Crew Requirements:{" "}
              {job.crewRequirements.map((crew) => (
                <div key={crew.type}>
                  {crew.type}: {crew.hours} hours
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

const calculateCost = (job) => {
  console.log(job);
  let totalCost = 0;
  job.crewRequirements.forEach((crew) => {
    const crewType = job.crewCatalog.find((type) => type.type === crew.type);
    if (crewType) {
      totalCost += crewType.pricePerUnit * crew.hours;
    }
  });
  return totalCost;
};

export default JobList;
