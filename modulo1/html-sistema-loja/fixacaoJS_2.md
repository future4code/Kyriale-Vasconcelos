```function calculaPrecoTotal(quantidade) {
  
  if (quantidade < 12){
    preco = 1.3
    } else if (quantidade >= 12){
    preco = 1
    }
    precoCompra = quantidade * preco
    return precoCompra
}
```