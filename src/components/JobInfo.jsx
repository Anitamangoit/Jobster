import Wrapper from "../assets/wrappers/Job";

import React from 'react'

const JobInfo = ({icon,text}) => {
  return (
   <Wrapper>
    <span className="icon">{icon}</span>
    <span className="text">{text}</span>
   </Wrapper>
  )
}

export default JobInfo