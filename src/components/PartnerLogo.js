// PartnerLogo.js
import React from 'react';

function PartnerLogo({ name, logoUrl }) {
    return (
        <div className="partner-logo">
            <img src={logoUrl} alt={`${name} logo`} />
        </div>
    );
}

export default PartnerLogo;
