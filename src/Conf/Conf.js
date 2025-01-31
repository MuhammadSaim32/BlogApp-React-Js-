const Conf = {
  Appwrite_Url: String(import.meta.env.VITE_APPWRITE_URL),
  Appwrite_Project_Id: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  Appwrite_Buket_Id: String(import.meta.env.VITE_APPWRITE_BUKET_ID),
  Appwrite_Database_Id: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  Appwrite_Collection_Id: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  TinyMCE_Api_Key: String(import.meta.env.VITE_TINYMCE_API_KEY),
};

export default Conf;
