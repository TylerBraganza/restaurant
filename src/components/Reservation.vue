<script setup>

</script>

<template>
    <!-- <h1>Reservation</h1> -->

     <v-container>
        <v-row>
            <v-col>
                <v-card max-width="1000">
                    <v-row>
                        <p class="text-h5">Make a Reservation</p>
                    </v-row>
                    <v-row>
                        <v-col md="6">Name</v-col>
                        <v-col md="6">
                            <v-text-field label="Name" ></v-text-field>
                        </v-col>
                    </v-row>
                   <v-row>
                        <v-col md="6">Phone Number</v-col>
                        <v-col md="6">
                            <v-text-field label="Phone" ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">Number Of People</v-col>
                        <v-col md="6">
                            <v-text-field label="No. Of People"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="3">Date</v-col>
                        <v-col md="3">
                            <v-text-field label="Date"></v-text-field>
                        </v-col>
                        <v-col md="3">Time</v-col>
                        <v-col md="3">
                            <v-text-field label="Time"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4">Location</v-col>
                        <v-col md="8">
                            <v-radio-group>
                            <v-row>
                                <v-col md="4">
                                    <v-radio label="Madaraka" value="Madaraka"></v-radio>
                                </v-col>
                                <v-col md="4">
                                    <v-radio label="CBD" value="CBD"></v-radio>
                                </v-col>
                                <v-col md="4">
                                    <v-radio label="Westlands" value="Westlands"></v-radio>
                                </v-col>
                            </v-row>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col align="center">
                            <v-btn>Make Reservation</v-btn>
                        </v-col>
                    </v-row>
                </v-card>         
            </v-col>
        </v-row>
     </v-container>
</template>