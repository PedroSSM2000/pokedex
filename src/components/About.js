import Header from "./Header";
export default function About() {
  return (
    <div className="flex flex-col items-center text-center bg-secondary min-h-screen">
      <Header />
      <p>This website was made using React Router</p>
    </div>
  );
}
