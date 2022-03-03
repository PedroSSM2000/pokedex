import { Link } from "react-router-dom";
import Header from "./Header";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center text-center bg-secondary min-h-screen">
      <Header />
      <Link
        className="inline-block my-8 bg-primary py-1 px-2 rounded shadow-md transition hover:bg-secondary"
        to="/"
      >
        Go to Pokedex
      </Link>
      <h1>This page does not exist</h1>
    </div>
  );
}
