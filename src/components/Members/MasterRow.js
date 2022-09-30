import TmemberAvatar from './TmemberAvatar.js';
import TmemberFirstName from './TmemberFirstName.js';
import TmemberLastName from './TmemberLastName.js';
import TmemberEmail from './TmemberEmail.js';
import TmemberPosition from './TmemberPosition.js';
import TmemberStatus from './TmemberStatus.js';

export default function MasterRow({person}){
  return (
  <tr  className="tmember d-flex justify-content-between">
    <TmemberAvatar avatar={person.avatar}/>
    <TmemberFirstName name={person.first_name}/>
    <TmemberLastName name={person.last_name}/>
    <TmemberEmail email={person.email} />
    <TmemberPosition position={person.position}/>
    <TmemberStatus status={person.status} />
  </tr>
  )
}
