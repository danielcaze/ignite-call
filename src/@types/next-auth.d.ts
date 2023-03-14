import NextAuth from 'next-auth'
// PRECISA IMPORTAR PRA ELE SABER QUE ESTAMOS SOBRESCREVENDO NAO CRIANDO DO ZERO

declare module 'next-auth' {
  interface User {
    id: string,
    name: string,
    email: string
    username: string
    avatar_url: string
  }

  interface Session {
    user: User
  }
}