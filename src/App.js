import React from "react";
// import { Button } from "@shadcn/ui";
// import { Card, CardContent } from "@shadcn/ui";
import { motion } from "framer-motion";
import "./App.css";

import Banner from "./Images/banner.png"
import {COMBO_PACKS_DATA} from "./Constants/comboPacksData";

// Button Component
function Button({ children }) {
    return <button className="btn-primary">{children}</button>;
}

// Card Component
function Card({ title, price, items }) {
    return (
        <div className="card-container">
            <h3>{title}</h3>
            <p>{price}</p>
            <ul>
                {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );
}


function App() {

    const handleBannerClick=()=>{
        window.open("https://wa.me/916363561360?text=Hi%20RentLelo!%20I'm%20interested%20in%20furniture%20rental");
    }
  return (
      <main className="main-container">
        <section className="hero-section">
          <motion.h1
              className="hero-heading"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
          >
            RentLelo
          </motion.h1>
            <div>
                <img src={Banner} alt={"banner"} onClick={handleBannerClick} style={{ width: "100%" }} />
            </div>
          <p className="hero-description">Affordable Furniture Rentals in Bangalore</p>
          <p className="hero-price-info">Starting ₹999/month • Bed, Mattress, Table, Chair • Free Delivery</p>
          <Button className="cta-Button" asChild>
            <a
                href="https://wa.me/916363561360?text=Hi%20RentLelo!%20I'm%20interested%20in%20furniture%20rental"
                target="_blank"
                rel="noopener noreferrer"
            >
              WhatsApp Us Now
            </a>
          </Button>
        </section>

        {/* Packages Section */}
        <section className="packages-section" style={{margin:"20px"}}>
          <h2 className="section-heading">Popular Combos</h2>
          <div className="packages-container" style={{
                   display: "grid",
                   gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                   justifyContent: "center", // or "start" if you want them from the left
                   gap: "1rem"
               }}
          >
            {COMBO_PACKS_DATA.map((pkg, idx) => (
                <div key={idx} className="card" style={{display: "flex"}}>
                  <div className="card-content">
                    <h3 className="package-title">{pkg.title}</h3>
                    <p className="package-price">{pkg.price}</p>
                    <ul className="package-items">
                      {pkg.items.map((item, i) => <li key={i}> {item}</li>)}
                    </ul>
                  </div>
                </div>
            ))}
          </div>
        </section>

        <section className="how-it-works-section">
          <h2 className="section-heading">How Renting Works</h2>
          <div className="steps-container">
            <div>🛒 Choose a Combo</div>
            <div>🚚 Free Delivery</div>
            <div>💳 Pay Monthly</div>
            <div>📦 Return When Done</div>
          </div>
        </section>

        <footer className="footer">
          Made with ❤️ in Bangalore • RentLelo
        </footer>
      </main>
  );
}

export default App;
