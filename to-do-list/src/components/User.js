import React from 'react'
import { getCurrentUser } from '../utils'

const User = () => {
    const user = getCurrentUser()
    return (
        <h6>
            {JSON.stringify(user)}
        </h6>
    )
}

export default User
