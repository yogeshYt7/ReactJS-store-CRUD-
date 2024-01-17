import React, { useEffect, useState } from 'react'
import axiosInstance from"../helper/axiosInstance"
import {  useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import "./Global.css"; 
const Update = () => {

    let {id} = useParams()
    let navigate = useNavigate() ; 
    let [pname , setPname] = useState("")
    let [pprice , setpprice] = useState("")
    let [pqty , setpqty] = useState("")


    useEffect(()=>{
            let fetchdata = async()=>{
                    let {data} = await axiosInstance.get(`/posts/${id}`)
                    setPname(data.pname)
                    setpprice(data.pprice)
                    setpqty(data.pqty)
            }
            fetchdata()
    },[])


    let updateproduct = (e)=>{
        e.preventDefault()
        let payload ={
            pname ,pprice,pqty
        }
        axiosInstance.put(`/posts/${id}` , payload)
        toast.info(`${pname} updated `)
        navigate("/")

    }


 

  return (
    <div className='form-block'>
       <form  action="" style={{textAlign:"center"}}>
            <fieldset>
                    <legend>UPDATE PRODUCT</legend>
                    <br /> <br />
                    <label htmlFor="">Product Name : </label>
                    <input value={pname} type="text" onChange={(e)=>{
                            setPname(e.target.value)
                    }} /> <br /> <br />
                    <label htmlFor="">Product Qty : </label>
                    <input value={pqty} type="text" onChange={(e)=>{
                            setpqty(e.target.value)
                    }} /> <br /> <br />
                    <label htmlFor="">Product Price : </label>
                    <input value={pprice} type="text" onChange={(e)=>{
                            setpprice(e.target.value)
                    }}   /> <br /> <br />
                    <button onClick={updateproduct}>Update  </button>
                    <br /><br />
            </fieldset>
       </form>
    </div>
  )
}

export default Update