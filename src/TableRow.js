'use strict';
import React from 'react';

export default class TableRow extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    var {
      data:{
        county,
        votes_cast:votesCast,
        bush_final_prediction:bush,
        cruz_final_prediction:cruz,
        kasich_final_prediction:kasich,
        others_final_prediction:others,
        precincts_reported:precinctsReported,
        predicted_winner:predictedWinner,
        projected_turnout:projectedTurnout,
        rubio_final_prediction:rubio,
        trump_final_prediction:trump
      }
    } = this.props;
    return (
        <tr className="rowTable">
          <td className="rowTable">{county}</td>
          <td>{votesCast}</td>
          <td>{bush}</td>
          <td>{cruz}</td>
          <td>{kasich}</td>
          <td>{others}</td>
          <td>{precinctsReported}</td>
          <td>{predictedWinner}</td>
          <td>{projectedTurnout}</td>
          <td>{rubio}</td>
          <td>{trump}</td>
        </tr>
    );
  }
}
