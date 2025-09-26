import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',  {
    state: () => {
        const menu ={
            0:{
                name: "Steak",
                image: "/images/menu/alexandru-bogdan-ghita-UeYkqQh4PoI-unsplash.jpg",
                price: 1750,
                description:'Juicy, tender cut of beef, grilled to perfection.',
                longDescription:'A juicy, flame-grilled ribeye steak seasoned with sea salt and cracked black pepper, finished with a melting pat of herb butter for extra richness. Served alongside your choice of garlic mashed potatoes, grilled asparagus, or truffle parmesan fries, this hearty dish delivers bold flavor and satisfying comfort in every bite.',
                category: 'Main Course'
            },
        
            1:{
                name: "Hot Dogs",
                image: "/images/menu/ball-park-brand-HSFZtU_74JQ-unsplash.jpg",
                price: 500,
                description:'Savory sausage nestled in a soft bun, topped with classic condiments.',
                longDescription:'A plump, grilled beef hotdog nestled in a warm, toasted bun—simple, satisfying, and packed with flavor. Customize it your way with classic condiments like tangy yellow mustard, ketchup, diced onions, sweet relish, or a drizzle of spicy mayo. Whether you keep it traditional or pile it high, this handheld favorite is always a crowd-pleaser.ory sausage nestled in a soft bun, topped with classic condiments.',
                category: 'Main Course'
            }, 
        
            2:{
                name: "Chicken Wings",
                image: "/images/menu/chad-montano-gE28aTnlqJA-unsplash.jpg",
                price: 900,
                description:'Crispy, saucy bites of chicken perfection, packed with bold flavor.',
                longDescription:'Golden-fried chicken wings tossed in your choice of bold sauces—classic buffalo, smoky barbecue, tangy honey mustard, or fiery peri-peri. Each wing is crispy on the outside, juicy on the inside, and perfect for dipping in ranch or blue cheese. Whether mild or wild, these wings bring the heat and flavor in every bite.',
                category: 'Main Course'
            },
        
            3:{
                name: "Pizza",
                image: "/images/menu/chad-montano-MqT0asuoIcU-unsplash.jpg",
                price: 1200,
                description:'Cheesy, saucy, and irresistibly satisfying on a warm, golden crust.',
                longDescription:"A hand-tossed pizza with a golden, crispy crust, layered with zesty tomato sauce and melted mozzarella. Choose your favorite toppings—from classic pepperoni and mushrooms to bold combos like barbecue chicken or veggie supreme. Finished with a sprinkle of oregano and chili flakes, it’s a slice of comfort that’s perfect any time.",
                category: 'Main Course' 
            },
        
            4:{
                name: "Nachos",
                image: "/images/menu/chetanya-sharma-RV4-buXKOS8-unsplash.jpg",
                price: 800,
                description:'Crunchy tortilla chips loaded with melted cheese, zesty toppings, and bold flavor in every bite.',
                longDescription:'Crispy tortilla chips piled high and smothered in melted cheddar and mozzarella, topped with jalapeños, diced tomatoes, and a drizzle of sour cream. Finished with a sprinkle of fresh cilantro and optional guacamole or salsa on the side, these nachos are the perfect shareable snack or sidekick to any main dish.',
                category: 'Side Dish' 
            },
        
            5:{
                name: "Tacos",
                image: "/images/menu/jeswin-thomas-z_PfaGzeN9E-unsplash.jpg",
                price: 800,
                description:'Warm tortillas filled with savory meats, fresh toppings, and bold, zesty flavor in every bite.',
                longDescription:'Soft corn tortillas filled with your choice of seasoned beef, grilled chicken, or spicy pulled pork, topped with fresh cilantro, diced onions, and a squeeze of lime. Add a kick with salsa verde, smoky chipotle sauce, or creamy avocado crema. These bold, flavor-packed bites are perfect for lunch, dinner, or anytime cravings strike.',
                category: 'Main Course'  
            },
        
            6:{
                name: "Burger",
                image: "/images/menu/jonathan-borba-8l8Yl2ruUsg-unsplash.jpg",
                price: 1000,
                description:'Juicy patty stacked in a toasted bun with fresh toppings and bold, savory flavor.',
                longDescription:'A thick, juicy beef patty grilled to perfection and stacked on a toasted bun with crisp lettuce, ripe tomato, red onion, and melted cheddar. Finish it off with your choice of ketchup, mustard, mayo, or barbecue sauce for a satisfying bite that hits all the right notes.',
                category: 'Main Course'  
            },
        
            7:{
                name: "Nuggets",
                image: "/images/menu/leo-roza-P_z_xlMGuEk-unsplash.jpg",
                price: 900,
                description:'Crispy, bite-sized chicken pieces with a golden crunch and tender center.',
                longDescription:'Tender chunks of chicken coated in a golden, crunchy breading and fried until perfectly crisp. Served hot and ready to dip in your favorite sauces—choose from tangy barbecue, creamy ranch, spicy chili, or classic ketchup.',
                category: 'Main Course'  
            },
        
            8:{
                name: "Sandwich",
                image: "/images/menu/pixzolo-photography-3tL4vtrFqTQ-unsplash.jpg",
                price: 1000,
                description:'Tender chicken fillet tucked in a bun with crisp veggies and creamy, savory sauces.',
                longDescription:'Freshly toasted bread filled with your choice of sliced turkey, ham, or grilled vegetables, layered with cheese, lettuce, and tomato. Add a spread of mustard, mayo, or pesto to bring it all together in a warm, flavorful bite.',
                category: 'Main Course'
            },
        
            9:{
                name: "Chicken Wraps",
                image: "/images/menu/parker-hilton-DgrrHdcPKQ8-unsplash.jpg",
                price: 850,
                description:'Grilled or crispy chicken wrapped in a soft tortilla with fresh veggies and flavorful sauces.',
                longDescription:'Tender grilled chicken strips wrapped in a soft flour tortilla with crisp lettuce, juicy tomato, and shredded cheese. Finished with your choice of creamy ranch, spicy peri-peri, or tangy honey mustard sauce, this satisfying main dish delivers bold flavor and fresh textures in every bite.',
                category: 'Main Course' 
            },
        
            10:{
                name: "Oreo Milkshake",
                image: "/images/menu/victor-rutka-4FujjkcI40g-unsplash.jpg",
                price: 500,
                description:'Creamy blended coffee treat swirled with crushed Oreos and topped with whipped delight.',
                longDescription:'A creamy blend of vanilla ice cream and crushed Oreo cookies, whipped into a thick, indulgent shake and topped with whipped cream and cookie crumbles. Sweet, chilled, and satisfyingly rich—perfect for dessert or a cool treat.',
                category: 'Drink'
            },
        
            11:{
                name: "Fruit Mojitos",
                image: "/images/menu/kobby-mendez-xBFTjrMIC0c-unsplash.jpg",
                price: 600,
                description:'Zesty mint and lime muddled with juicy fruits, served chilled for a refreshing tropical twist.',
                longDescription:'Refreshing and vibrant, these mojitos are infused with muddled mint, lime, and a mix of fresh fruits like strawberry, mango, or passionfruit. Lightly sweetened and served over ice with a splash of soda, they’re a zesty twist on a classic.',
                category: 'Drink' 
            },
        
            12:{
                name: "Orange Juice",
                image: "/images/menu/abhishek-hajare-kkrXVKK-jhg-unsplash.jpg",
                price: 300,
                description:'Freshly squeezed, sun-kissed citrus bursting with vibrant flavor and natural refreshment.',
                longDescription:'Bright and naturally sweet, this freshly squeezed orange juice is packed with citrus flavor and vitamin C. Served chilled, it’s a crisp and energizing drink that pairs well with any meal.',
                category: 'Drink'
            }
        }
        
       
        const selectedMenuItem = ref(null)

        return { menu, selectedMenuItem }
    },
    actions:{
         updateSelectedMenuItem (menuItem) {
           this.selectedMenuItem = menuItem
       }
    }
})