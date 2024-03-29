function normalizeURL(url) {
    let url_obj_pathname = new URL(url).pathname
    if (url_obj_pathname.slice(-1) === `/`) {
        url_obj_pathname = url_obj_pathname.slice(0, url_obj_pathname.length-1)
    }
    return new URL(url).hostname + url_obj_pathname
}

module.exports = {
    normalizeURL
  }
