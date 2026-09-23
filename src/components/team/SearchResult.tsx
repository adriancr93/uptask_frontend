import { useMutation } from "@tanstack/react-query";
import type { TeamMember } from "@/types/index";
import { addUserToProject } from "@/api/TeamAPI";
import { toast } from "react-toastify";
import { useParams } from "react-router";

type SearchResultProps = {
    user: TeamMember
}

export default function SearchResult({ user }: SearchResultProps) {

    const params = useParams()
    const projectId = params.projectId!

    const { mutate } = useMutation({
        mutationFn: addUserToProject,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
        }
    })

    const handleAddUserToProject = () => {
        const data = {
            projectId, 
            id: user._id
        }
        
        mutate(data)
    } 

    return (
        <>
            <p className="mt-10 text-center font-bold">Result:</p>
            <div>
                <p className="text-center font-bold">{user.name}</p>
                <button className="text-purple-600 hover:bg-purple-100 px-10 py-3 font-bold cursor-pointer" onClick={handleAddUserToProject}>
                    Add Member
                </button>
            </div>
        </>
    )
}