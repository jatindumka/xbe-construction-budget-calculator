import React from "react";

const CrewCatalog = ({ crewCatalog }) => {
  return (
    <div>
      <h2>Crew Catalog</h2>
      <table>
        <thead>
          <tr>
            <th>Crew Type</th>
            <th>Price Per Unit</th>
          </tr>
        </thead>
        <tbody>
          {crewCatalog.map((crewType) => (
            <tr key={crewType.id}>
              <td>{crewType.type}</td>
              <td>{crewType.pricePerUnit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrewCatalog;
