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
</script>
