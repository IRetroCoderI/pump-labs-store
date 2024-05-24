import Image from "next/image";
import Header from '../components/Header'
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div>
      <Header />
      <main className = "min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className = "text-4xl font-bold text-blue-500">
          Welcome to Next.js with Tailwind CSS!
        </h1>
        <ProductList />
      </main>
    </div>
  );
}
