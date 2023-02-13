import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users')
    //DEV ONLY!!!!!!
    await pause(1000)
    //DEV ONLY!!!!!!
    return response.data
})

//DEVELOPMENT ONLY !!!! DELETE AFTER FINISHING
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)

    })
}

export {fetchUsers}