export const useGetUserInfo = () => {
    const {userid,name,profilePhoto,isAuth} = JSON.parse(localStorage.getItem('auth')) || {}
    return { userid, name, profilePhoto, isAuth}
}