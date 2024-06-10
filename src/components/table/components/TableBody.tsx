import { TableBodyProps, TableHeaderRow, TableRow } from '../table.types'

interface Props extends TableBodyProps {
  data : TableRow[]
  table : TableHeaderRow[]
  stripped: boolean
  animated : boolean
  fixedHeight : boolean
}

interface DataRow {
  [key: string]: any;
}


export default function TableBody(props : Props) {
  const {table} = props

  return props?.data && props?.data?.map( (dataRow : DataRow , index) =>{


    
      const isEven = index % 2 === 0
  
      return <div key={dataRow.key}  className={` flex ${ props.stripped &&  isEven ? "bg-gray-100" : ""} ${props.animated ? "animate-table-row" : ""} hover:opacity-60 `}
            style={props.animated ? { 
                animationDelay:  `${index * 0.1}s`
            } : {}}
      
      >
  
        {

          table?.map( (row ) =>{


            const className = ` span-${row.size} ${props.className || ""} ${props.fixedHeight ? "h-[50px] whitespace-nowrap truncate  " : ""} `


            if(row.custom){
              return <div className={ className } title={row.custom(dataRow)} key={row.key} >
                  {row.custom(dataRow)}
              </div>
            }


              return <div className={ className } title={dataRow[row.name]} key={row.key} >
                      {dataRow[row.name]}
              </div>

          } )

        }
  
      </div>
  })
}
