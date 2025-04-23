import Navs from "../components/Navs"
export default function Header() {
    const page = window.location.pathname || '/'
    return (
        <header>
            <h1>{page === '/' ? 'Welcome back!' : page.charAt(1).toUpperCase() + page.slice(2)}</h1>
            <Navs page={page} />
        </header>
    )
}