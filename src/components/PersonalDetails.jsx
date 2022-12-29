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
  const [err, setErr] = useState(false)

  const handleSubmit = ()=>{


    
    if(!firstName || !gender || !lastName){
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
                gender:gender
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    alert(' success.')
                } else {
                    alert('Error.')
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

        <TextField placeholder='dd/mm/yyyy' label="Date of Birth" variant="outlined" style={{width:"8vw"}}>Date of Birth</TextField>
        <TextField placeholder="Email" label="Email" variant="outlined" style={{width:"26vw"}}>Email</TextField>
        
        </div>

        <div className="details_formsection">
        <TextField placeholder="Father's Full Name" label="Father's Full Name" variant="outlined" style={{width:"21vw"}}>Email</TextField>
        <TextField placeholder="Mother's Full Name" label="Mother's Full Name" variant="outlined" style={{width:"21vw"}}>Email</TextField>
        </div>

        <div className="details_formsection">
          <TextField placeholder='Address' label="Address" variant='outlined' style={{width:"23vw"}}>Address</TextField>
          <TextField placeholder="Phone Number" label="Phone Number" variant="outlined" style={{width:"9vw"}}>Phone Number</TextField>
          <TextField
          select
          variant='outlined'
          label="Marital Status"
          style={{width:"9vw"}}
         
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
         
          >
            <MenuItem value="Salaried">Salaried</MenuItem>
            <MenuItem value="Self Employed">Self Employed</MenuItem>
          </TextField>

          <TextField
          select
          variant='outlined'
          label="Annual Income"
          style={{width:"16vw"}}
         
          >
            <MenuItem value="Less than 1 lakhs">Less than 1 lakhs </MenuItem>
            <MenuItem value="1 - 5 lakhs">1 - 5 lakhs</MenuItem>
            <MenuItem value="5 - 10 lakhs">5 - 10 lakhs</MenuItem>
            <MenuItem value="10 - 50 lakhs">10 - 50 lakhs</MenuItem>
            <MenuItem value="More than 50 lakhs">More than 50 lakhs</MenuItem>
          </TextField>
        
        </div>

        <div className="details_formsection">
        <TextField placeholder="PAN Number" label="PAN Number" variant="outlined" style={{width:"16vw"}}>PAN Number</TextField>
        <TextField placeholder="Aadhar Number" label="Aadhar Number" variant="outlined" style={{width:"26vw"}}>Aadhar Number</TextField>
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