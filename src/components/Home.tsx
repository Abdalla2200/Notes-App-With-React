import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Home() {
  return (
    <div className="container py-16 md:py-24 text-center">
      <h1 className="bg-gradient-to-r from-blue-500 to-purple-600 text-4xl md:text-5xl font-bold text-transparent bg-clip-text">
        Welcome to Easy Notes
      </h1>
      <p className="bg-gradient-to-r from-purple-600 to-blue-500 text-2xl md:text-3xl font-medium text-transparent bg-clip-text my-4">
        Organize your thoughts and ideas in one place.
      </p>
      <Link to="/Form">
        <Button className="cursor-pointer bg-blue-600 hover:bg-blue-700 mt-4 text-lg">
          Create a New Note
        </Button>
      </Link>
    </div>
  );
}
