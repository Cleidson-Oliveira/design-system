import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Input, InputIcon, InputWraper } from "./components/Input";
import { Logo } from "./components/Logo";
import { Text } from "./components/Text";

import "./styles/global.css";

export function App() {

  return (
    <div className="flex justify-center items-center flex-col gap-8 w-full h-screen bg-black">
      <div className="flex justify-center items-center flex-col gap-2">
        <Logo src="/react-logo.svg" className="text-gold-900" />
        <Text as="h1" size="lg" className="text-gold-900">Ignite Lab</Text>
        <Text>Faça login e começe a usar!</Text>
      </div>

      <form className="flex justify-center items-center flex-col gap-4 w-[400px]">
        <label  className="flex flex-col gap-1 w-full">
          <Text className="text-gold-900">Endereço de e-mail</Text>
          <InputWraper>
            <InputIcon><Envelope /></InputIcon>
            <Input placeholder="jhon.doe@exemple.com"/>
          </InputWraper>
        </label>
        <label  className="flex flex-col gap-1 w-full">
          <Text className="text-gold-900">Sua senha</Text>
          <InputWraper>
            <InputIcon><Lock/></InputIcon>
            <Input placeholder="•••••••••" type="password" />
          </InputWraper>
        </label>
        <label className="flex items-center gap-2 w-full">
          <Checkbox />
          <Text>Manter conectado</Text>
        </label>
        <Button buttonType="secondary">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col gap-2 items-center">
          <a href="" className="transition-colors text-xs text-gold-50 hover:text-gold-900">Esqueceu sua senha?</a>
          <a href="" className="transition-colors text-xs text-gold-50 hover:text-gold-900">Não possui uma conta? Crie uma agora!</a>
      </footer>
    </div>
  )
}
