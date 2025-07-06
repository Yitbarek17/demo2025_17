import express from 'express';

const router = express.Router();

// Metadata - Updated with more comprehensive sub-sectors
const metadata = {
  regions: [
    'Addis Ababa', 'Afar', 'Amhara', 'Benishangul-Gumuz', 'Dire Dawa',
    'Gambela', 'Harari', 'Oromia', 'Sidama', 'SNNP', 'Somali', 'Tigray', 'Southwest', 'Central Ethiopia'
  ],
  sectors: ['Health', 'Industry', 'Agriculture'],
  subSectors: [
    'Agroprocessing', 'Food and Beverage', 'Construction and Engineering',
    'Chemical and Detergents', 'Textile and Garment', 'Multi-Sectorial', 
    'Minerals', 'Livestock Development', 'Tourism and Hospitality', 
    'Information Technology', 'Other'
  ],
  projectStatuses: ['Planning', 'In Progress', 'Completed', 'On Hold', 'Cancelled']
};

// Get metadata
router.get('/', (req, res) => {
  res.json(metadata);
});

export default router;