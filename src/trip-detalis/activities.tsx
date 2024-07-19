import { CircleCheck } from "lucide-react";

export function Activities() {
  return (
    <div className="space-y-8">
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
          <span className="text-xs text-zinc-500">Sábado</span>
        </div>
        <p className="text-zinc-500 text-sm">
          Nenhuma atividade cadastrada nessa data
        </p>
        <div className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
            <span className="text-xs text-zinc-500">Domingo</span>
          </div>
          <div className="space-y-2.5">
            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl flex items-center gap-3">
              <CircleCheck className="size-5 text-line-300 bg-zinc-900" />
              <span className="bg-zinc-900 text-zinc-100">
                Academia em grupo
              </span>
              <span className="bg-zinc-900 text-sm text-zinc-400 ml-auto">
                08:00h
              </span>
            </div>
          </div>
          <div className="space-y-2.5">
            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl flex items-center gap-3">
              <CircleCheck className="size-5 text-line-300 bg-zinc-900" />
              <span className="bg-zinc-900 text-zinc-100">Almoço</span>
              <span className="bg-zinc-900 text-sm text-zinc-400 ml-auto">
                12:00h
              </span>
            </div>
          </div>
          <div className="space-y-2.5">
            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl flex items-center gap-3">
              <CircleCheck className="size-5 text-line-300 bg-zinc-900" />
              <span className="bg-zinc-900 text-zinc-100">Gaming session</span>
              <span className="bg-zinc-900 text-sm text-zinc-400 ml-auto">
                18:00h
              </span>
            </div>
          </div>
          <div className="space-y-2.5">
            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl flex items-center gap-3">
              <CircleCheck className="size-5 text-line-300 bg-zinc-900" />
              <span className="bg-zinc-900 text-zinc-100">Jantar</span>
              <span className="bg-zinc-900 text-sm text-zinc-400 ml-auto">
                21:00h
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
