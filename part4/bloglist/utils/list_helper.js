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
    let maxLikes = -1
    for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i]
        if (blog.likes > maxLikes) {
            maxLikes = blog.likes
            favoriteIdx = i
        }
    }
    return maxLikes === -1 ? undefined : blogs[favoriteIdx]
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
}