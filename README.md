# Case: Gestão de Notícias do JOTA

O projeto está divido em duas pastas:
- news_frontend - Interface/Frontend do projeto
- news_project - API e banco de dados

Mais abaixo seguem as intruções de como rodar cada parte separadamente.

Observações: 

- O banco possui as tabelas de perfil, usuários (de acordo com o padrão do Django) e notícias.
- É necessário criar um Super Usuário no Django admin para logar na API.
- Foram implementados: sistema de autenticação (testado e funcional), CRUD de notícias. Todos integrados com o Frontend.
- Na tela principal do frontend fica a lista de notícias e o botão de Login. Após logar aparecem os botões de Criar Notícia, Editar Notícia e Sair (Logout).
- Infelizmente não consegui terminar o projeto como gostaria. Estou tendo um erro recorrente ao tentar rodar a API (`You must set settings.ALLOWED_HOSTS if DEBUG is False`), mesmo setando Debug para True e tentando diversas outras resoluções. Por isso não consegui testar os demais endpoints.
- Para tentar resolver o erro anterior apaguei o arquivo sqlite. Depois disso a migration não funcionou mais e não consegui criar outro - Para criar o arquivo basta rodar `python manage.py migrate`.
- Para a interface tentei utilizar o shadcn-ui para facilitar a estilização e já tinha familiaridade, porém como criei o projeto puramente em React não funcionou.

## API

### Criar o Ambiente Virtual

  `python -m venv venv`

### Ativar o Ambiente Virtual

- No Windows

  `venv\Scripts\activate`

- No macOS/Linux

  `source venv/bin/activate`


### Instalar Dependências

  `pip install -r requirements.txt`

### Rodar o Servidor

  `python manage.py runserver`

### Criar Super Usuário no Django Admin

  `python manage.py createsuperuser`


## Frontend

### Instalar Dependências

  `npm install`

### Rodar a Aplicação em Modo Desenvolvedor

  `npm start`
