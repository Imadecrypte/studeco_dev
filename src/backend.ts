import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'
import { ClientResponseError } from 'pocketbase'

export const pb = new PocketBase('https://stud-eco.dezzaznail.fr:443') as TypedPocketBase

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
    const user = await pb.collection('users').create({
      username,
      email,
      password,
      passwordConfirm: confirmPassword
    })
    return user
  } catch (err) {
    if (err instanceof ClientResponseError) {
      throw new Error(`Échec de l'inscription : ${err.data?.message || 'Veuillez réessayer.'}`)
    } else {
      throw new Error("Échec de l'inscription, veuillez réessayer.")
    }
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const authData = await pb.collection('users').authWithPassword(email, password)
    return authData
  } catch (err) {
    if (err instanceof ClientResponseError) {
      throw new Error('Échec de la connexion, veuillez vérifier vos identifiants.')
    } else {
      throw new Error('Échec de la connexion, veuillez réessayer.')
    }
  }
}
