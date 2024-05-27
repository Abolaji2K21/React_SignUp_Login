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
import Checkbox from "../PageTemplateForSignUp/Checkbox";

const validationSchema = Yup.object().shape({
    username: Yup.string().required('*required'),
    password: Yup.string().required('*required'),
});

const PageTemplate = ({ image, headerName, message, buttonMessage, messageOne, link, buttonMessageOne}) => {
    const [isLoading, setIsLoading] = useState(false);

    const submitButton = async (values, { resetForm }) => {
        setIsLoading(true);
        try {
            const payload = {
                username: values.username,
                password: values.password,
            }
            const response = await axios.post("http://localhost:8080/api/Contact_Management/login", payload);

            if (response.data.successful) {
                toast.success(`Welcome ${values.username}, you have Logged In successfully!`, {
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
                toast.error('Login failed. Please try again', {
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
            console.error('Error during Login:', error);
            toast.error('Login failed. Please try again', {
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
        <div style={{display: 'flex'}}>
            <img src={image} alt="" style={{width: '40%', height: '30%'}}/>
            <div className={style.heroText}>
                <h1 style={{marginBottom: "5px", marginLeft: '5px'}}>{headerName}</h1>
                <p style={{marginBottom: '10px', marginLeft: '-18px', fontSize: "smaller"}}>{message}</p>
                <Formik
                    initialValues={{username: '', password: ''}}
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

                            <div style={{display: 'flex', alignItems: 'center', gap: '75px'}}>
                                <Checkbox/>
                                <p style={{fontSize: 'small'}}>Forgot password</p>
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

                            <div className={style.input}>
                                <h2>{messageOne}</h2>
                            </div>
                            <div className={style.inputOne}>
                                <a href={link}>{buttonMessageOne}</a>
                            </div>

                        </Form>
                    )}
                </Formik>

            </div>
            <ToastContainer/>
            {/*<div>*/}
            {/*    <iframe width="1257" height="480" src="https://www.youtube.com/embed/cuEtnrL9-H0"*/}
            {/*            title="Learn Fetch API In 6 Minutes" frameBorder="0"*/}
            {/*            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
            {/*            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>*/}
            {/*</div>*/}
        </div>
    )
        ;
};

export default PageTemplate;
