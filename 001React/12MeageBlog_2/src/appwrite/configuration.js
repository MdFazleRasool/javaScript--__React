import {  Client, ID ,Databases ,Storage , Query } from "appwrite";
import conf from "../conf/config.js";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId);
        this.databases = new Databases(this.client) ;
        this.bucket = new Storage(this.client) ;

    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appWritedataBaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId, 
                }
            )
        } catch (error) {
            console.log("App Write service :: createPost :: error",error);

        }
    }

    async updatepost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appWritedataBaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("App Write service :: updatePost :: error",error);            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appWritedataBaseId,
                conf.appWriteCollectionId,
                slug,
                
            )
            return true ;
        } catch (error) {
            console.log("App Write service :: deletePost :: error",error);            
            return false;
        }
    }

    async getPost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appWritedataBaseId,
                conf.appWriteCollectionId,
                slug,
                
            )
            return true ;
        } catch (error) {
            console.log("App Write service :: getPost :: error",error);            
            return false;
        }
    }
}

const service = new Service() ;

export default service ;