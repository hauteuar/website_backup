// PartnersList.js
import React from 'react';
import PartnerLogo from './PartnerLogo';
import './Partner.css';

// Example partner data
const img_src = process.env.PUBLIC_URL 
const partners = [
    { name: 'SheTO', logoUrl: img_src + '/shecto.png' } ,
    { name: 'Humber', logoUrl: img_src + 'humber logo.png' },
    { name: 'Shopify', logoUrl: img_src + 'shopify-logo.png' },
    { name: 'Unfabricated', logoUrl: img_src + 'unfabricated-logo.png' },
    
    // Add more partners as needed
];

function PartnersList() {
    return (
        <section className="partners-section">
            <h1>Accredited Partners</h1>
            <div className="partners-list">
                {partners.map((partner) => (
                    <PartnerLogo key={partner.name} name={partner.name} logoUrl={partner.logoUrl} />
                ))}
            </div>
        </section>
    );
}

export default PartnersList;
