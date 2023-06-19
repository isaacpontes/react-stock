import { useParams } from "react-router-dom"
import useStock from "../../hooks/useStock"
import ItemForm from "../../components/ItemForm"

export default function UpdateItem() {
  const { getItem } = useStock()
  const { id } = useParams()

  const item = getItem(id)

  return (
    <>
      <h2>Atualizar Item - {item.name}</h2>
      <ItemForm itemToUpdate={item} />
    </>
  )
}