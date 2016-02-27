'use strict';
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import $ from 'jquery';
import request from 'superagent';
import DisplayTable from './DisplayTable';



export default class DropFile extends Component {
  constructor(props) {
    super(props);
    this.state = {jsonData:[]};
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files){
    console.log('Received files: ', files);
    var req = request.post('http://localhost:3001/upload');
       files.forEach((file)=> {
           req.attach('file', file);
       });
       req.end((err,res) => {
         console.log("JSON DATA FINALLLLLLLLLLLLLLLLLLLL",res.body);
         this.setState({jsonData:res.body});
       });
  }

  render() {
    var dataArray = this.state.jsonData;
    console.log("ARRAY VALUEEEEEEEEEEEEEEE",dataArray);
    return (
    <div>
      <div className="test">  DROP AREADROP AREADROP AREADROP AREA </div>
      <Dropzone onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      <DisplayTable arrayData = {dataArray}/>
    </div>
    );
  }
}
