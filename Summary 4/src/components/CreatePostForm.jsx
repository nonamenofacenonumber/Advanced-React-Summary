import { useState } from "react";
import useFormInput from "../hooks/useFormInput"
import Alert from "./shared/Alert";

export default function CreatePostForm() {
    const titleInputProps = useFormInput('');
    const categoryInputProps = useFormInput('');
    const bodyInputProps = useFormInput('');
    const [ showMessageSuccessfully , setShowMessageSuccessfully] = useState(false)

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        let data = {
            title : titleInputProps?.value,
            category : categoryInputProps?.value,
            body : bodyInputProps?.value
        }


        try {
            let res = await fetch("https://65dc35f03ea883a15292b73a.mockapi.io/posts" , {
                method : 'post',
                headers: {'content-type':'application/json'},
                body : JSON.stringify(data)
            })

            res = await res.json();

            titleInputProps?.resetValue(),
            categoryInputProps?.resetValue(),
            bodyInputProps?.resetValue()

            // show successfull message
            setShowMessageSuccessfully(true);
            setTimeout(() => {
                setShowMessageSuccessfully(false);
            }, 5000);
        } catch (error) {
            // error handling
            console.log(error)
        }
    }

    return (

        <>
            { showMessageSuccessfully && <Alert message="post successfully created" closeHandler={() => setShowMessageSuccessfully(false)}/> }
            <form onSubmit={formSubmitHandler} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl w-full">
                <div className="px-4 py-6 sm:p-8">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                            <div className="mt-2">
                                <input id="title" name="title" type="text" autoComplete="title" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" {...titleInputProps} />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                            <div className="mt-2">
                                <input id="category" name="category" type="text" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" {...categoryInputProps} />
                            </div>
                        </div>


                        <div className="col-span-full">
                            <label htmlFor="body" className="block text-sm font-medium leading-6 text-gray-900">
                                Body
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="body"
                                    name="body"
                                    rows={3}
                                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    {...bodyInputProps}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">

                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Create
                    </button>
                </div>
            </form>
        </>
    )
}
