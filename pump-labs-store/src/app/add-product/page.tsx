import { redirect } from "next/navigation";
import { prisma } from "../lib/db/prisma";

export const metadata = {
    title: "Add Product - Pump Labs LLC"
}

async function addProduct(formData: FormData) {
    "use server";
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);

    if (!name || !description || !imageUrl || !price) {
        throw Error("Missing Required Fields");
    }

    await prisma.product.create({
        data: {name, description, imageUrl, price},
    });

    redirect("/");
}

export default function AddProductPage() {
    return(
        <div>
            <h1 className ="text-lg mb-3 font-bold">Add Product</h1>
            <form action={addProduct}>
                <input
                    required
                    name="name"
                    placeholder="Name"
                    type="text" className="input input-bordered w-full mb-3"
                />
                <textarea
                required
                name="description"
                placeholder="Description"
                className="textarea textarea-bordered mb-3 w-full"
                />
                <input
                    required
                    name="imageUrl"
                    placeholder="Image URL"
                    type="url" className="input input-bordered w-full mb-3 "
                />
                <input
                    required
                    name="price"
                    placeholder="Price"
                    type="number" className="input input-bordered w-full mb-3 "
                />
                <button type="submit" className="btn btn-primary sm:btn-md btn-block md:btn-md lg:btn-lg">Add Product</button>
            </form>
        </div>
    )
}