export const users = [
    { email: "a", password: 'a', name: 'A' },
    { email: "b", password: 'b', name: 'B' },
    { email: "c", password: 'c', name: 'C' },
];

export function signIn({ email, password }) {
    const user = users.find(
        (user) => user.email === email && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;

    //axios로 다시 구현
}