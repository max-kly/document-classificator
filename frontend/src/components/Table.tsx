import { UploadRecord } from "../assets/types"
import { Link } from "react-router"
export default function Table({ data }: { data: UploadRecord[] }) {
    if (data.length === 0) {
        return <div className="no-content">
            <p>No uploads yet</p>
            <Link to={'/upload'}>
                <button>Upload file</button>
            </Link>
        </div>
    }
    return (
        <div className="table">
            <div className="tableHeader">
                <div className="tableColumn">Date</div>
                <div className="tableColumn">File name</div>
                <div className="tableColumn">Category</div>
                <div className="tableColumn">Confidence</div>
            </div>
            <div className="tableContent">
                {data.map((record) => {
                    return <div className="tableRow" key={record.id}>
                        <div className="tableCell">{record.created_at}</div>
                        <div className="tableCell">{record.file_name}</div>
                        <div className="tableCell">{record.category}</div>
                        <div className="tableCell">{record.confidence_rate}</div>
                    </div>
                })}
            </div>
        </div>
    )
}