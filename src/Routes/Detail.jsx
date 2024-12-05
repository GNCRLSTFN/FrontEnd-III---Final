import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Detail.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {


  const [dentist, setDentist] = useState({})
  
  const params = useParams()

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(()=>{
    axios(url).then((res)=>{
      console.log(res.data)
      setDentist(res.data)
    })
  }, [url])

  return (
    <div className={`detail-card-container`}>
      <h1>Detail Dentist id {params.id}</h1>
      <div className='info-card'>
        <img src={require('../images/doctor.jpg')} alt="" />
        <h3>Name: {dentist.name}</h3>
        <h4>Email: {dentist.email}</h4>
        <p>Phone: {dentist.phone}</p>
        <p>Website: {dentist.website}</p>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail