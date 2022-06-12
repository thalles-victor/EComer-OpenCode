import { WhatsappLogo } from 'phosphor-react'

export function ContactIcon() {
  return (
    <div>
      <WhatsappLogo
        size={50}
        className="fixed bottom-10 right-10 text-green-700 shadow-lg hover:cursor-pointer"
      />
    </div>
  );
}