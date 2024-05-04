import React, { useState } from "react";
import { TimePicker,Button,Select ,Input} from 'antd';
const format = 'HH:mm';

const JobForm = ({ addJob, crewCatalog }) => {
  const [jobName, setJobName] = useState("");
  const [crewRequirements, setCrewRequirements] = useState([]);

  const handleAddCrew = () => {
    setCrewRequirements([
      ...crewRequirements,
      { type: "", startTime: "", endTime: "" },
    ]);
  };
  const handleCrewChange = (index)=>(value) => {
    const updatedCrew = [...crewRequirements];
    updatedCrew[index].type = value;
    setCrewRequirements(updatedCrew);
  };

  const handleTimeChange = (indx)=>(dateArr) => {
    const updatedCrew = [...crewRequirements];
    updatedCrew[indx].startTime = dateArr[0][`$H`];
    updatedCrew[indx].endTime = dateArr[1][`$H`];
    setCrewRequirements(updatedCrew);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { jobName, crewRequirements };
    addJob(newJob);
    setJobName("");
    setCrewRequirements([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input  type="text"
        placeholder="Job Name"
        value={jobName}
        onChange={(e) => setJobName(e.target.value)}/>
      {crewRequirements.map((crew, index) => (
        <div key={index}>
          <Select
      style={{
        width: 120,
      }}
      onChange={handleCrewChange(index)}
      options={
        crewCatalog.map((crewType) => ({
            label:crewType.type,
            value:crewType.type
        }
          ))
      }
      />
          <TimePicker.RangePicker   format={format}  minuteStep={60} onChange={(handleTimeChange(index))}/>
        </div>
      ))}
      <div style={{ margin:"10px"}}>
      <Button type="primary"  onClick={handleAddCrew} disabled={!jobName}>
      Add Crew
      </Button>
      <Button danger  onClick={handleSubmit} style={{ margin:"0 10px"}} disabled={!jobName || !crewRequirements?.length}>
      Submit
      </Button>
      </div>
    </form>
  );
};

export default JobForm;
