import { mergeAnonymousCartIntoUserCart } from "@/app/lib/db/cart";
import { prisma } from "@/app/lib/db/prisma";
import { env } from "@/app/lib/env";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client/extension";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma as PrismaClient) as Adapter, 
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
            
        }),
    ],
    callbacks: {
        session({session, user}) {
            session.user.id = user.id; //take id of user from db and add it to session
            return session;
        },
    },
    events: {
        async signIn({user}) {
            await mergeAnonymousCartIntoUserCart(user.id);
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }