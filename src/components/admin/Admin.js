import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Admin = () => {

    const [users, setusers] = useState('')

    useEffect(() => {
        getUsersPendientes();
    }, [])


    const getUsersPendientes = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/users/pendientes');

            console.log(response.data);
            setusers(response.data);

        } catch (error) {

        }
    }

    const allow = () => {

    }

    return (
        <div style={{ marginTop: '50px', }}>
            {users !== '' &&
                users.map(item => {
                    return (
                        <div style={{ display: 'inline-flex' }}>
                            <div style={{ marginRight: '10px' }}>{item.email}</div>
                            <div onClick={allow} style={{ background: 'green', color: '#fff', padding: '5px', borderRadius: '5px' }}>permitir acceso</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Admin