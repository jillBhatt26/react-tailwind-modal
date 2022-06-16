import { FC, useEffect } from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';
import { FormikHelpers, FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';
import { ILoginFormFields } from './interfaces';
import { useModalContext } from '../../../../contexts/Modal';

const LoginForm: FC = (): JSX.Element => {
    // formik hook
    const formik = useFormik<ILoginFormFields>({
        initialValues: {
            usernameOrEmail: '',
            password: ''
        },
        validationSchema: Yup.object({
            usernameOrEmail: Yup.string()
                .trim()
                .min(3, 'Username or email is too short')
                .max(255, 'Username or email is too long')
                .required('Username or email is required'),
            password: Yup.string()
                .trim()
                .min(8, 'Password is too short')
                .max(255, 'Password is too long')
                .required('Password is required')
        })
            .required()
            .noUnknown(),
        onSubmit: (
            values: FormikValues,
            { resetForm }: FormikHelpers<ILoginFormFields>
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
                        <MdAlternateEmail className="md:text-md md:-mt-[2px] lg:text-lg lg:-mt-[2px] text-gray-400" />
                    </span>
                    <input
                        type="text"
                        placeholder="Username or Email"
                        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10 md:text-md lg:text-lg"
                        id="usernameOrEmail"
                        name="usernameOrEmail"
                        value={formik.values.usernameOrEmail}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.usernameOrEmail &&
                    formik.touched.usernameOrEmail ? (
                        <div className="text-sm text-red-400 rounded-full pt-1 ml-1">
                            {formik.errors.usernameOrEmail}
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
        </form>
    );
};

export default LoginForm;
