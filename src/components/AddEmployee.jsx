import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddEmployee = () => {
    const navigate = useNavigate()

    const [employee, setEmployee] = React.useState({
        name: '',
        salary: '',
        age: '',
    })

    const handleChange = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.value})
    }

  const addEmployee = async (e) => {
    e.preventDefault()
    const res = await fetch('https://dummy.restapiexample.com/api/v1/create', {
      method: 'POST',
      body: JSON.stringify({
        employee_name: e.target.name.value,
        employee_salary: e.target.salary.value,
        employee_age: e.target.age.value,
        profile_image: ''
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    if (res.ok){
      console.log("Employee added successfully")
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
    else{
      console.log("Employee addition failed")
    }
  }

  return (
    <div className='mx-28 my-8'>
        <form onSubmit={addEmployee} className='mx-80 px-8 py-4 border rounded-lg flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Name</label>
                <input className='outline-none border px-2 py-1 rounded-lg' name="name" type="text" value={employee.name} onChange={handleChange} />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Salary</label>
                <input className='outline-none border px-2 py-1 rounded-lg' name="salary" type="text" value={employee.salary} onChange={handleChange} />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Age</label>
                <input className='outline-none border px-2 py-1 rounded-lg' name="age" type="number" value={employee.age} onChange={handleChange} />
            </div>
            <button className='my-4 bg-green-600 w-fit py-3 rounded-lg text-white hover:opacity-90 px-4 self-center'>Add Employee</button>
        </form>
    </div>
  )
}

export default AddEmployee
