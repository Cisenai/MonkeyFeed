# MonkeyFeed
Feito por macacos para macacos

Escopo do Projeto: Monkey-Feed
Objetivo do Projeto
Desenvolver um site de feed de notícias chamado Monkey-Feed que permita aos usuários criar uma conta, fazer login e se inscrever em portais de notícias. O site também oferecerá uma opção de acesso como convidado com funcionalidades limitadas, sem a necessidade de login. O objetivo é criar uma plataforma eficiente e intuitiva para a leitura de notícias personalizadas conforme as inscrições dos usuários.

Descrição do Projeto
Nome do Projeto: Monkey-Feed
Tipo de Projeto: Desenvolvimento de Website
Escopo:
Criação de Conta e Login:
Cadastro de usuários com nome, e-mail e senha.
Sistema de autenticação e login.
Inscrição em Portais de Notícias:
Usuários autenticados poderão se inscrever em portais de notícias.
Interface para gerenciar inscrições (adicionar, remover, visualizar portais).
Acesso como Convidado:
Permitir acesso ao conteúdo de notícias sem necessidade de login.
Limitar funcionalidades para usuários não autenticados (sem acesso a inscrições).
Feed de Notícias:
Exibir notícias atualizadas conforme as inscrições dos usuários.
Documentos de Requisitos
Regras de Negócio
[RN001] O sistema deve permitir que qualquer usuário crie uma conta com nome, e-mail e senha.
[RN002] O sistema deve permitir que os usuários façam login usando e-mail e senha.
[RN003] O sistema deve permitir que usuários autenticados se inscrevam em portais de notícias e gerenciem suas inscrições.
[RN004] Usuários não autenticados (convidados) poderão visualizar o feed de notícias, mas não terão acesso a funcionalidades de inscrição.
[RN005] O sistema deve atualizar o feed de notícias conforme as inscrições dos usuários.
Requisitos Funcionais
Cadastro e Login:

O sistema deve permitir que os usuários criem uma conta fornecendo nome, e-mail e senha.
O sistema deve validar e armazenar as informações de login de forma segura.
O sistema deve permitir que os usuários façam login e logout.
Gerenciamento de Inscrições:

O sistema deve permitir que usuários autenticados se inscrevam em portais de notícias.
O sistema deve permitir que usuários visualizem e gerenciem suas inscrições (adicionar ou remover portais).
Acesso como Convidado:

O sistema deve permitir que usuários acessem o feed de notícias sem criar uma conta.
O sistema deve restringir funcionalidades de personalização e inscrição para usuários não autenticados.
Feed de Notícias:

O sistema deve exibir um feed de notícias atualizado com base nas inscrições dos usuários.
Requisitos Não Funcionais
Usabilidade:

A interface deve ser intuitiva e fácil de navegar para todos os tipos de usuários (autenticados e convidados).
O sistema deve ser responsivo e funcionar bem em dispositivos móveis e desktop.
Manutenabilidade:

O código deve ser modular e bem documentado para facilitar futuras manutenções e atualizações.
Compatibilidade:

O sistema deve ser compatível com os principais navegadores modernos (Chrome, Firefox, Safari, Edge).
