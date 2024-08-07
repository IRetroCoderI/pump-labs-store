import { redirect } from "next/navigation";
import { prisma } from "../lib/db/prisma";
import FormSubmitButton from "../components/FormSubmitButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
    title: "Add Product - Pump Labs LLC"
}

const allowedUsers = process.env.ALLOWED_USERS?.split(",") || []; //stores allowed emails

async function addProduct(formData: FormData) {
    "use server";

    const session = await getServerSession(authOptions);

    if(!session) {
        redirect("/api/auth/signin?callbackUrl=/add-product");
    }

    if(!session.user.email || !allowedUsers.includes(session.user.email)) { //redirects to homepage
        redirect("/");
    }


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

export default async function AddProductPage() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/add-product");
    }

    if (!session.user.email || !allowedUsers.includes(session.user.email)) {
        redirect("/"); //redirects to homepage
    }

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
                <FormSubmitButton className="btn-block ">
                    Add Product!
                </FormSubmitButton>
            </form>
        </div>
    )
}