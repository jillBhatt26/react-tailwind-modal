import { FC, useEffect } from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FormikHelpers, FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { ISignUpFormFields } from './interfaces';
import { useModalContext } from '@contexts/Modal';

// extending Yup
YupPassword(Yup);

const SignUp: FC = () => {
    // formik
    const formik = useFormik<ISignUpFormFields>({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .trim()
                .min(3, 'Username is too short')
                .max(255, 'Username is too long')
                .required('Username is required'),

            email: Yup.string()
                .trim()
                .email('Email is invalid')
                .max(255, 'Email is too long')
                .required('Email is required'),

            password: Yup.string()
                .trim()
                .min(8, 'Password is too short')
                .minLowercase(
                    1,
                    'Password must contain at least one lowercase letter'
                )
                .minUppercase(
                    1,
                    'Password must contain at least one uppercase letter'
                )
                .minSymbols(
                    1,
                    'Password must contain at least one special character'
                )
                .minNumbers(1, 'Password must contain at least one number')
                .max(255, 'Password is too long')

                .required('Password is required'),

            confirmPassword: Yup.string()
                .trim()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm password is required')
        })
            .required()
            .noUnknown(),
        onSubmit: (
            values: FormikValues,
            { resetForm }: FormikHelpers<ISignUpFormFields>
        ) => {
            console.log('values: ', values);
            resetForm();
        }
    });

    const { isModalVisible } = useModalContext();

    useEffect(() => {
        if (!isModalVisible) {
            formik.resetForm();
        }
        // eslint-disable-next-line
    }, [isModalVisible]);

    return (
        <form
            className="bg-formBG px-2"
            onSubmit={formik.handleSubmit}
            autoComplete="off"
            noValidate
        >
            <div className="px-2 pt-1">
                <div className="relative flex flex-wrap items-stretch mt-4  w-full">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 md:mt-1 lg:mt-2">
                        <HiOutlineUserCircle className="md:text-md md:-mt-[2px] lg:text-lg lg:-mt-[2px] text-gray-400" />
                    </span>
                    <input
                        type="text"
                        placeholder="Username"
                        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10 md:text-md lg:text-lg"
                        id="username"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.username && formik.touched.username ? (
                        <div className="text-sm text-red-400 rounded-full pt-1 ml-1">
                            {formik.errors.username}
                        </div>
                    ) : null}
                </div>

                <div className="relative flex flex-wrap items-stretch mt-4  w-full">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 md:mt-1 lg:mt-2">
                        <MdAlternateEmail className="md:text-md md:-mt-[2px] lg:text-lg lg:-mt-[2px] text-gray-400" />
                    </span>
                    <input
                        type="email"
                        placeholder="Email"
                        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10 md:text-md lg:text-lg"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email ? (
                        <div className="text-sm text-red-400 rounded-full pt-1 ml-1">
                            {formik.errors.email}
                        </div>
                    ) : null}
                </div>

                <div className="relative flex flex-wrap items-stretch my-4 w-full">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 md:mt-1 lg:mt-2">
                        <RiLockPasswordFill className="md:text-md lg:text-lg md:-mt-[3px]" />
                    </span>
                    <input
                        type="password"
                        placeholder="Password"
                        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10 md:text-md lg:text-lg"
                        name="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />

                    {formik.errors.password && formik.touched.password ? (
                        <div className="text-sm text-red-400 rounded-full pt-1 ml-1">
                            {formik.errors.password}
                        </div>
                    ) : null}
                </div>

                <div className="relative flex flex-wrap items-stretch my-4 w-full">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 md:mt-1 lg:mt-2">
                        <RiLockPasswordFill className="md:text-md lg:text-lg md:-mt-[3px]" />
                    </span>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10 md:text-md lg:text-lg"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                    />

                    {formik.errors.confirmPassword &&
                    formik.touched.confirmPassword ? (
                        <div className="text-sm text-red-400 rounded-full pt-1 ml-1">
                            {formik.errors.confirmPassword}
                        </div>
                    ) : null}
                </div>

                <div className="pt-1 py-3 flex items-center justify-center md:justify-end">
                    <button
                        type="reset"
                        className="text-gray-100 bg-red-500 ml-2 mr-1 px-4 py-2 rounded inline-block"
                        onClick={() => formik.resetForm()}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="text-gray-100 bg-sky-600 p-2 ml-1 mr-2 rounded inline-block"
                        disabled={!formik.errors}
                    >
                        Log In
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SignUp;
