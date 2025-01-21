<template>
  <footer class=" from-[#028391] to-[#02A4A1] text-white bg-gradient-to-br relative overflow-hidden">
    <img
      src="/footer/footer-bg.png"
      alt="author"
      class="absolute object-contain rounded-lg right-0 bottom-0 opacity-50 translate-x-[80px] translate-y-[80px]"
    />
    <div class="container mx-auto p-16 flex justify-between items-start">
      <!-- Left section -->
      <div class="flex flex-col gap-12 w-full">
        <div class="flex flex-row gap-12 items-start">
          <!-- Column 1: Logo with text beside it -->
          <div class="flex-1 flex items-center">
            <img src="/footer/logo.png" alt="Company Logo" class="h-16 w-auto mr-4" />
            <span class="text-lg font-semibold">Deconverse</span>
          </div>

          <!-- Column 2: Image -->
          <div class="flex-1 flex items-center">
            <img src="/footer/logo-2.png" alt="logo" class="h-16 w-auto"></img>
          </div>

          <!-- Column 3: Company information -->
          <div class="flex-1 flex flex-col gap-6">
            <h3 class="font-semibold text-lg">Company</h3>
            <ul class="text-white flex flex-col gap-6">
              <li>About Us</li>
              <li>1 on 1 Session</li>
              <li>Webinar</li>
            </ul>
          </div>

          <!-- Column 4: Learn & Community -->
          <div class="flex-1 flex flex-col gap-6">
            <h3 class="font-semibold text-lg">Learn & Community</h3>
            <ul class="text-white flex flex-col gap-6">
              <li>FAQ</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <!-- Address and Contact Box below Column 1 and Column 2 -->
        <div class="flex flex-row gap-12 mt-8">
          <div class="flex flex-col items-start w-1/2">
            <!-- Address Section -->
            <div class="flex items-center mb-2">
              <i class="fas fa-building text-white mr-2"></i>
              <p class="font-semibold text-white">Head Office</p>
            </div>
            <p class="text-white">
              Jl. Jati Murni No.30, RT.8/RW.7, Jati Padang, Ps. Minggu, Kota Jakarta Selatan, Daerah
              Khusus Ibukota Jakarta 12540
            </p>

            <div class="flex items-center mb-2 mt-4">
              <i class="fas fa-building text-white mr-2"></i>
              <p class="font-semibold text-white">Research & Development Office</p>
            </div>
            <p class="text-white">
              Jl. Siliwangi No.32G, Nogotirto, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa
              Yogyakarta 55592
            </p>
          </div>

          <!-- Box Contact beside the Address -->
          <div class="flex flex-col items-start w-1/2">
            <div class="bg-[#02666e] p-6 rounded-md">
              <div class="flex gap-6">
                <!-- Flex untuk menata elemen secara horizontal -->
                <!-- Email Contact -->
                <div class="flex items-center">
                  <i class="fas fa-envelope text-white mr-4 text-xl"></i>
                  <div>
                    <p class="font-semibold text-white">Email</p>
                    <p class="text-white">info@Deconverse</p>
                  </div>
                </div>

                <!-- Phone Contact -->
                <div class="flex items-center">
                  <i class="fas fa-phone-alt text-white mr-4 text-xl"></i>
                  <div>
                    <p class="font-semibold text-white">Phone</p>
                    <p class="text-white">(0274) 342131</p>
                  </div>
                </div>

                <!-- WhatsApp Contact -->
                <div class="flex items-center">
                  <i class="fab fa-whatsapp text-white mr-4 text-xl"></i>
                  <div>
                    <p class="font-semibold text-white">WhatsApp</p>
                    <p class="text-white">+62 811-274-345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-[1280] border-[1.5px] border-white mx-16 mb-4">

    </div>

    <div class="relative container mx-auto py-6 flex justify-between items-center px-16">
      <!-- Bottom section -->
      <p class="text-sm">© 2024 Deconvers. Member of GMEDIA - PT Media Sarana Data.</p>
      <div class="flex space-x-6">
        <a href="https://www.youtube.com" target="_blank" class="text-white hover:text-red-500">
          <i class="fab fa-youtube text-xl"></i>
        </a>
        <a href="https://twitter.com" target="_blank" class="text-white hover:text-blue-400">
          <i class="fab fa-twitter text-xl"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" class="text-white hover:text-pink-500">
          <i class="fab fa-instagram text-xl"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" class="text-white hover:text-blue-600">
          <i class="fab fa-linkedin text-xl"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
}
</script>
