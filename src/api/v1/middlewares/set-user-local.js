export function setUserLocal(req, res, next) {
    res.locals.isUser = true;
    next();
}
