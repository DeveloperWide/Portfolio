import axios from "axios";
import { useEffect, useState } from "react";

function EmialList() {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_PATH}/user/emails`).then((res) => {
            setData(res.data.data);
        }).catch((err) => {
            console.log(err)
        })
    }, []);

    console.log(data)
    return (
        <div>
            <table className="table w-[90%] mx-10 my-20">
                <thead>
                    <th className="table-header">Date</th>
                    <th className="table-header text-start text-teal-950">Users Email</th>
                </thead>
                <tbody>
                    {data.map((obj) => {
                        return (
                            <tr>
                                <td className="table-data w-[20%]">{new Date(obj.subscribedAt).toLocaleString("en-IN", {
                                    timeZone: "Asia/Kolkata",
                                })}</td>
                                <td className="table-data">{obj.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default EmialList;