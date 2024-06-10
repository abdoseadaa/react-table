import Table from "./components/table/Table"
import { TableRow } from "./components/table/table.types"
import data from "./data.json"

function App() {


  const table : TableRow[] = [
      { header : "id", name : "id" , size : 2 ,  },
      { header : "name", name : "name" , size : 5 ,  },
      { header : "email", name : "email" , size : 5 },
      { header : "website", name : "website" , size : 4 ,  },
      { header : "phone", name : "phone" , size : 4 ,  },
      { header : "company", name : "company" , size : 4 , custom : (d) => d.company.name },
  ]

  return (
   <div className="flex  w-full">
     <Table data={data} table={table} stripped={true} animated={true} fixedHeight={true}/>
   </div>
  )
}

export default App
