<template>
    <div class="footer">
        <div class="footer-flex">
            <div class="footer-elements">Prof. Dr. C.S. Madhu MD, DNB<br>
                Organising Chairman<br>
                Mob:- 91 9387103803<br>
                dr.csmadhu@gmail.com</div>
            <div class="footer-elements footer-paymentQR">
                <!-- /../../public/PaymentQR.jpeg -->
                <img src="/PaymentQR.jpeg" alt="" class="payment-QR-image">
                <div class="scanToPay">Scan to Pay</div>
            </div>
            <div class="footer-elements">Dr. Unni S. Pillai MD DM<br>
                Organising Secretary<br>
                Mob:- 91 7598563161<br>
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
    @apply max-lg:text-2xl max-md:text-sm max-sm:text-sm;
}

.footer-flex {
    @apply flex justify-between items-center;
    @apply max-lg:flex-col max-lg:justify-center max-lg:items-center;
}

.scanToPay {
    @apply text-center text-xl p-1;
}

.footer-paymentQR {
    @apply flex-col-reverse flex p-0;
}

.payment-QR-image {
    @apply w-[w5px]
}
</style>
<script lang="ts" setup>
import Banner from './Banner.vue';
</script>
