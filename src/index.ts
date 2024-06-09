import {connectDataBase} from './config/database'

const start = async () => {
    await connectDataBase()
}

start()