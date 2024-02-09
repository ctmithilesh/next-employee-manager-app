'use client';
import { useRouter } from 'next/navigation'
import React from 'react'
const EmployeeTable = ({ data }) => {

    const router = useRouter()

    const deleteEmp = (id) => {
        console.log(id)

        router.push(`delete-emp/${id}`)


    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Address </th>
                        <th> Actions </th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.emp_first_name}</td>
                            <td>{item.emp_address}</td>
                            <td>
                                <button onClick={() => deleteEmp(`${item.id}`)}>
                                    Delete
                                </button>
                            </td>

                        </tr>


                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable