<template>
  <div class="wrapper">
    <div class="mainTimeTableWrapper">
      <table class="mainTimeTable">
        <tr
          class="mainTimeTableRow"
          v-for="(item, index) in dailyEventsTable"
          :key="index"
        >
          <td class="mainTimeTableColumn mainTimeTableDate" v-if="index == 0">
            {{ item.date }}
          </td>
          <td class="mainTimeTableColumn" v-if="index == 0">
            {{ item.title }}
          </td>
          <td class="mainTimeTableColumn" v-if="index == 0" colspan="2">
            <tr class="mainTimeTableRowInColumnFirst mainTimeTableHall">
              {{
                item.hall
              }}
            </tr>
            <tr class="mainTimeTableRowInColumnFirst">
              {{
                item.topic
              }}
            </tr>
          </td>
          <td class="mainTimeTableColumn mainTimeTableDate" v-if="index != 0">
            {{ item.date }}
          </td>
          <td class="mainTimeTableColumn" v-if="index != 0">
            <tr class="mainTimeTableRowInColumnRest mainTimeTableHall">
              Hall B
            </tr>
            <tr class="mainTimeTableRowInColumnRest">
              {{
                item.hallB
              }}
            </tr>
          </td>
          <td class="mainTimeTableColumn" v-if="index != 0">
            <tr class="mainTimeTableRowInColumnRest mainTimeTableHall">
              Oman Hall
            </tr>
            <tr class="mainTimeTableRowInColumnRest">
              {{
                item.omanHall
              }}
            </tr>
            <!-- <tr
              class="mainTimeTableHall mainTimeTableRow text-center"
              v-if="index == 1"
            >
              <td>Inauguration of Conference</td>
            </tr>
            <tr
              class="mainTimeTableHall mainTimeTableRow text-center"
              v-if="index == 3"
            >
              <td>Valedictory Function</td>
            </tr> -->
          </td>
          <td class="mainTimeTableColumn" v-if="index != 0">
            <tr class="mainTimeTableRowInColumnRest mainTimeTableHall">
              Hall C
            </tr>
            <tr class="mainTimeTableRowInColumnRest">
              {{
                item.hallC
              }}
            </tr>
          </td>
        </tr>
      </table>
    </div>

    <Banner color="five" style="margin-block: 50px"
      >Medical oncology Breakfast session on 9th and 10th at 7 AM.<br />
      Limited to 25 on a first come first serve basis Those interested may
      contact Mr. Abey Thomas (9447073203) / Mr. Ajai Johny (9496348732) and
      give their names on or before 01/03/24 and you will be intimated
      accordingly.
    </Banner>
    <!-- <div class="pdf w-full h-[100vh]">
    <iframe src="/pdfs/Agenda-2024new.pdf" class="w-full h-full"></iframe>
  </div> -->
    <div>
      <!-- <img
      src="/pdfs/agenda2024new/Agenda-2024new_page-0001.jpg"
      alt=""
      v-for="pic in 12"
      :key="pic"
    /> -->
      <img
        v-for="(image, index) in getImageList()"
        :src="`/pdfs/agenda2024new/${image}`"
        class="detailsImage"
        :key="index"
        alt="Agenda Image"
      />
    </div>
    <Banner color="five" style="margin-block: 50px"
      >Medical oncology Breakfast session on 9th and 10th at 7 AM.<br />
      Limited to 25 on a first come first serve basis Those interested may
      contact Mr. Abey Thomas (9447073203) / Mr. Ajai Johny (9496348732) and
      give their names on or before 01/03/24 and you will be intimated
      accordingly.
    </Banner>
    <!-- <topicSpeakerListVue :sessionsList="sessionsDay1" timeProvided="false"
      >Scientific Sessions - Day I - 08.03.2024(Hall A)</topicSpeakerListVue
    >
    <topicSpeakerListVue :sessionsList="sessionsDay2" timeProvided="false"
      >Scientific Sessions - Day II - 09.03.2024(Hall A)</topicSpeakerListVue
    >
    <topicSpeakerListVue :sessionsList="sessionsDay3" timeProvided="false"
      >Scientific Sessions - Day III - 10.03.2024(Hall A)</topicSpeakerListVue
    >
    <topicSpeakerListVue
      :sessionsList="precisionOncology8thMarch"
      timeProvided="false"
      >Precision Oncology - 8th March 2024 - Hall B<br />Program Director - Dr
      Sewanti Limaye, H.N Reliance Hospital, Mumbai</topicSpeakerListVue
    ><topicSpeakerListVue :sessionsList="LearnFromExperts" timeProvided="true"
      >Learn from the experts - Radiation Oncology<br />(09.03.2024-Hall
      B)</topicSpeakerListVue
    > -->

    <!-- <topicSpeakerListVue :sessionsList="day1data" timeProvided="true"
      >Scientific Sessions - Day I - 08.03.2024 (Hall A)
    </topicSpeakerListVue>
    <Banner color="five" style="margin-block: 50px"
      >Medical oncology Breakfast session on 9th and 10th at 7 AM.<br />
      Limited to 25 on a first come first serve basis Those interested may
      contact Mr. Abey Thomas (9447073203) / Mr. Ajai Johny (9496348732) and
      give their names on or before 01/03/24 and you will be intimated
      accordingly.
    </Banner>

    <topicSpeakerListVue :sessionsList="day2data" timeProvided="true"
      >Scientific Sessions - Day II - 09.03.2024 (Hall A)
    </topicSpeakerListVue>
    <topicSpeakerListVue :sessionsList="day3data" timeProvided="true"
      >Scientific Sessions - Day III - 10.03.2024 (Hall A)
    </topicSpeakerListVue>
    <topicSpeakerListVue
      :sessionsList="precisionOncologyday1data"
      timeProvided="true"
      >Precision Oncology - 8th March 2024 - Hall B<br />Program Director - Dr
      Sewanti Limaye, H.N Reliance Hospital, Mumbai</topicSpeakerListVue
    >
    <topicSpeakerListVue :sessionsList="learnFromExperts" timeProvided="true"
      >Learn from the experts - Radiation Oncology<br />(09.03.2024-Hall
      B)</topicSpeakerListVue
    >
    <topicSpeakerListVue
      :sessionsList="scientificSessionDay2"
      timeProvided="true"
      >Scientific Session Day II</topicSpeakerListVue
    > -->
    <PrizeWinners></PrizeWinners>
    <AbstractSubmissionDetilsVue></AbstractSubmissionDetilsVue>
    <AbstractSubmissionInstructions></AbstractSubmissionInstructions>
  </div>
</template>
<style scoped>
* {
  /* @apply border-red border; */
}

@media (max-width: 1275px) {
  .mainTimeTable tr {
    @apply h-40;
  }
}

.mainTimeTable tr {
  @apply xl:h-40 2xl:h-20 max-lg:h-52 max-md:h-60 max-sm:h-72;
}

.mainTimeTable {
  @apply lg:p-4 lg:m-3 lg:mx-7 my-1;
}

.mainTimeTableColumn {
  @apply border-text-primary border-2 h-auto p-0 m-0 h-full;
  @apply max-sm:text-xs;
}

.mainTimeTableColumn:not(:first-child) {
  @apply w-1/3;
}

.mainTimeTableRow {
  @apply border-t-2 border-text-primary text-center;
}

.mainTimeTableHall {
  @apply text-white text-2xl h-1/2 bg-text-primary flex items-center justify-center;
  @apply max-sm:text-sm h-10;
  height: 50px !important;
}

.mainTimeTableRowInColumnFirst:first-child,
.mainTimeTableRowInColumnRest:first-child {
  @apply border-b-2 w-full border-text-primary;
}

.mainTimeTableRowInColumnRest {
  @apply w-full flex flex-col justify-center items-center;
  @apply max-sm:text-sm;
}

.mainTimeTableWrapper {
}

.mainTimeTableDate {
  @apply text-4xl text-white bg-pink aspect-square border-2 border-pink w-4;
  @apply max-sm:text-sm;
}
</style>
<style scoped>
.detailsImage {
  @apply bg-cover;
  /* @apply bg-cover border border-bgPink border-4; */
  /*@apply max-lg:w-[350px];*/
  @apply max-lg:w-full;
  @apply mix-blend-darken;
}
* {
  /* border: 1px solid red; */
}

.dayWrapper {
  @apply border border-text-primary rounded-lg m-2 border-4;
}

.heading {
  @apply text-text-primary text-3xl px-4 pt-4 text-center;
}

.underHeading {
  @apply text-text-primary text-sm pt-1 px-4 pb-4 italic text-center border-b-2;
}

.listHeading {
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  /* grid-template-rows: ; */
  /* grid-column-gap: 130px;
  grid-row-gap: 20px; */
  /* margin-left: 180px; */
  /* padding-block: 10px; */
}

.listHeadingItem {
  @apply text-text-primary text-3xl underline text-left px-4;
}

.listItems {
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  /* grid-template-rows: ; */
  /* grid-column-gap: 200px;
  grid-row-gap: 20px; */
  /* margin-left: 10%; */
  /* padding-block: 10px; */
}

.listItemsItem {
  text-align: left;
  @apply text-text-primary text-base py-2 px-4;
}

.listItemsWrapper {
}

.listWrapper {
  @apply max-w-6xl;
}

.wrapper {
  @apply flex justify-center flex-wrap flex-auto;
}
</style>
<script setup>
import topicSpeakerListVue from "./repeatingComponents/topicSpeakerList.vue";
import AbstractSubmissionDetilsVue from "./singleUse/AbstractSubmissionDetils.vue";
import PrizeWinners from "./singleUse/PrizeWinners.vue";
import AbstractSubmissionInstructions from "./singleUse/AbstractSubmissionInstructions.vue";
import day2data from "./../data/day2data";
import day3data from "./../data/day3data";
import day1data from "./../data/day1data";
import precisionOncologyday1data from "./../data/precisionOncologyday1data";
import learnFromExperts from "./../data/learnFromExperts";
import scientificSessionDay2 from "./../data/scientificSessionDay2";
import Banner from "./Banner.vue";

const dailyEventsTable = [
  {
    date: "07 March ",
    title: "PRE CONFERENCE SCIENTIFIC SESSION 8.00 am to 6.00 pm",
    hall: "Nayanar Hall, LeMeridian, Kochi",
    topic:
      "COURSE ON CROSS SECTIONAL ANATOMY FOR TARGET VOLUME DELINEATION AND TREATMENT PLANNING, BRACHYTHERAPY OF  COMMON CANCERS by Dr. K. C. PATRO MD, DNB, MBA ",
  },
  {
    date: "08 March",
    hallB: "PRECISION ONCOLOGY ",
    omanHall: "SCIENTIFIC PROGRAMME",
    hallC: "FREE PAPER SESSION ",
  },
  {
    date: "09 March",
    hallB:
      "LEARN FROM THE EXPERTS RADIATION ONCOLOGY AND E-CONTOURING INTERACTIVE SESSION (Sponsored by Varian) ",
    omanHall: "SCIENTIFIC SESSION",
    hallC:
      "LEARN FROM THE EXPERTS MEDICAL ONCOLOGY ON CART CELL THERAPY, IMMUNOTHERAPY & TARGETED THERAPY (Breakfast Session) FREE PAPER SESSION ",
  },
  {
    date: "10 March",
    hallB: "QUIZ COMPETITIONS POSTER PRESENTATION CAREER GUIDANCE SESSION",
    omanHall: "SCIENTIFIC SESSION",
    hallC: "FREE PAPER SESSION / SCIENTIFIC SESSION ",
  },
];
const sessionsDay1 = [
  {
    topic:
      "Can Hyperthermia be integrated in the management of locally advanced cancers? ",
    speaker: "Prof. N.R Datta MD",
  },
  {
    topic: "The GIST of GISTs",
    speaker: "Dr. Ajit Venniyoor MD, DNB, DM",
  },
  {
    topic: "Proton therapy for GI cancers",
    speaker: "Dr. Rahul Krishnaty MD",
  },
  {
    topic:
      "When to skin Radiotherapy in early Breast Cancer/ omission of radiotherapy in early stage breast cancer ",
    speaker: "Dr. Kurien Joseph FRCR, FRCP(C)",
  },
  {
    topic:
      "Cholangio carcinomas and Hepatocellular carcinoma -How we manage under NHS UK",
    speaker: "Dr. TV Ajithkumar MD,FRCR,MRCP",
  },
  {
    topic:
      "Challenges in surgical management of Cholangio carcinomaTBD Radiotherapy in Oligo Metastatic disease in Lung",
    speaker: "Prof.Dr. J.P Agarwal MD ",
  },
  {
    topic:
      "Have we perfected the treatment of carcinoma of cervix in india over the last four decades ? ",
    speaker: "Prof.Shyam Shrivastava MD, DNB",
  },
  {
    topic: "Multidisciplinary panel on Oligometastatic Prostate cancer ",
    speaker: "Dr. Najeeb Mohideen MD, FRCR",
  },
  {
    topic: "Brain Tumor diagnosis in the molecular era ",
    speaker: "Dr. Ziad Thotathil MD, DNB, RCR, FRANZCR",
  },
  {
    topic: "Management of Toxicities of CART Cell therapy",
    speaker: "Dr. Sabarinath Radhakrishnan MD ",
  },
  {
    topic: "Treatment optimisation in HER2 +ve early breast cancer",
    speaker: "Dr. Rajeev KR DNB",
  },
  {
    topic: "Circulating tumor free DNA. Evolving clinical applications ",
    speaker: "Prof. M.V Pillai MD FACP ",
  },
  {
    topic: "Adding SBRT to immunotherapy for HCC an opportunity",
    speaker: "Dr. Rahul Krishnatri MD ",
  },
  {
    topic: "Cell therapies in Multiple Myeloma",
    speaker: "Dr. Sabarinath Radhakrishnan MD ",
  },
  {
    topic:
      "Stereotactic Body Radiotherapy for pediatric malignancies -Current evidence and principles",
    speaker: "Dr. Vimoj Nair MD,FRCP(C) ",
  },
  {
    topic:
      "Newer trends in the management of ALK rearranged NSCLCTBD Precision Oncology for Gastro esophageal Carcinomas",
    speaker: "Prof. Ben George MD, FACP",
  },
  {
    topic: "recision Oncology for Gastro esophageal Carcinomas",
    speaker: "Dr. Prantik Das MRCP, FRCR",
  },
  {
    topic: "Targeting prostate cancer precisely in the CRPC setting",
    speaker: "Dr.Saby George MD,FACP",
  },
  {
    topic: "SBRT in Renal Cell Carcinoma ",
    speaker: "Dr. Vedang Murthy MD,DNB",
  },
  {
    topic:
      "Current concepts and consideration of CRS and HIPEC in ovarian cancer",
    speaker: "Dr. Somasekhar MS, Mch, FRCS ",
  },
  {
    topic:
      "Proton therapy for reducing mucosal toxicity of head and neck radiotherapy",
    speaker: "Dr Sapna Nangia MD, DMB",
  },
  //   {
  //     topic: "",
  //     speaker: "",
  //   },
  //   {
  //     topic: "",
  //     speaker: "",
  //   },
  //   {
  //     topic: "",
  //     speaker: "",
  //   },
];
const sessionsDay2 = [
  {
    topic: "Approach to Uterine Sarcomas ",
    speaker: "Dr. Ajit Venniyoor MD, DNB, DM ",
  },
  {
    topic: "Current approaches to locally advanced rectal Cancer ",
    speaker: "Dr. Kurien Joseph FRCR, FRCP(C)",
  },
  {
    topic:
      "Have we perfected the treatment of carcinoma cervix in the last four decades",
    speaker: "Prof.Shyam Shrivastava MD, DNB ",
  },
  {
    topic:
      "Advanced radiotherapy Techniques such as TMLI, Bridging Radiotherapy and role of Radiotherapy for Transplant Patients ",
    speaker: "Dr. TV Ajithkumar MD, FRCR, MRCP",
  },
  {
    topic: "Targeting prostate cancer precisely in the CRPC setting ",
    speaker: "Dr. Saby George MD, FACP",
  },
  {
    topic:
      "Ultra hypo-fractionated Radiotherapy for breast cancer: Opportunities & challenges in the Indian context. ",
    speaker: "Dr. Rajiv Sarin MD, FRCR",
  },
  {
    topic: "Whats positive about Triple Negative Breast cancer? ",
    speaker: "Dr. Yara Abdou MD",
  },
  {
    topic: "Overview of treatment options for advanced kidney cancer patients ",
    speaker: "Dr. Saby George MD, FACP ",
  },
  {
    topic:
      "Myeloma —continuing role for transplant in the era of new therapies.",
    speaker: " Dr. Hari Parameswaran MD, FACP ",
  },
  {
    topic: "Multidisciplinary Panel on Locally advanced Prostate cancer",
    speaker: " Dr. Najeeb Mohideen MD, FRCR",
  },
  {
    topic: "Precision Oncology in pancreatic Carcinoma ",
    speaker: "Prof. Ben George MD,FACP",
  },
  {
    topic:
      "Near patient CART cell therapy—can we make it accessible across the world ? ",
    speaker: "Dr. Hari Parameswaran MD, FACP",
  },
  {
    topic: "Tailored adjuvant therapy for endochemical cancer ",
    speaker: "Dr.Umesh Mahantshetty MD, DNB ",
  },
  {
    topic: "Systemic therapy in head and neck cancer- Indian context. ",
    speaker: "Dr. Kumar Prabhash MD, DM",
  },
  {
    topic: "SBRT for localised Ca Prostate: Is it ready to take off",
    speaker: " Dr. Vijay Anand Reddy MD, DNB",
  },
  {
    topic: "Management of advanced bladder cancer ",
    speaker: "Dr. Prantik Das MRCP, FRCR ",
  },
  {
    topic: "The HER2 low revolution in breast cancer- Panel discussion ",
    speaker: "Dr. Shaheenah Dawood FACP, FRCP",
  },
  {
    topic: "Perioperative Radiotherapy for Pancreatic Cancer ",
    speaker: "Dr. TV Ajithkumar MD, FRCR, MRCP",
  },
  {
    topic: "Precision Oncology of colonic carcinomas ",
    speaker: "Prof. Ben George MD, FACP",
  },
  {
    topic: "Recent advances in Robotic Oncosurgcry ",
    speaker: " Dr. Somasekhar MS,Mch, FRCS ",
  },
  {
    topic: "Use of methylation profile in Meningoma•",
    speaker: "Dr. Ziad Thotathil MD, DNB, FRANZCR, FRCR ",
  },
  //   {
  //     topic: "",
  //     speaker: "",
  //   },
];
const sessionsDay3 = [
  {
    topic: "Treatment of early lung cancer",
    speaker: "Dr. Ashish Singh MD ",
  },
  {
    topic: "T1G3 TCC: Is there a case for early cystectomy. Panel discussion",
    speaker: "Dr. Kim Jacob Mammen MS MCL FRCS ",
  },
  {
    topic:
      "Targeted therapy and immunotherapy - have they replaced Chemotherapy and Radiotherapy in Non Small Cell Lung cancer",
    speaker: "Dr. Govind Babu MD, DM",
  },
  {
    topic:
      "Proton therapy for reducing mucosa] toxicity if head & neck radiotherapy",
    speaker: "Dr Sapna Nangia MD, DMB ",
  },
  {
    topic:
      "Tumor Treating Fields Therapy of glioblastoms - Current advances and future",
    speaker: "Dr. Vimoj Nair MD, FRCP",
  },
  {
    topic:
      "Identifying High risk factors to guide management in HR+ HER2- Early Breast Cancer",
    speaker: "Dr. Yara Abdou MD",
  },
  {
    topic: "Role of comprehensive genomic profiling in breast cancer",
    speaker: "Dr. Krupa Shankar MD, DM",
  },
  {
    topic:
      "EGFR Mutation Positive lung cancer - do we have similar outcome in Indian patients",
    speaker: "Prof. Dr. Kumar Prabhash MD,DM",
  },
  {
    topic:
      "Giving patients the liberty to live comfortably with HER2+ve breast cancer",
    speaker: "Dr.Abdul Shahid MD,DM ",
  },
  {
    topic:
      "Genetic Counseling, testing and risk management for hereditary cancers in India",
    speaker: "Dr. Rajiv Sarin MD,FRCR",
  },
  {
    topic: "Organ Preservation in Ca Penis",
    speaker: "Prof Dr. Vedang Murthy MD",
  },
  {
    topic: "Cancer microbiome - Immune axis",
    speaker: "Dr. Deepthi Madhu MD ",
  },
  {
    topic:
      "Redefining Treatment Outcomes with Adjuvant Immunotherapy in Renal Cell Carcinoma",
    speaker: "Dr. Unni S Pillai MD,DM ",
  },
  {
    topic:
      "Changing Paradigm in the management of Head & Neck and Esophageal Cancer",
    speaker: "Dr. Arun Chandrasekharan DM,MD ",
  },
  {
    topic:
      "Antibiotic Resistance Breakers in Immunocompromised Patients: Evidence & Experience through Real Time Data ",
    speaker: "Dr. Anup R Warrier DNB ",
  },
  {
    topic:
      "Lighting new hope in ES- SCLC with 5 year reported survival outcomes ",
    speaker: "Dr. Narayanankutty Warrier MD, DM",
  },
  {
    topic: "Role of immunotherapy in 1L unresectable HCC ",
    speaker: "Dr. Arun Warner MD, MRCP, DM, FRCP ",
  },
  {
    topic:
      "Changing treatment paradigm: A new dawn in diffuse large B-cell lymphoma treatment",
    speaker: "Dr. Hari Menon MD, DM ",
  },
  {
    topic:
      "Newer combined modality (radio-immuno-chemo) therapy for cervical cancer ",
    speaker: "Dr.Umesh Mahantshetty MD, DNB ",
  },
  //   {
  //     topic: "",
  //     speaker: "",
  //   },
  //   {
  //     topic: "",
  //     speaker: "",
  //   },
  //   {
  //     topic: "",
  //     speaker: "",
  //   },
  //   {
  //     topic: "",
  //     speaker: "",
  //   },
  //   {
  //     topic: "",
  //     speaker: "",
  //   },
];
const precisionOncology8thMarch = [
  {
    topic: "8:00 am - Welcome Address and Context Setting",
    speaker: "",
  },
  {
    topic: "Session 1 - Basics of Genomic Profilin",
    speaker: "",
  },
  {
    topic: "Fundamentals of Sequencing Technologies",
    speaker: "Dr Anurag Mehta",
  },
  {
    topic: 'NGS panels : "Choosing Wisely" Data Analysis and Interpretation',
    speaker: " Dr Durga Prasan",
  },
  {
    topic: "Navigating the components of a Genomic Profiling Report ",
    speaker: "Dr Vamsi Krishna",
  },
  {
    topic: "Interpretation and Implementation of VAF",
    speaker: "Dr Anurag Mehta",
  },
  {
    topic:
      "Role of Bioinformatics in Analysis of Comprehensive Genomic Data - A clinicians perspective ",
    speaker: " Dr Arunkumar",
  },
  {
    topic:
      "Clinical Implications and Decision Making “The Use of Online Knowledge Data Bases",
    speaker: "Dr Prashant Ariyanur",
  },
  {
    topic:
      "Practical challenges and Pitfalls of genomic profiling and interpretation: ",
    speaker: "Dr Senthil Rajappa",
  },
  {
    topic: "",
    speaker: "Panel Discussion & Q & A",
  },
  {
    topic:
      "Session 2 - An overview of Precision Oncology in Various Tumor Types",
    speaker: "",
  },
  {
    topic: "Lung Cancer - The Torch Bearer for Precision Oncology",
    speaker: "Chairperson - Prof. K Pavithran",
  },
  {
    topic: "Making Sense of NGS Report for Practicing Clinicians ",
    speaker: "Dr Sewanti Limaye",
  },
  {
    topic:
      "Matching the right drug for the right patient at the right time - considerations beyond common mutations",
    speaker: " Dr. T M Anoop",
  },
  {
    topic: "Molecular Tumor Board (Case Based)",
    speaker: `
Chairperson - Dr Sewanti Limaye;
Moderator -
Dr Ashok Komaranchath
Panelist - Dr Ajit Nambiar,
Dr Wesley Jose,
Dr Nikhil K Haridas
Dr Sanjoe M Varghese`,
  },
  {
    topic: "LUNCH BREAK",
    speaker: "",
  },
  {
    topic: "Unraveling the Molecular Mysteries of Gastrointestinal Cancers",
    speaker: `Chairperson - Dr. Jayaprakash Madhavan
Dr.T Ajayakumar`,
  },
  {
    topic: "Navigating MSI highway in GI cancers",
    speaker: "Dr Vamsi Krishna",
  },
  {
    topic: "Beyond the Visible - ctDNA in early CRC. Is it primetime worthy?",
    speaker: "Dr Govind Babu",
  },
  {
    topic:
      "GI Cancers on the Move: Actionable Targets in an Evolving Landscape",
    speaker: "Dr Ben George",
  },
  {
    topic: `Molecular Tumor Board (Case Based)
Gangadharan, Dr. Purvish Parikh`,
    speaker: `Chairperson - Dr KV
Moderator -
Dr Rajkumar Rangaswamy
Panelist - Dr Praseeda I,
Dr. Sivanandan, Dr Arun Sankar
Dr. Varun Rajan`,
  },
  {
    topic: "How Do I use Precision Oncology in Gynaecological Malignancies",
    speaker: `Chairperson -
Prof. Francis V James,
Dr. Aswinkumar`,
  },
  {
    topic:
      "Theory to Practice - HRD Testing Methods, Scoring and integration in Practice",
    speaker: "Dr Senthil Rajappa",
  },
  {
    topic:
      "Emerging biomarkers in Ovarian Cancer (all subtypes) and their clinical utility",
    speaker: "Dr Sewanti Limaye",
  },
  {
    topic:
      "Precision Medicine At the Helm - Transforming Treatment Paradigms in Endometrial cancer",
    speaker: "Dr BK Smruthi",
  },
  {
    topic: "Molecular Tumor Board (Case Based)",
    speaker: `Chairperson - Dr Chithrathara,
Dr Jose Tom
Moderator - Dr Krishna Prasad
Panelist - Dr Joy Augustin,
Dr Antony Thottian
Dr. John Joseph,
Dr. Susan Mathews`,
  },
  {
    topic: `Sarcomas - Can Molecular Markers Harness Individualized Therapy for Sarcomas?
Molecular Tumor Board (Case Based)`,
    speaker: `Chairpersons - Dr K Sajeevan,
Dr. Sunu Cyriac
Dr Prashant Parameswaran
Moderator : Dr. Sugeeth M T
Panelist -Dr Ziad Thottathil,
Dr Sreelesh K P
Dr Sanu Dev Sadananthan,
Dr. Sameer Salahudeen
Dr Sujai Srinivas, Dr Rajeev Sarin`,
  },
  {
    topic: `Central Nervous System (CNS) - The barrier tuff to enter
Are we able to break the barrier with personalized cancer treatment in CNS tumors ?
Molecular Tumor Board (Case Based)`,
    speaker: "Dr Sujai Srinivas",
  },
  {
    topic:
      "Session - Liquid biopsy Symposium, The 3 Ps of Liquid Biopsy Power, Promise and Pitfalls",
    speaker: "Dr T Raja",
  },
  {
    topic: "Diving into Liquid Biopsy: Methods, Pros, and Cons Explored",
    speaker: "Dr Anurag Mehta",
  },
  {
    topic: "Shifting paradigm of Liquid Biopsy in GI cancers",
    speaker: "Dr Govind Babu",
  },
  {
    topic: "Molecular Tumor Board (Case Based)",
    speaker: `Chairperson - Dr Sreedharan,
Dr Sajeed, Dr. Hareesh
Moderator - Dr Amit Verma;
Panelist - Dr Sunu Cyriac;
Dr Suresh Kumar;
Dr Varun Rajan,
Dr Binitha Thomas,
Dr Flowerlit Thomas`,
  },
  {
    topic: `Breast Cancer -
Role of CGP in Breast cancer
Molecular Tumor Board (Case Based)`,
    speaker: `Chairperson - Dr D K Vijayakumar
Speaker - Dr Kiruba Shankar S,
Moderator - Dr Rona Joseph
Panelist - Dr Arvind S Anand,
Dr Mural! T V, Dr. Sandeep,
Dr. Arun`,
  },
  {
    topic: "Interesting Cases (CUP/GU/CNS)",
    speaker: "TBD",
  },
  // {
  //   topic: "",
  //   speaker: "",
  // },
  // {
  //   topic: "",
  //   speaker: "",
  // },
  // {
  //   topic: "",
  //   speaker: "",
  // },
  // {
  //   topic: "",
  //   speaker: "",
  // },
  // {
  //   topic: "",
  //   speaker: "",
  // },
];

const LearnFromExperts = [
  {
    time: "09.00 - 09.30",
    topic: " Rectal cancer",
    speaker: " Dr. Najeeb Mohideen",
  },
  {
    time: "09.30 -10.00",
    topic: "Craniospinal radiotherapy",
    speaker: " Dr. T V Ajithkumar",
  },
  {
    time: "10.00-10.30",
    topic: "Prostate Cancer",
    speaker: "Dr. Prantik Das",
  },
  {
    time: "10.30-11.00 ",
    topic: "Paediatric Solid Tumors (Non CNS)",
    speaker: " Dr. TV Ajith Kumar",
  },
  {
    time: "11.00-11.15 Tea Break",
    topic: "",
    speaker: "",
  },
  {
    time: "11.15-11.45 ",
    topic: "Locally Advanced Pancratic cancer and Pancreas SBRT ",
    speaker: "Dr. Vimoj Nair",
  },
  {
    time: "11.45-12.15   ",
    topic: "SBRT of Lung cancer Dr. Ziad Thotathil",
    speaker: "",
  },
  {
    time: "12.15-12.45",
    topic: " Regional Nodal radiation in Breast cancer",
    speaker: "Dr. Kurian Joseph",
  },
  {
    time: "12.45-01.15",
    topic: "Where does MR Linac make a difference",
    speaker: "Dr. Prantik Das",
  },
  {
    time: "01.15-02.00",
    topic: "Lunch Break",
    speaker: "",
  },
  {
    time: "02.00 - 04.00",
    topic: `E contouring cum precision radiation oncology
(Sponsored by Varian)`,
    speaker: `Dr Najeeb Mohideen MD, FRCR, FASTRO, FACR
Dr T V Ajithkumar MD, FRCR
Dr Ziad Thottathil MD, DNB, FRANZCR, FRCR
Dr Vimoj Nair MD, FRCP
Dr. Prantik Das MRCP, FRCR
Dr. Kurian Joseph FRCR, FRCP`,
  },
  // {
  //   time: "",
  //   topic: "",
  //   speaker: "",
  // },
  // {
  //   time: "",
  //   topic: "",
  //   speaker: "",
  // },
];
function getImageList() {
  const imageList = [];
  for (let i = 1; i <= 12; i++) {
    const imageName = `Agenda-2024new_page-${String(i).padStart(4, "0")}.jpg`;
    imageList.push(imageName);
  }
  return imageList;
}
</script>
