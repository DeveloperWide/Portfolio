import axios from "axios";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const Newsletter = () => {
    let [data, setData] = useState({
        email: ""
    });

    const onChangeHandler = (e) => {
        setData((prevObj) => {
            return { ...prevObj, [e.target.name]: e.target.value }
        });
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            axios.post(`${import.meta.env.VITE_API_PATH}/user/email`, data).then((res) => {
                setData({
                    email: ""
                })
                Swal.fire({
                    title: "Success!",
                    text: res.data.message,
                    icon: "success",
                    confirmButtonText: "Cool",
                });

            }).catch((err) => {
                Swal.fire({
                    title: "Error!",
                    text: err.response.data.message,
                    icon: "error",
                    confirmButtonText: "Cool",
                });
            })
        } catch (err) {
            console.log(err)
        }
    }



    return (
        <div className="flex md:flex-row flex-col border border-gray-500/30 rounded-lg items-start md:items-center justify-between gap-5 text-sm max-w-5xl bg-white p-8 mx-auto mb-20">
            {/* Left Section */}
            <div className="max-w-md w-full">
                <h1 className="text-3xl font-semibold text-gray-700">Subscribe to our newsletter</h1>
                <p className="text-gray-500 mt-2">
                    We love all things except in our own little way, and whoever wants to gain them will. Two things happen at the same time, in pain.
                </p>
                <div className="">
                    <form onSubmit={onSubmitHandler} className="flex items-center gap-4 mt-10">
                        <input
                            className="py-2 px-3 w-full outline-none focus:border-indigo-500/60 transition max-w-64 border border-gray-500/30 rounded-md"
                            type="text"
                            value={data.email}
                            name="email"
                            onChange={onChangeHandler}
                            placeholder="Enter your email"
                        />
                        <button type="submit" className="bg-indigo-700  transition-all px-6 py-2 rounded text-white font-medium hover:bg-indigo-600 cursor-pointer">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Weekly Articles Section */}
            <div className="space-y-4 md:max-w-48">
                <div className="flex items-center gap-3">
                    <div className="bg-gray-500/10 w-max p-2.5 rounded">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.834 20.167H9.167c-3.457 0-5.186 0-6.26-1.074s-1.074-2.802-1.074-6.26V11c0-3.457 0-5.185 1.074-6.26 1.074-1.073 2.803-1.073 6.26-1.073h3.667c3.456 0 5.185 0 6.259 1.074s1.074 2.802 1.074 6.26v1.833c0 3.457 0 5.185-1.074 6.259-.599.599-1.401.864-2.593.981M6.417 3.667V2.292m9.167 1.375V2.292m4.125 5.958H9.854m-8.02 0h3.552"
                                stroke="#6B7280"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <h3 className="text-base font-medium text-gray-800">Weekly articles</h3>
                </div>
                <p className="text-gray-500">
                    Not labor is the result of great labors. Likewise, not desire is the desire of two things.
                </p>
            </div>

            {/* No Spam Section */}
            <div className="space-y-4 md:max-w-48">
                <div className="flex items-center gap-3">
                    <div className="bg-gray-500/10 w-max p-2.5 rounded">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.834 3.208v6.875-5.958a1.375 1.375 0 1 1 2.75 0v5.958-3.208a1.375 1.375 0 1 1 2.75 0v7.791a5.5 5.5 0 0 1-5.5 5.5H11.8a5.5 5.5 0 0 1-3.76-1.486l-4.546-4.261a1.594 1.594 0 1 1 2.218-2.291l1.623 1.623V5.958a1.375 1.375 0 1 1 2.75 0v4.125-6.875a1.375 1.375 0 1 1 2.75 0"
                                stroke="#6B7280"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <h3 className="text-base font-medium text-gray-800">No spam</h3>
                </div>
                <p className="text-gray-500">
                    All the other offices, except one, are not to be taken lightly. Animals fall prey to pleasure.
                </p>
            </div>
        </div>
    );
};

export default Newsletter;
