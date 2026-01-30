const express = require('express');
const fs = require('fs');
const path = require('path');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM'; // Rachel - warm female voice

const audioDir = path.join(__dirname, '../../frontend/assets/audio');

// Ensure audio directory exists
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

// Generate speech from text
async function generateSpeech(text, filename) {
  if (!ELEVENLABS_API_KEY) {
    throw new Error('ElevenLabs API key not configured');
  }

  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
    method: 'POST',
    headers: {
      'Accept': 'audio/mpeg',
      'Content-Type': 'application/json',
      'xi-api-key': ELEVENLABS_API_KEY
    },
    body: JSON.stringify({
      text,
      model_id: 'eleven_monolingual_v1',
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
        style: 0.5,
        use_speaker_boost: true
      }
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`ElevenLabs API error: ${error}`);
  }

  const audioBuffer = Buffer.from(await response.arrayBuffer());
  const filePath = path.join(audioDir, filename);
  fs.writeFileSync(filePath, audioBuffer);
  
  return `/assets/audio/${filename}`;
}

// Reading content for each module (plain text for TTS)
const moduleReadingText = {
  'sig-figs': `
    Welcome to the Significant Figures lesson!
    
    Significant figures, or sig figs, are the digits in a number that carry meaningful information about its precision. They tell us how precise a measurement is.
    
    Let me explain the five main rules:
    
    Rule 1: Non-zero digits are ALWAYS significant. For example, 123 has 3 significant figures.
    
    Rule 2: Zeros between non-zero digits are significant. So 102 also has 3 significant figures.
    
    Rule 3: Leading zeros are NOT significant. This means 0.0025 has only 2 significant figures.
    
    Rule 4: Trailing zeros after a decimal point ARE significant. So 2.500 has 4 significant figures.
    
    Rule 5: Trailing zeros without a decimal are ambiguous. 2500 could have 2, 3, or 4 significant figures.
    
    Now let's talk about calculations. For addition and subtraction, round your answer to the least number of decimal places. For multiplication and division, round to the least number of significant figures.
    
    For example, 12.52 plus 1.7 equals 14.22, but we round it to 14.2 because 1.7 has only one decimal place.
    
    And 4.56 times 1.4 equals 6.384, but we round it to 6.4 because 1.4 has only 2 significant figures.
    
    Practice these rules and you'll master significant figures in no time!
  `,
  'nomenclature': `
    Welcome to Chemical Nomenclature!
    
    Nomenclature is just a fancy word for naming compounds. There are three main types you need to know.
    
    Type 1 compounds are ionic compounds with metals that always have the same charge. These are the easy ones! The formula is simple: metal name plus nonmetal with an "ide" ending.
    
    For example, NaCl is sodium chloride. CaBr2 is calcium bromide. K2O is potassium oxide.
    
    Common Type 1 metals include sodium, potassium, calcium, magnesium, aluminum, zinc, and silver.
    
    Type 2 compounds are ionic compounds where the metal can have different charges. These are usually transition metals. You need to use Roman numerals to show the charge.
    
    For example, FeCl2 is iron two chloride because iron has a plus 2 charge. FeCl3 is iron three chloride because iron has a plus 3 charge.
    
    Type 3 compounds are covalent or molecular compounds, made of two nonmetals. Here you use prefixes!
    
    The prefixes are: mono for 1, di for 2, tri for 3, tetra for 4, penta for 5, hexa for 6, hepta for 7, octa for 8, nona for 9, and deca for 10.
    
    For example, CO2 is carbon dioxide. N2O4 is dinitrogen tetroxide.
    
    Remember: don't use mono for the first element. We say carbon dioxide, not monocarbon dioxide.
    
    Here's a quick decision tree: First, ask if the compound contains a metal. If no, it's Type 3 and you use prefixes. If yes, ask if the metal always has the same charge. If yes, it's Type 1. If no, it's Type 2 and you use Roman numerals.
  `,
  'matter-atoms': `
    Welcome to Matter and Atomic Structure!
    
    Let's start by classifying matter. Matter is divided into two main categories: pure substances and mixtures.
    
    Pure substances include elements and compounds. Elements contain only one type of atom, like iron, oxygen, or gold. Compounds are two or more elements chemically bonded together, like water, salt, or carbon dioxide.
    
    Mixtures are combinations that are NOT chemically bonded. Homogeneous mixtures are uniform throughout, like salt water or air. Heterogeneous mixtures are NOT uniform, like salad, pizza, or sand.
    
    Now let's talk about properties. Physical properties can be observed without changing the substance. These include color, odor, melting point, boiling point, and density.
    
    Chemical properties describe how a substance reacts. These include flammability, reactivity with acids, and oxidation like rusting.
    
    Now for atomic structure! Atoms are made of three particles:
    
    Protons have a positive charge and are found in the nucleus. They have a mass of 1 atomic mass unit.
    
    Neutrons have no charge and are also in the nucleus, with a mass of 1.
    
    Electrons have a negative charge, are found in the electron cloud, and have almost no mass.
    
    The atomic number equals the number of protons, which also equals the number of electrons in a neutral atom.
    
    The mass number equals protons plus neutrons.
    
    To find neutrons, subtract the atomic number from the mass number.
    
    Finally, isotopes are atoms of the same element with different numbers of neutrons. For example, carbon-12, carbon-13, and carbon-14 all have 6 protons, but they have 6, 7, and 8 neutrons respectively.
  `,
  'lab-skills': `
    Welcome to Lab Skills!
    
    Today we'll master density, one of the most important calculations in chemistry.
    
    The formula for density is D equals m divided by V. D is density in grams per milliliter or grams per cubic centimeter. M is mass in grams. V is volume in milliliters or cubic centimeters.
    
    You can rearrange this formula three ways:
    To find density: D equals m divided by V.
    To find mass: m equals D times V.
    To find volume: V equals m divided by D.
    
    Let's do an example. A metal cube has a mass of 27 grams and a volume of 10 cubic centimeters. What is its density?
    
    D equals m divided by V, which is 27 divided by 10, which equals 2.7 grams per cubic centimeter.
    
    For measuring liquid volumes, use a graduated cylinder and read at the meniscus, which is the bottom of the curve. Always read at eye level!
    
    For measuring the volume of irregular solids, use water displacement:
    Step 1: Record the initial water volume in your graduated cylinder.
    Step 2: Carefully add the object.
    Step 3: Record the new water volume.
    Step 4: Subtract the initial from the final to get the object's volume.
    
    Here's a key fact: water has a density of 1 gram per milliliter. Objects with density less than 1 will float. Objects with density greater than 1 will sink.
    
    Ice floats because its density is 0.92. Gold sinks because its density is 19.3!
  `
};

