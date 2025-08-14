import { MoveRight } from "lucide-react";
const ButtonArrow = () => {
  return (
    <>
      <button className="bg-transparent border-2 rounded-full absolute right-5 bottom-5 group-hover:bg-white group-hover:text-black transition-all duration-700">
        {<MoveRight color="currentColor" strokeWidth={1} size={50} />}
      </button>
    </>
  );
};

export default ButtonArrow;
