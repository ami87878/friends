<template>
  
    <li>
      <h2>{{ name }}  {{ Favirate ? '(Favirate)': '' }}</h2>
      <button @click="toggleFavirate">toggle Favirate</button>
      <button @click="toggleDetails">{{datailsAreVisible ? 'Hide' : 'Show '}} Details</button>
      <ul v-if="datailsAreVisible">
        <li><strong>Phone:</strong>{{ phone }}</li>
        <li><strong>Email:</strong>{{ email }}</li>
      </ul>
    </li>

  
</template>

<script>
export default {
  name: 'ContactFriends',

  data() {
    return {
      
      datailsAreVisible:false,

      Favirate:this.isFavirate,
    
      
    };
  },
  // props:['name', 'phone','email', 'isFavirate',  ] ,


  props:{

    name:{

      type:String,
      required:true,
    },
    phone:{
      type:Number,
      required:true,
    },
    email:{
         type:String,
         required:true,
    },

    isFavirate:{
        type:Boolean,
        required:false,
        defalut:false,
        // add default key or validator  value that value of is isFavirate
        // defalut:'0',
        // validator:(value)=>{
        //   // validation logic
        //   return value==='1' || value==="0"; // validator  say if 0 or 1 excuted else warning in console

        // }
        

    
    }

  },
   
   
    
   

    


 

  mounted() {
    
  },

  methods: {


    toggleDetails(){

this.datailsAreVisible=!this.datailsAreVisible;


    },
    toggleFavirate(){

      // if(this.Favirate==='1'){

      // this.Favirate='0';

      // }
      // else{
      // this.Favirate='1';


      // }
      this.Favirate=!this.Favirate


    }
    
  },
};
</script>

<style lang="scss" scoped>

</style>