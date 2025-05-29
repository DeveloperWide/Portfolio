import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_PATH}/user/messages`).then((res) => {
            setData(res.data.data)
            console.log(data)
        }).catch((er) => {
            console.log(er)
        })
    }, [])

    const onClickHandler = (msgId) => {
       axios.patch(`${import.meta.env.VITE_API_PATH}/user/${msgId}`).then(() => {
        axios.get(`${import.meta.env.VITE_API_PATH}/user/messages`).then((res) => {
            setData(res.data.data)
        }).catch((err) => {
            console.log(err.response)
        })
       }).catch((err) => {
        console.log(err.response)
       })
    }

    return (
        <div className="mx-20 my-10">
            <table className="table w-full">
                {/* Table Head */}
                <thead >
                    <tr>
                        <th className="table-header">Name</th>
                        <th className="table-header">Email</th>
                        <th className="table-header">Message</th>
                        <th className="table-header">Responded</th>
                    </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                    {data.map((obj) => {
                        return (

                            <tr>
                                <td className="table-data ">{obj.name}</td>
                                <td className="table-data" >
                                    <a href={`mailto:${obj.email}`} className="text-lg">{obj.email}</a>
                                </td>
                                <td className="table-data text-green-800">
                                    <q>{obj.message.trim()}</q>
                                </td>
                                <td className="table-data text-center">
                                    
                                    {obj.responded ? <p className="text-green-600 font-semibold"><i className="fa-solid fa-check px-1"></i>Done</p> : <button className="bg-gray-600 py-2 rounded w-[70%] text-white cursor-pointer hover:bg-gray-500" onClick={() => {
                                        onClickHandler(obj._id)
                                    }}>Yes</button>}
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};


export default Users;