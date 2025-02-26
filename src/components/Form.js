import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import '../components/form.css';
import '../components/nav.css';

function Form({ onClose }) {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
    const [values,setValues] = useState({
      firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    referralUsername: '',
    referralEmail: '',
    referralPhone: '',
    referralId: ''

    })

    // const handleChange = (event) => {
    //   setValues({...values,[event.target.name]:[event.target.value]})
    // }
    // Delay function fixed
    const delay = (d) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, d * 1000);
        });
    }

    // Submit function
    const onSubmit = async (data) => {
        // Simulate form submission delay
        let r =await fetch("http://localhost:3000/")
        let res = await r.text()
        await delay(2); 
        console.log(data,res);
        // You can add additional logic here to process the data (e.g., send it to a server)
        try {
          // Send form data to the backend via POST request
          const response = await fetch('http://localhost:5000/refer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Sending form data as JSON
          });
      
          const result = await response.json();
      
          if (response.ok) {
            // Success response from backend
            alert('Form submitted successfully!');
          } else {
            // Error response from backend
            alert(`Error: ${result.message}`);
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('Something went wrong. Please try again later.');
        }
    };

    return (
        <>

            <div className="flex justify-center align-center m-5 p-5 bg-light">
                <h3>Refer & Earn</h3>
                <p>Fill your Details</p>
                <form className="row g-3 bg-light" onSubmit={handleSubmit(onSubmit)}>
                    {/* First Name */}
                    <div className="col-md-6">
                        <label htmlFor="fname" className="form-label">First Name</label>
                        <input 
                            {...register("firstName", { required: 'First name is required' })}
                            type="text"
                            className="form-control"
                        />
                        {errors.firstName && <div className='inputerror'>{errors.firstName.message}</div>}
                    </div>

                    {/* Last Name */}
                    <div className="col-md-6">
                        <label htmlFor="lname" className="form-label">Last Name</label>
                        <input 
                            {...register("lastName", { required: 'Last name is required' })}
                            type="text"
                            className="form-control" 
                        />
                        {errors.lastName && <div className='inputerror'>{errors.lastName.message}</div>}
                    </div>

                    {/* Email */}
                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input 
                            {...register("email", { 
                                required: 'Email is required', 
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Invalid email address'
                                }
                            })}
                            type="email"
                            className="form-control"
                            placeholder="eg : mygmailid@gmail.com" 
                        />
                        {errors.email && <div className='inputerror'>{errors.email.message}</div>}
                    </div>

                    {/* Phone Number */}
                    <div className="col-md-12">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                        <input 
                            {...register("phoneNumber", {
                                required: 'Phone number is required',
                                minLength: {
                                    value: 10,
                                    message: 'Phone number must be at least 10 digits long'
                                },
                                maxLength: {
                                    value: 11,
                                    message: 'Phone number cannot exceed 11 digits'
                                }
                            })}
                            type="tel"
                            className="form-control"
                            placeholder="0000000000" 
                        />
                        {errors.phoneNumber && <div className='inputerror'>{errors.phoneNumber.message}</div>}
                    </div>

                    <br />
                    <h2>Referral Details</h2>
                    <br />

                    {/* Referral UserName */}
                    <div className="col-md-6">
                        <label htmlFor="referralUsername" className="form-label">Referral UserName</label>
                        <input 
                            {...register("referralUsername", { required: 'Referral Username is required' })}
                            type="text"
                            className="form-control"
                            placeholder="Username" 
                        />
                        {errors.referralUsername && <div className='inputerror'>{errors.referralUsername.message}</div>}
                    </div>

                    {/* Referral Email */}
                    <div className="col-md-12">
                        <label htmlFor="referralEmail" className="form-label">Referral Email</label>
                        <input 
                            {...register("referralEmail", { 
                                required: 'Referral Email is required', 
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Invalid email address'
                                }
                            })}
                            type="email"
                            className="form-control"
                            placeholder="eg : mygmailid@gmail.com" 
                        />
                        {errors.referralEmail && <div className='inputerror'>{errors.referralEmail.message}</div>}
                    </div>

                    {/* Referral Phone Number */}
                    <div className="col-md-12">
                        <label htmlFor="referralPhone" className="form-label">Referral Phone Number</label>
                        <input 
                            {...register("referralPhone", {
                                required: 'Referral Phone number is required',
                                minLength: {
                                    value: 10,
                                    message: 'Referral phone number must be at least 10 digits long'
                                },
                                maxLength: {
                                    value: 15,
                                    message: 'Referral phone number cannot exceed 15 digits'
                                }
                            })}
                            type="tel"
                            className="form-control"
                            placeholder="0000000000" 
                        />
                        {errors.referralPhone && <div className='inputerror'>{errors.referralPhone.message}</div>}
                    </div>

                    {/* Referral ID */}
                    <div className="col-md-12">
                        <label htmlFor="referralId" className="form-label">Referral ID</label>
                        <input 
                            {...register("referralId", { required: 'Referral ID is required' })}
                            type="text"
                            className="form-control"
                            placeholder="" 
                        />
                        {errors.referralId && <div className='inputerror'>{errors.referralId.message}</div>}
                    </div>

                    {/* Submit and Close Buttons */}
                    <div className="col-12">
                        <button 
                            disabled={isSubmitting} 
                            type="submit" 
                            className="btn btn-primary mx-2"
                        >
                            {isSubmitting ? "Submitting..." : "Register"}
                        </button>
                        <button 
                            type="button" 
                            onClick={onClose} 
                            className="btn btn-secondary mx-2"
                        >
                            Close
                        </button>
                    </div>
                    {
            isSubmitting && <div>LOADING...</div>
          }
                </form>
            </div>
        </>
    );
}

export default Form;
