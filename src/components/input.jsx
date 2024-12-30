import {TextCursorInput} from 'lucide-react';
function Input(props) {
  return (
    <div className="relative w-full">
        <input type="text"
               className="pl-10 pr-4 py-2  w-full border border-gray-300 rounded-lg outline-gray-300" 
            placeholder={props?.placeholder} />
        <div className="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none">
        
         {props.svg?props.svg:<TextCursorInput color='#6c72e7
' />}
        </div>
</div>
  )
}

export default Input
