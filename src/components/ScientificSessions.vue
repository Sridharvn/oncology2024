<template>
    <div class="scientificSection-wrapper">
        <div class="scientificSection" v-for="session in sessions" :key="session.heading">
            <div class="scientificSection-heading">{{ session.heading }}</div>
            <div class="sessions">
                <div class="sessionItem" v-for="item in session.items" :key="item">{{ item }}</div>
            </div>
        </div>
        <div class="announcements" v-for="(announcement, index) in announcements" :key="announcement.heading">
            <div class="announcement-heading">{{ announcement.heading }}</div>
            <div class="announcement-items" :class="index == 0 ? 'announcement-items-flex' : ''">
                <div class="announcement-item" v-for="item in announcement.items" :key="item">{{ item }}</div>
            </div>
            <div class="announcement-item ">Awards will be given to best
                paper / poster in all specialities and also for
                interesting case reports</div>
        </div>
        <div class="careerGuidance">
            CAREER GUIDANCE SESSIONS FOR PG STUDENTS
            <div class="guidanceList" v-for="item in careerGuidance" :key="item">{{ item }}</div>
        </div>
    </div>
</template>
<style scoped>
.announcement-heading {
    @apply font-extrabold text-2xl;
}

.announcement-items-flex .announcement-item:not(:first-child) {
    @apply px-1 before:content-['/'];
}

.announcement-items-flex {
    @apply flex flex-wrap;
}

.announcement-item {
    @apply font-bold text-black text-xl before:content-['\2689'];
}

.announcements {}

.careerGuidance {
    @apply font-extrabold text-black text-4xl;
}

.guidanceList {
    @apply text-xl before:content-['\2689'];
}

.scientificSection-heading {
    @apply font-extrabold text-red text-3xl;
}

.scientificSection {}

.scientificSection-wrapper {
    @apply p-10;
}

.sessionItem {
    @apply font-bold text-black text-xl before:content-['\2689'];

}

.sessions {}
</style>
<script setup>

const sessions = [{
    heading: "Pre conference scientific sessions on 7th March :",
    items: ["Symposium on understanding basics of Genomics & clinical applications in oncology.", "Dr. K C Pathrols Scientific Sessions on Target volume dileniation for treatment planning."]
}, {
    heading: "March 8th, 9th, 10th",
    items: ["Scientific sessions & panel discussions at Oman Hall.",
        "Molecular Oncology clinical case discussions(Sini 1 Hall)",
        "Precision Radiation Oncology(treatment planning techniques in SRS, SBRT Brachy",
        "Therapy by highly distinguished International & national faculty) (Sini 2 Hall).",
    ]
}]
const announcements = [
    {
        heading: "YOU ARE INVITED TO SUBMIT THE ABSTRACTS FOR FREE PAPER SESSIONS-SEPARATE FOR RESIDENTS AND ALL OTHER PARTICIPANTS IN",
        items: ["Medical Oncology ", " Radiation Oncology ", " Gynaec Oncology ", " Surgical Oncology ", " Cancer Research ", " Epidomiology ", " Interesting case reports ", "Molecular Oncology case reports"]
    },
    {
        heading: "QUIZ PROGRAM FOR PG RESIDENTS IN MEDICAL ONCOLOGY, RADIATION ONCOLOGY & SURGICAL SPECIALITIES",
        items: ["Dedicated One hour meet the expert sessions and discussions on Medical Oncology with Dr.M.V.Pillai, Dr.Sabi George, Dr.Yara Abdou.", "On Hemato Oncology with Dr.Hari Parameswaran, Dr.Sabareesh Radhakrishnan, Dr.T.Aiithkumar and Dr.Hari Menon.", "One hour meet the expert sessions on Radiation Oncology with Dr.Najeeb Mohideen, Dr.Kurian Joseph, Dr.Prantik Das and Dr.T Aiithkumar."]
    },
]
const careerGuidance = ["Tips for FRCR- Clinical Oncology examination and jobs abroad", "Fellowship selection on 1 0th March 2024 (based on CV's paper / poster presented / Quiz)", "You are requested to share this information to all your colleagues, residents and students"]
</script>