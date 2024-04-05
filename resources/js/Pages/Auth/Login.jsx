import { useEffect, useRef } from 'react';
import $ from 'jquery'; // Import jQuery
import 'parsleyjs'; // Import Parsley
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const formRef = useRef(null);

    useEffect(() => {
        $(formRef.current).parsley(); // Initialize Parsley on the form
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        // Validate the form using Parsley
        const isValid = $(formRef.current).parsley().validate();

        if (isValid) {
            post(route('login'));
        }
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form ref={formRef} onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="example@gmail.com"
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        data-parsley-trigger="change"
                        data-parsley-required-message="Email field is required." 
                        required 
                    />

                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        placeholder="••••••••"
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        data-parsley-trigger="change" 
                        data-parsley-required-message="Password field is required." 
                        // data-parsley-minlength="8"
                        // data-parsley-minlength-message="Password must be at least 8 characters long." 
                        required 
                    />

                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-center mt-2">
                    <InputError message={errors.email} className="mt-2 text-red-600 text-sm" />
                </div>

                <div className="flex items-center justify-center mt-4">
                    <PrimaryButton className="" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>

                <div className='flex items-center justify-between mt-4'>
                    <Link
                        href={route('password.request')}
                        className="text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1EB6CF]">
                        Sign up
                    </Link>

                    {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1EB6CF]">
                                Forgot your password?
                            </Link>
                        )}
                </div>
            </form>
        </GuestLayout>
    );
}
