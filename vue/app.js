let param={
    data: function() {     
        return {        
        input: '', 
        notes: []
        }       
    },
    methods: {         
        inputHandler(e) {     
            this.input = e.target.value;
        },
        addNewNote(e) {
            console.dir(e);
            if (this.input !== '') {
                this.notes.push(this.input); 
            }    
            this.input='';
        },
        clearNotes() {
            this.notes=[];
        },
        deleteNote(key, e) {
            console.log(e);
            this.notes.splice(key, 1);
        }
    }           
};
let app = Vue.createApp(param);   
app.mount('.container');        
