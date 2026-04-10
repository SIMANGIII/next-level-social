'use server'

import { redirect } from 'next/navigation'

export type LoginState = {
  errors?: {
    email?: string[]
    password?: string[]
  }
  message?: string
}

export async function login(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const errors: LoginState['errors'] = {}

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ['Please enter a valid email address.']
  }

  if (!password || password.length < 8) {
    errors.password = ['Password must be at least 8 characters.']
  }

  if (Object.keys(errors).length > 0) {
    return { errors }
  }

  await new Promise((resolve) => setTimeout(resolve, 1200))

  if (email === 'demo@example.com' && password === 'password123') {
    redirect('/home')
  }

  return { message: 'Invalid email or password. Try demo@example.com / password123' }
}
