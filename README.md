# ArrayList Exemplo de Uso

Este documento fornece exemplos de uso da classe `ArrayList` e explica cada operação disponível.

## Inicialização

```typescript
const arrayList = new ArrayList<number>();
```

Cria uma nova instância de `ArrayList` para armazenar números.

## Adicionando Elementos

```typescript
arrayList.add(1);
arrayList.add(2);
arrayList.add(3);
```

Adiciona elementos individuais ao `ArrayList`.

## Acessando Elementos

```typescript
console.log(arrayList.get(0));
console.log(arrayList.get(1));
console.log(arrayList.get(2));
```

Recupera elementos pelo índice.

## Tamanho do ArrayList

```typescript
console.log(arrayList.size());
```

Retorna o número de elementos no `ArrayList`.

## Convertendo para Array

```typescript
console.log(arrayList.toArray());
```

Converte o `ArrayList` em um array JavaScript.

## Adicionando Múltiplos Elementos

```typescript
arrayList.addAll([4, 5, 6]);
console.log(arrayList.toArray());
```

Adiciona múltiplos elementos de uma vez.

## Atualizando Elementos

```typescript
arrayList.set(0, 10);
console.log(arrayList.get(0));
```

Atualiza o elemento no índice especificado.

## Removendo Elementos

```typescript
arrayList.remove(1);
console.log(arrayList.toArray());
```

Remove o elemento no índice especificado.

## Verificando Elementos

```typescript
console.log(arrayList.contains(3));
console.log(arrayList.indexOf(3));
```

Verifica se um elemento está presente e retorna o índice do elemento.

## Limpando o ArrayList

```typescript
arrayList.clear();
console.log(arrayList.isEmpty());
```

Remove todos os elementos do `ArrayList`.

## Sublista

```typescript
arrayList.addAll([7, 8, 9, 10]);
console.log(arrayList.subList(1, 3));
```

Retorna uma sublista do `ArrayList` entre os índices especificados.

## Iterando sobre Elementos

```typescript
arrayList.forEach((element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});
```

Executa uma função para cada elemento do `ArrayList`.

## Ordenando Elementos

```typescript
arrayList.sort((a, b) => b - a);
console.log(arrayList.toArray());
```

Ordena os elementos do `ArrayList` em ordem decrescente.

## Manipulando Pares Chave-Valor com Map

```typescript
arrayList.setKeyValue('key1', 100);
console.log(arrayList.getValue('key1'));

arrayList.setKeyValue('key2', 200);
console.log(arrayList.getValue('key2'));

console.log(arrayList.hasKey('key1'));
console.log(arrayList.mapSize());

arrayList.removeKey('key1');
console.log(arrayList.hasKey('key1'));

arrayList.clearMap();
console.log(arrayList.mapSize());
```

Estes exemplos mostram como adicionar, acessar, verificar, remover e limpar pares chave-valor usando o `Map` interno da classe `ArrayList`. A propriedade `mapSize` retorna o número de pares chave-valor no `Map`. O método `clearMap` remove todos os pares chave-valor.
