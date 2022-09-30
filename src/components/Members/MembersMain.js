import React from "react";
import { Component, useState, useEffect} from "react";
import { BrowserRouter, Route, Switch,  useParams } from 'react-router-dom';
import MemberRow from './MemberRow.js';
import MembersPager from './MembersPager';

export default function MembersBody({pageNum}){
 const [fetchData, setfetchData] = useState('');
 const [dataLength, setdataLength] = useState(0);
 const [pagerData, setpagerData] = useState('');
  const [DataisLoaded, setDataisLoaded] = useState(false);
  const [input, setInput] = useState('');
  const { page } = useParams()

  let personData = '';
  let peopleList = [];
 console.log( "https://reqres.in/api/users?page="+page);

   useEffect(() => {
     fetch(
      "https://reqres.in/api/users?page="+page)
      .then((res) => res.json())
      .then((json) => {
        personData = json.data;
        setdataLength(json.data.length);
        setfetchData(json.data);
        setpagerData(json);
         //~ let i=0;
         //~ for(i in json){
          //~ peopleList.push(i);
          console.log(fetchData);
        //~ }
            //~ console.log(personData);
         })
      .then(
          setDataisLoaded(true)
      )
  }, []);


    
  return (
    <div className="container-fluid" id="main-content">
        <div className="container pt-5">
            <div className="row mb-3 justify-content-center">
                <div className="col-10 d-flex">
                    <h5 className="text-white align-self-center">Team Members</h5>
                    <button className="btn btn-primary bg-warning ml-auto">+ Invite a new user</button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-10">
                    <table className="table table-borderless">
                        <tbody id="tmembers">
                            <MemberRow props={fetchData} dataCount={dataLength}/>
                          </tbody>
                    </table>
                </div>
            </div>
            <MembersPager pageNum={pageNum}/>
        </div>
      </div>
  )
}
