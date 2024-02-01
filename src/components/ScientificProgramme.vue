<template>Hello</template>
<script lang="ts" setup>
const dailyEventsTable = [
  {
    date: "07 March ",
    title: "PRE CONFERENCE SCIENTIFIC SESSION 8.00 am to 6.00 pm",
    hall: "Nayanar Hall, LeMeridian, Kochi",
    topic:
      "COURSE ON CROSS SECTIONAL ANATOMY FOR TARGET VOLUME DELINEATION AND TREATMENT PLANNING, BRACHYTHERAPY OF kOebi COMMON CANCERS by Dr. K. C. PATRO MD, DNB, MBA ",
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
      "LEARN FROM THE EXPERTS MEDICAL ONCOLOGY ON CART CELL THERAPY, IMMUNOTHERAPY & TARGETTED THERAPY (Breakfast Session) FREE PAPER SESSION ",
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
    topic: "",
    speaker: "",
  },
  {
    topic: "",
    speaker: "",
  },
];
const sessionsDay3 = [
  {
    topic: "",
    speaker: "",
  },
  {
    topic: "",
    speaker: "",
  },
  {
    topic: "",
    speaker: "",
  },
];
</script>
