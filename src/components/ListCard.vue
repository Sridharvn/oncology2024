<template >
    <div class="listCard">
        <div class="list-wrapper">
            <button class="list-item-element" :class="activeElement == 0 ? 'list-item-active' : ''"
                v-on:click="changeActiveElement(0)">International Faculty</button>
            <button class="list-item-element" :class="activeElement == 1 ? 'list-item-active' : ''"
                v-on:click="changeActiveElement(1)">National Faculty</button>
        </div>
        <div class=" content">
            <div class="content-item" v-if="activeElement == 0">
                <div class="content-list" v-for="Faculty in InternationalFaculty" :key="Faculty">{{ Faculty }}</div>
            </div>
            <div class="content-item" v-if="activeElement == 1">
                <div class="content-list" v-for="Faculty in NationalFaculty" :key="Faculty">{{ Faculty }}</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.content {
    /* @apply border; */
}

.listCard {
    @apply border border-4 mx-4 border-text-primary rounded-2xl my-4;
}

.content-item {
    @apply grid grid-cols-3 gap-5 justify-items-center p-10;
    @apply max-sm:grid-cols-2;
}

.content-list {
    @apply text-text-primary font-medium text-xl transition-all duration-200;
    @apply max-lg:text-sm max-sm:text-xs;
}

.list-wrapper {
    @apply flex justify-around text-2xl my-4;
}

.list-item-element {
    @apply text-text-secondary2 transition-all duration-200 bg-text-primary px-4 rounded;
    @apply max-md:text-base mx-2;

}

.list-item-active {
    @apply text-white border-b-8 border-border-blue;
}
</style>
<script setup>
import { ref, onMounted } from 'vue';
const InternationalFaculty = ["Prof.M V Pillai (USA)", "Dr.Najeeb Mohideen(USA)", "Prof.Saby George(USA)", "Dr.Aiithkumar(UK)", "Prof.Hari Parameswaran(USA)", "Dr.Kurian Joseph(Canada)", "Prof.Ben George(USA)", "Dr.Prantik Das(UK)", "Dr.Vimoi Nair(Canada)", "Dr.Sabareesh Radhakrishnan(USA)", "Dr.Yara Abdou(USA)", "Dr.Aiith Venniyur(Oman)"]
const NationalFaculty = ["Prof.Suresh H Advani", "Dr.V.P.Gangadharan", "Dr.K.V.Somaraian", "Prof.Raju Titus Chacko", "Prof.Ashish Singh", "Prof.Vivek Koushal", "Prof.Gopal Maheshwari", "Prof.Sudeep Gupta", "Dr.Viiayanand Reddy", "Dr.Kannan", "Prof.Kumar Prabhash", "Prof.Purvish Parikh", "Prof.K Pavithran", "Prof.Hari Menon", "Prof.D.Raikumar", "Dr.J P Agarwal", "Dr.Sidharth Ghosh Laskar", "Dr.Sarbani Ghosh Laskar", "Dr.Jayaprakash Madhavan", "Dr.Chithrathara", "Dr.D K Viiayakumar", "Dr.Chandra Mohan", "Dr.Surii Salih", "Dr.Sudhindra", "Dr.Rahul Krishnatri", "Dr.O V Sudheer", "Dr.Ginil Kumar", "Dr.Sevanthi Li Maye", "Dr.Silambarasan", "Dr.P Rema"]


let activeElement = ref(0);
// const changeActiveElement = (index: any) => {
//     activeElement.value = index;
//     console.log(activeElement);

// }
function changeActiveElement(index) {
    activeElement.value = index;
    console.log(activeElement);

}

</script>