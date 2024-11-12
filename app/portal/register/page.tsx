'use client'
import {useForm, SubmitHandler} from "react-hook-form";
import Link from 'next/link';
import * as Label from '@radix-ui/react-label';
import {Button} from "@/app/components";
import {signUpWithEmailAndPassword} from '@/app/api/auth';

type RegisterForm = {
    email: string;
    name: string;
    password: string;
}

export default function Page() {
    const {
        register,
        handleSubmit,
    } = useForm<RegisterForm>();

    const onSubmit: SubmitHandler<RegisterForm> = (data) => {
        signUpWithEmailAndPassword(data.email, data.password);
    }

    return (
        <form className='flex flex-col gap-6 items-center'
              onSubmit={handleSubmit(onSubmit)}>
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
                <Label.Root htmlFor='name' className='font-bold'>
                    Nombre
                </Label.Root>
                <input
                    type="text"
                    id='name'
                    placeholder='John Doe'
                    className='rounded-lg border-billee-background-primary border-2 px-[16px] py-[12px] w-full mt-2'
                    {...register("name")}
                />
            </div>

            <div>
                <Label.Root htmlFor='password' className='font-bold'>
                    Password
                </Label.Root>
                <input
                    id='password'
                    type='password'
                    placeholder='password'
                    className='rounded-lg border-billee-background-primary border-2 px-[16px] py-[12px] w-full mt-2'
                    {...register("password")}
                />
            </div>

            <Button variant='black'>
                Registrarse
            </Button>

            <p>¿Ya tenes cuenta? <Link href='login'
                                       className='underline'>Accede</Link></p>
        </form>
    );
}
