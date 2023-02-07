import { useEffect, useState } from "react"
import { DataGrid } from "@mui/x-data-grid"

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    let isApiSubscribed = true
    if (isApiSubscribed) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setData(json))
    }
    return () => {
      isApiSubscribed = false
    }
  }, [])

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", width: 200 },

    { field: "body", headerName: "Body", width: 400 },
    {
      field: "userId",
      headerName: "User ID",
      width: 90,
    },
  ]

  return (
    <div className="table">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
