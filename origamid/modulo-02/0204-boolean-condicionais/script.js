/* Boolean;

  - Existem dois valores boleanos 'verdadeiro' ou 'falso';

  Ex: let possuiGraduacao = true;
      let possuiDoutorado = false;

*/

/*

Condicionais IF e ELSE;

Verificar se uma expressão é verdadeira com 'if', caso contrário o 'else' será ativado;

Ex: let possuiGraduacao = true;

    if(possuiGraduacao){
      console.log("Possui graduação")
    } else {
      console.log("Não possuí graduação")
      }

# O Valor dentro dos parênteses sempre será avaliado em 'false' ou 'true';

*/

/* CONDICIONAIS ELSE IF;

  - Se o 'if' não for verdadeiro, ele testa o else if;

Ex: let possui graduacao = true;
    let possuiDoutorado = false;

    if(possuiDoutorado){
    console.log("Possui graduação e doutorado");
    } else if(possuiGraduacao){
    console.log("Possuí graduação, mas não possui doutorado") 
    } else {
      console.log("Não possuí graduação")
      }


# Se colocarmos uma operação em que retorna 0, o console retorna false. O sitema identifica o 0 como false.
*/

/* OPERADOR LÓGICO DE NEGAÇÃO

  - O operador '!', nega uma operação booleana. Ou seja, !true é igual a 'false'

  Ex: if(!true) = false;

  # Você pode utilizar o '!!' para verificar se uma expressão é Truthy ou Falsy;
*/

/* OPERADORES DE COMPARAÇÃO

  - Vão sempre retornar um valor booleano;

  Ex: 10 > 5; // True;
      5 > 10; // False;
      20 < 10; // False;
      10 <= 10; // True;
      10 >= 11; // False;

*/

/* SWITCH 

  - Você pode verificar se uma variável é igual á diferentes valores utilizando o 'Case'. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave 'Break'; Para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

  Ex:

    let corFavorita = "Azul";

      switch (corFavorita){
        case "Azul":
          console.log("Olhe para o céu.")
          break;
        case "Vermelho":
          console.log("Olhe para rosas.")
          break;
        default:  
      }


*/
