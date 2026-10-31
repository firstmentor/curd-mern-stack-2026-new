
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function EditStudent() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [city, setCity] = useState("")

    // Get Student Data
    const getStudent = async () => {
        try {

            const response = await axios.get(
                `http://localhost:3000/api/studentView/${id}`
            )
            console.log(response)
            setName(response.data.name)
            setCity(response.data.city)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getStudent()
    }, [id])

    // Update Student
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            await axios.put(
                `http://localhost:3000/api/studentUpdate/${id}`,
                {
                    name,
                    city
                }
            )

            alert("Student Update Success")

            navigate("/displayStudent")

        } catch (error) {
            console.log(error)
            alert("Student Update Failed")
        }
    }

    return (
        <>
            <div>

                <h2>Edit Student</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Enter Name"
                    />

                    <br /><br />

                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        placeholder="Enter City"
                    />

                    <br /><br />

                    <button type="submit">
                        Update Student
                    </button>

                </form>

            </div>
        </>
    )
}

export default EditStudent
