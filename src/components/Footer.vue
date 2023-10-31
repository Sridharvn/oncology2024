<template>
    <div class="footer">
        <div class="footer-flex">
            <div class="footer-elements footer-paymentQR">
                <div class="scanToPay QRheading">Payment</div>
                <a href="https://feebook.southindianbank.com/FeeBookUser/org?id=670">
                    <img src="/PaymentQR.jpeg" alt="" class="payment-QR-image"></a>
                <div class="scanToPay">Click the image or Scan to Pay</div>
            </div>
            <div class="footer-elements footer-paymentQR">
                <!-- /../../public/PaymentQR.jpeg -->
                <div class="scanToPay QRheading">Abstract Submission</div>

                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeCdyiq7RSCw1HwwTsYruxsttROOtWGYWhy1UwYVuuoOTlGBg/viewform?usp=sf_link">
                    <img src="/AbstractSubmission.jpeg" alt="" class="payment-QR-image"></a>
                <div class="scanToPay">Click the image or Scan for Abstract Submission</div>
            </div>
            <div class="footer-elements footer-paymentQR">
                <div class="scanToPay QRheading">Registration</div>
                <a href="https://feebook.southindianbank.com/FeeBookUser/org?id=670">
                    <img src="/PaymentQR.jpeg" alt="" class="payment-QR-image"></a>
                <div class="scanToPay">Click the image or Scan for Registration</div>
            </div>
        </div>
        <div class="footer-flex">
            <div class="footer-elements">Prof. Dr. C.S. Madhu MD, DNB<br>
                Organising Chairman<br>
                <a href="Tel:9387103803">Mob:- 91 9387103803</a><br>
                <a href="mailTo:dr.csmadhu@gmail.com">dr.csmadhu@gmail.com</a>
            </div>
            <!-- <div class="footer-elements footer-paymentQR">
                /../../public/PaymentQR.jpeg
                <a href="https://feebook.southindianbank.com/FeeBookUser/org?id=670">
                    <img src="/PaymentQR.jpeg" alt="" class="payment-QR-image"></a>
                <div class="scanToPay">Click the image or Scan to Pay</div>
            </div> -->
            <div class="footer-elements">Dr. Unni S. Pillai MD DM<br>
                Organising Secretary<br>
                <a href="Tel:7598563161">Mob:- 91 7598563161</a><br>
                <a href="mailTo:druspillai@gmail.com">druspillai@gmail.com</a>
            </div>
        </div>
        <Banner color="secondary">For accommodation, contact : Mr.Paul Vinu, Mob : <span> <a
                    href="Tel:8086530177">8086530177</a> </span>,
            <!-- <br> -->
            Email : &nbsp;<span> <a href="mailTo: namaste@moondays.in">namaste@moondays.in</a> </span>
        </Banner>
        <Banner color="primary"></Banner>
    </div>
</template>
<style scoped>
.footer {}

.footer-elements {
    @apply text-black font-bold text-3xl p-10 border border-4 border-text-primary rounded-xl mx-4 my-6;
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
    @apply flex-col flex p-0 mb-5 border-0 items-center;
    @apply max-lg:mb-0;
}

.payment-QR-image {
    @apply w-[400px];
    @apply max-lg:w-[300px];
}

.QRheading {
    @apply font-bold text-2xl text-red mb-2 underline;
}
</style>
<script lang="ts" setup>
import Banner from './Banner.vue';
</script>
