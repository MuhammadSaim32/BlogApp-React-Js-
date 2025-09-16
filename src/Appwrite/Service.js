import { Client, Databases, ID, Storage, Query } from "appwrite";
import Conf from "../Conf/Conf";

class AppwriteService {
  client = new Client();
  Database;
  Storage;
  constructor() {
    this.client
      .setEndpoint(Conf.Appwrite_Url)
      .setProject(Conf.Appwrite_Project_Id);
    this.Database = new Databases(this.client);
    this.Storage = new Storage(this.client);
  }

  async CreatePost({ Title, Content, Slug, Image_Id, User_Id, Status }) {
    try {
      return await this.Database.createDocument(
        Conf.Appwrite_Database_Id,
        Conf.Appwrite_Collection_Id,
        ID.unique(),
        {
          Title,
          Content,
          Slug,
          Image_Id,
          User_Id,
          Status,
        },
      );
    } catch (error) {
      console.log(error);
    }
  }

  async GetPosts() {
    try {
      return await this.Database.listDocuments(
        Conf.Appwrite_Database_Id,
        Conf.Appwrite_Collection_Id,
        [Query.equal("Status", "Active")],
      );
    } catch (error) {
      console.log(error);
    }
  }

  async GetPost(Post_Id) {
    try {
      return await this.Database.getDocument(
        Conf.Appwrite_Database_Id,
        Conf.Appwrite_Collection_Id,
        Post_Id,
      );
    } catch (error) {
      console.log(error);
    }
  }

  async DeletePost(Post_Id) {
    try {
      return await this.Database.deleteDocument(
        Conf.Appwrite_Database_Id,
        Conf.Appwrite_Collection_Id,
        Post_Id,
      );
    } catch (error) {
      console.log(error);
    }
  }

  async UploadImage(Image) {
    try {
      return this.Storage.createFile(
        Conf.Appwrite_Buket_Id,
        ID.unique(),
        Image,
      );
    } catch (error) {
      console.log(error);
    }
  }

  async UpdatePost({
    Post_Id,
    Title,
    Content,
    Slug,
    Image_Id,
    User_Id,
    Status,
  }) {
    try {
      return await this.Database.updateDocument(
        Conf.Appwrite_Database_Id,
        Conf.Appwrite_Collection_Id,
        Post_Id,
        {
          Title,
          Content,
          Slug,
          Image_Id,
          User_Id,
          Status,
        },
      );
    } catch (error) {
      console.log(error);
    }
  }

  GetFilePreview(File_Id) {
    try {
      const data = this.Storage.getFileView(Conf.Appwrite_Buket_Id, File_Id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async DeleteFile(FileID) {
    try {
      await this.Storage.deleteFile(Conf.Appwrite_Buket_Id, FileID);
    } catch (error) {
      console.log(error);
    }
  }
}

const Service = new AppwriteService();
export default Service;
