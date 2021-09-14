import { FC } from 'react'
import Link from 'next/link'

const TheApp:FC = () => {
    return (
        <div>
            <h1>Student App</h1>
            <Link href="/AddStudent/AddStudent">
                <a>Register</a>
            </Link>
        </div>
    )
}

export default TheApp
