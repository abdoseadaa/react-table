import { TableHeaderProps, TableHeaderRow } from '../table.types';

interface Props extends TableHeaderProps {
   table : TableHeaderRow[]
}


export default function TableHeader(props : Props) {

  const {table} = props

  const className = (head : TableHeaderRow) => `
              span-${head.size}  
              bg-[#E5E7EB]
              ${props.className || ""}
   `
  return (
    <div className='flex w-full'>
        {
          table.map( (head) =>{
            return <div className={ className(head) }   key={head.key}  >
                 {head.header}
            </div>
          })
        }
    </div>
  )
}
