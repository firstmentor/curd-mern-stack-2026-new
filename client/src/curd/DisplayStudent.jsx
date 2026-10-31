
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function DisplayStudent() {

    const [students, setStudents] = useState([])

    const getStudents = async () => {
        try {

            const response = await axios.get(
                "http://localhost:3000/api/studentDisplay"
            )

            setStudents(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    // Delete Student
    const deleteStudent = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete?"
        )

        if (confirmDelete) {
            try {

                await axios.delete(
                    `http://localhost:3000/api/studentDelete/${id}`
                )

                alert("Student Delete Success")

                getStudents()

            } catch (error) {
                console.log(error)
                alert("Delete Failed")
            }
        }
    }

    useEffect(() => {
        getStudents()
    }, [])

    return (
        <>
            <div>

                <h2>Display Students</h2>

                <table border="1" cellPadding="10">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>

                        {students.map((student, index) => (

                            <tr key={student._id || index}>

                                <td>{index + 1}</td>

                                <td>{student.name}</td>

                                <td>{student.city}</td>

                                <td>
                                    <Link to={`/editStudent/${student._id}`}>
                                        <button>Edit</button>
                                    </Link>
                                </td>

                                <td>
                                    <button
                                        onClick={() => deleteStudent(student._id)}
                                    >
                                        Delete
                                    </button>
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>
        </>
    )
}

export default DisplayStudent



// key = React ko har row ki unique identity batata hai.
// student._id = MongoDB ki unique ID.
// || index = Agar _id nahi hai to index use karo.