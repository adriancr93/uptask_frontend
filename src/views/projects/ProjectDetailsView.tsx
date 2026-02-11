import { Navigate, useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProjectsById } from "@/api/ProjectAPI";
import AddTaskModal from "@/components/tasks/AddTaskModal";
import TaskList from "@/components/tasks/TaskList";

export default function ProjectDetailsView() {
    const navigate = useNavigate()
    const params = useParams()
    const projectId = params.projectId!
    const { data, isLoading, error, isError } = useQuery({
        queryKey: ["editProject", projectId], // Added projectId to queryKey for uniqueness
        queryFn: () => getProjectsById(projectId),
        retry: false
    });
   
    if(isLoading) return <div>Loading...</div>;
    if(isError) return <Navigate to='/404' />
    if(data) return (
        <>
            <h1 className="text-5xl font-black">{data.projectName}</h1>
            <p className="text-2xl font-light text-gray-500 mt-5">
                {data.description}
            </p>

            <nav className="my-5 flex gap-3">
               <button type="button" className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors" 
                       onClick={() => navigate(location.pathname + '?newTask=true')}>
                  Add Task
               </button>
            </nav>
            <TaskList 
              tasks={data.tasks}
            />
            <AddTaskModal />
        </>
    )
}
