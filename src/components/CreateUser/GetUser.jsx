import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const GetUser = () => {
    // fetch category
    const [data, setData] = useState([])

    const headings = ['Id', 'Name', 'Email', 'Phone', 'Actions']
    useEffect(() => {
        const fetchApi = async () => {
            const obj = {
                "model": "user",
                "columns": ["id", "name", "email", "phone"],
                "actions": ["view", "edit", "delete"],
            }
            const res = await axios.post('https://cadd-corner-backend.coderslab.com.bd/api/v1/models/get', obj)
            console.log('res of user lists', res?.data?.data?.headings)
            setData("res of users", res)
        }
        fetchApi()
    }, [])
    
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <div className=""></div>
                    {
                        data &&
                        headings.map((item, i) => (
                            <tr key={i}>
                                <th key={i} className='text-dark'>{item ? item : "n/a"}</th>
                            </tr>
                        ))
                    }
                </thead>
                <tbody>
                    {
                        data &&
                        data?.rows?.map((item, i) => (
                            <tr key={i} className="text-dark">
                                <td>{i + 1}</td>
                                <td>{
                                    item?.map((item) => (item?.column))
                                }</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        ))
                    }


                </tbody>
            </Table>
        </div>
    )
}

export default GetUser