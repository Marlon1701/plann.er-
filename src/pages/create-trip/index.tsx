import {} from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateSteps } from "./steps/destination-and-date-steps";
import { InviteGuestsStep } from "./steps/invite-guests-step";
export function CreateTripPage() {
  const navigate = useNavigate();
  const [IsGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [IsGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([
    "Marlon.nunes@gmail.com",
  ]);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }
  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }
  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }
  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function addNewEmailToInvate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const email = data.get("email")?.toString();
    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return;
    }
    setEmailsToInvite([...emailsToInvite, email]);
    event.currentTarget.reset();
  }

  function removeEmailFromInvate(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (invied) => invied !== emailToRemove
    );

    setEmailsToInvite(newEmailList);
  }
  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    navigate("/trips/123");
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-2 text-center space-y-10">
        <p className="text-zinc-300 text-lg">
          Convide seus amigos e planeje sua próxima viagem!
        </p>
        <div className="space-y-4">
          <DestinationAndDateSteps
            closeGuestsInput={closeGuestsInput}
            IsGuestsInputOpen={IsGuestsInputOpen}
            openGuestsInput={openGuestsInput}
          />
          {IsGuestsInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              openConfirmTripModal={openConfirmTripModal}
              openGuestsModal={openGuestsModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br />
          com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidades.
          </a>
        </p>
      </div>

      {IsGuestsModalOpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvate={addNewEmailToInvate}
          closeGuestsModal={closeGuestsModal}
          removeEmailFromInvate={removeEmailFromInvate}
        />
      )}
      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
        />
      )}
    </div>
  );
}
