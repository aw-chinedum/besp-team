import { Component } from "react";
//~ import { useNavigate } from 'react-router-dom';
//~ import logo from '../images/logo.svg';
import MembersBody from '../components/Members/MembersMain.js';
import MembersPager from '../components/Members/MembersPager.js';
import '../css/bootstrap.min.css';
import '../css/members-Style.css';

export default function Members({pageNum}){
  
    return (
      <div>
        <MembersBody pageNum={pageNum}>
         <MembersPager pageNum={pageNum}/>
         </MembersBody>
      </div>
    )
  }
