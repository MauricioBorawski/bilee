'use client';
import Link from 'next/link';
import {useForm, SubmitHandler} from "react-hook-form";
import {logInWithEmailAndPassword} from "@/app/api/auth";
import * as Label from '@radix-ui/react-label';
import {Button} from "@/app/components";

type LoginForm = {
    email: string;
    password: string;
}

export default function Page() {

    const {register, handleSubmit} = useForm<LoginForm>()

    const onSubmit: SubmitHandler<LoginForm> = (data) => {
        logInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 items-center'>
            <div>
                <Label.Root htmlFor='email' className='font-bold'>
                    Email
                </Label.Root>
                <input
                    type="email"
                    id='email'
                    placeholder='john.doe@example.com'
                    className='rounded-lg border-billee-background-primary border-2 px-[16px] py-[12px] w-full mt-2'
                    {...register("email")}
                />
            </div>

            <div>
                <Label.Root htmlFor='password' className='font-bold'>
                    Password
                </Label.Root>
                <input
                    type="password"
                    id='password'
                    placeholder='password'
                    className='rounded-lg border-billee-background-primary border-2 px-[16px] py-[12px] w-full mt-2'
                    {...register("password")}
                />
            </div>

            <Button variant='black'>
                Acceder
            </Button>

            <p>¿No tenes cuenta? <Link href='register'
                                       className='underline'>Regístrate</Link>
            </p>
        </form>
    )
}
