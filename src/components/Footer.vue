<template>
    <div class="footer">
        <div class="footer-flex">
            <div class="footer-elements">Prof. Dr. C.S. Madhu MD, DNB<br>
                Organising Chairman<br>
                Mob:- 97 9387703803<br>
                dr.csmadhu@gmail.com</div>
            <div class="footer-elements footer-paymentQR">
                <img src="./../../public/PaymentQR.jpeg" alt="">
                <div class="scanToPay">Scan to Pay</div>
            </div>
            <div class="footer-elements">Dr. Unni S. Pillai MD DM<br>
                Organising Secretary<br>
                Mob:- 97 7598563767<br>
                druspillai@gmail.com</div>
        </div>
        <Banner color="secondary">For accommodation, contact : Mr.Paul Vinu, Mob : <span> <a
                    href="Tel:8086530177">8086530177</a> </span>,
            Email : <span> <a href="mailTo: namaste@moondays.in">namaste@moondays.in</a> </span></Banner>
        <Banner color="primary"></Banner>
    </div>
</template>
<style scoped>
.footer {}

.footer-elements {
    @apply text-black font-bold text-3xl p-10;
}

.footer-flex {
    @apply flex justify-between
}

.scanToPay {
    @apply text-center text-xl p-1;
}

.footer-paymentQR {
    @apply flex-col-reverse flex p-0;
}
</style>
<script lang="ts" setup>
import Banner from './Banner.vue';
</script>
