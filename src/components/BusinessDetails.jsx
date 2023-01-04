import React,{useState} from 'react'
import BreadCrump from "./BreadCrump"
import "../styles/BusinessDetails.css"
import { Link } from 'react-router-dom'
import { MenuItem, TextField, Typography, Button} from '@mui/material'


const BusinessDetails = () => {

  
  return (
    <>
      <BreadCrump data={"Personal Details > Business Details"} />
      <div className="business_details">

        <div className="details_form">
          <Typography variant="h5">Business Details</Typography>

          <div className="details_formsection">
            <TextField   placeholder="Company Name" label="Company Name" variant="outlined" style={{ width: "28vw" }} >Company Name</TextField>
            <TextField
              select
              variant='outlined'
              label="Company Type"
              style={{ width: "14vw" }}
              

            >
              <MenuItem value="LLP">LLP</MenuItem>
              <MenuItem value="Proprietorship"> Proprietorship</MenuItem>
              <MenuItem value="Private Limited">Private Limited</MenuItem>
              <MenuItem value="Public Limited">Public Limited</MenuItem>
              <MenuItem value="HUF">HUF</MenuItem>
            </TextField>

          </div>

          <div className="details_formsection">
            <TextField  placeholder='dd/mm/yyyy' label="Date of Incorporation" variant="outlined" style={{ width: "12vw" }}>Date of Incorporation</TextField>
            <TextField  placeholder='Company PAN Card No.' label="Company PAN Card No." variant="outlined" style={{ width: "14vw" }}>Company PAN Card No.</TextField>
            <TextField  placeholder='Company GST No.' label="Company GST No." variant="outlined" style={{ width: "15vw" }}>Company GST No.</TextField>
          </div>

          <div className="details_formsection">
            <TextField
              select
              variant='outlined'
              label="Nature of Business"
              style={{ width: "19vw" }}

            >
              <MenuItem value="Agriculture & Allied Consultation">Agriculture & Allied Consultation</MenuItem>
              <MenuItem value="Manufacturing">Manufacturing</MenuItem>
              <MenuItem value="Private Limited">Retail Trading</MenuItem>
              <MenuItem value="Wholesale Trading">Wholesale Trading</MenuItem>
              <MenuItem value="Service">Service</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </TextField>
            <TextField placeholder='Previous Year Annual Turnover In Lakhs ' label=" Previous Year Annual Turnover In Lakhs" variant="outlined" style={{ width: "23vw" }}>Previous Year Annual Turnover</TextField>
          </div>

          <div className="details_formsection">
            <TextField placeholder='Office Address' label="Office Address" variant="outlined" style={{ width: "28vw" }}>Office Address</TextField>
            <TextField
              select
              variant='outlined'
              label="Business Premises"
              style={{ width: "14vw" }}

            >
              <MenuItem value="Owned">Owned</MenuItem>
              <MenuItem value="Rental">Rental</MenuItem>
            </TextField>

          </div>

          <div className="details_formsection">
          <Link to="/LoanDetails" style={{textDecoration:"none"}}><Button variant="outlined" style={{background:"lightblue"}}>Submit</Button></Link>
          </div>



        </div>

      </div>
    </>
  )
}

export default BusinessDetails