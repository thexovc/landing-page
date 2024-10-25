import HomeRow from "../Resusable/Home/HomeRow";

export default function Hero() {
  return (
    <div className="w-5/6 mx-auto py-5">
      <HomeRow
        direction={"right"}
        bgWhite={false}
        title="Get More Done with whitepace"
        description="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
        buttonText="Try WhiteSpace free"
      />
    </div>
  );
}
