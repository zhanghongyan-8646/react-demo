import { Info } from '@icon-park/react';
import { ValidationError } from '@tanstack/react-form'
interface IValidateErrorsProps {
  errors: ValidationError[]
}
export const ValidateErrors = ({errors}: IValidateErrorsProps) => {
  console.log(errors)
  if(!errors.length) return null;
  return (
    <div className='flex items-center gap-1 mt-1 text-red-500 text-xs'>
      <Info/>
      {errors.map(item => item.message).join('')}
    </div>
  )
}
