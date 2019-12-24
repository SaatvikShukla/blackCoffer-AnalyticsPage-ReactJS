import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DataTable = ({ data }) => {
  console.log(data);

  return (
    <div className={"tableWrapper"}>
      <table  border="1">
        <tr>
          <th>Title</th>
          <th>Topic</th>
          <th>Year</th>
          <th>Intensity</th>
          <th>Sector</th>
          <th>Region</th>
          <th>PESTLE</th>
          <th>SWOT</th>
        </tr>
        {data.map((item) => {
          return (<tr>
            <td><a href={item.url}>{item.title}</a></td>
            <td>{item.topic}</td>
            <td>{item.end_year}</td>
            <td>{item.intensity}</td>
            <td>{item.sector}</td>
            <td>{item.region}</td>
            <td>{item.pestle}</td>
            <td>{item.swot}</td>
          </tr>);
        })}    
      </table>
    </div>
  );
}

export default DataTable;