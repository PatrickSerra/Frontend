/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
export default function Avatar({person, size=100}) {
  let {imageId} = person
  
  const avatar = `https://i.imgur.com/${imageId}.jpg`;

 
  return <img src={avatar} alt={person.name} width={size} height={size} />;
}
