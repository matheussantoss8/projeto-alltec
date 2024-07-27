import { message, phoneNumber } from "../ButtonWhats";

export default function Botao() {
  return (
    <div className="button-borders">
      <a
        href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          message
        )}`}
        className="destaque primary-button"
      >
        Entre em contato
      </a>
    </div>
  );
}
