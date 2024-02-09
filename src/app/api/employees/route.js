import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const db = new PrismaClient();

export async function GET() {
    const data = await db.employee.findMany()
    return NextResponse.json({
        data
    })
}

export async function POST(req) {

    const result = await req.json()
    console.log(result)

    const {
        emp_first_name,
        emp_address
    } = result

    const response = await db.employee.create({
        data: {
            emp_first_name: emp_first_name,
            emp_address: emp_address
        }
    })

    // console.log(result)

    return NextResponse.json({
        response
    })

}

export async function DELETE(req) {

    console.log('hsafasfsa')
    const id = await req.json()
    console.log('id', id)

    const response = await db.employee.delete({
        where: {
            id: id
        }
    })

    return NextResponse.json({
        response
    })




}