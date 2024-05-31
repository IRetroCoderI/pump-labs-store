import { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                router.push('/login');
            }
        });

        return () => unsubscribe();

    }, [router]); 

    if (!user) {
        return <div>Loading...</div>;
    }

    return(
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <p>Welcome, {user.email}</p>
        </div>
    );

}