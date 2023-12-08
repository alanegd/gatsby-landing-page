import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function PricingSection() {
  return (
    <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl">
            <div class="mx-auto max-w-screen-md text-center mb-10">
                <h2 class="mb-4 text-3xl font-semibold text-gray-900">Flexible plans</h2>
                <p class="mb-5 md:text-xl font-light">Choose the plan that best accommodates to your business needs.</p>
            </div>
            <div class="lg:grid lg:grid-cols-3 gap-4 space-y-8 lg:space-y-0">

                <div class="flex flex-col mx-auto max-w-lg text-center rounded-3xl border p-10 bg-gray-800 text-white">
                    <h3 class="font-semibold uppercase">Startup</h3>
                    <div class="flex justify-center items-baseline mt-8 mb-4">
                        <span class="mr-2 text-5xl font-bold">$29</span>
                        <span class="text-gray-400">/month</span>
                    </div>

                    <hr class="mb-8"></hr>

                    <ul class="mb-8 space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                            <FontAwesomeIcon icon={faCheck} class="text-green-500 w-4 h-4"></FontAwesomeIcon>
                            <span>Up to 10GB of storage</span>
                        </li>
                    </ul>
                    <a href="#" class="py-3 px-7 font-semibold text-white bg-[#ec5f4d] hover:bg-[#ff7c67] rounded-full cursor-pointer">Choose plan</a>
                </div>

                <div class="flex flex-col mx-auto max-w-lg text-center rounded-3xl border bg-gray-600 p-10 text-white">
                    <h3 class="font-semibold uppercase">Company</h3>
                    <div class="flex justify-center items-baseline mt-8 mb-4">
                        <span class="mr-2 text-5xl font-bold">$49</span>
                        <span class="text-gray-500 dark:text-gray-300">/month</span>
                    </div>

                    <hr class="mb-8"></hr>

                    <ul class="mb-8 space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                            <FontAwesomeIcon icon={faCheck} class="text-green-500 w-4 h-4"></FontAwesomeIcon>
                            <span>Up to 1TB of storage</span>
                        </li>
                    </ul>
                    <a href="#" class="py-3 px-7 font-semibold text-white bg-[#ec5f4d] hover:bg-[#ff7c67] rounded-full cursor-pointer">Choose plan</a>
                </div>

                <div class="flex flex-col mx-auto max-w-lg text-center rounded-3xl border p-10 bg-gray-800 text-white">
                    <h3 class="font-semibold uppercase">Enterprise</h3>
                    <div class="flex justify-center items-baseline mt-8 mb-4">
                        <span class="mr-2 text-5xl font-bold">$499</span>
                        <span class="text-gray-500 dark:text-gray-400">/month</span>
                    </div>

                    <hr class="mb-8"></hr>

                    <ul class="mb-8 space-y-4 text-left">
                        <li class="flex items-center space-x-3">
                            <FontAwesomeIcon icon={faCheck} class="text-green-500 w-4 h-4"></FontAwesomeIcon>
                            <span>Up to 10TB of storage</span>
                        </li>
                    </ul>
                    <a href="#" class="py-3 px-7 font-semibold text-white bg-[#ec5f4d] hover:bg-[#ff7c67] rounded-full cursor-pointer">Choose plan</a>
                </div>
            </div>
        </div>
    </section>
  )
}
