export default function TableRow({avatar}){
  return(
  <td className="tmember-avatar pl-4">
    <img src={avatar} width="50" height="50" className="rounded-circle"/>
  </td>
  )
}
