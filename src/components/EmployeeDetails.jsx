import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const EmployeeDetails = () => {
    const {state} = useLocation()
    const navigate = useNavigate()
    const [edit, setEdit] = React.useState(false)
    const [employee, setEmployee] = React.useState(state)

    const handleUpdate = async (e) => {
        e.preventDefault()
        const res = await fetch(`https://dummy.restapiexample.com/api/v1/update/${state.id}`, {
            method: 'PUT',
            body: JSON.stringify({...employee, age: employee.employee_age * 1}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        if (res.ok){
            console.log("Update successfull")
            setEdit(false)
            setEmployee({...employee, data})
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        }
        else{
            console.log("Update failed")
            setEmployee(state)
            setEdit(false)
        }
    }

    const handleDelete = async () => {
        const res = await fetch(`https://dummy.restapiexample.com/api/v1/delete/${state.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        if (res.ok){
            console.log("Delete successfull")
            setTimeout(() => {
                navigate('/')
            }, 2000)
        }
        else{
            console.log("Delete failed")
        }
    }

    const toggleUpdate = () => {
        setEdit(true)
    }

    const handleEdit = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.value})
        console.log(employee)
    }

  return (
    <div className='mx-28'>
        <p className='mt-8 text-xl font-bold text-teal-800'>Employee Details</p>
        {
            edit ?
            <form onSubmit={handleUpdate} className='mt-4 flex justify-between bg-gray-100 px-4 py-4 rounded-lg'>
                <div className='flex flex-col gap-4'>
                    <p className='text-gray-500'>Name: 
                        <input className='mx-2 rounded-lg outline-none px-2 py-1' type="text" name="employee_name" value={employee.employee_name} onChange={handleEdit} /> 
                    </p>
                    <p className='text-gray-500'>Salary: 
                        <input className='mx-2 rounded-lg outline-none px-2 py-1' type="text" name="employee_salary" value={employee.employee_salary} onChange={handleEdit} /> 
                    </p>
                    <p className='text-gray-500'>Age: 
                        <input className='mx-2 rounded-lg outline-none px-2 py-1' type="number" name="employee_age" value={employee.employee_age} onChange={handleEdit} /> 
                    </p>
                </div>
                <div className='flex gap-3'>
                    <button type='submit' className='cursor-pointer group text-gray-600 px-2 py-2 border h-fit rounded-lg border-gray-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:scale-110">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </button> 
                    <button type='button' onClick={handleDelete} className='cursor-pointer group text-red-600 px-2 py-2 border h-fit rounded-lg border-red-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:scale-110">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                </div>
            </form> : 
            <div className='mt-4 flex justify-between bg-gray-100 px-4 py-4 rounded-lg'>
                <div className='flex flex-col gap-4'>
                    <p className='text-gray-500'>Name: 
                        <span className="font-medium text-teal-800"> {state.employee_name}</span>
                    </p>
                    <p className='text-gray-500'>Salary: 
                        <span className="font-medium text-teal-800"> {state.employee_salary.toLocaleString()}</span>
                    </p>
                    <p className='text-gray-500'>Age: 
                        <span className="font-medium text-teal-800"> {state.employee_age}</span>
                    </p>
                </div>
                <div className='flex gap-3'>
                    <button onClick={toggleUpdate} className='cursor-pointer group text-gray-600 px-2 py-2 border h-fit rounded-lg border-gray-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:scale-110">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </button>
                    <button type='button' onClick={handleDelete} className='cursor-pointer group text-red-600 px-2 py-2 border h-fit rounded-lg border-red-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:scale-110">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                </div>
            </div>
        }
    </div>
  )
}

export default EmployeeDetails
