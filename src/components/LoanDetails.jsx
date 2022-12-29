import { Button, TextField, Typography } from '@mui/material'
import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/LoanDetails.css"
import BreadCrump from './BreadCrump'

const LoanDetails = () => {


  const [amount, setAmount] = useState(500)
  const [rate, setRate] = useState(12)
  const [months, setMonths] = useState(6)

  const emi = ((amount / months) + rate).toFixed(2);


  
  
  return (
    <>
      <BreadCrump data={"Personal Details > Business Details > Loan Details"} />
      <div className="loanDetails">
        <Typography variant="h5">Personal Details</Typography>
      </div>

      <div className="form_container">
        <div className="form_data">
          <Typography variant="h6">Loan Amount :</Typography>
          <TextField value={amount} label="Loan Amount" variant="outlined" style={{ width: "14vw" }} type="number" onChange={(e)=>setAmount(e.target.value)}></TextField>
        </div>
        <div className="form_data">
          <Typography variant="h6">Rate of Interest :</Typography>
          <TextField value={rate} label="Rate of Interest" variant="outlined" style={{ width: "14vw" }} type="number" onChange={(e)=>setRate(e.target.value)}></TextField>
        </div>
        <div className="form_data">
          <Typography variant="h6">Time Period(Month) :</Typography>
          <TextField value={months} label="Time Period" variant="outlined" style={{ width: "14vw" }} type="number" onChange={(e)=>setMonths(e.target.value)} ></TextField>
        </div>
        <div className="form_data">
          <Typography variant="h6">Your Monthly EMI :</Typography>
          <Typography variant="h6"> {emi} </Typography>
        </div>
        <div className="form_data">
        <Link to="/" style={{textDecoration:"none"}}><Button variant="outlined" style={{ background: "lightblue" }}>Final Submit</Button></Link>
        </div>
      </div>


    </>
  )
}

export default LoanDetails