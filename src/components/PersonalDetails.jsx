import {React, useState} from 'react'
import "../styles/PersonalDetails.css"
import { MenuItem, TextField, Typography, Button } from '@mui/material'
import BreadCrump from './BreadCrump';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import axios from 'axios';



const PersonalDetails = () => {

  const navigate = useNavigate();
   
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [gender, setGender] = useState("")
  const [date, setDate] = useState("")
  const [email, setEmail] = useState("")
  const [fatherName, setFatherName] = useState("")
  const [motherName, setMotherName] = useState("")
  const [address, setAddress] = useState("")
  const [phoneNo, setPhoneNo] = useState();
  const [maritialStatus, setMaritialStatus] = useState("")
  const [education, setEducation] = useState("")
  const [occupationType, setOccupationType] = useState("")
  const [income, setIncome] = useState("")
  const [panNo, setPanNo] = useState("")
  const [aadhar, setAadhar] = useState("");






  const [err, setErr] = useState(false)

  const handleSubmit = ()=>{
    if(!firstName || !lastName || !gender || !date || !email || !fatherName || !motherName || !address || !phoneNo || !maritialStatus || !education || !occupationType || !income || !panNo || !aadhar){
      setErr(true)
      return;
    }else{
      setErr(false)
      navigate("/BusinessDetails")
    }

    console.log(firstName, lastName)
        axios.post('http://localhost:4000/details',
            {
                firstName: firstName,
                lastName: lastName,
                gender:gender,
                date:date,
                email:email,
                fatherName:fatherName,
                motherName:motherName,
                address:address,
                phoneNo:phoneNo,
                maritialStatus:maritialStatus,
                education:education,
                occupationType:occupationType,
                income:income,
                panNo:panNo,
                aadhar:aadhar
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    console.log("success");
                } else {
                    console.log("err");
                }
            }).catch(err => {
                console.log(err)
            })
  }

  

  return (
    <>
    <BreadCrump data={"Personal Details"}/>
    <div className="PersonalDetails">
      
      <div className="details_form">
        <Typography variant="h5">Personal Details</Typography>
        <div className="details_formsection">
          <TextField placeholder="Enter first name" label="First Name" variant="outlined" style={{width:"21vw"}} value={firstName} onChange={(e)=>setFirstName(e.target.value)} >First Name</TextField>
          <TextField placeholder="Enter last name" label="Last Name" variant="outlined" style={{width:"21vw"}} value={lastName} onChange={(e)=>setLastName(e.target.value)}>Last Name</TextField>
        </div>

        <div className="details_formsection">
        <TextField
          select
          variant='outlined'
          label="Gender"
          style={{width:"7vw"}}
          value={gender}
          onChange={(e)=>setGender(e.target.value)}
         
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>

        <TextField value={date} onChange={(e)=>setDate(e.target.value)} placeholder='dd/mm/yyyy' label="Date of Birth" variant="outlined" style={{width:"8vw"}}>Date of Birth</TextField>
        <TextField value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" label="Email" variant="outlined" style={{width:"26vw"}}>Email</TextField>
        
        </div>

        <div className="details_formsection">
        <TextField value={fatherName} onChange={(e)=>setFatherName(e.target.value)} placeholder="Father's Full Name" label="Father's Full Name" variant="outlined" style={{width:"21vw"}}>Email</TextField>
        <TextField value={motherName} onChange={(e)=>setMotherName(e.target.value)} placeholder="Mother's Full Name" label="Mother's Full Name" variant="outlined" style={{width:"21vw"}}>Email</TextField>
        </div>

        <div className="details_formsection">
          <TextField value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Address' label="Address" variant='outlined' style={{width:"23vw"}}>Address</TextField>
          <TextField value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)} placeholder="Phone Number" label="Phone Number" variant="outlined" style={{width:"9vw"}} type="number" >Phone Number</TextField>
          <TextField
          select
          variant='outlined'
          label="Marital Status"
          style={{width:"9vw"}}
          value={maritialStatus}
          onChange={(e)=>setMaritialStatus(e.target.value)}
         
          >
            <MenuItem value="Single">Single</MenuItem>
            <MenuItem value="Married">Married</MenuItem>
            <MenuItem value="Divorced">Divorced</MenuItem>
            <MenuItem value="Widowed">Widowed</MenuItem>
          </TextField>
        </div>

        <div className="details_formsection">
        <TextField
          select
          variant='outlined'
          label="Education"
          style={{width:"12vw"}}
          value={education}
          onChange={(e)=>setEducation(e.target.value)}
         
          >
            <MenuItem value="Under Graduate">Under Graduate</MenuItem>
            <MenuItem value="Graduate">Graduate</MenuItem>
            <MenuItem value="Post Graduate">Post Graduate</MenuItem>
          </TextField>

          <TextField
          select
          variant='outlined'
          label="Occupation Type"
          style={{width:"13vw"}}
          value={occupationType}
          onChange={(e)=>setOccupationType(e.target.value)}
         
          >
            <MenuItem value="Salaried">Salaried</MenuItem>
            <MenuItem value="Self Employed">Self Employed</MenuItem>
          </TextField>

          <TextField
          select
          variant='outlined'
          label="Annual Income"
          style={{width:"16vw"}}
          value={income}
          onChange={(e)=>setIncome(e.target.value)}
         
          >
            <MenuItem value="Less than 1 lakhs">Less than 1 lakhs </MenuItem>
            <MenuItem value="1 - 5 lakhs">1 - 5 lakhs</MenuItem>
            <MenuItem value="5 - 10 lakhs">5 - 10 lakhs</MenuItem>
            <MenuItem value="10 - 50 lakhs">10 - 50 lakhs</MenuItem>
            <MenuItem value="More than 50 lakhs">More than 50 lakhs</MenuItem>
          </TextField>
        
        </div>

        <div className="details_formsection">
        <TextField value={panNo} onChange={(e)=>setPanNo(e.target.value)} placeholder="PAN Number" label="PAN Number" variant="outlined" style={{width:"16vw"}}>PAN Number</TextField>
        <TextField value={aadhar} onChange={(e)=>setAadhar(e.target.value)} placeholder="Aadhar Number" label="Aadhar Number" variant="outlined" style={{width:"26vw"}} type="number">Aadhar Number</TextField>
        </div>

        <div className="details_formsection">
        <Button variant="outlined" style={{background:"lightblue"}} onClick={handleSubmit}>Submit</Button>

       {err && <ErrorMessage/>}
        </div>


      </div>
    </div>
    </>

  )
}

export default PersonalDetails