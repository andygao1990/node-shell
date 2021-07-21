const pwd = require ('./pwd')

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
    if (data.toString().trim() === 'pwd') {
        pwd()
}
    else {
        const cmd = data.toString().trim()

        process.stdout.write('You typed: ' + cmd)
        process.stdout.write('\nprompt >')
    }
})