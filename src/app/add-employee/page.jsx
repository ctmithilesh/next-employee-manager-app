'use client';
import React, { useEffect } from 'react'
import Navigation from '../components/Navigation'
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { gotoDashboard } from '../actions';

const Page = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    useEffect(() => {




    })

    const onSubmit = async (data) => {
        console.log(data)
        const { emp_first_name, emp_address } = data
        try {
            await axios.post('/api/employees', { emp_first_name, emp_address })
                .then(res => {
                    console.log(res)

                })
                .catch(err => {
                    console.log(err)
                })
        }
        catch (e) {
            console.log(e)
        }

        await gotoDashboard()
    }
    return (
        <>
            <Navigation />
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="emp_first_name"
                                    className="input input-bordered"
                                    {...register("emp_first_name", { required: true })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="emp_address"
                                    className="input input-bordered"
                                    {...register("emp_address", { required: true })}
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page