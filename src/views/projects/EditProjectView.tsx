import { Navigate, useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { getProjectsById } from "@/api/ProjectAPI";
import EditProjectForm from "@/components/projects/EditProjectForm";

export default function EditProjectView() {
    const params = useParams()
    const projectId = params.projectId!
    const { data, isLoading, error, isError } = useQuery({
        queryKey: ["editProject", projectId], // Added projectId to queryKey for uniqueness
        queryFn: () => getProjectsById(projectId),
        retry: false
    });
   
    if(isLoading) return <div>Loading...</div>;
    if(isError) return <Navigate to='/404' />
    if(data) return <EditProjectForm data={data} projectId={projectId} />
}
