export default function TableRow({props}){
  return(
    <tr className="tmember d-flex justify-content-between">
      <TmemberAvatar props/>
      <TmemberName props/>
      <TmemberEmail props/>
      <TmemberPosition props/>
      <TmemberStatus props/>
    </tr>
  )
}
