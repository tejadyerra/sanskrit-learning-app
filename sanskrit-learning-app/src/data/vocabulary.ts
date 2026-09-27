export interface VocabularyItem {
  id: string;
  sanskrit: string;
  iast: string;
  telugu: string;
  english: string;
  category: 'word' | 'phrase' | 'sentence';
  level: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  audio?: string;
}

export const vocabularyData: VocabularyItem[] = [
  // Basic Words - Beginner
  {
    id: 'w1',
    sanskrit: 'नमस्ते',
    iast: 'namaste',
    telugu: 'నమస్తే',
    english: 'Hello / Greetings',
    category: 'word',
    level: 'beginner',
    tags: ['greeting', 'daily']
  },
  {
    id: 'w2',
    sanskrit: 'धन्यवाद',
    iast: 'dhanyavaada',
    telugu: 'ధన్యవాదాలు',
    english: 'Thank you',
    category: 'word',
    level: 'beginner',
    tags: ['gratitude', 'daily']
  },
  {
    id: 'w3',
    sanskrit: 'क्षम्यताम्',
    iast: 'kshamyataam',
    telugu: 'క్షమాపణ',
    english: 'Sorry / Excuse me',
    category: 'word',
    level: 'beginner',
    tags: ['apology', 'daily']
  },
  {
    id: 'w4',
    sanskrit: 'हाँ',
    iast: 'haa',
    telugu: 'అవును',
    english: 'Yes',
    category: 'word',
    level: 'beginner',
    tags: ['affirmation', 'daily']
  },
  {
    id: 'w5',
    sanskrit: 'न',
    iast: 'na',
    telugu: 'కాదు',
    english: 'No',
    category: 'word',
    level: 'beginner',
    tags: ['negation', 'daily']
  },
  {
    id: 'w6',
    sanskrit: 'जलम्',
    iast: 'jalam',
    telugu: 'నీరు',
    english: 'Water',
    category: 'word',
    level: 'beginner',
    tags: ['food', 'daily', 'noun']
  },
  {
    id: 'w7',
    sanskrit: 'अन्नम्',
    iast: 'annam',
    telugu: 'అన్నం',
    english: 'Food / Rice',
    category: 'word',
    level: 'beginner',
    tags: ['food', 'daily', 'noun']
  },
  {
    id: 'w8',
    sanskrit: 'फलम्',
    iast: 'phalam',
    telugu: 'పండు',
    english: 'Fruit',
    category: 'word',
    level: 'beginner',
    tags: ['food', 'noun']
  },
  {
    id: 'w9',
    sanskrit: 'पुष्पम्',
    iast: 'pushpam',
    telugu: 'పువ్వు',
    english: 'Flower',
    category: 'word',
    level: 'beginner',
    tags: ['nature', 'noun']
  },
  {
    id: 'w10',
    sanskrit: 'वृक्षः',
    iast: 'vrikshah',
    telugu: 'చెట్టు',
    english: 'Tree',
    category: 'word',
    level: 'beginner',
    tags: ['nature', 'noun']
  },
  {
    id: 'w11',
    sanskrit: 'सूर्यः',
    iast: 'suryah',
    telugu: 'సూర్యుడు',
    english: 'Sun',
    category: 'word',
    level: 'beginner',
    tags: ['nature', 'noun']
  },
  {
    id: 'w12',
    sanskrit: 'चन्द्रः',
    iast: 'chandrah',
    telugu: 'చంద్రుడు',
    english: 'Moon',
    category: 'word',
    level: 'beginner',
    tags: ['nature', 'noun']
  },
  {
    id: 'w13',
    sanskrit: 'गृहम्',
    iast: 'griham',
    telugu: 'ఇల్లు',
    english: 'House / Home',
    category: 'word',
    level: 'beginner',
    tags: ['daily', 'noun']
  },
  {
    id: 'w14',
    sanskrit: 'पुस्तकम्',
    iast: 'pustakam',
    telugu: 'పుస్తకం',
    english: 'Book',
    category: 'word',
    level: 'beginner',
    tags: ['education', 'noun']
  },
  {
    id: 'w15',
    sanskrit: 'विद्यालयः',
    iast: 'vidyalayah',
    telugu: 'పాఠశాల',
    english: 'School',
    category: 'word',
    level: 'beginner',
    tags: ['education', 'noun']
  },

  // Verbs - Beginner
  {
    id: 'w16',
    sanskrit: 'गच्छति',
    iast: 'gacchati',
    telugu: 'వెళ్తాడు/వెళ్తδι',
    english: 'Goes',
    category: 'word',
    level: 'beginner',
    tags: ['verb', 'action']
  },
  {
    id: 'w17',
    sanskrit: 'अगच्छत्',
    iast: 'agacchat',
    telugu: 'వెళ్లాడు/వెళ్లాది',
    english: 'Went',
    category: 'word',
    level: 'beginner',
    tags: ['verb', 'action', 'past']
  },
  {
    id: 'w18',
    sanskrit: 'भोक्ते',
    iast: 'bhokte',
    telugu: 'తిన్నాడు/తిన్నది',
    english: 'Eats',
    category: 'word',
    level: 'beginner',
    tags: ['verb', 'action']
  },
  {
    id: 'w19',
    sanskrit: 'पिबति',
    iast: 'pibati',
    telugu: 'తాగ็ด/తాగది',
    english: 'Drinks',
    category: 'word',
    level: 'beginner',
    tags: ['verb', 'action']
  },
  {
    id: 'w20',
    sanskrit: 'पठति',
    iast: 'pathati',
    telugu: 'చదువుకుంటాడు/చదువుకుంటది',
    english: 'Reads / Studies',
    category: 'word',
    level: 'beginner',
    tags: ['verb', 'action', 'education']
  },
  {
    id: 'w21',
    sanskrit: 'लिखति',
    iast: 'likhati',
    telugu: 'రాస్తాడు/రాస్తది',
    english: 'Writes',
    category: 'word',
    level: 'beginner',
    tags: ['verb', 'action', 'education']
  },
  {
    id: 'w22',
    sanskrit: 'वदति',
    iast: 'vadati',
    telugu: 'మాట్లాడతాడు/మాట్లాడతది',
    english: 'Speaks',
    category: 'word',
    level: 'beginner',
    tags: ['verb', 'action']
  },
  {
    id: 'w23',
    sanskrit: 'शृणोति',
    iast: 'shriyoti',
    telugu: 'వింటాడు/వింటది',
    english: 'Listens',
    category: 'word',
    level: 'beginner',
    tags: ['verb', 'action']
  },
  {
    id: 'w24',
    sanskrit: 'निद्रां याति',
    iast: 'nidraam yaati',
    telugu: 'పడుకుంటాడు/పడుకుంటది',
    english: 'Sleeps',
    category: 'word',
    level: 'beginner',
    tags: ['verb', 'action']
  },
  {
    id: 'w25',
    sanskrit: 'उत्थाति',
    iast: 'utthati',
    telugu: 'ఏржаొప్పాడు/ఏржаొప్పది',
    english: 'Wakes up / Rises',
    category: 'word',
    level: 'beginner',
    tags: ['verb', 'action']
  },

  // Numbers - Beginner
  {
    id: 'w26',
    sanskrit: 'एकम्',
    iast: 'ekam',
    telugu: 'ఒకటి',
    english: 'One',
    category: 'word',
    level: 'beginner',
    tags: ['number']
  },
  {
    id: 'w27',
    sanskrit: 'द्वे',
    iast: 'dve',
    telugu: 'రెండు',
    english: 'Two',
    category: 'word',
    level: 'beginner',
    tags: ['number']
  },
  {
    id: 'w28',
    sanskrit: 'त्रीणि',
    iast: 'trini',
    telugu: 'మూడు',
    english: 'Three',
    category: 'word',
    level: 'beginner',
    tags: ['number']
  },
  {
    id: 'w29',
    sanskrit: 'चत्वारि',
    iast: 'chatvari',
    telugu: 'నాలుగు',
    english: 'Four',
    category: 'word',
    level: 'beginner',
    tags: ['number']
  },
  {
    id: 'w30',
    sanskrit: 'पञ्च',
    iast: 'pancha',
    telugu: 'ఐదు',
    english: 'Five',
    category: 'word',
    level: 'beginner',
    tags: ['number']
  },

  // Family - Beginner
  {
    id: 'w31',
    sanskrit: 'पिता',
    iast: 'pita',
    telugu: 'తండ్రి',
    english: 'Father',
    category: 'word',
    level: 'beginner',
    tags: ['family', 'noun']
  },
  {
    id: 'w32',
    sanskrit: 'माता',
    iast: 'mata',
    telugu: 'తల్లి',
    english: 'Mother',
    category: 'word',
    level: 'beginner',
    tags: ['family', 'noun']
  },
  {
    id: 'w33',
    sanskrit: 'भ्राता',
    iast: 'bhrata',
    telugu: 'అన్న',
    english: 'Brother',
    category: 'word',
    level: 'beginner',
    tags: ['family', 'noun']
  },
  {
    id: 'w34',
    sanskrit: 'भगिनी',
    iast: 'bhagini',
    telugu: 'చెల్లి',
    english: 'Sister',
    category: 'word',
    level: 'beginner',
    tags: ['family', 'noun']
  },
  {
    id: 'w35',
    sanskrit: 'पुत्रः',
    iast: 'putrah',
    telugu: 'కొడుకు',
    english: 'Son',
    category: 'word',
    level: 'beginner',
    tags: ['family', 'noun']
  },
  {
    id: 'w36',
    sanskrit: 'पुत्री',
    iast: 'putri',
    telugu: 'కోతురు',
    english: 'Daughter',
    category: 'word',
    level: 'beginner',
    tags: ['family', 'noun']
  },

  // Phrases - Intermediate
  {
    id: 'p1',
    sanskrit: 'सुप्रभातम्',
    iast: 'suprabhatam',
    telugu: 'శుభోదయం',
    english: 'Good morning',
    category: 'phrase',
    level: 'intermediate',
    tags: ['greeting', 'daily']
  },
  {
    id: 'p2',
    sanskrit: 'शुभरात्रिः',
    iast: 'shubharatrih',
    telugu: 'శుభ రాత్రి',
    english: 'Good night',
    category: 'phrase',
    level: 'intermediate',
    tags: ['greeting', 'daily']
  },
  {
    id: 'p3',
    sanskrit: 'कथं अस्ति भवत्?',
    iast: 'katham asti bhavat?',
    telugu: 'మీరు ఎలా ఉన్నారు?',
    english: 'How are you?',
    category: 'phrase',
    level: 'intermediate',
    tags: ['greeting', 'daily', 'question']
  },
  {
    id: 'p4',
    sanskrit: 'अहं कुशली अस्मि',
    iast: 'aham kushali asmi',
    telugu: 'నేను బాగున్నాను',
    english: 'I am fine',
    category: 'phrase',
    level: 'intermediate',
    tags: ['response', 'daily']
  },
  {
    id: 'p5',
    sanskrit: 'भवतः नाम किम्?',
    iast: 'bhavatah nama kim?',
    telugu: 'మీ పేరు ఏమిటి?',
    english: 'What is your name?',
    category: 'phrase',
    level: 'intermediate',
    tags: ['question', 'introduction']
  },
  {
    id: 'p6',
    sanskrit: 'मम नाम ... अस्ति',
    iast: 'mama nama ... asti',
    telugu: 'నా పేరు ...',
    english: 'My name is ...',
    category: 'phrase',
    level: 'intermediate',
    tags: ['response', 'introduction']
  },
  {
    id: 'p7',
    sanskrit: 'क्व गच्छसि?',
    iast: 'kva gacchasi?',
    telugu: 'నువ్వు ఎక్కడ వెళ్తావు?',
    english: 'Where are you going?',
    category: 'phrase',
    level: 'intermediate',
    tags: ['question', 'daily']
  },
  {
    id: 'p8',
    sanskrit: 'अहं विद्यालयं गच्छामि',
    iast: 'aham vidyalayam gacchami',
    telugu: 'నేను పాఠశాలకు వెళ్తున్నాను',
    english: 'I am going to school',
    category: 'phrase',
    level: 'intermediate',
    tags: ['response', 'daily', 'education']
  },
  {
    id: 'p9',
    sanskrit: 'किम् पिबसि?',
    iast: 'kim pibasi?',
    telugu: 'నువ్వు ఏమి ತాగుతావు?',
    english: 'What are you drinking?',
    category: 'phrase',
    level: 'intermediate',
    tags: ['question', 'food']
  },
  {
    id: 'p10',
    sanskrit: 'अहं जलं पिबामि',
    iast: 'aham jalam pibami',
    telugu: 'నేను నీరు తాగుతున్నాను',
    english: 'I am drinking water',
    category: 'phrase',
    level: 'intermediate',
    tags: ['response', 'food']
  },

  // Daily Usage Sentences - Intermediate
  {
    id: 's1',
    sanskrit: 'अहं प्रतिदिनम् उत्थामि',
    iast: 'aham pratidinam utthami',
    telugu: 'నేను రోజునేరు ఉత్సాహంగా ఏర్పడతాను',
    english: 'I wake up every day',
    category: 'sentence',
    level: 'intermediate',
    tags: ['daily', 'routine']
  },
  {
    id: 's2',
    sanskrit: 'सूर्योदयेऽहं स्नानं कुर्वे',
    iast: 'suryodaye aham snanam kurve',
    telugu: 'ఉదయానంలో నేను స్నానం చేస్తాను',
    english: 'I take a bath at sunrise',
    category: 'sentence',
    level: 'intermediate',
    tags: ['daily', 'routine']
  },
  {
    id: 's3',
    sanskrit: 'प्रातः अहं पठामि',
    iast: 'pratah aham pathami',
    telugu: 'ఉదయానంలో నేను చదువుతాను',
    english: 'I study in the morning',
    category: 'sentence',
    level: 'intermediate',
    tags: ['daily', 'education', 'routine']
  },
  {
    id: 's4',
    sanskrit: 'मध्याह्ने अहं भोक्ते',
    iast: 'madhyahne aham bhokte',
    telugu: 'మధ్యాహ్నంలో నేను భోజనం చేస్తాను',
    english: 'I eat lunch at noon',
    category: 'sentence',
    level: 'intermediate',
    tags: ['daily', 'food', 'routine']
  },
  {
    id: 's5',
    sanskrit: 'सायं अहं क्रीडामि',
    iast: 'sayam aham kridami',
    telugu: 'సాయంత్రం నేను ఆడుతాను',
    english: 'I play in the evening',
    category: 'sentence',
    level: 'intermediate',
    tags: ['daily', 'routine']
  },
  {
    id: 's6',
    sanskrit: 'रात्रौ अहं निद्रां यामि',
    iast: 'ratrau aham nidraam yaami',
    telugu: 'రాత్రి సమయంలో నేను నిద్ర పొందుతాను',
    english: 'I sleep at night',
    category: 'sentence',
    level: 'intermediate',
    tags: ['daily', 'routine']
  },
  {
    id: 's7',
    sanskrit: 'अहं संस्कृतं पठामि',
    iast: 'aham samskritam pathami',
    telugu: 'నేను సంస్కృతాన్ని చదువుతాను',
    english: 'I study Sanskrit',
    category: 'sentence',
    level: 'intermediate',
    tags: ['education', 'daily']
  },
  {
    id: 's8',
    sanskrit: 'गुरुः अस्माकं पठयति',
    iast: 'guruh asmakan pathayati',
    telugu: 'గురు మాకు బోధిస్తారు',
    english: 'The teacher teaches us',
    category: 'sentence',
    level: 'intermediate',
    tags: ['education']
  },
  {
    id: 's9',
    sanskrit: 'मम मातरं वन्दे',
    iast: 'mama mataram vande',
    telugu: 'నేను నా తల్లిని వందిస్తాను',
    english: 'I salute my mother',
    category: 'sentence',
    level: 'intermediate',
    tags: ['family', 'daily', 'respect']
  },
  {
    id: 's10',
    sanskrit: 'पितरं च मातरं च नमामि',
    iast: 'pitaram ca mataram ca namami',
    telugu: 'నాను తండ్రిని, తల్లిని నమిస్తాను',
    english: 'I bow to both father and mother',
    category: 'sentence',
    level: 'intermediate',
    tags: ['family', 'respect']
  },

  // Advanced Sentences
  {
    id: 's11',
    sanskrit: 'धर्मो रक्षति रक्षितः',
    iast: 'dharmo rakshati rakshitah',
    telugu: 'ధర్మం రక్షించేవారిని రక్షిస్తుంది',
    english: 'Dharma protects those who protect it',
    category: 'sentence',
    level: 'advanced',
    tags: ['wisdom', 'philosophy']
  },
  {
    id: 's12',
    sanskrit: 'सत्यमेव जयते',
    iast: 'satyameva jayate',
    telugu: 'సత్యమేవ జయతే',
    english: 'Truth alone triumphs',
    category: 'sentence',
    level: 'advanced',
    tags: ['wisdom', 'motto']
  },
  {
    id: 's13',
    sanskrit: 'वसुधैव कुटुम्बकम्',
    iast: 'vasudhaiva kutumbakam',
    telugu: 'వసుధైవ కുടుంబకం',
    english: 'The world is one family',
    category: 'sentence',
    level: 'advanced',
    tags: ['wisdom', 'philosophy']
  },
  {
    id: 's14',
    sanskrit: 'अहिंसा परमो धर्मः',
    iast: 'ahimsa paramo dharmah',
    telugu: 'అహింస పరమో ధర్మః',
    english: 'Non-violence is the highest dharma',
    category: 'sentence',
    level: 'advanced',
    tags: ['wisdom', 'philosophy']
  },
  {
    id: 's15',
    sanskrit: 'विद्या ददाति विनयम्',
    iast: 'vidya dadati vinayam',
    telugu: 'విద్యా దదాతి వినయం',
    english: 'Knowledge gives humility',
    category: 'sentence',
    level: 'advanced',
    tags: ['wisdom', 'education']
  },
  {
    id: 's16',
    sanskrit: 'योगः कर्मसु कौशलम्',
    iast: 'yogah karmasu kaushalam',
    telugu: 'యోగః কর্মసు కౌశలం',
    english: 'Yoga is excellence in action',
    category: 'sentence',
    level: 'advanced',
    tags: ['wisdom', 'philosophy']
  },

  // Food & Daily Items - Beginner/Intermediate
  {
    id: 'w37',
    sanskrit: 'दुग्धम्',
    iast: 'dugdham',
    telugu: 'పాలు',
    english: 'Milk',
    category: 'word',
    level: 'beginner',
    tags: ['food', 'daily', 'noun']
  },
  {
    id: 'w38',
    sanskrit: 'घृतम्',
    iast: 'ghritam',
    telugu: 'నెయ್ಯి',
    english: 'Ghee',
    category: 'word',
    level: 'beginner',
    tags: ['food', 'noun']
  },
  {
    id: 'w39',
    sanskrit: 'मधु',
    iast: 'madhu',
    telugu: 'తేనె',
    english: 'Honey',
    category: 'word',
    level: 'beginner',
    tags: ['food', 'noun']
  },
  {
    id: 'w40',
    sanskrit: 'शाकम्',
    iast: 'shakam',
    telugu: 'కూరగాయలు',
    english: 'Vegetables',
    category: 'word',
    level: 'beginner',
    tags: ['food', 'noun']
  },
  {
    id: 'w41',
    sanskrit: 'मांसम्',
    iast: 'maamsam',
    telugu: 'మాంసం',
    english: 'Meat',
    category: 'word',
    level: 'beginner',
    tags: ['food', 'noun']
  },
  {
    id: 'w42',
    sanskrit: 'मछ्ली',
    iast: 'machhli',
    telugu: 'చేప',
    english: 'Fish',
    category: 'word',
    level: 'beginner',
    tags: ['food', 'noun']
  },

  // Time - Intermediate
  {
    id: 'w43',
    sanskrit: 'प्रातः',
    iast: 'pratah',
    telugu: 'ఉదయం',
    english: 'Morning',
    category: 'word',
    level: 'intermediate',
    tags: ['time', 'daily']
  },
  {
    id: 'w44',
    sanskrit: 'मध्याह्नम्',
    iast: 'madhyahnam',
    telugu: 'మధ్యాహ్నం',
    english: 'Noon',
    category: 'word',
    level: 'intermediate',
    tags: ['time', 'daily']
  },
  {
    id: 'w45',
    sanskrit: 'सायम्',
    iast: 'sayam',
    telugu: 'సాయంత్రం',
    english: 'Evening',
    category: 'word',
    level: 'intermediate',
    tags: ['time', 'daily']
  },
  {
    id: 'w46',
    sanskrit: 'रात्रिः',
    iast: 'ratrih',
    telugu: 'రాత్రి',
    english: 'Night',
    category: 'word',
    level: 'intermediate',
    tags: ['time', 'daily']
  },
  {
    id: 'w47',
    sanskrit: 'अद्य',
    iast: 'adya',
    telugu: 'ఈరోజు',
    english: 'Today',
    category: 'word',
    level: 'intermediate',
    tags: ['time', 'daily']
  },
  {
    id: 'w48',
    sanskrit: 'श्वः',
    iast: 'shvah',
    telugu: 'రేపు',
    english: 'Tomorrow',
    category: 'word',
    level: 'intermediate',
    tags: ['time', 'daily']
  },
  {
    id: 'w49',
    sanskrit: 'ह्यः',
    iast: 'hyah',
    telugu: 'నిన్న',
    english: 'Yesterday',
    category: 'word',
    level: 'intermediate',
    tags: ['time', 'daily']
  },

  // Common Phrases for Daily Use
  {
    id: 'p11',
    sanskrit: 'कृपया सहाय्य कुरु',
    iast: 'kripaya sahayyam kuru',
    telugu: 'దయచేసి సహాయం చేయండి',
    english: 'Please help',
    category: 'phrase',
    level: 'intermediate',
    tags: ['request', 'daily']
  },
  {
    id: 'p12',
    sanskrit: 'किम् अत्र अस्ति?',
    iast: 'kim atra asti?',
    telugu: 'ఇక్కడ ఏమి ఉంది?',
    english: 'What is here?',
    category: 'phrase',
    level: 'intermediate',
    tags: ['question', 'daily']
  },
  {
    id: 'p13',
    sanskrit: 'अत्र पुष्पाणि सन्ति',
    iast: 'atra pushpani santi',
    telugu: 'ఇక్కడ పువ్వులు ఉన్నాయి',
    english: 'There are flowers here',
    category: 'phrase',
    level: 'intermediate',
    tags: ['response', 'nature']
  },
  {
    id: 'p14',
    sanskrit: 'शुभं भवतु',
    iast: 'shubham bhavatu',
    telugu: 'శుభమవుతుంది',
    english: 'Let it be auspicious / All the best',
    category: 'phrase',
    level: 'intermediate',
    tags: ['blessing', 'daily']
  },
  {
    id: 'p15',
    sanskrit: 'धन्योस्मि',
    iast: 'dhanyosmi',
    telugu: 'నేను ధన్యుని',
    english: 'I am grateful / blessed',
    category: 'phrase',
    level: 'intermediate',
    tags: ['gratitude', 'daily']
  }
];

export const categories = [
  { id: 'all', label: 'All', icon: '📚' },
  { id: 'word', label: 'Words', icon: '📝' },
  { id: 'phrase', label: 'Phrases', icon: '💬' },
  { id: 'sentence', label: 'Sentences', icon: '📖' }
] as const;

export const levels = [
  { id: 'all', label: 'All Levels' },
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' }
] as const;