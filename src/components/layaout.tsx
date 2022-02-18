import Navbar from "./Navbar";


export default function layaout({ children }) {
    return (
        <div>
            <Navbar />

            {children}
        </div>
    )
}
