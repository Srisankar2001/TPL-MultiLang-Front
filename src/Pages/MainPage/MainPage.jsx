import React, { useContext, useEffect, useState } from 'react'
import "./MainPage.css"
import {useTranslation} from "react-i18next"
import { LanguageSelector } from '../../Component/LanguageSelector/LanguageSelector'
import axiosInstance from '../../Config/AxiosConfig'
import { SideContext } from '../../Context/SideContext'

export const MainPage = () => {
  const {i18n,t} = useTranslation()
  const {side} = useContext(SideContext)
  const language = i18n.language
  const [data,setData] = useState([])
  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await axiosInstance.get(`/api/product/${language}`)
        if(response.data.status){
          setData(response.data.data)
        }else{
          alert(response.data.message)
        }
      }catch(error){
        alert(error.response?.data?.message || "Internal Server Error")
      }
    }
    fetchData()
  },[language,side])
  const renderData = () => {
    if(data.length === 0){
      return (<div className='mainpage_empty'>{t("noItem")}</div>)
    }else{
      return(
        <table>
          <tr>
            <th>{t("id")}</th>
            <th>{t("name")}</th>
            <th>{t("description")}</th>
            <th>{t("stock")}</th>
            <th>{t("price")}</th>
          </tr>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.stock}</td>
                <td>{item.price} LKR</td>
              </tr>
            ))}
        </table>
      )
    }
  }
  return (
    <div className={`mainpage_body ${side === "LTR" ? "ltr" : "rtl"}`}>
      <header>MainPage</header>
      <LanguageSelector/>
      {renderData()}
    </div>
  )
}
