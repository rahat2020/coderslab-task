import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2';
import GetUser from './GetUser';

// steps to do
// {
//     "params": {
//       "name": "Test Name",
//       "gender": "male", // male,female
//       "email": "test@name.com",
//       "phone": "01712345678",
//       "blood": "A+", // A+,B+,AB+,AB-,O+,O-
//       "address": "Test Address",
//       "field_of_study": "Test Subject",
//       "role": "student" // super-admin,admin,executive,teacher,student
//     },
//     "model": "user",
//   }



const CreateUser = () => {

    // const base api
    const baseAPi = "https://cadd-corner-backend.coderslab.com.bd"

    // fetch category
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const obj = {
                "label": "name",
                "model": "category"
            }
            const res = await axios.post('https://cadd-corner-backend.coderslab.com.bd/api/v1/models/dropdown', obj)
            setData(res?.data?.category)
        }
        fetchApi()
    }, [])

    // declaring states
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [blood, setBlood] = useState("")
    const [address, setAddress] = useState("")
    const [field_of_study, setFieldOfStudy] = useState("")
    const [role, setRole] = useState("")

    const hadnleSubmit = async (e) => {
        e.preventDefault()
        if (!name || !gender || !email || !blood || !address) {
            Swal.fire({
                icon: "error",
                title: "Please fill up forms all input"
            })
        } else {
            const dataObj = {
                "params": { "name": name, "role": role, "email": email, "phone": phone, "blood": blood, "address": address, "field_of_study": field_of_study, "gender": gender },
                "model": "user"
            }
            try {
                const res = await axios.post("https://cadd-corner-backend.coderslab.com.bd/api/v1/models/store", dataObj)
                console.log, ("res of users", res)
                console.log, ("res of users", res.data)
                if (res?.message === "User stored successfully.") {
                    console.log('successful')
                    Swal.fire({
                        icon: "success",
                        title: "User created successfully"
                    })
                }
            } catch (err) {
                console.log(err)
            }
        }

    }


    return (
        <div className='p-2 shadow-sm'>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Blood group</Form.Label>
                        <Form.Select onChange={(e) => setBlood(e.target.value)}>
                            <option>Choose your blood group</option>
                            <option>{blood}</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Role</Form.Label>
                        <Form.Select onChange={(e) => setRole(e.target.value)}>
                            <option>Choose your role</option>
                            <option>{role}</option>
                            {/* {data &&
                                data?.map((item, i) => (
                                    <option value={item?.label} key={i}>{item?.label}</option>
                                ))
                            } */}
                            <option value="student">student</option>
                            <option value="admin">admin</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select onChange={(e) => setGender(e.target.value)}>
                            <option>Choose your gender</option>
                            <option>{gender}</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState" className='mb-3'>
                        <Form.Label>Field of study</Form.Label>
                        <Form.Select onChange={(e) => setFieldOfStudy(e.target.value)}>
                            <option>{field_of_study}</option>
                            <option>Choose your study</option>
                            <option value="BBA">BBA</option>
                            <option value="BSC">BSC</option>
                            <option value="BA">BA</option>
                            <option value="CSE">CSE</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" onClick={hadnleSubmit}>
                    Submit
                </Button>
            </Form>

            <div className="mt-5">
                <h3>User lists</h3>
                <GetUser />
            </div>
        </div>
    )
}

export default CreateUser