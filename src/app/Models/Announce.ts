export  class Announce {
    title : String ;
    subject : String ;
    image : File ; 
    content : String ;
    date : Date ;
    lieu : String; 

    constructor(Title : String,Subject : String,Image : File,Content : String,Date : Date ,Lieu : String){
        this.title =  Title ;
        this.subject =  Subject ;
        this.image = Image ;
        this.content =  Content ;
        this.date =  Date ; 
        this.lieu =  Lieu ;
    }
}