import { Link,} from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <h3 className="uppercase flex items-center gap-[-5px] relative w-full md:text-[30px] px-1 text-[23px] font-semibold">
        <div>st</div>
        <div className="h-5 w-5 rounded-full bg-[#a8e92f] animate-pulse"></div>
        <div>ve</div>
      </h3>
    </Link>
  );
}
