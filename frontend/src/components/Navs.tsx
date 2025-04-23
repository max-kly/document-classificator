import { Link } from "react-router"
export default function Navs({ page }: { page: string }) {
    return (
        <div className="navs">
            <Link className={page === '/' ? 'active' : ''} to={'/'}>Dashboard</Link>
            <Link className={page === '/upload' ? 'active' : ''} to={'/upload'}>Upload document</Link>
            <Link className={page === '/history' ? 'active' : ''} to={'/history'}>View history</Link>
        </div>
    )
}