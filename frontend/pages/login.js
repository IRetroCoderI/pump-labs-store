import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useRouter } from 'next/router';


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/dashboard'); //redirects to the dashboard or home page after a successful login
        } catch (error) {
            console.error(error);
            //handle errors, show error to user
        }
    };

    return (
        <div> 
            <h1>Login</h1>
        </div>
    )
}