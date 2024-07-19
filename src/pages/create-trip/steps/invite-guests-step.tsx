import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
  openGuestsModal: () => void;
  emailsToInvite: string[];
  openConfirmTripModal: () => void;
}

export function InviteGuestsStep({
  emailsToInvite,
  openConfirmTripModal,
  openGuestsModal,
}: InviteGuestsStepProps) {
  return (
    <div className="h-14 bg-zinc-900 px-7 rounded-3xl flex items-center gap-3">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex items-center gap-2 bg-zinc-900 flex-1"
      >
        <UserRoundPlus className="size-5 text-zinc-400 bg-zinc-900" />

        {emailsToInvite.length > 0 ? (
          <span className="text-zync-100 bg-zinc-900 text-lg flex-1 text-left">
            {emailsToInvite.length} Pessoa(s) convidado(s)
          </span>
        ) : (
          <span className="text-zync-400 bg-zinc-900 text-lg flex-1 text-left">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-400" />

      <button
        onClick={openConfirmTripModal}
        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
      >
        Confirmar Viagem
        <ArrowRight className="size-5 bg-lime-300" />
      </button>
    </div>
  );
}
