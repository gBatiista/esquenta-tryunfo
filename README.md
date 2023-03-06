# Esquenta para o Projeto Tryunfo #

## Projeto Todo List App ##


# Orientações # 
1 - Clone o repositório do exercício
- Use o comando: 
`
 git clone git@github.com:gBatiista/esquenta-tryunfo.git
`

2 - Instale as dependências
- `npm install`

# Requisitos #

## 1. Crie o formulário de criação de nova tarefa ##
Neste requisito, você deve criar um formulário com campos de título da tarefa, descrição e categoria.

- Crie um componente `Form` que será o seu formulário dentro  do diretório `src/components`.
- O componente deve ter um elemento do tipo `form` e conter os seguintes inputs:

> 1 - Input do tipo `text` que será o campo referente ao título da tarefa <br>
2 - Input do tipo `text` que será o campo referente à descrição da tarefa <br>
3 - Input do tipo `select`, referente à categoria da tarefa com as `options`: 'Trabalho', 'Casa', 'Lazer', 'Outros' <br>
4 - Input do tipo `checkbox` envelopado com uma `label` "Importante" <br>

- Inserir um botão com o texto "Adicionar"

## 2. Adicione as props ao componente `Form`
- O componente deve receber as seguintes props:
 > 1 - title, uma string<br>
   2 - description, uma string  <br>
   3 - category, uma string <br>
   4 - handleChange, uma callback <br>
   5 - addTask, uma callback <br>
   6 - urgent, uma boolean <br>
   7 - disabledButton, uma boolean <br>

> OBS: Não se esqueça de fazer a validação das props com o PropTypes.

## 3. No App, crie os `states` necessários
- No App, crie os seguintes states:
> 1 - title <br>
  2 - description <br>
  3 - category <br>
  4 - urgent <br>
  5 - disabledButton <br>
  6 - tasks (que deve ser iniciado como uma array vazio) <br> 

## 4. No App, crie a função `handleChange`
A função handleChange é uma função genérica disparada por eventos nos inputs para alterar os `states` do App.

## 5. No App, crie a função `validateFields`
A função `validateFields` deverá validar os campos de `title`  e `description` com as seguintes condições:
- title deve ter mais de 4 caracteres
- description deve ter mais de 10 caracteres

E, caso os campos sejam válidos, o botão "Adicionar" deve ser habilitado via `state` disabledButton.

## 6. Crie o card de cada tarefa adicionada
O componente `Task` deve ser criado no diretório `components` que receberá as seguintes props:
> 1 - title <br> 
2 - description <br> 
3 - category<br> 
4 - removeTask<br> 
5 - urgent<br> 

## 7. Renderize os elementos do componente `Task`
O componente deve renderizar em uma tag `div` com a classe "taskCard" com os seguintes elementos:
> 1 - Uma tag h2 com `title` <br> 
2 - Uma tag p com `description` <br> 
3 - Uma tag p  com `category`<br> 
4 - Uma tag p com o texto "Importante" se a prop `urgent` for `true`<br>
5 - Um botão com o texto "Feito!" <br>

## 8. Renderize o componente `Task`
O componente `Task` deve ser renderizado no `App` a medida que novas tarefas vão sendo adicionadas

## 9. No App, crie a função `removeTask`
A função removeTask é disparada por eventos de `click` no botão `Feito` do componente `Task`. Essa função deve remover a tarefa da aplicação.





