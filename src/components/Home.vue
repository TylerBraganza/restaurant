<script setup>

</script>

<template>
    <!-- Carousel -->
    <v-container>
        <v-row>
            <v-carousel>
                <v-carousel-item src="/images/ivan-torres-MQUqbmszGGM-unsplash.jpg"></v-carousel-item>
                <v-carousel-item src="/images/mark-patterson-yVfagKpDeoc-unsplash.jpg"></v-carousel-item>
                <v-carousel-item src="/images/q-u-i-n-g-u-y-e-n-S6atLH5Rf0U-unsplash.jpg"></v-carousel-item>
                <v-carousel-item src="/images/tony-rocket-076m8JMwBsI-unsplash.jpg"></v-carousel-item>
            </v-carousel>
        </v-row>
    </v-container>

    <!-- About -->
    <v-container>
        <v-row>
            <v-card align="center">
                <p class="text-h4"><b>Welcome To The Grill!</b></p>
                <p class="text-h6">GrillNova is a fast food destination built for speed, flavor, and satisfaction. Specializing in flame-grilled classics and bold, modern bites, the restaurant delivers high-quality meals with minimal wait time. From stacked burgers to crispy fries and signature sauces, every item is crafted to ignite taste buds and fuel busy lifestyles.</p>
                <p class="text-h6">GrillNova combines efficient service with a sleek, urban atmosphere. The menu is designed for variety and convenience, offering options for meat lovers, vegetarians, and spice seekers alike. Whether dining in or grabbing food on the go, customers can expect consistent quality and crave-worthy flavor.</p>
                <p class="text-h6">Driven by a commitment to freshness and innovation, GrillNova continues to redefine fast food with a focus on bold taste, fast service, and customer satisfaction.</p>
            </v-card>
        </v-row>
    </v-container>

    <!-- News -->
    <v-container>
        <v-row>
            <v-col md="4">
                <v-card color="#222222">
                    <v-img src="/images/rudy-dong-T0D5ReEFJaU-unsplash.jpg" class="align-end text-white" height="500" cover></v-img>
                    <v-card-title>Customer Favourites</v-card-title>
                    <v-card-subtitle><i>"Discover the fast food flavors customers crave most — bold, crispy, and impossible to resist."</i></v-card-subtitle>
                    <v-card-actions>
                        <v-btn>Read More</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col md="4">
                <v-card color="#222222">
                    <v-img src="/images/q-u-i-n-g-u-y-e-n-cnTdKzMOBns-unsplash.jpg" class="align-end text-white" height="500" cover></v-img>
                    <v-card-title>Restaurant Atmosphere</v-card-title>
                    <v-card-subtitle><i>"Experience the sleek, low-lit atmosphere where bold flavors meet industrial style and urban comfort."</i></v-card-subtitle>
                    <v-card-actions>
                        <v-btn>Read More</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col md="4">
                <v-card color="#222222">
                    <v-img src="/images/q-u-i-n-g-u-y-e-n-Zrp9b3PMIy8-unsplash.jpg" class="align-end text-white" height="500" cover></v-img>
                    <v-card-title>The Grill's Signature Bar</v-card-title>
                    <v-card-subtitle><i>"A low-lit centerpiece blending industrial edge with laid-back comfort — the vibe starts here."</i></v-card-subtitle>
                    <v-card-actions>
                        <v-btn>Read More</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            
        </v-row>
    </v-container>

    <!-- Footer -->
    <v-container>
        <v-row>
            <v-footer class="text-center d-flex flex-column ga-2 py-4" color="#222222">
                <div class="d-flex ga-3">
                <v-btn icon="'mdi-facebook'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-twitter'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-linkedin'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-instagram'" density="comfortable" variant="text" ></v-btn>
                </div>

                <v-divider class="my-2" thickness="2" width="50"></v-divider>

                <div class="text-caption font-weight-regular opacity-60">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>

                <v-divider></v-divider>

                <div>
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </div>
            </v-footer>
            
        </v-row>
    </v-container>
</template>