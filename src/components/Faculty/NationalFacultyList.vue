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
  "Dr. S H Advani MD, DM",
  "Dr. Vijay Anand Reddy MD, DNB",
  "Prof. Dr. Ajayakumar MD, DNB",
  "Prof. Dr. Anand R K MD",
  "Prof. Dr. Anitha Ramesh MD, DCH, Msc, DM",
  "Prof. Dr. Aravind S Anand MD, DNB",
  "Prof. Dr. Balu Krishna MD",
  "Prof. Dr. Bindu Joseph MD",
  "Prof. Dr. Chinthamadaka Sairam MD",
  "Prof. Dr. Francis V James MD",
  "Prof. Dr. Jacob Kurian MS, Mch, FRCS",
  "Prof. Dr. K Pavithran MD, DM, FRCP",
  "Prof. Dr. KR Prema DNB, DMRT",
  "Prof. Dr. Kannan MD, DM",
  "Prof. Dr. Kumar Prabash MD, DM",
  "Prof. Dr. Lokesh Viswanath MD",
  "Prof. Dr. Madhup Rasthogi MD",
  "Prof. Dr. N R Dutta MD, DNB",
  "Prof. Dr. P G Jayaprakash MD",
  "Prof. Dr. P R Saseendran MD",
  "Prof. Dr. Parameswaran MD, FRANZCR",
  "Prof. Dr. Purvish Parikh MD, DNB, PhD",
  "Prof. Dr. R K Vyas MD",
  "Prof. Dr. Rajeev Sarin MD, FRCR",
  "Prof. Dr. Ramesh Billimagga MD, DM",
  "Prof. Dr. Shanmuga Kumar MD",
  "Prof. Dr. Shyam Srivastava MD, DNB",
  "Prof. Dr. Sivarama Krishnan MD",
  "Prof. Dr. Somasekhar MS, Mch, FRCS",
  "Prof. Dr. Sreejith S Nair DNB, DM",
  "Prof. Dr. Sureshkumar MD, DNB",
  "Prof. Dr. Umesh Mahant shetty MD",
  "Prof. Dr. Vedhang Murthy MD",
  "Prof. Dr. Veerendra Vyas MD",
  "Prof. Dr. Vivek Kaushal MD",
  "Adnl. Prof. Dr. Rema P MD",
  "Dr. Abdul Shahid MD, DM",
  "Dr. Abraham Samuel MD, DM",
  "Dr. Abu abraham Koshy MD, DNB",
  "Dr. Ajay Sasidharan MD, FRCR",
  "Dr. Ajith Nambiar MD, FRCP",
  "Dr. Ali Ashar MD",
  "Dr. Amit Varma MD",
  "Dr. Anoop Jose MD",
  "Dr. Anoop MD, DM",
  "Dr. Antony Thottian MD, FACR",
  "Dr. Anupama MD, DM",
  "Dr. Anurag Mehta MD",
  "Dr. Arnn Sankar S. MD",
  "Dr. Arnn Chandrasekharan DM, MD",
  "Dr. Arnn MD, DM",
  "Dr. Arnn WarrierMD, MRCP, DM, FRCP",
  "Dr. Arnnkumar G MSC, Phd",
  "Dr. Arnnlal MD",
  "Dr. Ashish Singh MD",
  "Dr. Ashok Komaranchath MD, MRCP, DM, FRCP",
  "Dr. Aswin Kumar MD, DNB",
  "Dr. B K Smrnti MD",
  "Dr. B S Ankit Nehra MD, DM",
  "Dr. Baby Paul MD",
  "Dr. Balagopal MS, Mch",
  "Dr. Balu David MD",
  "Dr. Beela Sara Mathew DMRT, DNB",
  "Dr. Bellarmine Lawrance MD, FACP",
  "Dr. Bharath Rangarajan MD, DM",
  "Dr. Binitha Thomas MD, DNB",
  "Dr. Biswajith Dubashi MD, DM",
  "Dr. Boman Dhabhar MD, DM",
  "Dr. C N Mohanan Nair DM",
  "Dr. Cessal Thomas Kainikal MD",
  "Dr. Chepsy Philip MD, DNB",
  "Dr. Chetan Madre",
  "Dr. Chithrathara MD, Mch",
  "Dr. D K Vijayakumar MS, Mch",
  "Dr. Deepa Susan Joy MD, DM",
  "Dr. Deepak Bharti DNB",
  "Dr. Deepak Charles MD, DM",
  "Dr. Deepthi Madhu MD",
  "Dr. Dinesh Makuny MD, DNB",
  "Dr. Dipti Rani Samanta MD",
  "Dr. Durga Prasan MD, Dr.NB",
  "Dr. Durgapoorna MD",
  "Dr. Feroz Rajan MS, Mch",
  "Dr. Flowerlit Thomas MD, DM",
  "Dr. Geetha Muttath MD",
  "Dr. George MD, DM",
  "Dr. Ginil Kumar MS, Mch",
  "Dr. Giri MD",
  "Dr. Gopal Maheswari MD",
  "Dr. Govind Babu MD, DM",
  "Dr. Grace Mercy P MD",
  "Dr. Gyan Chand MS",
  "Dr. Hareesh MD, DM",
  "Dr. Hari Menon MD, DM",
  "Dr. Haridas Nair MD",
  "Dr. J P Agarwal MD",
  "Dr. Jayaprakash Madhavan MD, DNB",
  "Dr. Jency Joy MS, Mch",
  "Dr. Jenny Joseph MBBS, DMRT",
  "Dr. Jeyhan Boman Dhabhar MD, DNB",
  "Dr. John Joseph MD",
  "Dr. Jojo V Joseph MS, Mch",
  "Dr. Jamon Rapheal MD, DNB",
  "Dr. Jose Paul MD, FRCR",
  "Dr. Jose Tom MD",
  "Dr. Joy Augustine MD, DCP",
  "Dr. Judith Aaron MD, DNB",
  "Dr. Jyoti Wadhwa DM",
  "Dr. KC Patro MD, DNB, MBA",
  "Dr. KV Gangadharan MD, DM",
  "Dr. K V Sajeevan MD, DM",
  "Dr. Karpagavally MD",
  "Dr. Kim Jacob Mammen MS, Mch, FRCS",
  "Dr. Kaushal B Patel MD, DM",
  "Dr. Krishna Prasad MD, DM",
  "Dr. Krupa Sankar MD, DM",
  "Dr. Kunhalan Kutty MD",
  "Dr. Kunjuraman Somarajan MD",
  "Dr. Lakshmi Haridas MD, DM",
  "Dr. M S Belliappa MD",
  "Dr. Madhu Sairam MD",
  "Dr. Malu Rafi MD",
  "Dr. Manikantan MD, DM",
  "Dr. Manoj Unni MD, DM",
  "Dr. Mathew Jose MD, DM",
  "Dr. Meenu Walia DNB",
  "Dr. Minrn Mathew MD, DM",
  "Dr. Mabin Paul MD, DM",
  "Dr. Murali T VMS, Mch",
  "Dr. Murali Appukkuttan Pillai MS, Mch, DNB, FRCS",
  "Dr. NV Ramaswami MD, DM",
  "Dr. Nagarajan MD, DNB",
  "Dr. Nagraj Huilgol DGO, MD",
  "Dr. Naveen MD, FRCR",
  "Dr. Neeraj Sidharthan MD, DM",
  "Dr. Nibin Bose MD",
  "Dr. Nikhil K Haridas MD, Dr. NB",
  "Dr. Nithin Raj MD",
  "Dr. 0 P Singh MD",
  "Dr. P S Sreedharan MD, DM",
  "Dr. Philip George Kuttikkat MD, DM",
  "Dr. Ponraj Madasamy MD, DM",
  "Dr. Prakash NP MD, DM",
  "Dr. Prasanth Ganesan MD, DM",
  "Dr. Prasanth Parameswaran MD, DM",
  "Dr. Praseeda I MD",
  "Dr. Prashant Ariyanur MD",
  "Dr. Praveen Ninan MD",
  "Dr. Priyamvada Maitre MD, DM",
  "Dr. Priyanka Alurkar MD",
  "Dr. Rahul Krishnatri MD",
  "Dr. Rajeev KR DMRT, DNB",
  "Dr. Rajesh Vashistha MD",
  "Dr. Raj Kumar Ramaswami MD, DM",
  "Dr. Rakesh Kapoor MD",
  "Dr. Ramdas MDDr. Rejnish MD",
  "Dr. Roja MD",
  "Dr. Rona Joseph MD, DM",
  "Dr. Rony Benson MD, DM, MRCP",
  "Dr. Roshni MD",
  "Dr. S Bhoopal MD",
  "Dr. S Nirmala MD",
  "Dr. S Parameswaran MD, FRACR",
  "Dr. Sabarinath P S MD",
  "Dr. Sajeed MD, DNB",
  "Dr. Sajeev George Pulickal MD",
  "Dr. Sameer Salahuddin DNB",
  "Dr. Sandeep MD, DM",
  "Dr. Sanjay Chandrasekhar MD",
  "Dr. Sanjo M Varghese MD, DM",
  "Dr. Sanudev Sadanandan DNB, DM",
  "Dr. Sapna Nangia MD, DNB",
  "Dr. Sathish Padmanabhan MD",
  "Dr. Sathyajith Pradhan MD",
  "Dr. Senthil Rajappa MD, DM",
  "Dr. Sewanti Limaye MD",
  "Dr. Shahid MD, DM",
  "Dr. Shambhavi Sing",
  "Dr. Shelly Hukku MD",
  "Dr. Sherry MD, DM",
  "Dr. Shirish Alukar MD, DM",
  "Dr. Shishir Shetty MS, Mch",
  "Dr. Sivakumar MD, DM",
  "Dr. Sivanandan MD",
  "Dr. Sivaranjith MS, Mch",
  "Dr. Smitha Kayal MD, DM",
  "Dr. Sourabh Radhakrishnan MD, DM",
  "Dr. Sreelesh K P MD, DM",
  "Dr. Subramaniyan MRCP, FRCR",
  "Dr. Sudeep Gupta MD, DM",
  "Dr. Sudhindran MS, FRCS",
  "Dr. Sugeeth MT MD, DM",
  "Dr. Sujai Srinivas MD, DM",
  "Dr. Sunil Chaudhry MD",
  "Dr. Sunu Cyriac MD, DM",
  "Dr. Surendranath Senapathi MD",
  "Dr. Suresh Chandra Dath MD",
  "Dr. Surij Salih MS, Mch",
  "Dr. Susan Mathews MD",
  "Dr. Sushmitha Goshal MD",
  "Dr. T K Padmanabhan MD",
  "Dr. T N Vijayasree MD",
  "Dr. T Raja MD, DM",
  "Dr. Thanveer Pasha MD",
  "Dr. Thanveer Shahid MD",
  "Dr. Thirumala Raj MD, DM",
  "Dr. V Srinivasan MD",
  "Dr. Vamsi Krishna MD, DM",
  "Dr. Veerendra Bandari MD",
  "Dr. Vijayaraghavan MD",
  "Dr. Vijaykaran Reddy MD",
  "Dr. Vijith Shetty MD DM",
  "Dr. Vinin MSc Dr.P",
  "Dr. Wesley Jose MD, Dr.NB",
  "Dr. Yamini Krishnan MD, DM",
  "Dr. Ziad Thotattil MD, DNB, FRANZCR, FRCR",
  "Dr. Jamon Rapheal MD, DNB",
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
