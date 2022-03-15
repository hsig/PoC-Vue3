export type User = { name: string; username: string }
export type UserList = Array<User & { password: string }>

export async function login(username: string, password: string) {
    const request = await fetch('/users.json')
    const users: UserList = await request.json()

    console.log(username)
    console.log(password)
    console.log(users)
    return users.find(s => s.password === password && s.username === username)

}
export async function getUser() {
    const request = await fetch('/actifs.json')
    const user: User = await request.json()
    return user
}