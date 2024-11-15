import React from 'react'
import aaj_swift_logo from '../images/aaj_swift_logo.png'
import linkedin from '../images/linkedin.png'

const Footer = () => {
    return (
        <div className='mt-16'> 
            {/* <!-- Header Section --> */}
            <header className="container mx-auto  py-6 flex justify-between items-center border-b">
                <div className="flex items-center">
                    <img src={aaj_swift_logo} alt="AAJ Swift" className="h-8" />
                    <p className="ml-10 text-gray-700 text-sm">
                        Optimizing supply chains through<br />
                        warehousing and transportation services
                    </p>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center">
                        <img src={linkedin}  className = "h-7 w-7" alt="" />

                    </a> 

                    <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center">
                        <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.7054 6.65545C25.6844 5.71806 25.4853 4.79068 25.1166 3.91286C24.7914 3.15842 24.2933 2.473 23.6542 1.90053C23.0152 1.32806 22.2493 0.881171 21.4056 0.588507C20.4205 0.260088 19.38 0.0834454 18.3286 0.0661091C16.9716 0.00793299 16.5396 -0.00512695 13.0971 -0.00512695C9.65458 -0.00512695 9.22261 0.00793299 7.86953 0.0613601C6.81826 0.0799832 5.7782 0.258242 4.79387 0.588507C3.94587 0.871581 3.17773 1.31739 2.54361 1.8945C1.89964 2.46062 1.40082 3.14479 1.08154 3.8998C0.712243 4.78035 0.513137 5.71056 0.492727 6.6507C0.428927 7.86408 0.414307 8.24876 0.414307 11.325C0.414307 14.4012 0.428927 14.7859 0.482093 15.9933C0.504442 16.933 0.705808 17.8625 1.07755 18.7418C1.40395 19.4946 1.90258 20.1782 2.54158 20.7489C3.18058 21.3197 3.94588 21.7651 4.78855 22.0567C5.77342 22.3867 6.81387 22.565 7.86554 22.5838C9.21729 22.6373 9.64927 22.6503 13.0918 22.6503C16.5343 22.6503 16.9663 22.6373 18.318 22.5838C19.3697 22.5654 20.4103 22.3872 21.395 22.0567C22.2379 21.7655 23.0034 21.3202 23.6425 20.7494C24.2815 20.1786 24.78 19.4948 25.106 18.7418C25.4752 17.862 25.6748 16.9327 25.6961 15.9933C25.7559 14.7847 25.7706 14.4 25.7706 11.3238C25.7706 8.24757 25.7706 7.8629 25.7068 6.65426L25.7054 6.65545ZM23.422 15.9043C23.4139 16.6224 23.2663 17.3338 22.986 18.0069C22.7746 18.4957 22.4512 18.9396 22.0364 19.31C21.6217 19.6805 21.1247 19.9695 20.5776 20.1582C19.8239 20.4083 19.0275 20.54 18.2236 20.5477C16.8865 20.6011 16.4851 20.6142 13.1011 20.6142C9.71705 20.6142 9.31033 20.6011 7.97852 20.5477C7.17456 20.5405 6.3781 20.4087 5.62459 20.1582C5.07216 19.9784 4.57236 19.6895 4.16252 19.3129C3.74205 18.946 3.41871 18.4998 3.21616 18.0069C2.93859 17.3333 2.79335 16.622 2.78685 15.9043C2.72703 14.717 2.71241 14.3608 2.71241 11.3333C2.71241 8.30575 2.72703 7.94957 2.78685 6.7623C2.79489 6.04417 2.9424 5.33273 3.22281 4.65965C3.42413 4.16507 3.74969 3.7183 4.17448 3.35365C4.58508 2.97791 5.08466 2.68907 5.63655 2.50832C6.39024 2.2584 7.18659 2.12666 7.99048 2.1189C9.32229 2.06666 9.7237 2.05241 13.1091 2.05241C16.4944 2.05241 16.8998 2.06547 18.2316 2.1189C19.0356 2.12613 19.832 2.25789 20.5855 2.50832C21.138 2.68804 21.6378 2.97703 22.0476 3.35365C22.4681 3.72052 22.7915 4.16674 22.994 4.65965C23.271 5.33331 23.4158 6.04464 23.422 6.7623C23.4764 7.94957 23.4964 8.30575 23.4964 11.3333C23.4964 14.3608 23.4818 14.7099 23.422 15.9054V15.9043Z" fill="#272727" />
                            <path d="M13.0988 5.50476C11.8107 5.50476 10.5515 5.84596 9.48045 6.4852C8.40942 7.12445 7.57465 8.03304 7.0817 9.09607C6.58876 10.1591 6.45978 11.3288 6.71108 12.4573C6.96238 13.5858 7.58267 14.6224 8.49351 15.436C9.40435 16.2497 10.5648 16.8037 11.8282 17.0282C13.0916 17.2527 14.4011 17.1375 15.5912 16.6972C16.7812 16.2568 17.7984 15.5112 18.514 14.5545C19.2297 13.5978 19.6117 12.473 19.6117 11.3224C19.6117 9.77944 18.9255 8.29971 17.7041 7.2087C16.4827 6.11768 14.8261 5.50476 13.0988 5.50476ZM13.0988 15.1003C12.2628 15.1003 11.4456 14.8788 10.7506 14.464C10.0555 14.0491 9.51373 13.4595 9.19382 12.7696C8.87392 12.0797 8.79021 11.3206 8.9533 10.5882C9.11639 9.85581 9.51895 9.18308 10.1101 8.65506C10.7012 8.12705 11.4543 7.76746 12.2742 7.62178C13.0941 7.4761 13.944 7.55087 14.7163 7.83663C15.4886 8.12239 16.1487 8.6063 16.6132 9.22718C17.0776 9.84806 17.3255 10.578 17.3255 11.3247C17.3255 12.3261 16.8802 13.2864 16.0875 13.9944C15.2949 14.7025 14.2198 15.1003 13.0988 15.1003Z" fill="#272727" />
                            <path d="M21.3902 5.27438C21.3902 5.54301 21.301 5.80561 21.134 6.02897C20.9669 6.25233 20.7294 6.42642 20.4516 6.52922C20.1737 6.63202 19.868 6.65892 19.573 6.60651C19.2781 6.5541 19.0071 6.42475 18.7945 6.23479C18.5818 6.04484 18.437 5.80283 18.3783 5.53936C18.3197 5.27588 18.3498 5.00279 18.4649 4.7546C18.5799 4.50642 18.7749 4.29429 19.0249 4.14505C19.275 3.9958 19.5689 3.91614 19.8697 3.91614C20.2729 3.91614 20.6597 4.05924 20.9449 4.31396C21.23 4.56868 21.3902 4.91415 21.3902 5.27438Z" fill="#272727" />
                        </svg>

                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center">
                        <svg width="33" height="21" viewBox="0 0 33 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.0407 3.30003C31.8536 2.68371 31.4891 2.12186 30.9836 1.67031C30.4781 1.21877 29.8491 0.893254 29.1592 0.72612C26.6029 0.0999528 16.3693 0.0999527 16.3693 0.0999527C12.0954 0.0548293 7.82272 0.255941 3.5778 0.702036C2.88865 0.878115 2.26178 1.20957 1.75745 1.66455C1.25311 2.11953 0.88827 2.68273 0.69798 3.30003C0.233667 5.61783 0.00804578 7.96876 0.0239435 10.3233C0.00715411 12.6779 0.232783 15.0289 0.69798 17.3466C0.885087 17.963 1.2495 18.5248 1.75501 18.9764C2.26051 19.4279 2.88951 19.7534 3.57948 19.9205C6.16441 20.5452 16.371 20.5452 16.371 20.5452C20.6449 20.5903 24.9176 20.3892 29.1625 19.9431C29.8517 19.7757 30.4798 19.4502 30.9847 18.9989C31.4896 18.5477 31.8536 17.9864 32.0407 17.3707C32.505 15.0529 32.7306 12.702 32.7147 10.3474C32.7453 7.98436 32.5196 5.62421 32.0407 3.30003Z" fill="#272727" />
                            <path d="M13.1104 14.7007L21.6201 10.322L13.1104 5.94336V14.7007Z" fill="white" />
                        </svg>

                    </a>
                </div>
            </header>

            {/* <!-- Footer Navigation --> */}
            <footer className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* <!-- Company Section --> */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-700 hover:text-gray-800">Our Story</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-800">Careers at AAJ</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-800">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* <!-- Services Section --> */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-700 hover:text-gray-800">E Commerce Fulfillment</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-800">Transport-AAJ Swift</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-800">Returns Management</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-800">Value Added Services</a></li>
                        </ul>
                    </div>

                    {/* <!-- Resources Section --> */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-700 hover:text-gray-800">Case Studies</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-800">Blogs</a></li>
                        </ul>
                    </div>

                    {/* <!-- Support Section --> */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-700 hover:text-gray-800">Track Your Order</a></li>
                        </ul>
                    </div>

                    {/* <!-- Transportation Network Section --> */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-4">Transportation Network</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-700 hover:text-gray-800">Transportation in Mumbai</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-800">Transportation in Bangalore</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-800">Transportation in Delhi</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-800">Transportation in Hyderabad</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-800">Transportation in Ghaziabad</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-800">Transportation in Sonipat NCR</a></li>
                        </ul>
                    </div>
                </div>

                {/* <!-- Footer Bottom --> */}
                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
                    <p>©2024 AAJ Swift. All Rights Reserved</p>
                    <p className="mt-4 md:mt-0">ISO 9001: 2015, ISO 27001: 2013 Certified Company CIN: L63090DL2011PLC221234</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer