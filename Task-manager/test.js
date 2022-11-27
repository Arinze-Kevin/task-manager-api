require('./src/db/mongoose')
const User = require('./src/models/user')

// User.findByIdAndDelete('637b82f8adffd61728d0baa2').then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 3 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id, age) => {
    const user = await User.findByIdAndDelete(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

deleteTaskAndCount('637b8394c0bddd2b3cce976d', 8).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})