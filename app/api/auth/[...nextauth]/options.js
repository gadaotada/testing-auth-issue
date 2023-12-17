import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
    
                if (!credentials?.username || !credentials?.password) return null;

                
                //const user = { id: 1, name: 'tester', password: 'test123', role: 'test-admin', token: 'its-mytoken-123'}
                const { username, password } = credentials

                const res = await fetch('http://localhost:1337/auth/login', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({username, password}),
                });
                // you might need to change this to res.status !== 200 :) if the custom api/auth/login backend returns something other then 401 (404, 500(general server erros))
                if (res.status === 401) {
                    return null
                }

                const user = await res.json();

                return user
            }
        })
    ],
    // uncomment below to use the giga custom login page :D should work without it
    session: {
        strategy: 'jwt',
        maxAge: 7 * 24 * 60 * 60, // 7 days
    },
    pages: {
        signIn: '/',
    },
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.user = { id: user.id, name: user.name, role: user.role } // might need this if u are returning the hole user object ;) keep that in mind
                token.token = user.token
            }
            return token;
        },
        async session({session, token}) {
            session.user = token.user;
            session.token = token.token;
            
            return session;
        }
    }
}