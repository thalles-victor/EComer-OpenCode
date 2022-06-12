import { useState } from 'react';
import { CopySimple, WhatsappLogo } from 'phosphor-react';

interface IContact {
  company: string;
  numberPhone: string | number;
  email: string;
  adress?: {
    road: string,
    district: string;
    cep: string;
  }
}

const companyContact: IContact = {
  company: 'Jade Moda Intima',
  email: 'jademodaintima@gmailcom',
  numberPhone: '9938-0212323',
  adress: {
    road: 'Rua Mauricio Garcias',
    cep: '23213000',
    district: 'Centro'
  }
}


export function FooterInfo() {
  const [count, setCount] = useState(0);

  function handleCopyTextToBlipboard() {
    setCount(count + 1);
    navigator.clipboard.writeText(companyContact.email);
  }
  return (
    <div className="flex flex-row items-start justify-center space-x-[600px] bg-[#797979]  font-[Hahmlet]">

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[1.5625rem] text-white">Sobre nós</h1>
        <p>Quem somos</p>
        <p>O que nos comemos</p>
        <p>De onde viemos</p>
        <p>Pra onde vamoss</p>
        <p>O que fazemos</p>
        <p>Vai cuidar da sua vida</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[1.5625rem] text-white">Contato</h3>

        <div className="flex">
          <p className="ml-7">{companyContact.numberPhone}</p>
          <WhatsappLogo
            size={22}
            className="ml-2 text-green-900"
          />
        </div>

        <div className="flex">
          <p className="hover:text-blue-900 ml-6" onClick={handleCopyTextToBlipboard}>{companyContact.email}</p>
          <CopySimple
            size={22}
            onClick={handleCopyTextToBlipboard}
            className="ml-2 hover:cursor-pointer"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[1.5625rem] text-white">Termos legais</h3>
        <p></p>
      </div>

    </div>
  )
}