<script setup>

const menu ={
    0:{
        name: "Steak",
        image: "/images/menu/alexandru-bogdan-ghita-UeYkqQh4PoI-unsplash.jpg",
        price: 1750,
        description:'Juicy, tender cut of beef, grilled to perfection.',
        category: 'Main Course'
    },

    1:{
        name: "Hot Dogs",
        image: "/images/menu/ball-park-brand-HSFZtU_74JQ-unsplash.jpg",
        price: 500,
        description:'Savory sausage nestled in a soft bun, topped with classic condiments.',
        category: 'Main Course'
    }, 

    2:{
        name: "Chicken Wings",
        image: "/images/menu/chad-montano-gE28aTnlqJA-unsplash.jpg",
        price: 900,
        description:'Crispy, saucy bites of chicken perfection, packed with bold flavor.',
        category: 'Main Course'
    },

    3:{
        name: "Pizza",
        image: "/images/menu/chad-montano-MqT0asuoIcU-unsplash.jpg",
        price: 1200,
        description:'Cheesy, saucy, and irresistibly satisfying on a warm, golden crust.',
        category: 'Main Course' 
    },

    4:{
        name: "Nachos",
        image: "/images/menu/chetanya-sharma-RV4-buXKOS8-unsplash.jpg",
        price: 800,
        description:'Crunchy tortilla chips loaded with melted cheese, zesty toppings, and bold flavor in every bite.',
        category: 'Side Dish' 
    },

    5:{
        name: "Tacos",
        image: "/images/menu/jeswin-thomas-z_PfaGzeN9E-unsplash.jpg",
        price: 800,
        description:'Warm tortillas filled with savory meats, fresh toppings, and bold, zesty flavor in every bite.',
        category: 'Main Course'  
    },

    6:{
        name: "Burger",
        image: "/images/menu/jonathan-borba-8l8Yl2ruUsg-unsplash.jpg",
        price: 1000,
        description:'Juicy patty stacked in a toasted bun with fresh toppings and bold, savory flavor.',
        category: 'Main Course'  
    },

    7:{
        name: "Nuggets",
        image: "/images/menu/leo-roza-P_z_xlMGuEk-unsplash.jpg",
        price: 900,
        description:'Crispy, bite-sized chicken pieces with a golden crunch and tender center.',
        category: 'Main Course'  
    },

    8:{
        name: "Sandwich",
        image: "/images/menu/pixzolo-photography-3tL4vtrFqTQ-unsplash.jpg",
        price: 1000,
        description:'Tender chicken fillet tucked in a bun with crisp veggies and creamy, savory sauces.',
        category: 'Main Course'
    },

    9:{
        name: "Chicken Wraps",
        image: "/images/menu/parker-hilton-DgrrHdcPKQ8-unsplash.jpg",
        price: 850,
        description:'Grilled or crispy chicken wrapped in a soft tortilla with fresh veggies and flavorful sauces.',
        category: 'Main Course' 
    },

    10:{
        name: "Oreo Milkshake",
        image: "/images/menu/victor-rutka-4FujjkcI40g-unsplash.jpg",
        price: 500,
        description:'Creamy blended coffee treat swirled with crushed Oreos and topped with whipped delight.',
        category: 'Drink'
    },

    11:{
        name: "Fruit Mojitos",
        image: "/images/menu/kobby-mendez-xBFTjrMIC0c-unsplash.jpg",
        price: 600,
        description:'Zesty mint and lime muddled with juicy fruits, served chilled for a refreshing tropical twist.',
        category: 'Drink' 
    },

    12:{
        name: "Orange Juice",
        image: "/images/menu/abhishek-hajare-kkrXVKK-jhg-unsplash.jpg",
        price: 300,
        description:'Freshly squeezed, sun-kissed citrus bursting with vibrant flavor and natural refreshment.',
        category: 'Drink'
    }
}

</script>

<template>
    <!-- <h1>Menu</h1> -->

    <v-container>
        <v-row>
            <v-col md = "4" v-for="item in menu":key = "item">
                <v-card color="#222222">
                    <v-img :src="item.image" height="250" cover></v-img>
                    <v-row>
                        <v-col md="6">
                            <v-card-title>{{ item.name }}</v-card-title>
                        </v-col>
                        <v-col md="6">
                            <v-chip>{{ item.category }}</v-chip>
                        </v-col>
                    </v-row>
                    <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                    <v-card-actions>
                        <v-card-title>{{ item.price }}</v-card-title>
                        <v-btn>Order</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template> 