// Get or generate audio for a module
router.get('/:moduleId', authenticateToken, async (req, res) => {
  const { moduleId } = req.params;
  const filename = `${moduleId}-reading.mp3`;
  const filePath = path.join(audioDir, filename);

  // Check if audio already exists
  if (fs.existsSync(filePath)) {
    return res.json({ audioUrl: `/assets/audio/${filename}`, cached: true });
  }

  // Check if we have text for this module
  const text = moduleReadingText[moduleId];
  if (!text) {
    return res.status(404).json({ error: 'Module not found' });
  }

  // Check if API key is available
  if (!ELEVENLABS_API_KEY) {
    return res.status(503).json({ error: 'TTS not configured', message: 'ElevenLabs API key not set' });
  }

  try {
    const audioUrl = await generateSpeech(text.trim(), filename);
    res.json({ audioUrl, cached: false });
  } catch (error) {
    console.error('TTS generation error:', error);
    res.status(500).json({ error: 'Failed to generate audio', message: error.message });
  }
});

// Pre-generate all module audio (admin only)
router.post('/generate-all', authenticateToken, async (req, res) => {
  if (!ELEVENLABS_API_KEY) {
    return res.status(503).json({ error: 'TTS not configured' });
  }

  const results = [];
  
  for (const [moduleId, text] of Object.entries(moduleReadingText)) {
    const filename = `${moduleId}-reading.mp3`;
    const filePath = path.join(audioDir, filename);
    
    if (fs.existsSync(filePath)) {
      results.push({ moduleId, status: 'cached' });
      continue;
    }

    try {
      await generateSpeech(text.trim(), filename);
      results.push({ moduleId, status: 'generated' });
    } catch (error) {
      results.push({ moduleId, status: 'error', message: error.message });
    }
  }

  res.json({ results });
});

module.exports = router;
