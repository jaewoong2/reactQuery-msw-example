if (typeof window === 'undefined') {
    // NodeJS 환경

    const { server } = require('./server')
    server.listen()
} else {
    // Browser 환경
    const { worker } = require('./browser')
    worker.start()
}

export { };