export const API_BASE_URL = 'http://102.37.211.135:4173/api/v1'; //staging url
export const Image_URL = 'http://102.37.211.135:4173/'; //image url

export const getApiUrl = endpoint => API_BASE_URL + endpoint;
export const Login_API = getApiUrl('/auth/signin');
export const ForgotPassword_API = getApiUrl('/auth/forgot-password');
export const OTPVerification_API = getApiUrl('/auth/verify-otp');
export const ResetPassword_API = getApiUrl('/auth/reset-password');
export const PublicationList_API = getApiUrl('/publication/list');
export const PublicationDetail_API = getApiUrl('/publication/?id=');
export const CMS_API = getApiUrl('/cms/?type=')
export const FAQ_API =  getApiUrl('/faq/list')
export const ChangePassword_API= getApiUrl('/auth/change-password')
export const GetProfile_API= getApiUrl("/auth/profile")
export const UploadProfileImage_API= getApiUrl('/upload/images')
export const EditProfie_API=getApiUrl('/auth/profile')
export const Trademark_Appliaction_API=getApiUrl('/trademark')