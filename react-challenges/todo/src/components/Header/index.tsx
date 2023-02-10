import { HeaderContainer } from "./styles";
import { PlusCircle } from 'phosphor-react'

import logoIgnite from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} />
      <div>
        <input type="text" placeholder="Adicione uma tarefa"/>
        <button>
          <span>Criar</span>
          <PlusCircle size={20} color="#F2F2F2"/>
        </button>
      </div>
    </HeaderContainer>
  )
}