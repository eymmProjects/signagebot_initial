import React from "react";

const navigation = {
  product: [
    { name: "Features", href: "http://www.signagebot.com" },
    { name: "Integrations", href: "http://www.signagebot.com" },
    { name: "Pricing", href: "http://www.signagebot.com" },
    { name: "Changelog", href: "http://www.signagebot.com" },
    { name: "Docs", href: "http://www.signagebot.com" },
    { name: "Linear Method", href: "http://www.signagebot.com" },
    { name: "Download", href: "http://www.signagebot.com" },
  ],
  company: [
    { name: "About us", href: "http://www.signagebot.com" },
    { name: "Blog", href: "http://www.signagebot.com" },
    { name: "Careers", href: "http://www.signagebot.com" },
    { name: "Customers", href: "http://www.signagebot.com" },
    { name: "Brand", href: "http://www.signagebot.com" },
  ],
  resource: [
    { name: "Community", href: "http://www.signagebot.com" },
    { name: "Contact", href: "http://www.signagebot.com" },
    { name: "DFA", href: "http://www.signagebot.com" },
    { name: "Privacy Policy", href: "http://www.signagebot.com" },
    { name: "Terms of service", href: "http://www.signagebot.com" },
    { name: "Report a vulnerability", href: "http://www.signagebot.com" },
  ],
  developer: [
    { name: "API", href: "http://www.signagebot.com" },
    { name: "Status", href: "http://www.signagebot.com" },
    { name: "Github", href: "http://www.signagebot.com" },
  ],
};

function Footer() {
  return (
    <footer className="bg-gray-900 w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">
              signagebot - Designed Worldwide
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Product
                </h3>

                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a
                        className="text-sm
                        leading-6
                        text-gray-300
                        hover:text-white"
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Technology
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text0sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Portfolio
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resource.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.developer.map((item) => (
                    <li key={item.name}>
                      <a
                        className="text-sm
                        leading-6
                        text-gray-300
                        hover:text-white"
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {/* {navigation.social.map((item) => (
           <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
             <span className="sr-only">{item.name}</span>
             <item.icon className="h-6 w-6" aria-hidden="true" />
           </a>
         ))} */}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; signagebot - Designed Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
