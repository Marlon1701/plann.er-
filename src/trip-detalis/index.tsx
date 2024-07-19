import { Calendar, MapPin, Plus, Settings2 } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";

interface ModalIndex{
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
}

export function TripDetailsPage({
  closeGuestsInput
}: ModalIndex) {
  const [isCreateActivityModalOpen, setCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setCreateActivityModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 flex items-center justify-between">
        <div className="bg-zinc-900 flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400 bg-zinc-900" />
          <span className=" text-zinc-400 bg-zinc-900">
            Florianópolis, Brasil
          </span>
        </div>
        <div className="flex items-center gap-20 bg-zinc-900">
          <div className="bg-zinc-900 flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400 bg-zinc-900" />
            <span className=" text-zinc-400 bg-zinc-900">
              17 a 23 de Agosto
            </span>
          </div>

          <button  onClick={closeGuestsInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Alterar local/data
            <Settings2 className="size-5 bg-zinc-800" />
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-4 ">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              onClick={openCreateActivityModal}
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
            >
              <Plus className="size-5 bg-lime-300 hover:bg-lime-400" />
              Cadastrar atividade
            </button>
          </div>
          <Activities/>
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />
          <div className="w-full h-px bg-zinc-800" />
          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
}
