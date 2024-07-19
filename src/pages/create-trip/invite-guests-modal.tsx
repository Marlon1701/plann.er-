import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addNewEmailToInvate: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvate: (email: string) => void;
}

export function InviteGuestsModal({
  addNewEmailToInvate,
  closeGuestsModal,
  emailsToInvite,
  removeEmailFromInvate,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-1 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-8 px-8 bg-zinc-900 space-y-5">
        <div className="space-y-2 bg-zinc-900">
          <div className="flex items-center justify-between bg-zinc-900">
            <h2 className="bg-zinc-900 text-lg font-semibold">
              Selecionar convidados
            </h2>
            <button>
              <X
                className="bg-zinc-900 size-5 text-zinc-400"
                onClick={closeGuestsModal}
              />
            </button>
          </div>
          <p className="bg-zinc-900 text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem
          </p>
        </div>

        <div className="flex flex-wrap bg-zinc-900 gap-2">
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="pw-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
              >
                <span className="bg-zinc-800 text-zinc-300">{email}</span>
                <button
                  type="button"
                  onClick={() => removeEmailFromInvate(email)}
                >
                  <X className="size-4 text-zinc-400 bg-zinc-800" />
                </button>
              </div>
            );
          })}
        </div>
        <div className="w-full bg-zinc-900">
          <form
            onSubmit={addNewEmailToInvate}
            className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
          >
            <AtSign className="text-zinc-400 size-5 " />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className=" bg-zinc-950 text-lg placeholder-zinc-400 outline-none flex-1"
            ></input>

            <button
              type="submit"
              className="bg-lime-300 text-lime-950 rounded-lg px-4 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
            >
              Convidar
              <Plus className="size-5 bg-lime-300" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
