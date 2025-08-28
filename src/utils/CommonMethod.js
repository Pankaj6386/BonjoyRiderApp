import {UploadProfileImage_API} from '../config/Url';
import {EnumForStoreImaage} from '../constant/Label';
import {Call_MediaUploadServices} from '../Services/Services';

export const CapitalizeFirstLetter = str => {
  if (!str) return ''; // Handle empty or undefined input
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const UploadImage = async imageUri => {
  // image path add in form data
 
  const formData = new FormData();
  if (Array.isArray(imageUri)) {
    imageUri.forEach((imageUris, index) => {
      formData.append('media', {
        uri: imageUris,
        type: 'image/jpeg', // Adjust the type accordingly if it's not an image
        name: `uploaded_image_${index}.jpg`, // Add a unique name for each image
      });
    });
  } else {
    formData.append('media', {
      uri: imageUri,
      type: 'image/jpeg', // Change based on image type
      name: 'uploaded_image.jpg',
    });
  }
  formData.append('folder', EnumForStoreImaage.PROFILE);
  // setIsLoading(true);
  const imgRes = await Call_MediaUploadServices(
    UploadProfileImage_API,
    formData,
  );

  console.log(imgRes, '=============+++++++');
  // setIsLoading(false);
  if (imgRes?.success) {
    // setSelectedImage(imgRes?.data[0]?.shortPath);
    return Array.isArray(imageUri)? imgRes?.data: imgRes?.data[0]?.shortPath;
  }
};
