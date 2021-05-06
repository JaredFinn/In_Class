<template>
    <section>
        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Find a name">
            <b-autocomplete
                v-model="name"
                placeholder="e.g. Anne"
                :keep-first="keepFirst"
                :open-on-focus="openOnFocus"
                :data="filteredDataObj"
                field="user.firstName"
                @select="option => (selected = option.firstName)"
                :clearable="clearable">
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>
import { GetAllUsers } from "../models/Users";

    export default {
        data() {
            return {
                data: [            ],
                name: '',
                selected: null,
                keepFirst: false,
                openOnFocus: true,
                clearable: false,
                isFetching: false
            }
        },
        async mounted(){
            this.data = await GetAllUsers();
            console.log(this.data)
        
        },
        methods:{
            //tried async
            // getAsyncData: debounce(function () {
            //    this.data =  GetAllUsers()
            //    this.isFetching = true
            // })
        },
        computed: {
            filteredDataObj() {
            return this.data.filter(option => {
                return (
                    option
                        .firstName
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                )
            })
        }
        },
        
    }
</script>