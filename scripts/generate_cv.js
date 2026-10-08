import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateCV() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const { width, height } = page.getSize();
  const margin = 45;
  let y = height - 55;

  const primaryColor = rgb(0.12, 0.28, 0.48); // Deep steel blue
  const darkTextColor = rgb(0.12, 0.14, 0.18);
  const grayTextColor = rgb(0.35, 0.38, 0.42);
  const dividerColor = rgb(0.8, 0.82, 0.85);

  // Top Title
  page.drawText('MD ABU RAIHAN', {
    x: margin,
    y: y,
    size: 22,
    font: fontBold,
    color: darkTextColor,
  });
  y -= 16;

  page.drawText('Computer Science Diploma Student | Customer Service & Technical Support', {
    x: margin,
    y: y,
    size: 10,
    font: fontRegular,
    color: grayTextColor,
  });
  y -= 14;

  page.drawText('01619887937  ·  raihanns143@gmail.com  ·  Saheb Bazar, Rajshahi', {
    x: margin,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: grayTextColor,
  });
  y -= 16;

  // Horizontal divider
  page.drawLine({
    start: { x: margin, y: y },
    end: { x: width - margin, y: y },
    thickness: 1,
    color: dividerColor,
  });
  y -= 22;

  // 2-column layout definition
  const col1X = margin;
  const col1W = 280;
  const col2X = margin + col1W + 25;

  let yLeft = y;
  let yRight = y;

  function drawSectionHeading(text, x, curY) {
    page.drawText(text, {
      x,
      y: curY,
      size: 10.5,
      font: fontBold,
      color: primaryColor,
    });
    return curY - 14;
  }

  // LEFT COLUMN:
  // 1. PROFILE
  yLeft = drawSectionHeading('PROFILE', col1X, yLeft);
  const profileLines = [
    'Motivated and customer-focused Diploma in Computer Science',
    'student with 1 year of work experience at Online Telecom,',
    'Naogaon. Interested in technology, smartphones, accessories',
    'and customer support, with a willingness to learn and grow in',
    'a professional retail environment.',
  ];
  for (const line of profileLines) {
    page.drawText(line, { x: col1X, y: yLeft, size: 8.8, font: fontRegular, color: darkTextColor });
    yLeft -= 12;
  }
  yLeft -= 12;

  // 2. WORK EXPERIENCE
  yLeft = drawSectionHeading('WORK EXPERIENCE', col1X, yLeft);
  page.drawText('Online Telecom, Naogaon', { x: col1X, y: yLeft, size: 9.5, font: fontBold, color: darkTextColor });
  yLeft -= 12;
  page.drawText('Telecom / Customer Support — 1 Year', { x: col1X, y: yLeft, size: 8.8, font: fontOblique, color: grayTextColor });
  yLeft -= 14;
  const expBullets = [
    'Customer assistance and day-to-day service support.',
    'Basic handling of telecom-related products and services.',
    'Communicating with customers and understanding their requirements.',
    'Working responsibly in a customer-facing environment.',
  ];
  for (const b of expBullets) {
    page.drawText('•', { x: col1X + 4, y: yLeft, size: 8.5, font: fontBold, color: grayTextColor });
    page.drawText(b, { x: col1X + 14, y: yLeft, size: 8.5, font: fontRegular, color: darkTextColor });
    yLeft -= 12;
  }
  yLeft -= 12;

  // 3. EDUCATION
  yLeft = drawSectionHeading('EDUCATION', col1X, yLeft);
  
  // Table header
  page.drawText('Qualification', { x: col1X, y: yLeft, size: 8.2, font: fontBold, color: grayTextColor });
  page.drawText('Result', { x: col1X + 165, y: yLeft, size: 8.2, font: fontBold, color: grayTextColor });
  page.drawText('Year', { x: col1X + 225, y: yLeft, size: 8.2, font: fontBold, color: grayTextColor });
  yLeft -= 13;

  page.drawText('Diploma in Computer Science', { x: col1X, y: yLeft, size: 9, font: fontBold, color: darkTextColor });
  page.drawText('Ongoing', { x: col1X + 165, y: yLeft, size: 8.5, font: fontRegular, color: darkTextColor });
  page.drawText('8th Semester', { x: col1X + 225, y: yLeft, size: 8.5, font: fontRegular, color: darkTextColor });
  yLeft -= 11;
  page.drawText('Bangladesh Polytechnic Institute', { x: col1X, y: yLeft, size: 8.2, font: fontRegular, color: grayTextColor });
  yLeft -= 14;

  page.drawText('SSC', { x: col1X, y: yLeft, size: 9, font: fontBold, color: darkTextColor });
  page.drawText('GPA 4.86', { x: col1X + 165, y: yLeft, size: 8.5, font: fontRegular, color: darkTextColor });
  page.drawText('2022', { x: col1X + 225, y: yLeft, size: 8.5, font: fontRegular, color: darkTextColor });
  yLeft -= 11;
  page.drawText('Ahsanullah Memorial Government High School', { x: col1X, y: yLeft, size: 8.2, font: fontRegular, color: grayTextColor });
  yLeft -= 20;

  // 4. CAREER OBJECTIVE
  yLeft = drawSectionHeading('CAREER OBJECTIVE', col1X, yLeft);
  const objLines = [
    'To build a career in a customer-oriented technology and retail',
    'environment where I can apply my computer knowledge, communication',
    'skills and practical experience while continuously learning new',
    'technologies.',
  ];
  for (const line of objLines) {
    page.drawText(line, { x: col1X, y: yLeft, size: 8.8, font: fontRegular, color: darkTextColor });
    yLeft -= 12;
  }
  yLeft -= 12;

  // 5. PERSONAL DETAILS
  yLeft = drawSectionHeading('PERSONAL DETAILS', col1X, yLeft);
  const pDetails = [
    ['Date of Birth:', '15 October 2005'],
    ['Address:', 'Saheb Bazar, Rajshahi'],
    ['Nationality:', 'Bangladeshi'],
    ['Gender:', 'Male'],
  ];
  for (const [k, v] of pDetails) {
    page.drawText(k, { x: col1X, y: yLeft, size: 8.5, font: fontBold, color: grayTextColor });
    page.drawText(v, { x: col1X + 75, y: yLeft, size: 8.5, font: fontRegular, color: darkTextColor });
    yLeft -= 12;
  }

  // RIGHT COLUMN:
  // 1. TECHNICAL SKILLS
  yRight = drawSectionHeading('TECHNICAL SKILLS', col2X, yRight);
  const skills = [
    'Basic computer hardware & software troubleshooting',
    'Windows operating system',
    'Microsoft Word, Excel & PowerPoint',
    'Android / smartphone setup & configuration',
    'Basic networking & Internet troubleshooting',
    'Email, web browsing & online services',
    'Basic smartphone & accessories knowledge',
    'Customer service & problem solving',
  ];
  for (const s of skills) {
    page.drawText('•', { x: col2X + 4, y: yRight, size: 8.5, font: fontBold, color: grayTextColor });
    page.drawText(s, { x: col2X + 13, y: yRight, size: 8.5, font: fontRegular, color: darkTextColor });
    yRight -= 12.5;
  }
  yRight -= 10;

  // 2. STRENGTHS
  yRight = drawSectionHeading('STRENGTHS', col2X, yRight);
  const strengths = [
    'Quick learner',
    'Good communication',
    'Customer-friendly attitude',
    'Responsible and punctual',
    'Teamwork',
    'Adaptable to new technology',
  ];
  for (const str of strengths) {
    page.drawText('•', { x: col2X + 4, y: yRight, size: 8.5, font: fontBold, color: grayTextColor });
    page.drawText(str, { x: col2X + 13, y: yRight, size: 8.5, font: fontRegular, color: darkTextColor });
    yRight -= 12.5;
  }
  yRight -= 10;

  // 3. LANGUAGES
  yRight = drawSectionHeading('LANGUAGES', col2X, yRight);
  page.drawText('• Bangla — Native', { x: col2X + 4, y: yRight, size: 8.5, font: fontRegular, color: darkTextColor });
  yRight -= 12;
  page.drawText('• English — Basic / Conversational', { x: col2X + 4, y: yRight, size: 8.5, font: fontRegular, color: darkTextColor });
  yRight -= 18;

  // 4. AVAILABILITY
  yRight = drawSectionHeading('AVAILABILITY', col2X, yRight);
  const availLines = [
    'Available for suitable full-time opportunities and',
    'willing to learn company-specific products, systems',
    'and procedures.',
  ];
  for (const line of availLines) {
    page.drawText(line, { x: col2X, y: yRight, size: 8.5, font: fontRegular, color: darkTextColor });
    yRight -= 12;
  }
  yRight -= 12;

  // 5. REFERENCE
  yRight = drawSectionHeading('REFERENCE', col2X, yRight);
  page.drawText('Available upon request.', { x: col2X, y: yRight, size: 8.5, font: fontRegular, color: darkTextColor });

  // Page Footer
  page.drawText('MD ABU RAIHAN • CV', {
    x: width / 2 - 50,
    y: 25,
    size: 7.5,
    font: fontRegular,
    color: rgb(0.6, 0.62, 0.65),
  });

  const pdfBytes = await pdfDoc.save();

  // Save to both canonical paths for robust downloading
  fs.writeFileSync(path.resolve('public/MD_Abu_Raihan_CV.pdf'), pdfBytes);
  fs.writeFileSync(path.resolve('public/resume.pdf'), pdfBytes);
  console.log(`Saved exact CV PDF (${pdfBytes.length} bytes) to public/MD_Abu_Raihan_CV.pdf and public/resume.pdf`);
}

generateCV().catch(console.error);
