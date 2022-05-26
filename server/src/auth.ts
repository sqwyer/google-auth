import * as passport from 'passport';
import { Strategy } from 'passport-google-oauth2';
import { config } from 'dotenv';

if(process.env.NODE_ENV != 'production') config();

passport.use(new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CLIENT_REDIRECT,
    passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});