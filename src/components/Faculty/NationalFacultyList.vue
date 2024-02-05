<template>
  <div class="listCard">
    <div class="listSectionWrapper">
      <!-- <div class="listSectionHeading">International Faculty</div>
      <div class="listSectionElements listSectionImageElements">
        <cardWithPhoto
          :name="item.name"
          :image="item.image"
          v-for="item in InternationalFaculty"
          :key="item"
        >
        </cardWithPhoto>
      </div> -->
    </div>
    <div class="listSectionWrapper">
      <div class="listSectionHeading">National Faculty</div>
      <div class="listSectionElements">
        <div
          class="listSectionItems"
          v-for="item in NationalFaculty"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <!-- <div class="listSectionWrapper">
      <div class="listSectionHeading">Steering Committee</div>
      <div class="listSectionElements">
        <div
          class="listSectionItems"
          v-for="item in SteeringCommittee"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
    </div> -->
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
import cardWithPhoto from "../cardWithPhoto.vue";
// const InternationalFaculty = ["Prof.M V Pillai (USA)", "Dr.Najeeb Mohideen(USA)", "Prof.Saby George(USA)", "Dr.Ajithkumar(UK)", "Prof.Hari Parameswaran(USA)", "Dr.Kurian Joseph(Canada)", "Prof.Ben George(USA)", "Dr.Prantik Das(UK)", "Dr.Vimoji Nair(Canada)", "Dr.Sabarinath Radhakrishnan(USA)", "Dr.Yara Abdou(USA)", "Dr.Ajith Venniyur(Oman)"]
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
    name: "Dr.Sabarinath Radhakrishnan (USA)",
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
  "Dr. Sajeev George Pulickal MD",
  "Dr. Chepsy Philip MD, DNB",
  "Prof Dr. Shanmuga Kumar MD",
  "Dr. Ajay Sasidharan MD,FRCR",
  "Dr. Krupa Sankar MD, DM",
  "Dr. Sabarinath PS MD",
  "Dr. Manoj Unni MD, DM",
  "Prof. Dr. Vedhang Murthy MD",
  "Prof. Dr. Aravind S Anand MD, DNB",
  "Dr. Mobin Paul MD, DM",
  "Prof Dr. Somasekhar MS, Mch, FRCS",
  "Prof Dr. Anand RK MD",
  "Prof. Ramesh Billimagga MD, DM",
  "Prof Dr. Jacob Kurian MS, Meh, FRCS",
  "Prof Dr. Sivarama Krishnan MD",
  "Prof Dr. Lokesh Viswanath MD",
  "Dr. Jojo V Joseph MS, Meh",
  "Prof Dr. Francis V James MD",
  "Dr. P S Sreedharan MD,DM",
  "Dr. Aswin Kumar MD, DNB",
  "Dr. Beela Sara Mathew MD",
  "Dr.Yamini Krishnan MD,DM",
  "Dr. Sajeed MD,DNB",
  "Dr. Ajith Nambiar MD.FRCPath",
  "Dr. Sivanandan MD",
  "Dr. Sathyajith Pradhan MD",
  "Prof Dr Vivek Koushal MD",
  "Prof Dr. Sreejith S Nair DNB, DM",
  "Dr. Subramaniyan MRCP, FRCR",
  "Dr. Gopal Maheswari MD",
  "Dr. Deepa Susan Joy MD, DM",
  "Dr. S Bhoopal MD",
  "Dr. Prasanth Parameswaran MD, DM",
  "Dr. Roshni MD",
  "Dr. Vijayaraghavan MD",
  "Dr. K V Sajeevan MD, DM",
  "Dr. Malu Rafi MD",
  "Dr. Balu David MD",
  "Dr. Sreelesh MD, DM",
  "Dr. Cessal Thomas Kainikal MD",
  "Dr. O P Singh MD",
  "Dr. K V Gangadharan MD, DM",
  "Prof Dr. Kumar Prabash MD, DM",
  "Dr. Veerendra Bandari MD",
  "Dr. Nagraj Huilgol DGO, MD",
  "Dr. Rahul Krishnatri MD",
  "Dr. Senthil Rajappa MD, DM",
  "Prof Dr. Madhup Rasthogi MD",
  "Dr. Priyamvada Maitre MD, DM",
  "Dr. Vedang Murthy MD, DM",
  "Dr. Sugeeth M. T. MD, DM",
  "Dr. Prakash N. P. MD, DM",
  "Dr. Rejnish MD",
  "Dr. Arun Sankar S. MD",
  "Dr. Sanjay Chandrasekhar MD",
  "Dr. Baby Paul MD",
  "Dr. Sewanti Limaye MD",
  "Dr. B K Smruti MD",
  "Dr. Sushmitha Goshal MD",
  "Dr. Thirumala Raj MD, DM",
  "Dr. Rakesh Kapoor MD",
  "Dr. Neeraj Sidharthan MD, DM",
  "Dr. Ashish Singh MD",
  "Dr. Prasanth Ganesan MD, DM",
  "Prof Dr. N R Dutta MD, DNB",
  "Dr. Biswajith Dubashi MD, DM",
  "Prof Dr. Chinthamadka Sairam MD",
  "Dr. Smitha Kayal MD, DM",
  "Dr. Dinesh Makuny MD, DNB",
  "Dr. Bharath Rangarajan MD, DM",
  "Prof Dr. Umesh Mahant shetty MD",
  "Prof Dr. Anitha Ramesh MD, DCH, Msc., DM",
  "Dr. Madhu Sairam MD",
  "Dr. Sapna Nangia MD, DNB",
  "Dr. V Sreenivasan MD",
  "Dr. Feroz Rajan MS, Meh",
  "Dr. Sunu Cyriac MD, DM",
  "Prof Dr. Rajeev Sarin MD, FRCR",
  "Dr. Vijayaraghavan MD",
  "Dr. Giri MD",
  "Prof Dr. K Pavithran MD, DM, FRCP",
  "Prof Dr. VeerendraVyas MD",
  "Dr. Jayaprakash Madhavan MD, DNB",
  "Prof Dr. RK Vyas MD",
  "Prof Dr. PG Jayaprakash MD",
  "Prof Dr. Shyam Srivastava MD, DNB",
  "Prof Dr. Parameswaran MD, FRANZCR",
  "Prof Dr. P R Saseendran MD",
  "Prof Dr. Ajayakumar MD, DNB",
  "Prof Dr. Balu Krishna MD",
  "Prof Dr. K R Prema DNB, DMRT",
  "Dr. Sushmitha Goshal MD",
  "Dr. Rakesh Kapoor MD",
  "Dr. Antony Thottian MD, FACR",
  "Dr. Ponraj Madasamy MD, DM",
  "Dr. Ali Ashar MD",
  "Dr. Sivakumar MD, DM",
  "Dr. Raj Kumar Rangaswami MD, DM",
  "Prof. Dr. Purvish Parikh MD, DNB, PhD",
  "Dr. Sivaranjith MS, Meh",
  "Dr. Durgapoorna MD",
  "Dr. Mathew Jose MD, DM",
  "Dr. Balagopal MS, Meh",
  "Dr. Shahid MD, DM",
  "Dr. S. Parameswaran MD, FRACR",
  "Dr. Arun Lal MD",
  "Dr. Nagarajan MD",
  ".........(List incomplete)",
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
