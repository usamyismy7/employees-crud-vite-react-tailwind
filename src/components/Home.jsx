import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const [loading, setLoading] = React.useState(true)
  const [employees, setEmployees] = React.useState([])
  const navigate = useNavigate()

  React.useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch('https://dummy.restapiexample.com/api/v1/employees', {
      })
        .then(async res =>  {
          const data = await res.json()
          if (res.ok) {
            console.log(data.data)
            setEmployees(data.data)
          }
        })
        .catch(err => {
            return <p>Error 429! Too many requests</p>
        })
    }

    fetchWorkouts()
  }, [])

  React.useEffect(() => {
    console.log(employees)
    if (employees?.length > 0) setLoading(false)
  }, [employees])

// id, employee_name, employee_salary, employee_age, profile_image 

  return (
    <div className='mx-28 mb-16 mt-8 flex flex-col gap-8'>
        <div className='self-center px-4 py-3 border rounded-lg flex gap-2 h-fit items-center w-fit cursor-pointer group hover:bg-green-600'
            onClick={() => navigate('/new-employee')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-700 group-hover:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <p className='text-green-700 group-hover:text-white'>Add New Employee Data</p>
        </div>
      {loading ? <p>Loading...</p> : 
        <div className="mt-4 flex flex-col gap-3 min-w-fit">
          {
            employees?.map(employee => (
                <Link key={employee.id} to={`employee/${employee.id}`} state={employee} className="list-item list-inside hover:underline">{employee.employee_name}</Link>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Home
