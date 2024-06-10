export interface TableHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface TableBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface TableRow {
    name : string ;
    size : number ;
    custom?: (data : any)  => any
    header : string
    key? : string | number
  }
  
export interface TableProps {
    data : any[],
    table : TableRow[]
    headerProps?: TableHeaderProps
    bodyProps?: TableBodyProps  
    stripped?: boolean
    animated?: boolean
    fixedHeight?: boolean
}
  
export interface TableHeaderRow {
    header : string
    key : string | number
    size : number
    custom?: (data : any)  => any
    name : string
}