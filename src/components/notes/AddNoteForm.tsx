import { useForm } from 'react-hook-form'
import type { NoteFormData } from '../../types'
import ErrorMessage from '../ErrorMessage'

export default function AddNoteForm() {

    const initialValues : NoteFormData = {
        content: ''
    }

    const { register, handleSubmit, formState: {errors} } = useForm({
        defaultValues: initialValues
    })

    const handleAddNote = (formData: NoteFormData) => {
        console.log(formData)
    }
    
    return (
        <form onSubmit={handleSubmit(handleAddNote)} className="Space-y-3" noValidate>
            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="content" className="font-bold">Add a note</label>
                <input id="content" {...register('content', {required: 'Content is required'})} name="content" type="text" placeholder='Note Content' className="w-full p-3 border border-gray-300" />
                {errors.content && (
                    <ErrorMessage>{errors.content.message}</ErrorMessage>
                )}
            </div>

            <input type="submit" value="Add Note" className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-2 text-white font-black cursor-pointer" />
        </form>
    )
}