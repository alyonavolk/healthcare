import React, { useState } from 'react';
import './authorization.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Authorization = () => {

    const [modal, setModal] = useState();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email incorrect'),
            password: Yup.string().required('Password incorrect')
        }),
        onSubmit: values => setModal()
    })
    return (
        <form className='form' onSubmit={formik.handleSubmit}>
            <div className='form__title'>
                <p>Login</p>
                <div className='line_heavy' />
                <div className='line' />
            </div>
            <div className='form__fields'>
                <div className='form__fields_mr'><label className='form__label' htmlFor="email">Email</label>
                <input className={`form__input ${formik.touched.email && formik.errors.email ? 'form__input_invalid' : null}`}
                id='email' name='email' 
                type='text' placeholder='Введите email'
                onChange={formik.handleChange} 
                value={formik.values.email}
                onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email ? <div className='form_error'>{formik.errors.email}</div> : null}</div>

                <div className='form__fields_mr'><label className='form__label' htmlFor="password">Password</label>
                <input className={`form__input ${formik.touched.email && formik.errors.password ? 'form__input_invalid' : null}`}
                id='password' name='password' 
                type='text' placeholder='Введите пароль'
                onChange={formik.handleChange} 
                value={formik.values.password} 
                onBlur={formik.handleBlur}/>
                {formik.touched.password && formik.errors.email ? <div className='form_error'>{formik.errors.password}</div> : null}</div>
            </div>

            <button className='form__btn'>Login</button>
        </form>
    );
};

export default Authorization;