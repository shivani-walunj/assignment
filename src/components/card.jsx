import Input from "./input"
 const Card = ({heading,svg, placeholder}) => {
  return (
    <div className=' form-app-card'>
    <h6 className=' form-app-card-heading'>
    {heading}
    </h6>
        <Input svg={svg} placeholder={placeholder}/>
    </div>
  )
}

export default Card
