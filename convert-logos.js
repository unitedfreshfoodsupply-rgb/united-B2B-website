import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'public/assets/certifications';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

async function convert() {
    for (const file of files) {
        const filePath = path.join(dir, file);
        const outputPath = filePath.replace('.png', '.webp');
        console.log(`Converting ${filePath} to ${outputPath}...`);
        await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(outputPath);
        console.log(`Removing ${filePath}...`);
        fs.unlinkSync(filePath);
    }
}

convert().catch(console.error);
