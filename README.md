This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Para iniciar o projeto, você pode executar:

### `yarn start`

## Exemplo de State Management utilizando RecoilJS.

Infos

### `Atoms`

Atoms são como unidades de estado, podemos atualiza-los e ouvi-los a cada atualização de um atom.
Sempre que um atom atualiza, o componente re-renderiza novamente.

O Atom possui uma key unica, usado para persistir o valor, e um valor default inicial.

### `useRecoilState`

Utilizamos ele para ouvir um atom e atualiza-lo.
Devemos passar como parametro para a função o atom que desejamos escutar.
Ele ira retornar um value e um setValue.

const [value, setAtomValue] = useRecoilState(<atom>);

### `useRecoilValue`
Usamos ele para apenas escutar as atualizações de um atom, ele nao retorna o set. Utilizado quando a tela apenas trabalha com leitura, sem escrita no atom.

const value = useRecoilValue(<atom>);

### `Selectors`
Selectors são funções puras, onde podemos passar um atom ou outro selector como parametro e retornar um valor modificado dele.
Por exemplo: podemos possuir um atom que apenas captura o onchange do input, armazenando os characteres e um selector que escuta esses characteres armazenados e retorna o numero total.

const inputSelector = selector({
  key: 'inputSelectorKey',
  get: ({get}) => {
    const value = get(<atom>);
    return value.length
  },
});