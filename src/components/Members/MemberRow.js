import MasterRow from './MasterRow.js';

export default function MemberRow({props,dataCount}){
  console.log(props);
  let lenght = 0;
  let person =[1];
  let team ='';
 
  for(var i=0; i<dataCount;i++){person[i] = <MasterRow person={props[i]} key={props[i].id} />}
  return(
    <>
        { person }
    </>
  )
}







