import fs from 'fs';
import path from 'path';

const directoryPath = path.join(process.cwd(), 'src');

const replacements: Record<string, string> = {
  'bg-\\[#0A0A0B\\]/95': 'bg-background/95',
  'bg-\\[#0A0A0B\\]/80': 'bg-background/80',
  'bg-\\[#0A0A0B\\]/60': 'bg-background/60',
  'bg-\\[#0A0A0B\\]/40': 'bg-background/40',
  'bg-\\[#0A0A0B\\]': 'bg-background',
  'bg-\\[#141416\\]/50': 'bg-surface/50',
  'bg-\\[#141416\\]': 'bg-surface',
  'text-white/80': 'text-foreground/80',
  'text-white/60': 'text-muted',
  'text-white/40': 'text-muted-foreground',
  'text-white/20': 'text-muted-foreground',
  'text-white': 'text-foreground',
  'border-white/5': 'border-border-subtle',
  'border-white/10': 'border-border',
  'border-white/20': 'border-border-strong',
  'bg-white/5': 'bg-surface-hover',
  'bg-white/10': 'bg-surface-active',
  'bg-white/20': 'bg-surface-active',
  'text-\\[#000\\]': 'text-primary-foreground',
  'from-\\[#0A0A0B\\]': 'from-background',
  'via-\\[#0A0A0B\\]': 'via-background',
  'to-\\[#0A0A0B\\]': 'to-background',
};

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  const sortedKeys = Object.keys(replacements).sort((a, b) => b.length - a.length);
  
  for (const key of sortedKeys) {
    const regex = new RegExp(key, 'g');
    content = content.replace(regex, replacements[key]);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir(directoryPath);
