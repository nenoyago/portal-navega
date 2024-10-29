# Navega

Este projeto é um aplicativo web chamado **Navega**, que apresenta um **Dashboard** e uma tela de **Meu Plano**, permitindo ao usuário navegar através de diferentes seções com facilidade. O sistema é construído utilizando **Angular** e integra **Angular Material** e **Tailwind CSS** para proporcionar uma interface de usuário moderna e responsiva.

## Estrutura do Projeto

### Página de Autenticação

O projeto inclui uma **Página de Autenticação** com uma tela de **Login**. Nesta tela, os usuários podem inserir suas credenciais para acessar o sistema. A autenticação é gerenciada para garantir que apenas usuários autorizados possam acessar as funcionalidades do aplicativo.

### Tela de Meu Plano

Na tela de Meu Plano, você encontrará um menu que permite a navegação entre diferentes seções. A única tela navegável dentro dessa página é a de **Contribuição Mensal**. A navegação é intuitiva e facilita o acesso às informações relevantes para o usuário.

### Página Not Found

O projeto também inclui uma página **Not Found** que é exibida quando o usuário tenta acessar uma rota que não existe. Esta página fornece uma mensagem clara informando que a rota solicitada não foi encontrada e oferece um link para retornar à página inicial.

### Funcionalidades

- **Página de Autenticação:** Tela de login onde os usuários podem inserir suas credenciais.
- **Dashboard:** Uma visão geral das principais métricas e informações do usuário.
- **Meu Plano:** Um espaço dedicado onde os usuários podem gerenciar suas contribuições e acessar detalhes sobre seus planos.
- **Contribuição Mensal:** A seção que detalha as contribuições mensais do usuário, permitindo uma gestão mais fácil.
- **Página Not Found:** Mensagem amigável para rotas não existentes.

## Tecnologias Utilizadas

- **Angular:** O framework principal utilizado para construir a aplicação.
- **Angular Material:** Uma biblioteca que fornece componentes prontos para uso, seguindo as diretrizes do Material Design.
- **Tailwind CSS:** Um framework CSS utilitário que permite um design altamente customizável e responsivo.
- **Sistema Mocado:** O sistema simula as interações do usuário, incluindo a expiração da sessão de login e validações de formulário.

## Segurança e Validações

- **Guards:** Implementados para proteger rotas e garantir que apenas usuários autenticados possam acessar certas páginas.
- **Validações de Formulário:** As entradas do usuário são validadas para garantir a integridade e a segurança dos dados.

## Checklist de Funcionalidades

- [x] Página de Autenticação com tela de Login
- [x] Dashboard com informações do usuário
- [x] Tela de Meu Plano
- [x] Navegação para Contribuição Mensal
- [x] Página Not Found
- [ ] Adicionar testes unitários
- [ ] Integrar uma biblioteca de gráficos

## Ferramentas de Validação e Linting

O projeto foi configurado com ferramentas de validação e linting para garantir a qualidade do código e das mensagens de commit:

- **Husky:** Utilizado para gerenciar hooks de git, permitindo a execução de scripts antes de commits e push.
- **Commitlint:** Configurado para validar as mensagens de commit, garantindo que sigam um padrão específico.
- **ESLint:** Uma ferramenta de linting que ajuda a identificar e corrigir problemas no código JavaScript/TypeScript.
- **Prettier:** Um formatador de código que garante que o estilo do código seja consistente em todo o projeto.
