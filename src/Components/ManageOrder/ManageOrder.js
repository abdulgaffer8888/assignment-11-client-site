import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../context/useAuth';
import './ManageOrder.css'

const ManageOrder = () => {
    const {user}=useAuth()
    const [data,setData]=useState([])
    let num=0;
    useEffect(()=>{
        fetch(`https://macabre-cheateau-65418.herokuapp.com/order/${user.email}`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    const handleupdate=(id)=>{
        const url=`https://macabre-cheateau-65418.herokuapp.com/order/${id}`
        fetch(url,{
            method:'put',
            headers:{
                'content-type':'application/json'
            }
        }).then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert("updated successfully")
            }
        })
    }
    const handleDelete=(id)=>{
        const proceed=window.confirm("Are You Want to Delete")
        if(proceed){
            const url=`https://macabre-cheateau-65418.herokuapp.com/order/${id}`;
            fetch(url,{
                method:"delete",
                headers:{
                    'content-type':'application/json'
                }
            }).then(res=>res.json())
            .then(order=>{
                if(order.deletedCount>0){
                    alert('Deteted successfully')
                    const remainingUser=data.filter(d=>d._id!==id)
                    setData(remainingUser)
                }
            })
        }
    }
    return (
        <div className="booking-container">
        <Table striped bordered hover>
        <thead>
            <h4>My Booking</h4>
        </thead>
        <tbody>
            {
               data?.map(book=>     
                    <tr>
                    <td>{num=num+1}</td>
                    <td>{book.trips.name}</td>
                    <td>{book.trips.price} Tk</td>
                    <td>{book.status}</td>
                    <td>{book.email}</td>
                    <td><button onClick={()=>handleupdate(book._id)}>update status</button></td>
                    <td><button onClick={()=>handleDelete(book._id)}>X</button></td>
                    </tr>)
            }
        </tbody>
        </Table>
        </div>
    );
};

export default ManageOrder;