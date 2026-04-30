import passport from '../config/passport.js';

// Middleware function to check whether a user is authenticated through a JWT token
const requireAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'Unauthorized',
      });
    }

    req.user = user;
    next();
  })(req, res, next);
};

export { requireAuth };