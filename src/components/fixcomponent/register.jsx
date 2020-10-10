
import React,{useState,useEffect} from 'react';
import { register } from '../../serviceWorker';
import firebasedb from "../../firebase/index"

 function Register(props) {

    const [bname, setbname] = useState('')
    const [boname, setboname] = useState('')
    const [gmc, setgmc] = useState('')
    const [category, setcategory] = useState('')
    const [showsignal, setshowsignal] = useState(false)
    const [showsnipit, setshowsnipit] = useState(false)
    

  
  var d = new Date()

 
const registerdata = {
    businessname:bname,
    businessownername:boname,
    grpcount:gmc,
    category:category,
    date:new Date(),
}


var showregistered =()=>{
    setbname('')
    setboname('')
    setgmc('')
    setcategory('')

    setTimeout(function(){
      setshowsignal(true)
    }, 3000);
   }


 const handleformsubmit = e =>{
     e.preventDefault();
     setshowsnipit(true)
     firebasedb.child('businessdata').push(registerdata,err => {
         if (err) 
         console.log(err)
         else 
         showregistered()
         setshowsnipit(false)
        
        })
     
   
    
 }

    return (
       <div className='jumbotron jumbotron-fluid container p-5'>
            <h4 class="display-6 text-center">Register Your Business</h4>
            {showsignal ? <h6 class="mt-4 display-6 text-center text-success">You are successfully registered</h6> : null}
            {showsnipit ? <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div> : null }
           <form onSubmit={handleformsubmit}>
  <div class="form-row mt-5">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Business Name</label>
      <input type="text" class="form-control" id="inputEmail4" value={bname} onChange={(e)=> setbname(e.target.value)} required/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Business Owner name</label>
      <input type="text" class="form-control" id="inputPassword4" value={boname}  onChange={(e)=> setboname(e.target.value)} required />
    </div>

  </div>
  <div class="form-group">
    <label for="inputAddress">Group members count</label>
    <input required type="number" class="form-control" id="inputAddress" value={gmc} placeholder="Group member count"  onChange={(e)=> setgmc(e.target.value)} />
  </div>

  <div class="form-row">
   <div class="form-group col-md-4">
      <label for="category">Select Category of Business</label>
      <select id="category" class="form-control" value={category}  onChange={(e)=> setcategory(e.target.value)} required>
        <option selected>Choose...</option>
        <option>Food panda</option>
        <option>IT Comapnay</option>
      </select>
    </div>
  
  </div>
  <div class="form-group col-md-6">
      <label for="inputEmail4">Date/time</label>
      <input type="text" class="form-control" id="inputEmail4" value={d}  required/>
    </div>
 
  <button type="submit"  class="mt-3 btn btn-primary w-100">Sign in</button>
</form>
       </div>
    )
}
  

export default Register;