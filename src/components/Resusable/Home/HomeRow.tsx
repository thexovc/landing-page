export default function HomeRow({
  direction,
  bgWhite,
  title,
  description,
  buttonText,
}: {
  direction: string;
  bgWhite: boolean;
  title: string;
  description: string;
  buttonText: string;
}) {
  return (
    <div
      className={`flex ${
        direction === "left" && "flex-row-reverse"
      } justify-between items-center gap-5 ${!bgWhite && "bg-primary"}`}
    >
      <div
        className={`${
          bgWhite ? "text-[#212529]" : "text-white"
        } w-1/2 space-y-5`}
      >
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg lg:w-5/6x ">{description}</p>
        <button className="bg-[#4F9CF9] text-white px-4 py-2 rounded-lg">
          {buttonText}
        </button>
      </div>

      <div className="bg-[#C4DEFD] w-1/2 h-80"></div>
    </div>
  );
}
