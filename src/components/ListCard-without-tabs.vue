<template>
  <div class="listCard">
    <div class="listSectionWrapper">
      <div class="listSectionHeading">International Faculty</div>
      <div class="listSectionElements listSectionImageElements">
        <cardWithPhoto
          :name="item.name"
          :image="item.image"
          v-for="item in InternationalFaculty"
        >
        </cardWithPhoto>
      </div>
    </div>
    <div class="listSectionWrapper">
      <div class="listSectionHeading">National Faculty</div>
      <div class="listSectionElements">
        <div class="listSectionItems" v-for="item in NationalFaculty">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="listSectionWrapper">
      <div class="listSectionHeading">Steering Committee</div>
      <div class="listSectionElements">
        <div class="listSectionItems" v-for="item in SteeringCommittee">
          {{ item }}
        </div>
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

.listSectionWrapper {
  @apply text-center flex-col items-center justify-center;
}

.listSectionHeading {
  @apply text-white transition-all duration-200 bg-text-primary px-4 rounded border-b-8 border-border-blue p-2 m-3 mb-4 text-2xl;
  @apply max-md:text-xl mx-2;
}

.listSectionElements {
  @apply grid grid-cols-3 gap-5 justify-items-center p-10;
  @apply max-sm:grid-cols-2;
}
.listSectionImageElements {
  @apply max-sm:grid-cols-1;
}

.listSectionItems {
  @apply text-text-primary font-medium text-xl transition-all duration-200;
  @apply max-lg:text-sm max-sm:text-sm max-sm:p-2;
}
</style>
<script setup>
import cardWithPhoto from "./cardWithPhoto.vue";
// const InternationalFaculty = ["Prof.M V Pillai (USA)", "Dr.Najeeb Mohideen(USA)", "Prof.Saby George(USA)", "Dr.Ajithkumar(UK)", "Prof.Hari Parameswaran(USA)", "Dr.Kurian Joseph(Canada)", "Prof.Ben George(USA)", "Dr.Prantik Das(UK)", "Dr.Vimoji Nair(Canada)", "Dr.Sabareesh Radhakrishnan(USA)", "Dr.Yara Abdou(USA)", "Dr.Ajith Venniyur(Oman)"]
const InternationalFaculty = [
  {
    name: "Prof.M V Pillai (USA)",
    image: "/InternationalFaculty/DR.M V Pillai.jpg",
  },
  {
    name: "Dr.Najeeb Mohideen(USA)",
    image: "/InternationalFaculty/DR.Najeeb Mohideen.jpg",
  },
  {
    name: "Prof.Saby George(USA)",
    image: "/InternationalFaculty/DR.Saby George.jpg",
  },
  {
    name: "Dr.Ajithkumar(UK)",
    image: "/InternationalFaculty/DR.T Ajith Kumar.jpg",
  },
  {
    name: "Prof.Hari Parameswaran(USA)",
    image: "/InternationalFaculty/Prof. Hari Parameswaran.jpg",
  },
  {
    name: "Dr.Kurian Joseph(Canada)",
    image: "/InternationalFaculty/DR.Kurian joseph.jpg",
  },
  {
    name: "Prof.Ben George(USA)",
    image: "/InternationalFaculty/DR.Ben George.jpg",
  },
  {
    name: "Dr.Prantik Das(UK)",
    image: "/InternationalFaculty/DR.Prantik Das.jpg",
  },
  {
    name: "Dr.Vimoji Nair(Canada)",
    image: "/InternationalFaculty/DR.Vimoj Nair.jpg",
  },
  {
    name: "Dr.Sabareesh Radhakrishnan(USA)",
    image: "/InternationalFaculty/DR.Sabarinath Venniyil Radhakrishnan.jpg",
  },
  {
    name: "Dr.Yara Abdou(USA)",
    image: "/InternationalFaculty/DR.Yara Abdou.jpg",
  },
  {
    name: "Dr.Ajith Venniyur(Oman)",
    image: "/InternationalFaculty/DR.Ajit joseph venniyoor.jpg",
  },
];
const NationalFaculty = [
  "Prof.Suresh H Advani",
  "Dr.V.P.Gangadharan",
  "Dr.K.V.Somarajan",
  "Prof.Raju Titus Chacko",
  "Prof.Ashish Singh",
  "Prof.Vivek Koushal",
  "Prof.Gopal Maheshwari",
  "Prof.Sudeep Gupta",
  "Dr.Vijayanand Reddy",
  "Dr.Kannan",
  "Prof.Kumar Prabhash",
  "Prof.Purvish Parikh",
  "Prof.K Pavithran",
  "Prof.Hari Menon",
  "Prof.D.Rajkumar",
  "Dr.J P Agarwal",
  "Dr.Sidharth Ghosh Laskar",
  "Dr.Sarbani Ghosh Laskar",
  "Dr.Jayaprakash Madhavan",
  "Dr.Chithrathara",
  "Dr.D K Vijayakumar",
  "Dr.Chandra Mohan",
  "Dr.Surij Salih",
  "Dr.Sudhindra",
  "Dr.Rahul Krishnatri",
  "Dr.O V Sudheer",
  "Dr.Ginil Kumar",
  "Dr.Sevanthi Li Maye",
  "Dr.Silambarasan",
  "Dr.P Rema",
];
const SteeringCommittee = [
  "DR.Naveen P Kumar",
  "DR.Malu Rafi DNB",
  "DR.Asha Arjun MD, DNB",
  "DR.Susan MD, DNB",
  "DR.John Joseph MD",
  "DR.Roshini MD",
  "DR.Sanu Dev MD, DM",
  "DR.Vishnu Reghu MD",
  "DR.Cyrus MD",
  "DR.Nidhi MD DM",
];
</script>
