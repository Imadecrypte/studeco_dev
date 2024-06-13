import PocketBase from 'pocketbase'
import { ClientResponseError } from 'pocketbase'

export const pb = new PocketBase('https://stud-eco.dezzaznail.fr:443')

export async function registerUser(
  username: string,
  email: string,
  password: string,
  confirmPassword: string
) {
  if (password !== confirmPassword) {
    throw new Error('Les mots de passe ne correspondent pas.')
  }

  try {
    console.log('Attempting to register user:', { username, email })

    const user = await pb.collection('users').create({
      username,
      email,
      password,
      passwordConfirm: confirmPassword
    })

    console.log('User registered successfully:', user)
    return user
  } catch (err) {
    console.error('Failed to register:', err)
    if (err instanceof ClientResponseError) {
      console.error('ClientResponseError details:', err.response)
      throw new Error(`Échec de l'inscription : ${err.response?.message || 'Veuillez réessayer.'}`)
    } else {
      throw new Error("Échec de l'inscription, veuillez réessayer.")
    }
  }
}

export async function loginUser(email: string, password: string) {
  try {
    console.log('Attempting to login user:', { email })

    const authData = await pb.collection('users').authWithPassword(email, password)

    console.log('User logged in successfully:', authData)
    return authData
  } catch (err) {
    console.error('Failed to login:', err)
    if (err instanceof ClientResponseError) {
      console.error('ClientResponseError details:', err.response)
      throw new Error('Échec de la connexion, veuillez vérifier vos identifiants.')
    } else {
      throw new Error('Échec de la connexion, veuillez réessayer.')
    }
  }
}
