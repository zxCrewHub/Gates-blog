
import Input from "../components/ui-kit/Input";
import Button from "../components/ui-kit/Button";

const SignUp = () => {
  return (
    <div className=" bg-[url('/public/images/hero/hero_bg.png')] h-screen bg-cover bg-center">
      <div className="flex flex-col items-center justify-center h-screen gap-2.5">
        <Input text="Name" placeholder="Enter your name" />
        <Input text="Surname" placeholder="Enter your surname" />
        <Input text="Password" placeholder="Enter your password" />
        <Button text="Sign up" />
      </div>
    </div>
  );
};

export default SignUp;
