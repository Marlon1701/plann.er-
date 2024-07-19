import { Calendar, Tag, X } from "lucide-react"

interface CreateActivityModalProps{
    closeCreateActivityModal: () =>  void
}
export function CreateActivityModal({
    closeCreateActivityModal
}:CreateActivityModalProps){
    return (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
              <div className="w-[640px] rounded-xl py-8 px-8 bg-zinc-900 space-y-5">
                <div className="space-y-2 bg-zinc-900">
                  <div className="flex items-center justify-between bg-zinc-900">
                    <h2 className="bg-zinc-900 text-lg font-semibold">
                      Cadastrar Atividade
                    </h2>
                    <button>
                      <X
                        className="bg-zinc-900 size-5 text-zinc-400"
                        onClick={closeCreateActivityModal}
                      />
                    </button>
                  </div>
                  <p className="bg-zinc-900 text-sm text-zinc-400">
                    Todos os convidados podem vizualizar as atividades
                  </p>
                </div>
                <form className="space-y-4 bg-zinc-900">
                  <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                    <Tag className="text-zinc-400 size-5 " />
                    <input
                      type="text"
                      name="title"
                      placeholder="Qual a Atividade?"
                      className="bg-zinc-950 text-lg placeholder-zinc-400 outline-none flex-1"
                    ></input>
                  </div>
    
                  <div className="flex items-center gap-2">
                    <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                      <Calendar className="bg-zinc-800 size-5 " />
                      <input
                        type="datetime-local"
                        name="occrus_at"
                        placeholder="Data e hora da atividade"
                        className="bg-zinc-950 text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]"
                      ></input>
                    </div>
                    
                  </div>
                  
                </form>
    
                <button
                  type="submit"
                  className=" bg-lime-300 text-lime-950 rounded-lg w-full justify-center py-2 h-11 font-medium flex items-center gap-2 hover:bg-lime-400"
                >
                  Salvar Atividade
                </button>
              </div>
            </div>

    )
}