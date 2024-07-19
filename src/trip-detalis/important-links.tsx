import { Link2, Plus } from "lucide-react";


export function ImportantLinks(){
    return (
        <div className="space-y-6">
          <h2 className="font-semibold text-xl">Links Importantes</h2>
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <span className="block font-medium tex-zinc-100">
                  Reserva AirBnB
                </span>
                <a
                  href="#"
                  className="block text-xs text-zinc-400 truncate houver:text-zinc-200"
                >
                  https://www.airbnd.com.br/rooms/21374864736478624963259634586449835643589356
                </a>
              </div>
              <Link2 className="text-zinc-400 size-5" />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <span className="block font-medium tex-zinc-100">
                  Reserva AirBnB
                </span>
                <a
                  href="#"
                  className="block text-xs text-zinc-400 truncate houver:text-zinc-200"
                >
                  https://www.airbnd.com.br/rooms/21374864736478624963259634586449835643589356
                </a>
              </div>
              <Link2 className="text-zinc-400 size-5" />
            </div>
          </div>
          <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
            <Plus className="size-5 bg-zinc-800" />
            Cadastrar novo link
          </button>
      </div>
    )
}