/**
 * @file urlpath
 * @author xuexb <fe.xiaowu@gmail.com>
 */

export default function (...args) {
    return args
        .filter(key => typeof key === 'string')
        .join('/')
        .replace(/((?:https?:)?\/\/[^/]+)(.+)/g, (all, host, path) => host + path.replace(/\/{2,}/g, '/'));
}
