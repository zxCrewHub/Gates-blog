import Card from "./Card";


function Trandingnow() {
  return (
    <section>
      <div className="w-full">
        <h2 className="font-bold text-3xl text-slate-900">NOW TRENDING</h2>

        <div className="flex justify-between gap-9">
          <Card ></Card>
          <Card ></Card>
          <Card ></Card>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Trandingnow;
