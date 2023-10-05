import toast from 'react-hot-toast';
import { twitterTokenName } from './constant';

export const Host = window.location.host === 'twitter-mern.netlify.app' ? "https://inshort-backend-3c86.onrender.com" : "http://localhost:5000";

export const Endpoints = {
    signIn: "/api/auth/signin",
    signUp: "/api/auth/signup",
    tweet: "/api/tweet",
    profile: "/api/profile",
    follow: "/api/follow",
    isFollowing: "/api/follow/isFollowing"
}
export const notify = (message, type) => {
    type === 'error' ? toast.error(message) : toast.success(message)
}
export const webErrors = {
    catchError: "Something went wrong!",
    validEmailError: "Please enter your valid email address"
}
export const EMAIL_REGEX = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export const getUserInfo = () => {
    return JSON.parse(localStorage.getItem(twitterTokenName))
}
export const convertToSlug = (title) => {
    return title?.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
};
export const uppercaseFirstLetter = (string) => {
    return string && string[0].toUpperCase() + string.slice(1);
}
export const lowercaseFirstLetter = (string) => {
    return string && string[0].toLowerCase() + string.slice(1);
}
export const signOut = () => {
    localStorage.removeItem(twitterTokenName)
    notify("Logged out successfully, Redirecting", 'success');
    setTimeout(() => {
        window.location.href = "/"
    }, 2000)
}
export const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        if (file !== undefined) {
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };
        }
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};
export const createReader = (file, whenReady) => {
    var reader = new FileReader();
    reader.onload = function (evt) {
        var image = new Image();
        image.onload = function (evt) {
            var width = this.width;
            var height = this.height;
            if (whenReady) whenReady(width, height);
        };
        image.src = evt.target.result;
    };
    reader.readAsDataURL(file);
}
export const defaultCredentials = {
    email: "viratkohli@gmail.com",
    password: "123456789"
}