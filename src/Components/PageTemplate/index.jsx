import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './index.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Icon } from '@iconify/react';
import loadingLoop from '@iconify/icons-line-md/loading-loop';
import FilledButton from "../FilledButton";

const validationSchema = Yup.object().shape({
    username: Yup.string().required('*required'),
    password: Yup.string().required('*required'),
    firstname: Yup.string().required('*required'),
    lastname: Yup.string().required('*required'),
});

const PageTemplate = ({ image, headerName, message, buttonMessage, messageOne, link, textLinks }) => {
    const [isLoading, setIsLoading] = useState(false);

    const submitButton = async (values, { resetForm }) => {
        setIsLoading(true);
        try {
            const payload = {
                username: values.username,
                password: values.password,
                firstname: values.firstname,
                lastname: values.lastname,
            }
            const response = await axios.post("http://localhost:8080/api/Contact_Management/sign_up", payload);

            if (response.data.successful) {
                toast.success(`Welcome ${values.username}, you have signed up successfully!`, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                resetForm();
            } else {
                toast.error('Sign up failed. Please try again', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            console.error('Error during sign up:', error);
            toast.error('Sign up failed. Please try again', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={style.container}>
            <img src={image} alt="" style={{width:'40%', height:'30%'}} />
            <div className={style.heroText}>
                <h1 style={{marginBottom: "5px", marginLeft: '100px'}}>{headerName}</h1>
                <p style={{marginBottom: '10px', marginLeft: '90px', fontSize: "smaller"}}>{message}</p>
                <Formik
                    initialValues={{ username: '', password: '', firstname: '', lastname: '' }}
                    validationSchema={validationSchema}
                    onSubmit={submitButton}
                >
                    {() => (
                        <Form className={style.formStyle}>
                            <div>
                                <Field
                                    type="text"
                                    name="username"
                                    placeholder="Enter Username"
                                    className={style.inputField}
                                />
                                <ErrorMessage name="username" component="div" className={style.error}/>
                            </div>
                            <br></br>
                            <div>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    className={style.inputField}
                                />
                                <ErrorMessage name="password" component="div" className={style.error}/>
                            </div>
                            <br></br>
                            <div>
                                <Field
                                    type="text"
                                    name="firstname"
                                    placeholder="Enter First Name"
                                    className={style.inputField}
                                />
                                <ErrorMessage name="firstname" component="div" className={style.error}/>
                            </div>
                            <br></br>
                            <div>
                                <Field
                                    type="text"
                                    name="lastname"
                                    placeholder="Enter Last Name"
                                    className={style.inputField}
                                />
                                <ErrorMessage name="lastname" component="div" className={style.error}/>
                            </div>
                            <br></br>
                            <div className={style.input}>
                                <p>{messageOne}</p>
                                <a href={link}>{textLinks}</a>
                            </div>
                            <FilledButton text={buttonMessage}>
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <Icon width={24} height={24} icon={loadingLoop}/>
                                    </div>
                                ) : (
                                    buttonMessage
                                )}
                            </FilledButton>
                        </Form>
                    )}
                </Formik>
            </div>
            <ToastContainer />
        </div>
    );
};

export default PageTemplate;
