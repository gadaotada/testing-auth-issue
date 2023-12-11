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
                // check if ts is retarded 
                if (!credentials?.username || !credentials?.password) return null;

                // its not retarded
                // hash the pass
                
                const user = { id: 1, name: 'tester', password: 'test123', role: 'test-admin', token: 'its-mytoken-123'}

                if (user.name === credentials.username && user.password === credentials.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
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
                token.user = { id: user.id, name: user.name, role: user.role }
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