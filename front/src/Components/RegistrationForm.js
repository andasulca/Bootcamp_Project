import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class RegistrationForm extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    country: '',
                    acceptTerms: false
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('First Name is required'),
                    lastName: Yup.string()
                        .required('Last Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required'),
                    country: Yup.string()
                        .required('Country is required'),
                    acceptTerms: Yup.bool()
                        .oneOf([true], 'Accept Ts & Cs is required')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :)\n\n' + JSON.stringify(fields, null, 4))
                }}
                render={({ errors, status, touched }) => (
                    <Form className="mt-2">
                        <div className="form-group">
                            <Field placeholder="First name*" name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field placeholder="Last name*" name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field placeholder="Email*" name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field placeholder="Password*" name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field placeholder="Confirm password*" name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field name="country" as="select" className={'form-control' + (errors.country && touched.country ? ' is-invalid' : '')}>
                                <option value="">Country*</option>
                                <option value="LV">Latvia</option>
                                <option value="EE">Estionia</option>
                                <option value="LT">Lithuania</option>
                                <option value="OT">Other</option>
                            </Field>
                            <ErrorMessage name="country" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group form-check">
                            <Field type="checkbox" name="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                            <label htmlFor="acceptTerms" className="form-check-label" >Accept Terms & Conditions*</label>
                            <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-dark mr-2">Register</button>
                            <button type="reset" className="btn btn-secondary" >Reset</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export { RegistrationForm }
