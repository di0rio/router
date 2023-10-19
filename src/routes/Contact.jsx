import style from "./Contact.module.css"

const cliente = [
  {nome: "Gustavo", idade: "18", CPF: "111.213.213-90"},
  {nome: "Francelin", idade: "45", CPF: "236.213.213-90"},
  {nome: "Cauã", idade: "6", CPF: "356.213.213-90"},
  {nome: "Pedro", idade: "4", CPF: "789.213.213-90"},
  {nome: "Castello", idade: "90", CPF: "999.213.213-90"},
]

const Contact = () => {
  // console.log(cliente)
  return (
    <>
    <h1 className={style.Contact}>Contact</h1>
    {cliente.map((item) => (
      <div key={item.CPF}>
        Cliente - {item.nome}  |  Idade - {item.idade}
      </div>
    ))}
    </>
  )
}

export default Contact