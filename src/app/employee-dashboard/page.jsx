'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EmployeeTable from '../components/EmployeeTable'
import Loading from '../components/Loading'
import Navigation from '../components/Navigation'

const Page = () => {

    const [myData, setData] = useState(null)


    const dataCondition = myData != null && myData.length > 0
    useEffect(() => {

        fetchEmployees()
    }, [dataCondition])

    const fetchEmployees = async () => {
        const result = await axios.get('/api/employees')
        console.log(result)
        const { data } = result.data
        console.log(data)
        setData(data)
    }
    return (
        <>
            <Navigation />
            {dataCondition ? <EmployeeTable data={myData} /> : <Loading />}

        </>
    )
}

export default Page