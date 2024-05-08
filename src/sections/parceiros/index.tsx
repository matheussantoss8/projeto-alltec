export default function Parceiros() {
  return (
    <div className="flex flex-col md:flex-row gap-3 items-center justify-between ">
      <div className="grid max-w-[100%] gap-40 overflow-x-auto md:w-full md:gap-0 md:overflow-hidden grid-cols-4 w-full">
        <div className="">
          <h1 className="text-base md:text-2xl text-center text-[#8CA4BC]">
            Empresa 1{" "}
          </h1>
        </div>
        <div>
          <h1 className="text-base md:text-2xl text-center text-[#8CA4BC]">
            Empresa 2{" "}
          </h1>
        </div>
        <div>
          <h1 className="text-base md:text-2xl text-center text-[#8CA4BC]">
            Empresa 3{" "}
          </h1>
        </div>
        <div>
          <h1 className="text-base md:text-2xl text-center text-[#8CA4BC]">
            Empresa 4{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
