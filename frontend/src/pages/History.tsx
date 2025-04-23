import { useEffect, useState } from "react"
import Header from "../components/Header"
import Table from "../components/Table"
export default function History() {
    document.title = 'History 📁'
    const [uploads, setUploads] = useState([])
    useEffect(() => {
        setUploads([])
    }, [])
    return (
        <>
            <Header />
            <div className="table-area">
                <Table data={uploads}></Table>
            </div>
        </>
    )
}