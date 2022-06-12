export function Card() {
  return (
    <div className="items-center justify-center w-[396px] hover:cursor-pointer">
      <img
        src="https://i.ibb.co/BPxYjmz/card.png"
        className=""
      />
      <footer className="bg-[#888888] text-center h-[5.875rem] rounded-b-[10px] ">
        <span className="text-white break-words text-[20px]"> SUTIÃ REFORÇADO MICROFIBRA- PRIMAVERA</span>
      </footer>
    </div>
  );
}

export function Cards() {
  return (
    <div className="flex justify-center font-[Hahmlet]">
      <div className="grid grid-cols-4 gap-y-20 gap-x-16">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}