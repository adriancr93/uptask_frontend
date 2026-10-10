import { Link, Navigate, useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProjectsById } from "@/api/ProjectAPI";
import AddTaskModal from "@/components/tasks/AddTaskModal";
import TaskList from "@/components/tasks/TaskList";
import EditTaskData from "@/components/tasks/EditTaskData";
import TaskModalDetails from "@/components/tasks/TaskModalDetails";
import { useAuth } from "@/hooks/useAuth";
import { isManager } from "@/utils/policies";

export default function ProjectDetailsView() {
    const { data: user, isLoading: authLoading } = useAuth();
    const navigate = useNavigate()
    const params = useParams()
    const projectId = params.projectId!
    const { data, isLoading, error, isError } = useQuery({
        queryKey: ["project", projectId], // Added projectId to queryKey for uniqueness
        queryFn: () => getProjectsById(projectId),
        retry: false
    });
   
    if(isLoading && authLoading) return <div>Loading...</div>;
    if(isError) return <Navigate to='/404' />
    if(data && user) return (
      <>
        <h1 className="text-5xl font-black">{data.projectName}</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">
          {data.description}
        </p>

        {isManager(data.manager, user._id) && (
          <nav className="my-5 flex gap-3">
            <button
              type="button"
              className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
              onClick={() => navigate(location.pathname + "?newTask=true")}
            >
              Add Task
            </button>
            <Link
              to={"team"}
              className="bg-fuchsia-600 hover:bg-fuchsia-700 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
            >
              Collaborators
            </Link>
          </nav>
        )}

        <TaskList tasks={data.tasks} />
        <AddTaskModal />
        <EditTaskData />
        <TaskModalDetails />
      </>
    );
}
