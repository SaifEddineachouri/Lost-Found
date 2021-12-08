export class userRegister {
    first_name : String;
    last_name : String ;
    email : String ;
    password : String ;
    image : File ;
    tel : Number ;
    city : String ;
    

    constructor(Firstname : String,Lastname : String,Email : String,Password : String,Image : File,Phone : Number,City : String){
        this.first_name=  Firstname ;
        this.last_name = Lastname ;
        this.email =  Email ;
        this.password = Password ;
        this.image = Image ;
        this.tel = Phone ;
        this.city = City ;
    }   
}