import Link from 'next/link';

export default function Header() {
    return (
        <header className = "bg-orange-600 p-5">
            <h1 className = "text-white text-2xl">Pump-Labs</h1>
            <nav className="mt-4">
                <Link href="/login" className="text-white mr-4">
                    Login
                </Link>
                <Link href="/register" className="text-white mr-4">
                    Register
                </Link>
                <Link href="/dashboard" className="text-white mr-4">
                    Dashboard
                </Link>
            </nav>
        </header>
    );
}