import { ArrowRight, User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-8 px-8 bg-zinc-900 space-y-5">
        <div className="space-y-2 bg-zinc-900">
          <div className="flex items-center justify-between bg-zinc-900">
            <h2 className="bg-zinc-900 text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button>
              <X
                className="bg-zinc-900 size-5 text-zinc-400"
                onClick={closeConfirmTripModal}
              />
            </button>
          </div>
          <p className="bg-zinc-900 text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="text-zinc-100 font-semibold bg-zinc-900">
              {" "}
              Rio de Janeiro, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="text-zinc-100 font-semibold bg-zinc-900">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo
          </p>
        </div>
        <form className="space-y-4 bg-zinc-900">
          <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5 " />
            <input
              type="text"
              name="text"
              placeholder="Seu nome completo"
              className="bg-zinc-950 text-lg placeholder-zinc-400 outline-none flex-1"
            ></input>
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <ArrowRight className="text-zinc-400 size-5 " />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-zinc-950 text-lg placeholder-zinc-400 outline-none flex-1"
            ></input>
          </div>
        </form>
        <button
          onClick={createTrip}
          type="submit"
          className=" bg-lime-300 text-lime-950 rounded-lg w-full justify-center py-2 h-11 font-medium flex items-center gap-2 hover:bg-lime-400"
        >
          Confirmar criação de viagem
        </button>
      </div>
    </div>
  );
}
