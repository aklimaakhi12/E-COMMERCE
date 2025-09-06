// App.js or Homepage.js

import React from "react";
import { Link } from "react-router-dom";


const heroImage =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function GloriousApparel() {
  return (
    <div className="bg-[#f7f7f7] h-96 ... ">
      {/* Top Info Bar */}
      <div className="w-full bg-[#f8f8f8] text-gray-500 text-sm flex justify-between items-center px-4 py-2 border-b">
        <div className="flex space-x-4">
          <span>09639-333666</span>
          <span>|</span>
          <span>contact@gloriousapparel.fashion</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-block w-5 h-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Bangladesh.svg"
              alt="BD"
              className="w-full h-full object-cover"
            />
          </span>
          <span className="ml-1">BDT</span>
        </div>
      </div>

       {/* Navbar */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-20">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Website Name - pinned to the far left */}
          <div className="flex-none flex items-center">
            <div className="w-9 h-9 bg-[#e53935] rounded-full flex items-center justify-center text-white font-bold text-xl mr-2">
              G
            </div>
            <span className="text-[#e53935] font-extrabold text-2xl tracking-tight mr-1 select-none" style={{ fontFamily: "serif" }}>
             lorious
            </span>
            <span className="text-black font-semibold text-2xl tracking-tight select-none" style={{ fontFamily: "serif" }}>
              Apparel
            </span>
          </div>
          {/* Menu - centered and flex-1 */}
          <ul className="flex-1 hidden md:flex items-center justify-center space-x-8 font-semibold text-gray-900">
            <li>
              <a href="#" className="hover:text-[#e53935]">
                NEW IN
              </a>
            </li>
            <li>
              <a href="#" className="relative hover:text-[#e53935]">
                <span className="absolute -top-3 left-4 text-xs text-[#e53935] font-bold">
                  UpTo 50%
                </span>
                SALE
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e53935]">
                SUMMER
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e53935]">
                <span className="text-xs text-[#e53935] font-bold">NEW</span>{" "}
                BLACK
              </a>
            </li>
            <li>
              <a href="#" className="text-[#eebc4a] font-bold hover:text-[#eebc4a]">
                Belwari
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e53935]">
                MEN
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e53935]">
                WOMEN
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e53935]">
                ACCESSORIES
              </a>
            </li>
          </ul>
          {/* Add spacing between menu and icons */}
          <div className="hidden md:block" style={{ minWidth: "48px" }}></div>
          {/* Icons - right */}
          <div className="flex-none flex items-center space-x-6">
            <button className="text-gray-700 hover:text-[#e53935]">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <Link to="/login" className="text-gray-700 hover:text-[#e53935]">
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a7.5 7.5 0 0113 0" />
  </svg>
</Link>
            <button className="relative text-gray-700 hover:text-[#e53935]">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.414l1.318-1.096a4.5 4.5 0 116.364 6.364L12 21.07l-7.682-7.682a4.5 4.5 0 010-6.364z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-[#e53935] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
            </button>
            <button className="relative text-gray-700 hover:text-[#e53935]">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.5 5M7 13l2.5-5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-[#e53935] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Banner */}
      <section className="relative w-full flex justify-center items-center bg-white" style={{ minHeight: "70vh" }}>
        <img
          src={heroImage}
          alt="Eloura Aura of Eid"
          className="w-full max-h-[70vh] object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl md:text-7xl font-serif font-extrabold drop-shadow-lg tracking-wider mb-4" style={{ letterSpacing: "0.1em" }}>
            ELOURA
          </h1>
          <h2 className="text-white text-2xl md:text-3xl font-light tracking-widest drop-shadow-lg">
            AURA OF EID
          </h2>
        </div>
      </section>

      {/* Services Row */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-2">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M3 10l1.553 6.211A2 2 0 006.5 18h11a2 2 0 001.947-1.789L21 10M5 10V7a2 2 0 012-2h10a2 2 0 012 2v3" />
              </svg>
            </div>
            <div className="font-bold text-lg">Free Shipping</div>
            <div className="text-gray-600 text-sm">Free Shipping On All Order</div>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7" />
              </svg>
            </div>
            <div className="font-bold text-lg">Online Support</div>
            <div className="text-gray-600 text-sm">Contact us 24 hr, 7 days</div>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="font-bold text-lg">Money Guarantee</div>
            <div className="text-gray-600 text-sm">30 Day Money Back Guarantee</div>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeWidth="2" d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className="font-bold text-lg">Secure Payment</div>
            <div className="text-gray-600 text-sm">We ensure secure payment</div>
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-pink-600 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[340px]">
            <div>
              <h3 className="text-2xl font-bold mb-3">Free-Spirited Fashion</h3>
              <p className="mb-6 text-white/90">Get Street Style Savvy with our edgy and trendy clothing.</p>
              <button className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                SHOP NOW
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

              alt="Fashion Model"
              className="absolute bottom-0 right-0 w-36 h-44 object-cover rounded-bl-3xl"
            />
          </div>
          <div className="flex flex-col gap-8">
            <div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[150px]">
              <div>
                <h3 className="text-xl font-bold mb-2">Statement Pieces</h3>
                <p className="mb-4 text-white/90">Get Street Style Savvy with our edgy and trendy clothing.</p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  SHOP NOW
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop"
                alt="Shoes"
                className="absolute bottom-4 right-4 w-16 h-16 object-cover"
              />
            </div>
            <div className="bg-black rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[150px]">
              <div>
                <h3 className="text-xl font-bold mb-2">Statement Pieces</h3>
                <p className="mb-4 text-white/90">Get Street Style Savvy with our edgy and trendy clothing.</p>
                <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                  SHOP NOW
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop"
                alt="Watch"
                className="absolute bottom-4 right-4 w-16 h-16 object-cover"
              />
            </div>
          </div>
          <div className="bg-yellow-400 rounded-3xl p-8 text-black relative overflow-hidden flex flex-col justify-between min-h-[340px]">
            <div>
              <h3 className="text-2xl font-bold mb-3">Free-Spirited Fashion</h3>
              <p className="mb-6 text-black/90">Get Street Style Savvy with our edgy and trendy clothing.</p>
              <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-900 transition-colors">
                SHOP NOW
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616c0763c4e?w=300&h=400&fit=crop"
              alt="Fashion Model"
              className="absolute bottom-0 right-0 w-36 h-44 object-cover rounded-bl-3xl"
            />
          </div>
    </div>
    </section>
    </div>
  )
}

    

