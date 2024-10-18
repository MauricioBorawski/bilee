import * as Label from '@radix-ui/react-label';
import { Button } from "flowbite-react";

export default function Page() {
  return (
    <form className='flex flex-col gap-6 items-center'>
      <div>
        <Label.Root htmlFor='email' className='font-bold'>
          Email
        </Label.Root>
        <input
          type="email"
          id='email'
          placeholder='john.doe@example.com'
          className='rounded-lg border-billee-background-primary border-2 px-[16px] py-[12px] w-full mt-2'
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
        />
      </div>

      <Button color='dark' fullSized>Acceder</Button>

      <p>¿No tenes cuenta? <a href='#' className='underline'>Regístrate</a></p>
    </form>
  )
}
