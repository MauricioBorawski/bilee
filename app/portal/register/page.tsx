'use client'
import Link from 'next/link';
import * as Label from '@radix-ui/react-label';
import { Button } from "@/app/components";
import { SignUpWithEmailAndPassword } from '@/app/api/auth';

export default function Page() {
  return (
    <form className='flex flex-col gap-6 items-center'
      action={(formAction) => {
        const email = formAction.get('email');
        const password = formAction.get('password');

        const [error, user] = SignUpWithEmailAndPassword(String(email), String(password));

        if (error) {
          alert(error.message);
          return;
        }

        console.log(user);
      }}>
      <div>
        <Label.Root htmlFor='email' className='font-bold'>
          Email
        </Label.Root>
        <input
          name='email'
          type="email"
          id='email'
          placeholder='john.doe@example.com'
          className='rounded-lg border-billee-background-primary border-2 px-[16px] py-[12px] w-full mt-2'
        />
      </div>

      <div>
        <Label.Root htmlFor='name' className='font-bold'>
          Nombre
        </Label.Root>
        <input
          type="text"
          name='name'
          id='name'
          placeholder='John Doe'
          className='rounded-lg border-billee-background-primary border-2 px-[16px] py-[12px] w-full mt-2'
        />
      </div>

      <div>
        <Label.Root htmlFor='password' className='font-bold'>
          Password
        </Label.Root>
        <input
          type="password"
          name='password'
          id='password'
          placeholder='password'
          className='rounded-lg border-billee-background-primary border-2 px-[16px] py-[12px] w-full mt-2'
        />
      </div>

      <Button variant='black'>
        Registrarse
      </Button>

      <p>¿Ya tenes cuenta? <Link href='login' className='underline'>Accede</Link></p>
    </form>
  );
}
