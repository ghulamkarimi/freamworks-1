import { ImSpinner9 } from "react-icons/im"

const Spinner = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <ImSpinner9 className="animate-spin  text-white text-9xl" />
    </div>
  );
};

export default Spinner;
