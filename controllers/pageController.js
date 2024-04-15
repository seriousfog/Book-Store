module.exports.renderHomepage = function(req, res){
    if (!req.user.can('view homepage')) {
        res.redirect('/');
        return;
    }
    res.render('/');
}
module.exports.renderAuthor = function(req, res){
    if (!req.user.can('view authors')) {
        res.redirect('/');
        return;
    }
    res.render('/authors');
}
module.exports.renderBooks = function(req, res){
    if (!req.user.can('view books')) {
        res.redirect('/');
        return;
    }
    res.render('/books');
}
module.exports.viewProfile = function(req, res){
    if (!req.user.can('view profile')) {
        res.redirect('/');
        return;
    }
    res.render('pages/profile');
}