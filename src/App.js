import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';

import './App.css';
import { useState } from 'react';




function App() {

  //js code 
  const[Interest , setInterest]= useState(0)
  const[Principle , setPrinciple]= useState(0)
  const[Rate , setRate]=useState(0)
  const[Year , setYear]=useState(0)
  const[isPrinciple,setisPrinciple]=useState(true)
  const[isRate, setisRate]=useState(true)
  const[isYear, setisYear]=useState(true)

const validate = (e)=>
{
  const{name,value}=e.target
  /* console.log(name, value); 
  console.log(typeof(value));
  console.log(value.match( /^[0-9]+$/));*/

  if(!!value.match(/^[0-9]*.?[0-9]+$/))  // !! is given to convert into boolean value
  {
   if(name=="principle")
    {
      //PRINCIPLE

     setPrinciple(value)
      setisPrinciple(true)
    }
    else if (name==='rate')
    {
      //RATE

      setRate(value)
      setisRate(true)
    }
    else
    {
      //YEAR
      
      setYear(value)
      setisYear(true)
    }
  }

  else
  {
    if(name==="principle")
    {
       setPrinciple(value)
       setisPrinciple(false)
    }
    else if (name ==='rate')
    {
      setRate(value)
      setisRate(false)
    }
    else
    {
      setYear(value)
      setisYear(false)
    }


  }
}

  const handleCalculate =(e)=>{
    e.preventDefault()
    if(!Principle || !Rate || !Year)
    {
      alert("Enter Valid Data")
    }
    else
    {
      setInterest(Principle*Rate*Year/100)
    }
  }

  const handleReset=(e)=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setisPrinciple(0)
    setisRate(0)
    setisYear(0)

  }


  return (
    //jsx code 

    <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
     <div style={{width:'500px'}} className='bg-light p-5 rounded'>

       <h1>Simple Interest</h1>
       <p>Calculate your Simple Interest Easily</p>

       <div style={{height:'150px'}} className='flex-column bg-warning d-flex justify-content-center align-items-center'>
        <h1> ₹ {''} {Interest}</h1>
        <p>Total Column Interest</p>
       </div>

       <form className='mt-5' onSubmit={handleCalculate}>

      {/* PRINCIPLE INPUT */}

        <div className='mb-3'>
        <TextField name='principle' className='w-100 ' value={Principle || ''} onChange={(e)=>validate(e)} id="outlined-basic" label="Principle Amount  (₹)" variant="outlined" />  {/* using // for empty sring */}
        </div>
        {!isPrinciple &&
        <div>
        <p className='text-danger'>Invalid Input</p>
        </div>}

       {/* RATE INPUT */}

        <div className='mb-3'>
        <TextField className='w-100 ' name='rate' value={Rate || ''} onChange={(e)=>validate(e)} id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />
        {!isRate &&
        <div>
        <p className='text-danger'>Invalid Input</p>
        </div>}
      

          {/* YEAR INPUT */}

        </div>
        <div className='mb-3'>
        <TextField className='w-100 ' name='year' value={Year || ''} onChange={(e)=>validate(e)} id="outlined-basic" label="Year (Yr)" variant="outlined" />
        {!isYear &&
        <div>
        <p className='text-danger'>Invalid Input</p>
        </div>}

        </div>
        <div className='mb-3 mt-5'>

        <Stack direction="row" spacing={2}>
        <Button disabled={isPrinciple && isRate && isYear?false:true} type='onSubmit' className='bg-success' style={{width:'200px', height:'50px'}} variant="contained">Calculate</Button>

        <Button onClick={handleReset} style={{width:'200px', height:'50px'}}  variant="outlined">Reset </Button>

      </Stack>
          
        </div>
       </form>
       
       </div>
    
    </div>
  );
}

export default App;
