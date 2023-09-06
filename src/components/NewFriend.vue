<template>
    <div>
        
        <form action="" @submit.prevent="submitData">
         <div>
            <label >name</label>
            <input type="text" v-model="enteredName"  />
        </div>

        <div>
            <label >phone</label>
            <input type="tel" v-model="enteredPhone" />
        </div>
        
        <div>
            <label >email </label>
            <input type="email "  v-model="enteredEmail" />
        </div>

        <div>
            <button>Add contact</button>
        </div>
            
        </form>

    </div>
</template>

<script>
export default {
    name: 'NewFriend',



    data() {
        return {

            enteredName:'',// when user enter an other thing the empty string convert to other user entered
            enteredEmail:'',
            enteredPhone:'',

            
        };
    },

    mounted() {
        
    },

    methods: {

        submitData(){

            this.$emit('addContact',this.enteredName,this.enteredPhone,this.enteredEmail)
        }

        
        
    },

    emits:['addContact']
};
</script>

<style lang="scss" scoped>

</style>