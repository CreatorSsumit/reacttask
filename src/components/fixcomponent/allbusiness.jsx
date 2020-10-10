import React,{useEffect,useState} from 'react'
import {connect} from "react-redux";
import {Link} from "react-router-dom"
import {showbusinessdetails} from "../../actions/index"
import firebasedb from "../../firebase/index";
import axios from "axios"

 function Showallbusiness() {

const [alldata,setalldata] = useState([])
const [blank, setblank] = useState(true)

useEffect(()=>{
  fetchdata()
})



 var fetchdata =()=>{
  axios.get('https://react-crud-9f4ad.firebaseio.com/businessdata.json').then(
   
 ({data}) => {

  const userArr = [];
 
   for (const key in data){
   userArr.push({
     datas:data[key],
     key:key
   })
   if(userArr.length < 0 ||null||undefined){
console.log("jhgf")
setblank(true)
   }
   else{
    setblank(false)
 }
  
  

 }
 setalldata(userArr)
})}

 
 

const deletedata = (e)=>{
  var key = e.key
  axios.delete(`https://react-crud-9f4ad.firebaseio.com/businessdata/${key}.json`).then( uers=>{
    fetchdata()

    setblank(true)
  })
 
}

// businessname:bname,
//     businessownername:boname,
//     grpcount:gmc,
//     category:category

    return (
        <div>
         {blank ?  <h5 className="card-title p-5 text-center">No User Registred </h5> : null}
        {alldata.map((e)=>{
          return(<div>
            <div className="row">
        
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
          <h5 className="card-title">business name - {e.datas.businessname}</h5>
          <h6 className="card-title">owner name - {e.datas.businessownername}</h6>
          <p className="card-text">Grp members = {e.datas.grpcount}</p>
          <button href="#" className="btn btn-primary">Update</button>
          <button href="#" onClick={deletedata.bind(this,e)} className="ml-3 btn btn-warning">Delete</button>
      </div>
    </div>
  </div>
</div>
        </div>  )
        })}
        </div>
    )

        }


function mapStateToProps(state){

     return{
         data:state
     }
   }
    
    

export default connect(mapStateToProps,null)(Showallbusiness)