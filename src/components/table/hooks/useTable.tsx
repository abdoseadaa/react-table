import { useMemo } from "react";
import { TableHeaderRow, TableProps } from "../table.types";


const genUid = (length : number = 10) =>{
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return Array.from(Array(length), () => chars[Math.floor(Math.random() * 62)]).join('')
}
const key = ()=>{
  return genUid(15)
}

export default function useTable(props : TableProps) {

  const {data, table} = props

  const headerData  : TableHeaderRow[]  = useMemo(() => {

    return table.map(head => ({ ...head ,  key : key()  }))

  }, [table])





  const bodyData = useMemo(() => {
    return data?.map( row =>  ({ ...row , key : key() }) )

  }, [data])



  return {
    headerData,
    bodyData
  }
}
