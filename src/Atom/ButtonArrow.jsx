import { CircleArrowRight } from "lucide-react";
const ButtonArrow = () => {
  return (
    <>
      <button className="rounded-full absolute right-5 bottom-5">
        {<CircleArrowRight color="white" size={60} />}
      </button>
    </>
  );
};

export default ButtonArrow;
