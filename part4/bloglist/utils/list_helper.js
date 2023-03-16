const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    if (blogs.length === 0) {
        return 0;
    }
    let total = 0
    for (const blog of blogs) {
        total += blog.likes
    }
    return total
}

const favoriteBlog = (blogs) => {
    let favoriteIdx = -1
    let daisukiBlog = undefined
}

module.exports = {
    dummy,
    totalLikes
}