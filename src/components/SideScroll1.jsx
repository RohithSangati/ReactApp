import React from 'react';
import Card1 from './Card1.jsx';
import im1 from './Images/im1.jpg';
import im2 from './Images/im2.jpg';
import im3 from './Images/im3.jpg';
import im4 from './Images/im4.jpg';
import im5 from './Images/im5.jpg';
import im6 from './Images/im6.jpg';
import im7 from './Images/im7.jpg';
import im8 from './Images/im8.jpg';
import im9 from './Images/im9.jpg';
import im10 from './Images/im10.jpg';

var data = [
                [im1, '12,999.00 ', '₹15,999.00 (19% off)', 'Redmi Note 10 (Shadow Black, 4GB RAM, 64GB Storage) - Amoled Dot Display | 48MP Sony Sensor IMX582'],
                [im10, '279.00 ', '₹600.00 (54% off)', 'QUARANT BreatheSafe 3 Ply Protective Face Mask, BFE >98% & PFE >95%, ISI, BIS, CE, ISO & TGA Certified'],
                [im2, '2,999.00 ', '₹5,999.00 (50% off) ', 'Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 8 Days Battery Life Compatible with Android and iOS IPX7'],
                [im3, '2,499.00 ', '₹4,999.00 (50% off) ', 'Fire-Boltt Blast 1400 Over -Ear Bluetooth Wireless Headphones with 25H Playtime, Thumping Bass,Lightweight Foldable'],
                [im4, '2,749.00 ', '₹12,490.00 (78% off)', 'Hammer KO Latest Sports True Wireless in-Ear Earbuds Earphones Bluetooth 5.0 in-Built Mic 5H Playtime Range 10M'],
                [im5, '225.00 ', '₹250.00 (10% off)', 'Urban Platter Unsweetened Almond Milk, 1 Litre [Barista-Grade, Lactose-Free, Plant-Based Milk Alternative]'],
                [im6, '699.00 ', '₹790.00 (12% off)', 'Wipro 9-Watts B22 WiFi Enabled Smart NS9001 LED Bulb (16 Million Colors + Warm White/Neutral White/White)'],
                [im7, '6,899.00 ', '₹9,999.00 (31% off) ', 'Yale Standard X-Large Electronic Safe with Pincode Access- 41 litres, Black'],
                [im8, '409.00 ', '₹749.00 (45% off)', 'Strontium Ammo 32GB 2.0 USB Pen Drive (Silver)'],
                [im9, '12,999.00 ', '₹15,999.00 (19% off)', 'Rs.500 Sony PlayStation Network Wallet Top-Up (Email Delivery in 1 hour- Digital Voucher Code)']
            ];

class SideScroll1 extends React.Component {
    render() {
        var cards = data.map(function (e) {
            return (
                <Card1 img={e[0]} link={e[3]} mon1={e[1]} mon2={e[2]} />
            );
        })
        return (
            <div className='container1'>
                <h3>Today's Deals</h3>
                <div className='sidescroll1'>
                    {cards}
                </div>
            </div>
        )
    }
}

export default SideScroll1;

