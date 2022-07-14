import { PrismaClient } from './generated'

// add prisma to the NodeJS global type
interface CustomNodeJsGlobal extends NodeJS.Global {
    secondClient: PrismaClient
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal

const secondClient = global.secondClient || new PrismaClient()

if (process.env.NODE_ENV === 'development') {
    global.secondClient = secondClient
}

export default secondClient