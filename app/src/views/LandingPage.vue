<template>
  <!-- <div class="d-flex align-items-center flex-column"> -->
  <!-- <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
          <Column
            v-for="col of columns"
            :key="col.field"
            :field="col.field"
            :header="col.header"
          ></Column>
        </DataTable>
      </div> -->
  <div class="surface-0 flex justify-content-center">
    <div id="home" class="landing-wrapper">
      <div
        class="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static mb-3"
      >
        <a
          class="flex align-items-center no-underline"
          style="width: 130px"
          href="#"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="40"
            viewBox="0 0 35 40"
            fill="none"
          >
            <g id="surface1">
              <path
                style="
                  stroke: none;
                  fill-rule: nonzero;
                  fill: var(--primary-color);
                  fill-opacity: 1;
                "
                d="M 7.335938 4.136719 C 6.390625 4.730469 4.773438 6.503906 4.476562 7.289062 C 4.328125 7.636719 4.226562 8.25 4.226562 8.644531 L 4.226562 9.359375 L 28.597656 9.359375 L 28.597656 18.351562 C 28.597656 23.300781 28.523438 27.339844 28.425781 27.339844 C 28.300781 27.316406 27.804688 26.722656 27.28125 25.984375 L 26.335938 24.628906 L 19.347656 24.628906 L 19.769531 25.296875 C 20.019531 25.691406 20.492188 26.355469 20.816406 26.773438 L 21.414062 27.585938 L 11.441406 27.585938 L 11.441406 33.496094 L 25.265625 33.496094 L 26.136719 34.410156 C 26.636719 34.925781 27.28125 35.714844 27.578125 36.132812 L 28.128906 36.945312 L 35.339844 36.945312 L 33.746094 34.902344 C 31.660156 32.191406 31.707031 32.339844 32.429688 31.722656 C 32.777344 31.402344 33.300781 30.714844 33.621094 30.171875 C 34.195312 29.1875 34.195312 29.113281 34.269531 18.964844 C 34.320312 11.796875 34.269531 8.449219 34.070312 7.785156 C 33.621094 6.257812 32.652344 5.050781 31.359375 4.335938 L 30.140625 3.695312 L 19.125 3.695312 C 8.851562 3.695312 8.03125 3.71875 7.335938 4.136719 Z M 7.335938 4.136719 "
              />
              <path
                style="
                  stroke: none;
                  fill-rule: nonzero;
                  fill: var(--text-color);
                  fill-opacity: 1;
                "
                d="M 4.226562 19.976562 C 4.226562 30 4.203125 29.777344 5.820312 31.476562 C 6.738281 32.464844 7.535156 32.90625 8.929688 33.226562 L 9.949219 33.449219 L 9.949219 24.136719 L 20.890625 24.136719 L 20.890625 18.226562 L 9.949219 18.226562 L 9.949219 16.75 L 25.144531 16.75 L 25.066406 13.84375 L 24.992188 10.960938 L 14.621094 10.910156 L 4.226562 10.835938 Z M 4.226562 19.976562 "
              />
            </g></svg
          ><span class="text-700 font-medium text-l ml-2 mr-10">FASTQ</span>
        </a>
        <a
          class="cursor-pointer block lg:hidden text-700 p-ripple"
          v-ripple
          v-styleclass="{
            selector: '@next',
            enterClass: 'hidden',
            leaveToClass: 'hidden',
            hideOnOutsideClick: true,
          }"
        >
          <i class="pi pi-bars text-4xl"></i>
        </a>
        <div
          class="align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2"
          style="top: 120px"
        >
          <ul
            class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer"
          >
            <li>
              <a
                @click="smoothScroll('#hero')"
                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple"
                v-ripple
              >
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                @click="smoothScroll('#features')"
                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple"
                v-ripple
              >
                <span>Features</span>
              </a>
            </li>
            <li>
              <a
                @click="smoothScroll('#highlights')"
                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple"
                v-ripple
              >
                <span>Highlights</span>
              </a>
            </li>
            <li>
              <a
                @click="smoothScroll('#pricing')"
                class="flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3 p-ripple"
                v-ripple
              >
                <span>Pricing</span>
              </a>
            </li>
          </ul>
          <div
            class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0"
          >
            <Button
              label="Login"
              class="p-button-text p-button-rounded ml-2 border-none font-light line-height-2 text-primary-500"
            ></Button>
            <Button
              label="Register"
              class="p-button-rounded border-none ml-5 font-light text-white line-height-2 bg-primary-500"
            ></Button>
          </div>
        </div>
      </div>

      <div
        id="hero"
        class="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
        style="
          background: linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.2),
              rgba(255, 255, 255, 0.2)
            ),
            radial-gradient(
              77.36% 256.97% at 77.36% 57.52%,
              rgb(238, 239, 175) 0%,
              rgb(195, 227, 250) 100%
            );
          clip-path: ellipse(150% 87% at 93% 13%);
        "
      >
        <div class="mx-4 md:mx-8 mt-0 md:mt-4">
          <h1
            class="text-6xl font-bold text-gray-900 line-height-2 overflow-hidden"
          >
            <span class="font-light block overflow-hidden">FastQ Solutions</span
            >Queue Management, Simplified and Streamlined!
          </h1>
          <p class="font-normal text-2xl md:mt-3 text-gray-700">
            Join the Queue Anytime, Anywhere - Your Convenience, Our Priority!
          </p>
          <Button
            label="Get Started"
            class="p-button-rounded text-xl border-none mt-5 font-normal text-white bg-primary-500 line-height-2 px-3 mb-2"
          ></Button>
        </div>
        <div class="flex justify-content-center md:justify-content-end">
          <img
            src="../../img/teller-4.png"
            alt="Hero Image"
            class="w-9 md:w-5"
          />
        </div>
      </div>

      <div id="features" class="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
        <div class="grid justify-content-center">
          <div class="col-12 text-center mt-8 mb-4">
            <h2 class="text-900 font-normal mb-2">Marvelous Features</h2>
            <span class="text-600 text-xl"
              >Experience the Future of Queuing with FastQ Solutions! Enjoy a
              modern and intuitive user interface, generate tickets effortlessly
              on your mobile device, and embrace the convenience of our
              cutting-edge technology. Join the queue anytime, anywhere, and
              elevate your customer service experience with FastQ – where
              innovation meets efficiency!</span
            >
          </div>

          <div
            class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0"
          >
            <div
              style="
                height: 280px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(253, 228, 165, 0.2),
                    rgba(187, 199, 205, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(253, 228, 165, 0.2),
                    rgba(187, 199, 205, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-yellow-200 mb-3"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-users text-2xl text-yellow-700"></i>
                </div>
                <h5 class="mb-2 text-900">Effortless Queue Management</h5>
                <span class="text-600"
                  >FastQ Solutions simplifies the entire queue management
                  process, making it smooth and hassle-free.</span
                >
              </div>
            </div>
          </div>

          <div
            class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0"
          >
            <div
              style="
                height: 280px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(145, 226, 237, 0.2),
                    rgba(251, 199, 145, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(253, 228, 165, 0.2),
                    rgba(172, 180, 223, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-cyan-200 mb-3"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-palette text-2xl text-cyan-700"></i>
                </div>
                <h5 class="mb-2 text-900">Fresh Design</h5>
                <span class="text-600"
                  >Immerse your customer experience in a visually appealing and
                  contemporary design that sets you apart from the
                  competition.</span
                >
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
            <div
              style="
                height: 280px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(145, 226, 237, 0.2),
                    rgba(172, 180, 223, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(172, 180, 223, 0.2),
                    rgba(246, 158, 188, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-indigo-200"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-map text-2xl text-indigo-700"></i>
                </div>
                <h5 class="mb-2 text-900">Well Documented</h5>
                <span class="text-600"
                  >Enjoy the peace of mind that comes with comprehensive
                  documentation, ensuring a smooth and hassle-free
                  implementation process.</span
                >
              </div>
            </div>
          </div>

          <div
            class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0"
          >
            <div
              style="
                height: 280px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(187, 199, 205, 0.2),
                    rgba(251, 199, 145, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(253, 228, 165, 0.2),
                    rgba(145, 210, 204, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-bluegray-200 mb-3"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-id-card text-2xl text-bluegray-700"></i>
                </div>
                <h5 class="mb-2 text-900">Responsive Layout</h5>
                <span class="text-600"
                  >Your queuing solution adapts seamlessly to various devices,
                  providing a consistent and user-friendly experience whether on
                  desktop, tablet, or mobile.</span
                >
              </div>
            </div>
          </div>

          <div
            class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0"
          >
            <div
              style="
                height: 280px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(187, 199, 205, 0.2),
                    rgba(246, 158, 188, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(145, 226, 237, 0.2),
                    rgba(160, 210, 250, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-orange-200 mb-3"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-globe text-2xl text-orange-700"></i>
                </div>
                <h5 class="mb-2 text-900">Local and Cloud Integration</h5>
                <span class="text-600"
                  >Whether you prefer a local solution or the flexibility of the
                  cloud, FastQ has you covered. Choose the setup that suits your
                  business needs and watch as our system effortlessly integrates
                  into your operations.</span
                >
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
            <div
              style="
                height: 280px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(251, 199, 145, 0.2),
                    rgba(246, 158, 188, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(172, 180, 223, 0.2),
                    rgba(212, 162, 221, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-pink-200 mb-3"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-mobile text-2xl text-pink-700"></i>
                </div>
                <h5 class="mb-2 text-900">Mobile Ticketing</h5>
                <span class="text-600"
                  >Embrace the future of queuing with our Mobile Application.
                  Allow your customers to generate tickets online, reducing wait
                  times and enhancing their overall experience. Convenience at
                  their fingertips!</span
                >
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
            <div
              style="
                height: 280px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(145, 210, 204, 0.2),
                    rgba(160, 210, 250, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(187, 199, 205, 0.2),
                    rgba(145, 210, 204, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-teal-200 mb-3"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-security text-2xl text-teal-700"></i>
                </div>
                <h5 class="mb-2 text-900">Security and Reliability</h5>
                <span class="text-600"
                  >Your business's success is our priority. FastQ Solutions
                  guarantees the utmost security and reliability, providing a
                  robust system that you can depend on.</span
                >
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
            <div
              style="
                height: 280px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(145, 210, 204, 0.2),
                    rgba(212, 162, 221, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(251, 199, 145, 0.2),
                    rgba(160, 210, 250, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-blue-200 mb-3"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-globe text-2xl text-blue-700"></i>
                </div>
                <h5 class="mb-2 text-900">Tailored for Your Business</h5>
                <span class="text-600"
                  >Whether you run a bustling retail store, a healthcare
                  facility, or any customer-centric business, FastQ Solutions
                  can be tailored to meet your specific needs. Our system adapts
                  to you.</span
                >
              </div>
            </div>
          </div>

          <div class="col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0">
            <div
              style="
                height: 280px;
                padding: 2px;
                border-radius: 10px;
                background: linear-gradient(
                    90deg,
                    rgba(160, 210, 250, 0.2),
                    rgba(212, 162, 221, 0.2)
                  ),
                  linear-gradient(
                    180deg,
                    rgba(246, 158, 188, 0.2),
                    rgba(212, 162, 221, 0.2)
                  );
              "
            >
              <div class="p-3 surface-card h-full" style="border-radius: 8px">
                <div
                  class="flex align-items-center justify-content-center bg-purple-200 mb-3"
                  style="width: 3.5rem; height: 3.5rem; border-radius: 10px"
                >
                  <i class="pi pi-fw pi-eye text-2xl text-purple-700"></i>
                </div>
                <h5 class="mb-2 text-900">Privacy</h5>
                <span class="text-600">Neque egestas congue.</span>
              </div>
            </div>
          </div>

          <div
            class="col-12 mt-8 mb-8 p-2 md:p-8"
            style="
              border-radius: 20px;
              background: linear-gradient(
                  0deg,
                  rgba(255, 255, 255, 0.6),
                  rgba(255, 255, 255, 0.6)
                ),
                radial-gradient(
                  77.36% 256.97% at 77.36% 57.52%,
                  #efe1af 0%,
                  #c3dcfa 100%
                );
            "
          >
            <div
              class="flex flex-column justify-content-center align-items-center text-center px-3 py-3 md:py-0"
            >
              <h3 class="text-gray-900 mb-2">Joséphine Miller</h3>
              <span class="text-gray-600 text-2xl">Peak Interactive</span>
              <p
                class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-4"
                style="max-width: 800px"
              >
                “Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.”
              </p>
              <img
                src="../../assets/demo/images/landing/peak-logo.svg"
                class="mt-4"
                alt="Company logo"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="highlights" class="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">
        <div class="text-center">
          <h2 class="text-900 font-normal mb-2">Powerful Everywhere</h2>
          <span class="text-600 text-xl"
            >Immerse yourself in a world of innovation and efficiency with Fresh
            Design, Well Documented processes, and a Responsive Layout that
            adapts seamlessly to your needs. Embrace Modern Practices and
            elevate your queuing experience to new heights. FastQ is not just a
            solution; it's a commitment to excellence in customer service.
            Discover the future of queuing with us!</span
          >
        </div>

        <div class="grid mt-8 pb-2 md:pb-8">
          <div
            class="flex justify-content-center col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0"
            style="border-radius: 8px"
          >
            <img
              src="../../assets/demo/images/landing/mockup.svg"
              class="w-11"
              alt="mockup mobile"
            />
          </div>

          <div
            class="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right"
          >
            <div
              class="flex align-items-center justify-content-center bg-purple-200 align-self-center lg:align-self-end"
              style="width: 4.2rem; height: 4.2rem; border-radius: 10px"
            >
              <i class="pi pi-fw pi-mobile text-5xl text-purple-700"></i>
            </div>
            <h2
              class="line-height-1 text-900 text-4xl font-normal overflow-hidden"
            >
              Mobile Ticketing
            </h2>
            <span
              class="text-700 text-xl line-height-3 ml-0 md:ml-2"
              style="max-width: 650px"
              >Embrace the future of queuing with our Mobile Application. Allow
              your customers to generate tickets online, reducing wait times and
              enhancing their overall experience. Convenience at their
              fingertips!</span
            >
          </div>
        </div>

        <div class="grid my-8 pt-2 md:pt-8">
          <div
            class="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start"
          >
            <div
              class="flex align-items-center justify-content-center bg-yellow-200 align-self-center lg:align-self-start"
              style="width: 4.2rem; height: 4.2rem; border-radius: 10px"
            >
              <i class="pi pi-fw pi-desktop text-5xl text-yellow-700"></i>
            </div>
            <h2
              class="line-height-1 text-900 text-4xl font-normal overflow-hidden"
            >
              Dedicated Desktop Apps
            </h2>
            <span
              class="text-700 text-xl line-height-3 mr-0 md:mr-2"
              style="max-width: 650px"
            >
              <strong>Teller App:</strong> Streamline and enhance banking
              transactions for tellers. Key Features: Account management,
              transaction processing, customer interaction tracking.
              <br />
              <strong>Kiosk App:</strong> Provide a user-friendly self-service
              kiosk experience. Key Features: Touchscreen interface, information
              display, service selection, payment processing.
              <br />
              <strong>Admin App:</strong> Centralized control and monitoring for
              administrators. Key Features: User management, system
              configuration, analytics, reporting.
              <br />
              <strong>DS Player App (Digital Signage):</strong> Manage and
              display dynamic content on digital signage. Key Features: Content
              scheduling, media management, remote updates.</span
            >
          </div>

          <div
            class="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-yellow-100 p-0"
            style="border-radius: 8px"
          >
            <img
              src="../../assets/demo/images/landing/mockup-desktop.svg"
              class="w-11"
              alt="mockup"
            />
          </div>
        </div>
      </div>

      <div id="pricing" class="py-4 px-4 lg:px-8 my-2 md:my-4">
        <div class="text-center">
          <h2 class="text-900 font-normal mb-2">Matchless Pricing</h2>
          <span class="text-600 text-2xl"
            >At FastQ Solutions, we believe in offering flexible and transparent
            pricing to cater to the diverse needs of our clients. Choose a plan
            that aligns perfectly with your requirements and budget.
          </span>
        </div>

        <div class="grid justify-content-between mt-8 md:mt-0">
          <div class="col-12 lg:col-4 p-0 md:p-3">
            <div
              class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all"
              style="border-radius: 10px"
            >
              <h3 class="text-900 text-center my-5">Free</h3>
              <img
                src="../../assets/demo/images/landing/free.svg"
                class="w-10 h-10 mx-auto"
                alt="free"
              />
              <div class="my-5 text-center">
                <span class="text-5xl font-bold mr-2 text-900">$0</span>
                <span class="text-600">per month</span>
                <Button
                  label="Get Started"
                  class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-primary-500 text-white"
                ></Button>
              </div>
              <Divider class="w-full bg-surface-200"></Divider>
              <ul class="my-5 list-none p-0 flex text-900 flex-column">
                <li class="py-2">
                  <i
                    class="pi pi-fw pi-check text-xl text-primary-500 mr-2"
                  ></i>
                  <span class="text-xl line-height-3">Responsive Layout</span>
                </li>
                <li class="py-2">
                  <i
                    class="pi pi-fw pi-check text-xl text-primary-500 mr-2"
                  ></i>
                  <span class="text-xl line-height-3"
                    >Unlimited Push Messages</span
                  >
                </li>
                <li class="py-2">
                  <i
                    class="pi pi-fw pi-check text-xl text-primary-500 mr-2"
                  ></i>
                  <span class="text-xl line-height-3">50 Support Ticket</span>
                </li>
                <li class="py-2">
                  <i
                    class="pi pi-fw pi-check text-xl text-primary-500 mr-2"
                  ></i>
                  <span class="text-xl line-height-3">Free Shipping</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
            <div
              class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all"
              style="border-radius: 10px"
            >
              <h3 class="text-900 text-center my-5">Startup</h3>
              <img
                src="../../assets/demo/images/landing/startup.svg"
                class="w-10 h-10 mx-auto"
                alt="startup"
              />
              <div class="my-5 text-center">
                <span class="text-5xl font-bold mr-2 text-900">$1</span>
                <span class="text-600">per month</span>
                <Button
                  label="Try Free"
                  class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-primary-500 text-white"
                ></Button>
              </div>
              <Divider class="w-full bg-surface-200"></Divider>
              <ul class="my-5 list-none p-0 flex text-900 flex-column">
                <li class="py-2">
                  <i
                    class="pi pi-fw pi-check text-xl text-primary-500 mr-2"
                  ></i>
                  <span class="text-xl line-height-3">Responsive Layout</span>
                </li>
                <li class="py-2">
                  <i
                    class="pi pi-fw pi-check text-xl text-primary-500 mr-2"
                  ></i>
                  <span class="text-xl line-height-3"
                    >Unlimited Push Messages</span
                  >
                </li>
                <li class="py-2">
                  <i
                    class="pi pi-fw pi-check text-xl text-primary-500 mr-2"
                  ></i>
                  <span class="text-xl line-height-3">50 Support Ticket</span>
                </li>
                <li class="py-2">
                  <i
                    class="pi pi-fw pi-check text-xl text-primary-500 mr-2"
                  ></i>
                  <span class="text-xl line-height-3">Free Shipping</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
            <div
              class="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all"
              style="border-radius: 10px"
            >
              <h3 class="text-900 text-center my-5">Enterprise</h3>
              <img
                src="../../assets/demo/images/landing/enterprise.svg"
                class="w-10 h-10 mx-auto"
                alt="enterprise"
              />
              <div class="my-5 text-center">
                <span class="text-5xl font-bold mr-2 text-900">$999</span>
                <span class="text-600">per month</span>
                <Button
                  label="Get a Quote"
                  class="block mx-auto mt-4 p-button-rounded border-none ml-3 font-light line-height-2 bg-primary-500 text-white"
                ></Button>
              </div>
              <Divider class="w-full bg-surface-200"></Divider>
              <ul class="my-5 list-none p-0 flex text-900 flex-column">
                <li class="py-2">
                  <i
                    class="pi pi-fw pi-check text-xl text-primary-500 mr-2"
                  ></i>
                  <span class="text-xl line-height-3">Responsive Layout</span>
                </li>
                <li class="py-2">
                  <i
                    class="pi pi-fw pi-check text-xl text-primary-500 mr-2"
                  ></i>
                  <span class="text-xl line-height-3"
                    >Unlimited Push Messages</span
                  >
                </li>
                <li class="py-2">
                  <i
                    class="pi pi-fw pi-check text-xl text-primary-500 mr-2"
                  ></i>
                  <span class="text-xl line-height-3">50 Support Ticket</span>
                </li>
                <li class="py-2">
                  <i
                    class="pi pi-fw pi-check text-xl text-primary-500 mr-2"
                  ></i>
                  <span class="text-xl line-height-3">Free Shipping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="py-4 px-4 mx-0 mt-8 lg:mx-8">
        <div class="grid justify-content-between">
          <div class="col-12 md:col-3" style="margin-top: -1.5rem">
            <a
              @click="smoothScroll('#home')"
              class="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer"
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="40"
                viewBox="0 0 35 40"
                fill="none"
              >
                <g id="surface1">
                  <path
                    style="
                      stroke: none;
                      fill-rule: nonzero;
                      fill: var(--primary-color);
                      fill-opacity: 1;
                    "
                    d="M 7.335938 4.136719 C 6.390625 4.730469 4.773438 6.503906 4.476562 7.289062 C 4.328125 7.636719 4.226562 8.25 4.226562 8.644531 L 4.226562 9.359375 L 28.597656 9.359375 L 28.597656 18.351562 C 28.597656 23.300781 28.523438 27.339844 28.425781 27.339844 C 28.300781 27.316406 27.804688 26.722656 27.28125 25.984375 L 26.335938 24.628906 L 19.347656 24.628906 L 19.769531 25.296875 C 20.019531 25.691406 20.492188 26.355469 20.816406 26.773438 L 21.414062 27.585938 L 11.441406 27.585938 L 11.441406 33.496094 L 25.265625 33.496094 L 26.136719 34.410156 C 26.636719 34.925781 27.28125 35.714844 27.578125 36.132812 L 28.128906 36.945312 L 35.339844 36.945312 L 33.746094 34.902344 C 31.660156 32.191406 31.707031 32.339844 32.429688 31.722656 C 32.777344 31.402344 33.300781 30.714844 33.621094 30.171875 C 34.195312 29.1875 34.195312 29.113281 34.269531 18.964844 C 34.320312 11.796875 34.269531 8.449219 34.070312 7.785156 C 33.621094 6.257812 32.652344 5.050781 31.359375 4.335938 L 30.140625 3.695312 L 19.125 3.695312 C 8.851562 3.695312 8.03125 3.71875 7.335938 4.136719 Z M 7.335938 4.136719 "
                  />
                  <path
                    style="
                      stroke: none;
                      fill-rule: nonzero;
                      fill: var(--text-color);
                      fill-opacity: 1;
                    "
                    d="M 4.226562 19.976562 C 4.226562 30 4.203125 29.777344 5.820312 31.476562 C 6.738281 32.464844 7.535156 32.90625 8.929688 33.226562 L 9.949219 33.449219 L 9.949219 24.136719 L 20.890625 24.136719 L 20.890625 18.226562 L 9.949219 18.226562 L 9.949219 16.75 L 25.144531 16.75 L 25.066406 13.84375 L 24.992188 10.960938 L 14.621094 10.910156 L 4.226562 10.835938 Z M 4.226562 19.976562 "
                  />
                </g>
              </svg>
              <h4 class="font-medium text-3xl ml-2 text-900">FASTQ</h4>
            </a>
          </div>

          <div class="col-12 md:col-12 lg:col-8">
            <div
              class="grid text-center md:text-left md:justify-content-between"
            >
              <div class="col-12 md:col-3">
                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">
                  Company
                </h4>
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  >About Us</a
                >
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  >News</a
                >
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  >Investor Relations</a
                >
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  >Careers</a
                >
                <a class="line-height-3 text-xl block cursor-pointer text-700"
                  >Media Kit</a
                >
              </div>

              <div class="col-12 md:col-3 mt-4 md:mt-0">
                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">
                  Resources
                </h4>
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  >Get Started</a
                >
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  >Learn</a
                >
                <a class="line-height-3 text-xl block cursor-pointer text-700"
                  >Case Studies</a
                >
              </div>

              <div class="col-12 md:col-3 mt-4 md:mt-0">
                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">
                  Community
                </h4>
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  >Discord</a
                >
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  >Events</a
                >
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  >FAQ</a
                >
                <a class="line-height-3 text-xl block cursor-pointer text-700"
                  >Blog</a
                >
              </div>

              <div class="col-12 md:col-3 mt-4 md:mt-0">
                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">
                  Legal
                </h4>
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  >Brand Policy</a
                >
                <a
                  class="line-height-3 text-xl block cursor-pointer mb-2 text-700"
                  >Privacy Policy</a
                >
                <a class="line-height-3 text-xl block cursor-pointer text-700"
                  >Terms of Service</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <AppConfig simple /> -->
  <!-- </div> -->
</template>
  
  <script>
export default {
  data() {
    return {};
  },
  methods: {
    smoothScroll(id) {
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>
  
  <style scoped>
</style>