import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <>
       <h1 className="font-black text-center text-4xl text-white">404 - Not Found</h1>
       <p className="text-center text-white mt-4">
            Maybe you want return to the previous page or click below to go back to home.
            <Link className="text-fuchsia-500" to={'/'}>{' '}Go back to home</Link></p>
    </>
  )
}
