import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateStpes {
  IsGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
}
export function DestinationAndDateSteps({
  IsGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
}: DestinationAndDateStpes) {
  return (
    <div className="h-14 bg-zinc-900 px-7 rounded-3xl flex items-center gap-3">
      <div className="flex items-center gap-2 bg-zinc-900 flex-1">
        <MapPin className="size-5 text-zinc-400 bg-zinc-900" />

        <input
          disabled={IsGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai? "
          className=" bg-zinc-900 text-lg placeholder-zinc-400 outline-none"
        />
      </div>

      <div className="flex items-center gap-2 bg-zinc-900">
        <Calendar className="size-5 text-zinc-400 bg-zinc-900 " />
        <input
          disabled={IsGuestsInputOpen}
          type="text"
          placeholder="Quando?"
          className="h-8 bg-transparent text-lg placeholder-zinc-400 outline-none w-40"
        />
      </div>

      <div className="w-px h-6 bg-zinc-400" />

      {IsGuestsInputOpen ? (
        <button
          onClick={closeGuestsInput}
          className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
        >
          Alterar local/data
          <Settings2 className="size-5 bg-zinc-800" />
        </button>
      ) : (
        <button
          onClick={openGuestsInput}
          className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
        >
          Continuar
          <ArrowRight className="size-5 bg-lime-300 hover:bg-lime-400" />
        </button>
      )}
    </div>
  );
}
