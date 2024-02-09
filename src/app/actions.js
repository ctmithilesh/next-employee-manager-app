'use server'
import { redirect } from 'next/navigation'
import { db } from '@/db'
export async function gotoDashboard() {
    redirect(`/employee-dashboard`)
}


export async function fetchEmployees() {
    const response = await db.employee.findMany()

    return response;

}
export async function deleteEmp(emp_id) {
    const id = parseInt(emp_id)
    console.log('id', id)

    const response = await db.employee.delete({
        where: {
            id: id
        }
    })

    console.log(response)



}