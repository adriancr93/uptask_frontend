import { deleteNote } from "@/api/NoteAPI"
import { useMutation } from "@tanstack/react-query" 
import { useAuth } from "@/hooks/useAuth"
import type { Note } from "@/types/index"
import { formatDate } from "@/utils/utils"
import { useMemo } from "react"
import { toast } from "react-toastify"
import { useLocation, useParams } from "react-router-dom"
import { useQueryClient } from "@tanstack/react-query"

type NoteDetailProps = {
    note: Note
}

export default function NoteDetail({ note }: NoteDetailProps) {

    const { data, isLoading } = useAuth()
    const canDelete = useMemo(() => data?._id === note.createdBy._id, [data])
    const params = useParams()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)

    const projectId = params.projectId!
    const taskId = queryParams.get("viewTask")

    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: deleteNote,
        onError: (error) => {toast.error(error.message)},
        onSuccess: (data) => {
            toast.success(data);
            queryClient.invalidateQueries({ queryKey: ["task", taskId] })
        }
    })

    if(isLoading) return "Loading..."

  return (
    <div className="p-3 flex justify-between items-center">
        <div className="flex-1">
            <p className="text-slate-600">{note.content} by: <span className="font-bold">{note.createdBy.name}</span></p>
            <p className="text-slate-400 text-xs">{formatDate(note.createdAt)}</p>
        </div>
        
        {canDelete && taskId && (
            <button type="button" className="bg-red-400 hover:bg-red-500 p-2 text-xs text-white font-bold cursor-pointer transition-colors" onClick={() => mutate({projectId, taskId, noteId: note._id})}>Remove</button>
        )}

    </div>
  )
}
