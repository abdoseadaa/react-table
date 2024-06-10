import { TableProps } from './table.types'
import useTable from './hooks/useTable'
import TableHeader from './components/TableHeader'
import "./styles/table.grid.css"
import TableBody from './components/TableBody'
import "./styles/table.styles.css"

export default function Table(props : TableProps) {

  const { headerData , bodyData } = useTable(props)
    
  return (
    <div className='w-full'>

        <TableHeader  table={headerData} {...props?.headerProps}   />

        <TableBody  
              data={bodyData}  
              table={headerData}   
              {...props?.bodyProps} 
              stripped={props?.stripped ?? true}
              animated={props?.animated ?? false}
              fixedHeight={props?.fixedHeight ?? true}
        />
    </div>
  )
}
