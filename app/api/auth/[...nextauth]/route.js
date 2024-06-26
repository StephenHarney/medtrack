import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google'; 

import User from '@models/user';
import { connectToDB } from '@utils/database';

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,

        })
    ], 
    callbacks:{
        async session({session}){
            const sessionUser =await User.findOne({
                email: session.user.email
            })
            session.user.id = sessionUser._id.toString(); 
    
            return session;
        },
        async signIn({account,profile,user,credentials}) {
        try {
            await connectToDB();
    
            //check if a user already exsts
            const userExists = await User.findOne({
                email: profile.email
            });
            //if not, create a new user
            if(!userExists){
                await User.create({
                    email: profile.email,
                    username: profile.name.replaceAll(" " ," ").
                    toLowerCase(),
                    image: profile.picture
                }) 
                
            }
            return true;
           
        } catch (error) {
            console.error("Sign In Error", error);
        }
        }

    }


})

export {handler as GET, handler as POST};
