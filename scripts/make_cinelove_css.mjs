import fs from 'fs';

const rawStyles = fs.readFileSync('C:\\Users\\admin\\.gemini\\antigravity-ide\\brain\\f05aef90-98bb-49cb-97ba-a68b477c20d6\\scratch\\cinelove_styles.css', 'utf8');

// Also add font-face definitions for Signora and Mallong
const fontFaces = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Quicksand:wght@400;500;600;700&family=Montserrat:wght@400;500;600&display=swap');

@font-face {
  font-family: 'Signora';
  src: local('Playfair Display'), local('Georgia'), url('https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff2') format('woff2');
  font-style: normal;
  font-weight: 500;
}

@font-face {
  font-family: 'Mallong';
  src: local('Cinzel Decorative'), local('Playfair Display'), url('https://fonts.gstatic.com/s/cinzeldecorative/v14/tDbM2oWLy0AcqVS_bZWC-a7GA613WD7dV73w.woff2') format('woff2');
  font-style: normal;
  font-weight: 700;
}
`;

// Clean up styles to standard CSS
let css = fontFaces + '\n' + rawStyles;

// Remove jsx hash selectors if any to make it pure generic CSS or keep them
// In styled-jsx, classes look like .photo-component.jsx-1944329802
// We can replace .jsx-\d+ with empty string so classes like .photo-component match directly!
css = css.replace(/\.jsx-\d+/g, '');
css = css.replace(/-jsx-\d+/g, '');

fs.writeFileSync('d:\\demo_thiepcuoi_2\\src\\cinelove.css', css);
console.log("Written cinelove.css length:", css.length);
