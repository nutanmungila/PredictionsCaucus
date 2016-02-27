import React from 'react';
import TableRow from './TableRow';

export default class DisplayTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var arrayData = this.props.arrayData;
    console.log("insude DisplayTablexxxxxxxxxxxxxxxxxxxx",this.props.arrayData);
    return (
        <table>
          <thead>
          <tr>
            <th className="rowTable">county</th>
            <th>votesCast</th>
            <th>bush</th>
            <th>cruz</th>
            <th>kasich</th>
            <th>others</th>
            <th>precinctsReported</th>
            <th>predictedWinner</th>
            <th>projectedTurnout</th>
            <th>rubio</th>
            <th>trump</th>
          </tr>
          </thead>
          <tbody>
            <tr> </tr>
            {arrayData.map((data)=>{
               return(<TableRow key={data.county} data={data} />);
             })}
           </tbody>
        </table>
    );
  }
}
