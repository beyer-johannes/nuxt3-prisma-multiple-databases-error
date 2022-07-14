import { PrismaClient } from './generated'

// add prisma to the NodeJS global type
interface CustomNodeJsGlobal extends NodeJS.Global {
    firstClient: PrismaClient
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal

const firstClient = global.firstClient || new PrismaClient()

if (process.env.NODE_ENV === 'development') {
    global.firstClient = firstClient
}

export default firstClient