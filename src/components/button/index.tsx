const phoneNumber = "5511917425678";
const message = "Olá! Estou interessado(a) em saber mais sobre seus serviços e como vocês podem me ajudar. Poderiam, por favor, fornecer mais informações? Agradeço desde já!";

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
