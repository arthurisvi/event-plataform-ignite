import { LogoFooter } from "./icons/LogoFooter";

export function Footer() {
  return (
    <footer className="py-6 mx-6 flex items-center justify-between border-t border-gray-600">
      <div className="flex items-center gap-6">
        <LogoFooter />
        <span className="text-gray-300">
          Rocketseat - Todos os direitos reservados
        </span>
      </div>
      <div>
        <span className="text-gray-300">Políticas de privacidade</span>
      </div>
    </footer>
  );
}
