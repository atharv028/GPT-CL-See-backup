import gpt_logo from "../assets/gpt_logo.svg";

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={gpt_logo} alt="logo" className="w-10 h-10" />
          <span className="ml-3 text-xl">GPT-CoverLetters</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
