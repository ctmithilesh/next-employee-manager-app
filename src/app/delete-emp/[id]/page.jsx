'use client'
import { gotoDashboard } from '@/app/actions'
import axios from 'axios'
import { useParams, redirect } from 'next/navigation'
import React, { useEffect } from 'react'

const Page = () => {

    const params = useParams()
    const { id } = params
    console.log(id)

    useEffect(() => {

        deleteEmp()
    })

    const deleteEmp = async () => {
        try {
            const response = await axios.delete('/api/employees', { data: id })
            console.log(response)

        }
        catch (e) {
            console.log(e)
        }
        
        // redirect in client component via server actions only 
        await gotoDashboard()

    }
    return (
        <div>
            <h1>Page </h1>
        </div>

    )
}

export default Page