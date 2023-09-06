<template>
  <section>
    <div>
     <header>
      <h1> My Friends</h1>
     </header>
      <ul>
        <ContactFriends 
         v-for="friend in friends" 
        :key="friend.id"
         :name="friend.name" 
          :id="friend.id"
         :phone="friend.phone"
          :email= "friend.email"
           v-bind:isFavirate='friend.isFavirate' 
            @toggle-favirate="toggleFavirateStatus" />
         
        
          
      </ul>
    </div>
  </section>
</template>

<script>
import ContactFriends from "./components/ContactFriends.vue";

export default {
  name: "App",

  data() {
    return {
      friends: [
        {
          id: "Manuel",
          name: "Manuel lopez",
          phone: "0936116584",
          email: "Manuel@gmail.com",
          isFavirate:true,
        },
        {
          id: "Julia",
          name: " Julia Jons",
          phone: "09361165878",
          email: "Julia@gmail.com",
          isFavirate:false,
        },
      ],
    };
  },

  mounted() {


   


  },

  methods: {

    toggleFavirateStatus(friendId) {

    const identifyFriend=this.friends.find((friend)=>friend.id===friendId);
     identifyFriend.isFavirate=!identifyFriend.isFavirate;
    

   }





  },
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
