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
    name: "Dr.Najeeb Mohideen (USA)",
    image: "/InternationalFaculty/DR.Najeeb Mohideen.jpg",
  },
  {
    name: "Prof.Saby George (USA)",
    image: "/InternationalFaculty/DR.Saby George.jpg",
  },
  {
    name: "Dr.Ajithkumar (UK)",
    image: "/InternationalFaculty/DR.T Ajith Kumar.jpg",
  },
  {
    name: "Prof.Hari Parameswaran (USA)",
    image: "/InternationalFaculty/Prof. Hari Parameswaran.jpg",
  },
  {
    name: "Dr.Kurian Joseph (Canada)",
    image: "/InternationalFaculty/DR.Kurian joseph.jpg",
  },
  {
    name: "Prof.Ben George (USA)",
    image: "/InternationalFaculty/DR.Ben George.jpg",
  },
  {
    name: "Dr.Prantik Das (UK)",
    image: "/InternationalFaculty/DR.Prantik Das.jpg",
  },
  {
    name: "Dr.Vimoj Nair (Canada)",
    image: "/InternationalFaculty/DR.Vimoj Nair.jpg",
  },
  {
    name: "Dr.Sabareesh Radhakrishnan (USA)",
    image: "/InternationalFaculty/DR.Sabarinath Venniyil Radhakrishnan.jpg",
  },
  {
    name: "Dr.Yara Abdou (USA)",
    image: "/InternationalFaculty/DR.Yara Abdou.jpg",
  },
  {
    name: "Dr.Ajith Venniyur (Oman)",
    image: "/InternationalFaculty/DR.Ajit joseph venniyoor.jpg",
  },
];
const NationalFaculty = [
  "Prof. DR N R Datta",
  "Prof.Dr Rajiv Sarin.  MD,DNB,FRCR",
  "Prof.Dr Shaleen Kumar MD",
  "Prof DR.Chinthamadka Sairam",
  "DR. Sanjay Sharma MS",
  "DR. Aju Mathew  MD(US),AB (Iint Med,Med Onc& Haem Onc),M.phil(Cambridge), FACP",
  "DR. Chepsy Philip MD,DM (HEM)",
  "Prof.DR. Neeraj Sidharthan MD,DNB,DM(HEM)",
  "DR. Manoj Unni MD,DM (HEM)",
  "DR. Mobin Paul MD,DM",
  "Prof.DR. Manikantan MD,DM",
  "DR. Bharath Rangarajan MD,DM",
  "Prof. Ramesh Billilmagga  MD,",
  "DR. Lokesh Viswanath MD",
  "DR. Giri MD",
  "Prof.DR. Madhup Rasthogi  MD",
  "Prof.DR. R.Anita Ramesh MD,DNB,DM,DCH,MSC ONCO(UK)",
  "Prof.DR. Beula Sara Mathew MD",
  "DR. Srinivas Chiriguri",
  "Pro.DR. Rakesh Jalali MD",
  "DR. Sapna Nangiya MD",
  "Prof.DR. Sathyajith  Pradhan MD,DM",
  "DR. Debnarayan Dutta MD",
  "DR. Subramaniyan MRCP,FRCR",
  "Prof.DR. S Bhoopal MD",
  "DR. Vijayaraghavan MD",
  "DR. Balu David MD",
  "DR. Sanjay  Chandrasekhar MD",
  "DR. P Mahadev MD",
  "DR. Ganapathy  Ramanan MD,DM",
  "DR. Alex Prasad MD,DNB,MSC ONCO,FIOP",
  "DR. V Sreenivas MD",
  "Prof.DR. OP Singh MD",
  "Prof.DR. R K Vyas MD",
  "Prof.DR. Veerendra Vyas MD",
  "Prof. DR. Uday Sahi MD",
  "DR. Veerendra  Bandari MD",
  "DR. Balu Krishna MD,DM",
  "DR. Sanjeev  Sharma MD,DNB",
  "Prof.DR.Tejinder Kataria   MD,DNB",
  "Prof DR. Shanmuga Kumar MD",
  "DR. Senthil Rajappa MD,DM",
  "Prof.DR. Vedang Murthy MD",
  "DR.Somasekhar MS,Mch",
  "Padmashree.DR. J K Singh  MD",
  "Padmashree.DR. Baby Paul MD",
  "Prof.DR. Sushmitha Goshal MD",
  "DR.Rakesh Kapoor MD",
  "DR.Biswajith Dwibashi MD,DM",
  "DR.Pandjatcharam MD",
  "DR.PS Sreedharan MD,DM",
  "DR.Yamini Krishnan MD ",
  "DR.Durga Prasan MD,DM",
  "DR. Amritha Suresh PhD",
  "DR. Thejeswar MD,DM",
  "DR.T S Ganesan MD,MNAMS,PHD,FRCP",
  "DR.Prasanth Parameswaran MD,DM",
  "DR.Nagraj Huilgol DGO,MD",
  "DR. Deepak Charles MD,DM",
  "DR. Smitha Kayal MD,DM",
  "DR. Prasanth Ganesan MD,DM",
  "DR.Rahul Ravind MD,DM",
  "DR. Sisir Shetty MS,Mch",
  "DR.Dinesh M MD,DNB",
  "DR. Shyam Shrivastava MD",
  "DR.Umesh M. Mahantshetty MD",
];
const SteeringCommittee = [
  "DR.K.Pavithran  MD, DM, FRCP",
  "DR.Jayaprakash  Madhavan  MD,DNB",
  "DR.Ajayakumar  MD,DNB",
  "DR.Sivarama Krishnan  MD",
  "DR.Suresh Kumar K  MD,DNB",
  "DR.K.R Prema MD",
  "DR.Sajeev George Pulikan  MD",
  "DR. Arun Warrier  MD,DM",
  "PRO. Sreejith Nair MD,DM",
  "DR.Jose Tom  MD",
  "DR. Geetha Muttath  MD",
  "DR. Jomon Raphel  MD",
  "DR. Sabari Nath PS  MD",
  "DR. Francis V James MD",
  "DR. Abu Abraham Koshy (MD, ECMO)",
  "DR. Mathews Jose  MD,DM",
  "DR. Aravind S Anand  MD",
  "DR. Jacob Kurian ((MS,Mch,FRCS)",
  "DR. Sanju Cyriac MD,DM",
  "DR.Baijumon Balan DMRT",
  "DR.Sunu Cyriac MD",
  "DR.Balagopal MS,Mch",
  "DR.Santhosh John Abraham MS,DNB,FRCS",
  "DR. Beula Sara Mathew MD",
  "DR.Bindhu. G  MD",
  "DR.Kunjalan Kutty  MD",
  "DR.Preeya  DLO, MD",
  "DR Noname Chellappan DMRT",
  "DR.Ajith Kumar DMRT",
  "DR.Jayaraman  MD",
  "DR. Ciniraj  MD",
  "DR. Praveen Ninan MD",
  "DR. Anand RK  MD",
  "DR. Anoop T.M  MD,DM",
  "DR.Deepa Susan Philip MD,DM",
  "DR. Sugeeth  MD,DM",
  "DR.Ashok Komaranchath MD,DM",
  "DR.Gayathri Jayaprakash  MD",
  "DR.Adithya  MBBS",
  "DR. Arun Lal  MD",
  "DR.Jose Paul  MD,FRCR",
  "MR.Jithin  MD,DRP",
  "DR.Judith Aron  MD",
  "DR. Jenny Joseph  MBBS.DMRT",
  "DR. Johny K Joseph  MD",
  "DR. Madhu Sairam MD",
  "DR. V.U Thankamma  DMRT",
  "DR. Nibin Bose  MD",
  "DR. Surij Salih  MS,Mch",
  "DR. Rony Benson  MD,DM,MRCP",
  "DR. Anto Baby  MD",
  "DR. Shehna A Khader MD",
  "DR. Cessel Thomas Kainickal  MD",
  "DR. Rajaneesh  MD",
  "DR. Flowerlit Thomas  MD,DM",
  "DR. Hareesh Sugathan  MD,DM",
  "DR. Usha Sree Warrier  DMRT",
  "DR. Balamurali Krishna KS  DMRT,DNB",
  "DR. Siji  DMRT",
  "DR. Binitha Thomas  MD",
  "DR. Bindhu S.M  MD",
  "DR. Sona Ram DMRT",
  "DR. Divya Shibu MD",
  "DR. Vijayakaran Reddy  MD",
  "DR. Anoop Jose  MD",
  "DR.Jaisankar P (MD,DM)",
  "DR. Varun Rajan MD,DM",
  "DR. Arun  Philip MD,DM",
  "DR.Nikhil Krishna Haridas MD,DNB,ECMO,MRCP",
  "DR. Ajay Sasidharan MD,DNB,FRCR",
  "DR. Haridas Nair MD",
  "DR. Angela  Eapen MD",
  "DR. Meenu  Jose  MD",
  "DR. Snigdha PP MD",
  "DR.Pranav MD",
  "DR. Ajinkya MD",
  "DR.Rajasree MD",
  "DR. Ansar MD",
  "DR.Sathish Padmanabhan MD",
  "DR. KV Gangadharan MD,DM",
  "DR. Anto Baby  MD",
  "DR.Jeomcy George MD,FHPR",
  "DR.Renu DMRT",
  "DR.Shyama Latha MBBS",
  "DR. Paul G",
  "DR. Abraham Samuel MD,DM",
  "DR.Ashwin MD",
  "DR.Sajeed MD",
  "DR.Sivanandan MD",
  "DR.Govind Gangadharan MD,DM",
  "DR. Naveen P Kumar",
  "DR.Malu Rafi DNB",
  "DR.Asha Arjun MD,DNB",
  "DR.Susan MD,DNB",
  "DR.John Joseph MD",
  "DR.Roshini MD",
  "DR.Sanu Dev MD,DM",
  "DR. Vishnu Reghu MD",
  "DR. Cyrus MD",
  "DR. Nidhi MD DM",
];
</script>
