import logo from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={logo} alt="Quiz Logo" />
      <h1>Reactquiz</h1>
    </header>
  );
}
