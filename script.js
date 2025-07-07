// Mero School JavaScript

// Global variables
let currentLanguage = 'en';
let currentUser = null;
let uploadedFiles = [];

// Language translations
const translations = {
    en: {
        'Mero School': 'Mero School',
        'मेरो स्कूल': 'Mero School',
        'Home': 'Home',
        'गृह': 'Home',
        'Services': 'Services',
        'सेवाहरू': 'Services',
        'Dashboard': 'Dashboard',
        'ड्यासबोर्ड': 'Dashboard',
        'Calculator': 'Calculator',
        'क्यालकुलेटर': 'Calculator',
        'Login': 'Login',
        'लगइन': 'Login',
        'Sign Up': 'Sign Up',
        'साइनअप': 'Sign Up',
        'Account': 'Account',
        'खाता': 'Account',
        'Welcome to Mero School': 'Welcome to Mero School',
        'मेरो स्कूलमा स्वागत छ': 'Welcome to Mero School',
        'Start your educational journey here. Access materials and resources for classes 1 to 10.': 'Start your educational journey here. Access materials and resources for classes 1 to 10.',
        'आफ्नो शिक्षा यात्रा यहाँ सुरु गर्नुहोस्। कक्षा १ देखि १० सम्मको सामग्री र स्रोतहरू।': 'Start your educational journey here. Access materials and resources for classes 1 to 10.',
        'Get Started': 'Get Started',
        'सुरु गर्नुहोस्': 'Get Started',
        'Our Features': 'Our Features',
        'हाम्रो विशेषताहरू': 'Our Features',
        'Digital resources to enhance your learning experience': 'Digital resources to enhance your learning experience',
        'आफ्नो शिक्षा अनुभवलाई बढाउनको लागि डिजिटल स्रोतहरू': 'Digital resources to enhance your learning experience',
        'Classes 1-10': 'Classes 1-10',
        'कक्षा १-१०': 'Classes 1-10',
        'Organized content and resources for all classes': 'Organized content and resources for all classes',
        'सबै कक्षाको लागि व्यवस्थित सामग्री र स्रोतहरू': 'Organized content and resources for all classes',
        'File Upload': 'File Upload',
        'फाइल अपलोड': 'File Upload',
        'Upload photos, videos, text files, and PDFs': 'Upload photos, videos, text files, and PDFs',
        'फोटो, भिडियो, पाठ र PDF फाइलहरू अपलोड गर्नुहोस्': 'Upload photos, videos, text files, and PDFs',
        'Calculator': 'Calculator',
        'क्यालकुलेटर': 'Calculator',
        'Do math with our built-in calculator': 'Do math with our built-in calculator',
        'अन्तर्निहित क्यालकुलेटर सँग गणित गर्नुहोस्': 'Do math with our built-in calculator',
        'Username': 'Username',
        'प्रयोगकर्ता नाम': 'Username',
        'Password': 'Password',
        'पासवर्ड': 'Password',
        'Email': 'Email',
        'इमेल': 'Email',
        'Sign in to your account': 'Sign in to your account',
        'आफ्नो खातामा लगइन गर्नुहोस्': 'Sign in to your account',
        'Create a new account': 'Create a new account',
        'नयाँ खाता सिर्जना गर्नुहोस्': 'Create a new account',
        'Use at least 6 characters': 'Use at least 6 characters',
        'कम्तिमा ६ अक्षरको पासवर्ड प्रयोग गर्नुहोस्': 'Use at least 6 characters',
        'Create Account': 'Create Account',
        'खाता सिर्जना गर्नुहोस्': 'Create Account',
        'Don\'t have an account?': 'Don\'t have an account?',
        'खाता छैन?': 'Don\'t have an account?',
        'Already have an account?': 'Already have an account?',
        'पहिले नै खाता छ?': 'Already have an account?',
        'Welcome': 'Welcome',
        'स्वागत छ': 'Welcome',
        'Continue your educational journey. Choose your classes and subjects.': 'Continue your educational journey. Choose your classes and subjects.',
        'आफ्नो शिक्षा यात्रा जारी राख्नुहोस्। कक्षा र विषयहरू छान्नुहोस्।': 'Continue your educational journey. Choose your classes and subjects.',
        'Classes': 'Classes',
        'कक्षाहरू': 'Classes',
        'Class': 'Class',
        'कक्षा': 'Class',
        'Enter': 'Enter',
        'प्रवेश गर्नुहोस्': 'Enter',
        'Clear': 'Clear',
        'सफा गर्नुहोस्': 'Clear',
        'Our Services': 'Our Services',
        'हाम्रो सेवाहरू': 'Our Services',
        'Comprehensive educational services for students': 'Comprehensive educational services for students',
        'विद्यार्थीहरूको लागि व्यापक शैक्षिक सेवाहरू': 'Comprehensive educational services for students',
        'Study Materials': 'Study Materials',
        'अध्ययन सामग्री': 'Study Materials',
        'Access comprehensive study materials for all subjects': 'Access comprehensive study materials for all subjects',
        'सबै विषयहरूको लागि व्यापक अध्ययन सामग्री': 'Access comprehensive study materials for all subjects',
        'Video Lessons': 'Video Lessons',
        'भिडियो पाठहरू': 'Video Lessons',
        'Watch educational videos and tutorials': 'Watch educational videos and tutorials',
        'शैक्षिक भिडियो र ट्युटोरियलहरू हेर्नुहोस्': 'Watch educational videos and tutorials',
        'PDF Resources': 'PDF Resources',
        'PDF स्रोतहरू': 'PDF Resources',
        'Download PDF documents and study guides': 'Download PDF documents and study guides',
        'PDF कागजातहरू र अध्ययन गाइडहरू डाउनलोड गर्नुहोस्': 'Download PDF documents and study guides',
        'Contact': 'Contact',
        'सम्पर्क': 'Contact',
        'Start your educational journey here': 'Start your educational journey here',
        'आफ्नो शिक्षा यात्रा यहाँ सुरु गर्नुहोस्': 'Start your educational journey here',
        'Welcome to Class': 'Welcome to Class',
        'कक्षामा स्वागत छ': 'Welcome to Class',
        'Welcome, Student!': 'Welcome, Student!',
        'स्वागत छ, विद्यार्थी!': 'Welcome, Student!',
        'Compulsory Subjects': 'Compulsory Subjects',
        'अनिवार्य विषयहरू': 'Compulsory Subjects',
        'These are the core subjects for your class level': 'These are the core subjects for your class level',
        'यी तपाईंको कक्षा स्तरका मुख्य विषयहरू हुन्': 'These are the core subjects for your class level',
        'Select Your Class': 'Select Your Class',
        'आफ्नो कक्षा छान्नुहोस्': 'Select Your Class',
        'Choose your class to see the recommended subjects and curriculum': 'Choose your class to see the recommended subjects and curriculum',
        'अनुशंसित विषयहरू र पाठ्यक्रम हेर्नको लागि आफ्नो कक्षा छान्नुहोस्': 'Choose your class to see the recommended subjects and curriculum',
        'Selected Class': 'Selected Class',
        'छानिएको कक्षा': 'Selected Class',
        'View Subjects': 'View Subjects',
        'Choose a class...': 'Choose a class...',
        'कक्षा छान्नुहोस्...': 'Choose a class...',
        'विषयहरू हेर्नुहोस्': 'View Subjects',
        'Mero Video Chat': 'Mero Video Chat',
        'मेरो भिडियो च्याट': 'Mero Video Chat',
        'Connect with teachers and classmates through high-quality video chat': 'Connect with teachers and classmates through high-quality video chat',
        'उच्च गुणस्तरको भिडियो च्याट मार्फत शिक्षक र सहपाठीहरूसँग जडान गर्नुहोस्': 'Connect with teachers and classmates through high-quality video chat',
        'Click \'Start Video\' to begin': 'Click \'Start Video\' to begin',
        'सुरु गर्न \'भिडियो सुरु गर्नुहोस्\' क्लिक गर्नुहोस्': 'Click \'Start Video\' to begin',
        'Start Video': 'Start Video',
        'भिडियो सुरु गर्नुहोस्': 'Start Video',
        'Stop Video': 'Stop Video',
        'भिडियो रोक्नुहोस्': 'Stop Video',
        'Start Audio': 'Start Audio',
        'अडियो सुरु गर्नुहोस्': 'Start Audio',
        'Mute Audio': 'Mute Audio',
        'अडियो म्युट गर्नुहोस्': 'Mute Audio',
        'End Call': 'End Call',
        'कल समाप्त गर्नुहोस्': 'End Call',
        'Chat': 'Chat',
        'च्याट': 'Chat',
        'Type your message...': 'Type your message...',
        'आफ्नो सन्देश टाइप गर्नुहोस्...': 'Type your message...',
        'Participants': 'Participants',
        'सहभागीहरू': 'Participants',
        'Room Management': 'Room Management',
        'कोठा व्यवस्थापन': 'Room Management',
        'Room ID': 'Room ID',
        'कोठा आईडी': 'Room ID',
        'Enter room ID': 'Enter room ID',
        'कोठा आईडी प्रविष्ट गर्नुहोस्': 'Enter room ID',
        'Join': 'Join',
        'सामेल हुनुहोस्': 'Join',
        'Create New Room': 'Create New Room',
        'नयाँ कोठा सिर्जना गर्नुहोस्': 'Create New Room',
        'Create Room': 'Create Room',
        'कोठा सिर्जना गर्नुहोस्': 'Create Room',
        'Screen Sharing': 'स्क्रिन शेयरिङ',
        'स्क्रिन शेयरिङ': 'स्क्रिन शेयरिङ',
        'Share Screen': 'स्क्रिन शेयर गर्नुहोस्',
        'स्क्रिन शेयर गर्नुहोस्': 'स्क्रिन शेयर गर्नुहोस्',
        'Stop Sharing': 'शेयरिङ रोक्नुहोस्',
        'शेयरिङ रोक्नुहोस्': 'शेयरिङ रोक्नुहोस्',
        'Interactive Whiteboard': 'इन्टरएक्टिभ वाइटबोर्ड',
        'इन्टरएक्टिभ वाइटबोर्ड': 'इन्टरएक्टिभ वाइटबोर्ड',
        'Whiteboard': 'वाइटबोर्ड',
        'वाइटबोर्ड': 'वाइटबोर्ड',
        'Close Board': 'बोर्ड बन्द गर्नुहोस्',
        'बोर्ड बन्द गर्नुहोस्': 'बोर्ड बन्द गर्नुहोस्',
        'Slides': 'स्लाइडहरू',
        'स्लाइडहरू': 'स्लाइडहरू',
        'Homework': 'गृहकार्य',
        'गृहकार्य': 'गृहकार्य',
        'Animations': 'एनिमेसनहरू',
        'एनिमेसनहरू': 'एनिमेसनहरू',
        'Presentation Slides': 'प्रेजेन्टेसन स्लाइडहरू',
        'प्रेजेन्टेसन स्लाइडहरू': 'प्रेजेन्टेसन स्लाइडहरू',
        'Previous': 'अघिल्लो',
        'अघिल्लो': 'अघिल्लो',
        'Next': 'अर्को',
        'अर्को': 'अर्को',
        'Slide': 'स्लाइड',
        'स्लाइड': 'स्लाइड',
        'Share Slide': 'स्लाइड शेयर गर्नुहोस्',
        'स्लाइड शेयर गर्नुहोस्': 'स्लाइड शेयर गर्नुहोस्',
        'Student Homework': 'विद्यार्थी गृहकार्य',
        'विद्यार्थी गृहकार्य': 'विद्यार्थी गृहकार्य',
        'All Students': 'सबै विद्यार्थीहरू',
        'सबै विद्यार्थीहरू': 'सबै विद्यार्थीहरू',
        'Pending': 'पेन्डिङ',
        'पेन्डिङ': 'पेन्डिङ',
        'Completed': 'पूरा भएको',
        'पूरा भएको': 'पूरा भएको',
        'Grade Homework': 'गृहकार्य मूल्याङ्कन गर्नुहोस्',
        'गृहकार्य मूल्याङ्कन गर्नुहोस्': 'गृहकार्य मूल्याङ्कन गर्नुहोस्',
        'View': 'हेर्नुहोस्',
        'हेर्नुहोस्': 'हेर्नुहोस्',
        'Grade': 'मूल्याङ्कन',
        'मूल्याङ्कन': 'मूल्याङ्कन',
        'Educational Animations': 'शैक्षिक एनिमेसनहरू',
        'शैक्षिक एनिमेसनहरू': 'शैक्षिक एनिमेसनहरू',
        'Math': 'गणित',
        'गणित': 'गणित',
        'Science': 'विज्ञान',
        'विज्ञान': 'विज्ञान',
        'English': 'अंग्रेजी',
        'अंग्रेजी': 'अंग्रेजी',
        'Nepali': 'नेपाली',
        'नेपाली': 'नेपाली',
        'Play': 'चलाउनुहोस्',
        'चलाउनुहोस्': 'चलाउनुहोस्',
        'Pause': 'रोक्नुहोस्',
        'रोक्नुहोस्': 'रोक्नुहोस्',
        'Reset': 'रीसेट',
        'रीसेट': 'रीसेट',
        'Share Animation': 'एनिमेसन शेयर गर्नुहोस्',
        'एनिमेसन शेयर गर्नुहोस्': 'एनिमेसन शेयर गर्नुहोस्',
        'Screen Sharing': 'Screen Sharing',
        'स्क्रिन शेयरिङ': 'Screen Sharing',
        'Share Screen': 'Share Screen',
        'स्क्रिन शेयर गर्नुहोस्': 'Share Screen',
        'Stop Sharing': 'Stop Sharing',
        'शेयरिङ रोक्नुहोस्': 'Stop Sharing',
        'Interactive Whiteboard': 'Interactive Whiteboard',
        'इन्टरएक्टिभ वाइटबोर्ड': 'Interactive Whiteboard',
        'Whiteboard': 'Whiteboard',
        'वाइटबोर्ड': 'Whiteboard',
        'Close Board': 'Close Board',
        'बोर्ड बन्द गर्नुहोस्': 'Close Board',
        'Slides': 'Slides',
        'स्लाइडहरू': 'Slides',
        'Homework': 'Homework',
        'गृहकार्य': 'Homework',
        'Animations': 'Animations',
        'एनिमेसनहरू': 'Animations',
        'Presentation Slides': 'Presentation Slides',
        'प्रेजेन्टेसन स्लाइडहरू': 'Presentation Slides',
        'Previous': 'Previous',
        'अघिल्लो': 'Previous',
        'Next': 'Next',
        'अर्को': 'Next',
        'Slide': 'Slide',
        'स्लाइड': 'Slide',
        'Share Slide': 'Share Slide',
        'स्लाइड शेयर गर्नुहोस्': 'Share Slide',
        'Student Homework': 'Student Homework',
        'विद्यार्थी गृहकार्य': 'Student Homework',
        'All Students': 'All Students',
        'सबै विद्यार्थीहरू': 'All Students',
        'Pending': 'Pending',
        'पेन्डिङ': 'Pending',
        'Completed': 'Completed',
        'पूरा भएको': 'Completed',
        'Grade Homework': 'Grade Homework',
        'गृहकार्य मूल्याङ्कन गर्नुहोस्': 'Grade Homework',
        'View': 'View',
        'हेर्नुहोस्': 'View',
        'Grade': 'Grade',
        'मूल्याङ्कन': 'Grade',
        'Educational Animations': 'Educational Animations',
        'शैक्षिक एनिमेसनहरू': 'Educational Animations',
        'Math': 'Math',
        'गणित': 'Math',
        'Science': 'Science',
        'विज्ञान': 'Science',
        'English': 'English',
        'अंग्रेजी': 'English',
        'Nepali': 'Nepali',
        'नेपाली': 'Nepali',
        'Play': 'Play',
        'चलाउनुहोस्': 'Play',
        'Pause': 'Pause',
        'रोक्नुहोस्': 'Pause',
        'Reset': 'Reset',
        'रीसेट': 'Reset',
        'Share Animation': 'Share Animation',
        'एनिमेसन शेयर गर्नुहोस्': 'Share Animation',
        'Delete Material': 'Delete Material',
        'सामग्री मेटाउनुहोस्': 'Delete Material',
        'Delete Homework': 'Delete Homework',
        'गृहकार्य मेटाउनुहोस्': 'Delete Homework',
        'Material deleted successfully!': 'Material deleted successfully!',
        'सामग्री सफलतापूर्वक मेटाइयो!': 'Material deleted successfully!',
        'Homework deleted successfully!': 'Homework deleted successfully!',
        'गृहकार्य सफलतापूर्वक मेटाइयो!': 'Homework deleted successfully!',
        'View Material': 'View Material',
        'सामग्री हेर्नुहोस्': 'View Material',
        'Edit Material': 'Edit Material',
        'सामग्री सम्पादन गर्नुहोस्': 'Edit Material',
        'Update Material': 'Update Material',
        'सामग्री अपडेट गर्नुहोस्': 'Update Material',
        'Share Material': 'Share Material',
        'सामग्री शेयर गर्नुहोस्': 'Share Material',
        'Close': 'Close',
        'बन्द गर्नुहोस्': 'Close',
        'Edit': 'Edit',
        'सम्पादन गर्नुहोस्': 'Edit',
        'Share': 'Share',
        'शेयर गर्नुहोस्': 'Share',
        'Material Details': 'Material Details',
        'सामग्री विवरण': 'Material Details',
        'Type': 'Type',
        'प्रकार': 'Type',
        'Added': 'Added',
        'थपियो': 'Added',
        'Attached File': 'Attached File',
        'संलग्न फाइल': 'Attached File',
        'Download': 'Download',
        'डाउनलोड': 'Download',
        'Share via:': 'Share via:',
        'यस मार्फत शेयर गर्नुहोस्:': 'Share via:',
        'Email': 'Email',
        'इमेल': 'Email',
        'WhatsApp': 'WhatsApp',
        'व्हाट्सएप': 'WhatsApp',
        'Copy Link': 'Copy Link',
        'लिङ्क कपी गर्नुहोस्': 'Copy Link',
        'Share with specific students:': 'Share with specific students:',
        'विशेष विद्यार्थीहरूसँग शेयर गर्नुहोस्:': 'Share with specific students:',
        'Select a student...': 'Select a student...',
        'विद्यार्थी छान्नुहोस्...': 'Select a student...',
        'Material updated successfully!': 'Material updated successfully!',
        'सामग्री सफलतापूर्वक अपडेट गरियो!': 'Material updated successfully!',
        'Email application opened!': 'Email application opened!',
        'इमेल एप्लिकेसन खुल्यो!': 'Email application opened!',
        'WhatsApp opened!': 'WhatsApp opened!',
        'व्हाट्सएप खुल्यो!': 'WhatsApp opened!',
        'Link copied to clipboard!': 'Link copied to clipboard!',
        'लिङ्क क्लिपबोर्डमा कपी गरियो!': 'Link copied to clipboard!',
        'Please select a student!': 'Please select a student!',
        'कृपया विद्यार्थी छान्नुहोस्!': 'Please select a student!',
        'shared with': 'shared with',
        'सँग शेयर गरियो': 'shared with',
        'Download started for': 'Download started for',
        'डाउनलोड सुरु भयो': 'Download started for',
        'Image Preview': 'Image Preview',
        'छवि पूर्वावलोकन': 'Image Preview',
        'Video Player': 'Video Player',
        'भिडियो प्लेयर': 'Video Player',
        'PDF Document': 'PDF Document',
        'PDF कागजात': 'PDF Document',
        'Word Document': 'Word Document',
        'वर्ड कागजात': 'Word Document',
        'Excel Spreadsheet': 'Excel Spreadsheet',
        'एक्सेल स्प्रेडशिट': 'Excel Spreadsheet',
        'PowerPoint Presentation': 'PowerPoint Presentation',
        'पावरपोइन्ट प्रेजेन्टेसन': 'PowerPoint Presentation',
        'Text Document': 'Text Document',
        'पाठ कागजात': 'Text Document',
        'File Attachment': 'File Attachment',
        'फाइल संलग्न': 'File Attachment',
        'Open in New Tab': 'Open in New Tab',
        'नयाँ ट्याबमा खोल्नुहोस्': 'Open in New Tab',
        'Your browser does not support the video tag.': 'Your browser does not support the video tag.',
        'तपाईंको ब्राउजरले भिडियो ट्याग समर्थन गर्दैन।': 'Your browser does not support the video tag.',
        'Excel files can be viewed after downloading. Click download to open in Excel.': 'Excel files can be viewed after downloading. Click download to open in Excel.',
        'एक्सेल फाइलहरू डाउनलोड गरेपछि हेर्न सकिन्छ। एक्सेलमा खोल्न डाउनलोड क्लिक गर्नुहोस्।': 'Excel files can be viewed after downloading. Click download to open in Excel.',
        'PowerPoint files can be viewed after downloading. Click download to open in PowerPoint.': 'PowerPoint files can be viewed after downloading. Click download to open in PowerPoint.',
        'पावरपोइन्ट फाइलहरू डाउनलोड गरेपछि हेर्न सकिन्छ। पावरपोइन्टमा खोल्न डाउनलोड क्लिक गर्नुहोस्।': 'PowerPoint files can be viewed after downloading. Click download to open in PowerPoint.',
        'File:': 'File:',
        'फाइल:': 'File:',
        'Type:': 'Type:',
        'प्रकार:': 'Type:',
        'Added:': 'Added:',
        'थपियो:': 'Added:',
        'Class:': 'Class:',
        'कक्षा:': 'Class:',
        'Subject:': 'Subject:',
        'विषय:': 'Subject:',
        'uploaded successfully!': 'uploaded successfully!',
        'सफलतापूर्वक अपलोड गरियो!': 'uploaded successfully!'
    },
    np: {
        'Mero School': 'मेरो स्कूल',
        'मेरो स्कूल': 'मेरो स्कूल',
        'Home': 'गृह',
        'गृह': 'गृह',
        'Services': 'सेवाहरू',
        'सेवाहरू': 'सेवाहरू',
        'Dashboard': 'ड्यासबोर्ड',
        'ड्यासबोर्ड': 'ड्यासबोर्ड',
        'Calculator': 'क्यालकुलेटर',
        'क्यालकुलेटर': 'क्यालकुलेटर',
        'Login': 'लगइन',
        'लगइन': 'लगइन',
        'Sign Up': 'साइनअप',
        'साइनअप': 'साइनअप',
        'Account': 'खाता',
        'खाता': 'खाता',
        'Welcome to Mero School': 'मेरो स्कूलमा स्वागत छ',
        'मेरो स्कूलमा स्वागत छ': 'मेरो स्कूलमा स्वागत छ',
        'Start your educational journey here. Access materials and resources for classes 1 to 10.': 'आफ्नो शिक्षा यात्रा यहाँ सुरु गर्नुहोस्। कक्षा १ देखि १० सम्मको सामग्री र स्रोतहरू।',
        'आफ्नो शिक्षा यात्रा यहाँ सुरु गर्नुहोस्। कक्षा १ देखि १० सम्मको सामग्री र स्रोतहरू।': 'आफ्नो शिक्षा यात्रा यहाँ सुरु गर्नुहोस्। कक्षा १ देखि १० सम्मको सामग्री र स्रोतहरू।',
        'Get Started': 'सुरु गर्नुहोस्',
        'सुरु गर्नुहोस्': 'सुरु गर्नुहोस्',
        'Our Features': 'हाम्रो विशेषताहरू',
        'हाम्रो विशेषताहरू': 'हाम्रो विशेषताहरू',
        'Digital resources to enhance your learning experience': 'आफ्नो शिक्षा अनुभवलाई बढाउनको लागि डिजिटल स्रोतहरू',
        'आफ्नो शिक्षा अनुभवलाई बढाउनको लागि डिजिटल स्रोतहरू': 'आफ्नो शिक्षा अनुभवलाई बढाउनको लागि डिजिटल स्रोतहरू',
        'Classes 1-10': 'कक्षा १-१०',
        'कक्षा १-१०': 'कक्षा १-१०',
        'Organized content and resources for all classes': 'सबै कक्षाको लागि व्यवस्थित सामग्री र स्रोतहरू',
        'सबै कक्षाको लागि व्यवस्थित सामग्री र स्रोतहरू': 'सबै कक्षाको लागि व्यवस्थित सामग्री र स्रोतहरू',
        'File Upload': 'फाइल अपलोड',
        'फाइल अपलोड': 'फाइल अपलोड',
        'Upload photos, videos, text files, and PDFs': 'फोटो, भिडियो, पाठ र PDF फाइलहरू अपलोड गर्नुहोस्',
        'फोटो, भिडियो, पाठ र PDF फाइलहरू अपलोड गर्नुहोस्': 'फोटो, भिडियो, पाठ र PDF फाइलहरू अपलोड गर्नुहोस्',
        'Calculator': 'क्यालकुलेटर',
        'क्यालकुलेटर': 'क्यालकुलेटर',
        'Do math with our built-in calculator': 'अन्तर्निहित क्यालकुलेटर सँग गणित गर्नुहोस्',
        'अन्तर्निहित क्यालकुलेटर सँग गणित गर्नुहोस्': 'अन्तर्निहित क्यालकुलेटर सँग गणित गर्नुहोस्',
        'Username': 'प्रयोगकर्ता नाम',
        'प्रयोगकर्ता नाम': 'प्रयोगकर्ता नाम',
        'Password': 'पासवर्ड',
        'पासवर्ड': 'पासवर्ड',
        'Email': 'इमेल',
        'इमेल': 'इमेल',
        'Sign in to your account': 'आफ्नो खातामा लगइन गर्नुहोस्',
        'आफ्नो खातामा लगइन गर्नुहोस्': 'आफ्नो खातामा लगइन गर्नुहोस्',
        'Create a new account': 'नयाँ खाता सिर्जना गर्नुहोस्',
        'नयाँ खाता सिर्जना गर्नुहोस्': 'नयाँ खाता सिर्जना गर्नुहोस्',
        'Use at least 6 characters': 'कम्तिमा ६ अक्षरको पासवर्ड प्रयोग गर्नुहोस्',
        'कम्तिमा ६ अक्षरको पासवर्ड प्रयोग गर्नुहोस्': 'कम्तिमा ६ अक्षरको पासवर्ड प्रयोग गर्नुहोस्',
        'Create Account': 'खाता सिर्जना गर्नुहोस्',
        'खाता सिर्जना गर्नुहोस्': 'खाता सिर्जना गर्नुहोस्',
        'Don\'t have an account?': 'खाता छैन?',
        'खाता छैन?': 'खाता छैन?',
        'Already have an account?': 'पहिले नै खाता छ?',
        'पहिले नै खाता छ?': 'पहिले नै खाता छ?',
        'Welcome': 'स्वागत छ',
        'स्वागत छ': 'स्वागत छ',
        'Continue your educational journey. Choose your classes and subjects.': 'आफ्नो शिक्षा यात्रा जारी राख्नुहोस्। कक्षा र विषयहरू छान्नुहोस्।',
        'आफ्नो शिक्षा यात्रा जारी राख्नुहोस्। कक्षा र विषयहरू छान्नुहोस्।': 'आफ्नो शिक्षा यात्रा जारी राख्नुहोस्। कक्षा र विषयहरू छान्नुहोस्।',
        'Classes': 'कक्षाहरू',
        'कक्षाहरू': 'कक्षाहरू',
        'Class': 'कक्षा',
        'कक्षा': 'कक्षा',
        'Enter': 'प्रवेश गर्नुहोस्',
        'प्रवेश गर्नुहोस्': 'प्रवेश गर्नुहोस्',
        'Clear': 'सफा गर्नुहोस्',
        'सफा गर्नुहोस्': 'सफा गर्नुहोस्',
        'Our Services': 'हाम्रो सेवाहरू',
        'हाम्रो सेवाहरू': 'हाम्रो सेवाहरू',
        'Comprehensive educational services for students': 'विद्यार्थीहरूको लागि व्यापक शैक्षिक सेवाहरू',
        'विद्यार्थीहरूको लागि व्यापक शैक्षिक सेवाहरू': 'विद्यार्थीहरूको लागि व्यापक शैक्षिक सेवाहरू',
        'Study Materials': 'अध्ययन सामग्री',
        'अध्ययन सामग्री': 'अध्ययन सामग्री',
        'Access comprehensive study materials for all subjects': 'सबै विषयहरूको लागि व्यापक अध्ययन सामग्री',
        'सबै विषयहरूको लागि व्यापक अध्ययन सामग्री': 'सबै विषयहरूको लागि व्यापक अध्ययन सामग्री',
        'Video Lessons': 'भिडियो पाठहरू',
        'भिडियो पाठहरू': 'भिडियो पाठहरू',
        'Watch educational videos and tutorials': 'शैक्षिक भिडियो र ट्युटोरियलहरू हेर्नुहोस्',
        'शैक्षिक भिडियो र ट्युटोरियलहरू हेर्नुहोस्': 'शैक्षिक भिडियो र ट्युटोरियलहरू हेर्नुहोस्',
        'PDF Resources': 'PDF स्रोतहरू',
        'PDF स्रोतहरू': 'PDF स्रोतहरू',
        'Download PDF documents and study guides': 'PDF कागजातहरू र अध्ययन गाइडहरू डाउनलोड गर्नुहोस्',
        'PDF कागजातहरू र अध्ययन गाइडहरू डाउनलोड गर्नुहोस्': 'PDF कागजातहरू र अध्ययन गाइडहरू डाउनलोड गर्नुहोस्',
        'Contact': 'सम्पर्क',
        'सम्पर्क': 'सम्पर्क',
        'Start your educational journey here': 'आफ्नो शिक्षा यात्रा यहाँ सुरु गर्नुहोस्',
        'आफ्नो शिक्षा यात्रा यहाँ सुरु गर्नुहोस्': 'आफ्नो शिक्षा यात्रा यहाँ सुरु गर्नुहोस्',
        'Welcome to Class': 'कक्षामा स्वागत छ',
        'कक्षामा स्वागत छ': 'कक्षामा स्वागत छ',
        'Welcome, Student!': 'स्वागत छ, विद्यार्थी!',
        'स्वागत छ, विद्यार्थी!': 'स्वागत छ, विद्यार्थी!',
        'Compulsory Subjects': 'अनिवार्य विषयहरू',
        'अनिवार्य विषयहरू': 'अनिवार्य विषयहरू',
        'These are the core subjects for your class level': 'यी तपाईंको कक्षा स्तरका मुख्य विषयहरू हुन्',
        'यी तपाईंको कक्षा स्तरका मुख्य विषयहरू हुन्': 'यी तपाईंको कक्षा स्तरका मुख्य विषयहरू हुन्',
        'Select Your Class': 'आफ्नो कक्षा छान्नुहोस्',
        'आफ्नो कक्षा छान्नुहोस्': 'आफ्नो कक्षा छान्नुहोस्',
        'Choose your class to see the recommended subjects and curriculum': 'अनुशंसित विषयहरू र पाठ्यक्रम हेर्नको लागि आफ्नो कक्षा छान्नुहोस्',
        'अनुशंसित विषयहरू र पाठ्यक्रम हेर्नको लागि आफ्नो कक्षा छान्नुहोस्': 'अनुशंसित विषयहरू र पाठ्यक्रम हेर्नको लागि आफ्नो कक्षा छान्नुहोस्',
        'Selected Class': 'छानिएको कक्षा',
        'छानिएको कक्षा': 'छानिएको कक्षा',
        'View Subjects': 'विषयहरू हेर्नुहोस्',
        'विषयहरू हेर्नुहोस्': 'विषयहरू हेर्नुहोस्',
        'Choose a class...': 'कक्षा छान्नुहोस्...',
        'कक्षा छान्नुहोस्...': 'कक्षा छान्नुहोस्...',
        'विषयहरू हेर्नुहोस्': 'विषयहरू हेर्नुहोस्',
        'Mero Video Chat': 'मेरो भिडियो च्याट',
        'मेरो भिडियो च्याट': 'मेरो भिडियो च्याट',
        'Connect with teachers and classmates through high-quality video chat': 'उच्च गुणस्तरको भिडियो च्याट मार्फत शिक्षक र सहपाठीहरूसँग जडान गर्नुहोस्',
        'उच्च गुणस्तरको भिडियो च्याट मार्फत शिक्षक र सहपाठीहरूसँग जडान गर्नुहोस्': 'उच्च गुणस्तरको भिडियो च्याट मार्फत शिक्षक र सहपाठीहरूसँग जडान गर्नुहोस्',
        'Click \'Start Video\' to begin': 'सुरु गर्न \'भिडियो सुरु गर्नुहोस्\' क्लिक गर्नुहोस्',
        'सुरु गर्न \'भिडियो सुरु गर्नुहोस्\' क्लिक गर्नुहोस्': 'सुरु गर्न \'भिडियो सुरु गर्नुहोस्\' क्लिक गर्नुहोस्',
        'Start Video': 'भिडियो सुरु गर्नुहोस्',
        'भिडियो सुरु गर्नुहोस्': 'भिडियो सुरु गर्नुहोस्',
        'Stop Video': 'भिडियो रोक्नुहोस्',
        'भिडियो रोक्नुहोस्': 'भिडियो रोक्नुहोस्',
        'Start Audio': 'अडियो सुरु गर्नुहोस्',
        'अडियो सुरु गर्नुहोस्': 'अडियो सुरु गर्नुहोस्',
        'Mute Audio': 'अडियो म्युट गर्नुहोस्',
        'अडियो म्युट गर्नुहोस्': 'अडियो म्युट गर्नुहोस्',
        'End Call': 'कल समाप्त गर्नुहोस्',
        'कल समाप्त गर्नुहोस्': 'कल समाप्त गर्नुहोस्',
        'Chat': 'च्याट',
        'च्याट': 'च्याट',
        'Type your message...': 'आफ्नो सन्देश टाइप गर्नुहोस्...',
        'आफ्नो सन्देश टाइप गर्नुहोस्...': 'आफ्नो सन्देश टाइप गर्नुहोस्...',
        'Participants': 'सहभागीहरू',
        'सहभागीहरू': 'सहभागीहरू',
        'Room Management': 'कोठा व्यवस्थापन',
        'कोठा व्यवस्थापन': 'कोठा व्यवस्थापन',
        'Room ID': 'कोठा आईडी',
        'कोठा आईडी': 'कोठा आईडी',
        'Enter room ID': 'कोठा आईडी प्रविष्ट गर्नुहोस्',
        'कोठा आईडी प्रविष्ट गर्नुहोस्': 'कोठा आईडी प्रविष्ट गर्नुहोस्',
        'Join': 'सामेल हुनुहोस्',
        'सामेल हुनुहोस्': 'सामेल हुनुहोस्',
        'Create New Room': 'नयाँ कोठा सिर्जना गर्नुहोस्',
        'नयाँ कोठा सिर्जना गर्नुहोस्': 'नयाँ कोठा सिर्जना गर्नुहोस्',
        'Create Room': 'कोठा सिर्जना गर्नुहोस्',
        'कोठा सिर्जना गर्नुहोस्': 'कोठा सिर्जना गर्नुहोस्',
        'Delete Material': 'सामग्री मेटाउनुहोस्',
        'सामग्री मेटाउनुहोस्': 'सामग्री मेटाउनुहोस्',
        'Delete Homework': 'गृहकार्य मेटाउनुहोस्',
        'गृहकार्य मेटाउनुहोस्': 'गृहकार्य मेटाउनुहोस्',
        'Material deleted successfully!': 'सामग्री सफलतापूर्वक मेटाइयो!',
        'सामग्री सफलतापूर्वक मेटाइयो!': 'सामग्री सफलतापूर्वक मेटाइयो!',
        'Homework deleted successfully!': 'गृहकार्य सफलतापूर्वक मेटाइयो!',
        'गृहकार्य सफलतापूर्वक मेटाइयो!': 'गृहकार्य सफलतापूर्वक मेटाइयो!',
        'View Material': 'सामग्री हेर्नुहोस्',
        'सामग्री हेर्नुहोस्': 'सामग्री हेर्नुहोस्',
        'Edit Material': 'सामग्री सम्पादन गर्नुहोस्',
        'सामग्री सम्पादन गर्नुहोस्': 'सामग्री सम्पादन गर्नुहोस्',
        'Update Material': 'सामग्री अपडेट गर्नुहोस्',
        'सामग्री अपडेट गर्नुहोस्': 'सामग्री अपडेट गर्नुहोस्',
        'Share Material': 'सामग्री शेयर गर्नुहोस्',
        'सामग्री शेयर गर्नुहोस्': 'सामग्री शेयर गर्नुहोस्',
        'Close': 'बन्द गर्नुहोस्',
        'बन्द गर्नुहोस्': 'बन्द गर्नुहोस्',
        'Edit': 'सम्पादन गर्नुहोस्',
        'सम्पादन गर्नुहोस्': 'सम्पादन गर्नुहोस्',
        'Share': 'शेयर गर्नुहोस्',
        'शेयर गर्नुहोस्': 'शेयर गर्नुहोस्',
        'Material Details': 'सामग्री विवरण',
        'सामग्री विवरण': 'सामग्री विवरण',
        'Type': 'प्रकार',
        'प्रकार': 'प्रकार',
        'Added': 'थपियो',
        'थपियो': 'थपियो',
        'Attached File': 'संलग्न फाइल',
        'संलग्न फाइल': 'संलग्न फाइल',
        'Download': 'डाउनलोड',
        'डाउनलोड': 'डाउनलोड',
        'Share via:': 'यस मार्फत शेयर गर्नुहोस्:',
        'यस मार्फत शेयर गर्नुहोस्:': 'यस मार्फत शेयर गर्नुहोस्:',
        'Email': 'इमेल',
        'इमेल': 'इमेल',
        'WhatsApp': 'व्हाट्सएप',
        'व्हाट्सएप': 'व्हाट्सएप',
        'Copy Link': 'लिङ्क कपी गर्नुहोस्',
        'लिङ्क कपी गर्नुहोस्': 'लिङ्क कपी गर्नुहोस्',
        'Share with specific students:': 'विशेष विद्यार्थीहरूसँग शेयर गर्नुहोस्:',
        'विशेष विद्यार्थीहरूसँग शेयर गर्नुहोस्:': 'विशेष विद्यार्थीहरूसँग शेयर गर्नुहोस्:',
        'Select a student...': 'विद्यार्थी छान्नुहोस्...',
        'विद्यार्थी छान्नुहोस्...': 'विद्यार्थी छान्नुहोस्...',
        'Material updated successfully!': 'सामग्री सफलतापूर्वक अपडेट गरियो!',
        'सामग्री सफलतापूर्वक अपडेट गरियो!': 'सामग्री सफलतापूर्वक अपडेट गरियो!',
        'Email application opened!': 'इमेल एप्लिकेसन खुल्यो!',
        'इमेल एप्लिकेसन खुल्यो!': 'इमेल एप्लिकेसन खुल्यो!',
        'WhatsApp opened!': 'व्हाट्सएप खुल्यो!',
        'व्हाट्सएप खुल्यो!': 'व्हाट्सएप खुल्यो!',
        'Link copied to clipboard!': 'लिङ्क क्लिपबोर्डमा कपी गरियो!',
        'लिङ्क क्लिपबोर्डमा कपी गरियो!': 'लिङ्क क्लिपबोर्डमा कपी गरियो!',
        'Please select a student!': 'कृपया विद्यार्थी छान्नुहोस्!',
        'कृपया विद्यार्थी छान्नुहोस्!': 'कृपया विद्यार्थी छान्नुहोस्!',
        'shared with': 'सँग शेयर गरियो',
        'सँग शेयर गरियो': 'सँग शेयर गरियो',
        'Download started for': 'डाउनलोड सुरु भयो',
        'डाउनलोड सुरु भयो': 'डाउनलोड सुरु भयो',
        'Image Preview': 'छवि पूर्वावलोकन',
        'छवि पूर्वावलोकन': 'छवि पूर्वावलोकन',
        'Video Player': 'भिडियो प्लेयर',
        'भिडियो प्लेयर': 'भिडियो प्लेयर',
        'PDF Document': 'PDF कागजात',
        'PDF कागजात': 'PDF कागजात',
        'Word Document': 'वर्ड कागजात',
        'वर्ड कागजात': 'वर्ड कागजात',
        'Excel Spreadsheet': 'एक्सेल स्प्रेडशिट',
        'एक्सेल स्प्रेडशिट': 'एक्सेल स्प्रेडशिट',
        'PowerPoint Presentation': 'पावरपोइन्ट प्रेजेन्टेसन',
        'पावरपोइन्ट प्रेजेन्टेसन': 'पावरपोइन्ट प्रेजेन्टेसन',
        'Text Document': 'पाठ कागजात',
        'पाठ कागजात': 'पाठ कागजात',
        'File Attachment': 'फाइल संलग्न',
        'फाइल संलग्न': 'फाइल संलग्न',
        'Open in New Tab': 'नयाँ ट्याबमा खोल्नुहोस्',
        'नयाँ ट्याबमा खोल्नुहोस्': 'नयाँ ट्याबमा खोल्नुहोस्',
        'Your browser does not support the video tag.': 'तपाईंको ब्राउजरले भिडियो ट्याग समर्थन गर्दैन।',
        'तपाईंको ब्राउजरले भिडियो ट्याग समर्थन गर्दैन।': 'तपाईंको ब्राउजरले भिडियो ट्याग समर्थन गर्दैन।',
        'Excel files can be viewed after downloading. Click download to open in Excel.': 'एक्सेल फाइलहरू डाउनलोड गरेपछि हेर्न सकिन्छ। एक्सेलमा खोल्न डाउनलोड क्लिक गर्नुहोस्।',
        'एक्सेल फाइलहरू डाउनलोड गरेपछि हेर्न सकिन्छ। एक्सेलमा खोल्न डाउनलोड क्लिक गर्नुहोस्।': 'एक्सेल फाइलहरू डाउनलोड गरेपछि हेर्न सकिन्छ। एक्सेलमा खोल्न डाउनलोड क्लिक गर्नुहोस्।',
        'PowerPoint files can be viewed after downloading. Click download to open in PowerPoint.': 'पावरपोइन्ट फाइलहरू डाउनलोड गरेपछि हेर्न सकिन्छ। पावरपोइन्टमा खोल्न डाउनलोड क्लिक गर्नुहोस्।',
        'पावरपोइन्ट फाइलहरू डाउनलोड गरेपछि हेर्न सकिन्छ। पावरपोइन्टमा खोल्न डाउनलोड क्लिक गर्नुहोस्।': 'पावरपोइन्ट फाइलहरू डाउनलोड गरेपछि हेर्न सकिन्छ। पावरपोइन्टमा खोल्न डाउनलोड क्लिक गर्नुहोस्।',
        'File:': 'फाइल:',
        'फाइल:': 'फाइल:',
        'Type:': 'प्रकार:',
        'प्रकार:': 'प्रकार:',
        'Added:': 'थपियो:',
        'थपियो:': 'थपियो:',
        'Class:': 'कक्षा:',
        'कक्षा:': 'कक्षा:',
        'Subject:': 'विषय:',
        'विषय:': 'विषय:',
        'uploaded successfully!': 'सफलतापूर्वक अपलोड गरियो!',
        'सफलतापूर्वक अपलोड गरियो!': 'सफलतापूर्वक अपलोड गरियो!'
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    console.log('initializeApp called'); // Debug log
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language') || 'en';
    changeLanguage(savedLanguage);
    
    // Check for existing logged-in user
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateAccountDropdown(currentUser);
        
        // Update dashboard display
        if (currentUser.name) {
            const userDisplay = document.getElementById('userDisplay');
            const userName = document.getElementById('userName');
            if (userDisplay) userDisplay.textContent = currentUser.name;
            if (userName) userName.textContent = currentUser.name;
        }
        
        if (currentUser.avatar) {
            const avatarContainer = document.getElementById('userAvatar');
            if (avatarContainer) {
                const avatarImg = avatarContainer.querySelector('img');
                if (avatarImg) {
                    avatarImg.src = currentUser.avatar;
                    avatarContainer.style.display = 'block';
                }
            }
        }
        
        if (currentUser.email) {
            const emailElement = document.getElementById('userEmail');
            if (emailElement) {
                emailElement.textContent = currentUser.email;
                emailElement.style.display = 'block';
            }
        }
        
        if (currentUser.provider) {
            const providerElement = document.getElementById('userProvider');
            if (providerElement) {
                const providerName = currentUser.provider.charAt(0).toUpperCase() + currentUser.provider.slice(1);
                providerElement.textContent = providerName;
                providerElement.style.display = 'block';
            }
        }
    }
    
    // Add sample data for demonstration
    addSampleData();
    
    // Generate classes
    console.log('Generating classes...'); // Debug log
    generateClasses();
    
    // Restore selected class if any
    restoreSelectedClass();
    
    // Set up event listeners
    setupEventListeners();
    
    // Set up language switcher
    setupLanguageSwitcher();
    
    // Initialize AI Assistant
    // initializeAIAssistant(); // Commented out as function doesn't exist yet
    
    // Show home section by default
    showSection('home');
    
    console.log('initializeApp completed'); // Debug log
}

// Restore selected class from localStorage
function restoreSelectedClass() {
    const selectedClass = localStorage.getItem('selectedClass');
    if (selectedClass) {
        const classNum = parseInt(selectedClass);
        if (classNum >= 1 && classNum <= 12) {
            // Update the dropdown selection
            const dropdown = document.getElementById('classSelect');
            if (dropdown) {
                dropdown.value = classNum;
            }
            
            // Update the button state (if buttons exist)
            const selectedButton = document.querySelector(`[data-class="${classNum}"]`);
            if (selectedButton) {
                const isPlusTwo = classNum >= 11;
                selectedButton.classList.remove(isPlusTwo ? 'btn-outline-success' : 'btn-outline-primary');
                selectedButton.classList.add(isPlusTwo ? 'btn-success' : 'btn-primary');
            }
            
            // Show selected class info
            const selectedClassInfo = document.getElementById('selectedClassInfo');
            const selectedClassNumber = document.getElementById('selectedClassNumber');
            const selectedClassDescription = document.getElementById('selectedClassDescription');
            
            if (selectedClassInfo && selectedClassNumber && selectedClassDescription) {
                selectedClassNumber.textContent = classNum;
                
                // Get class description based on class level
                let description = '';
                if (classNum >= 1 && classNum <= 3) {
                    description = currentLanguage === 'np' 
                        ? 'कक्षा १-३: नेपाली, अंग्रेजी, गणित, र मेरो वातावरण (विज्ञान र सामाजिक अध्ययन एकीकृत)'
                        : 'Classes 1-3: Nepali, English, Mathematics, and My Environment (integrated science and social studies)';
                } else if (classNum >= 4 && classNum <= 5) {
                    description = currentLanguage === 'np'
                        ? 'कक्षा ४-५: नेपाली, अंग्रेजी, गणित, विज्ञान, सामाजिक अध्ययन र नैतिक शिक्षा, स्वास्थ्य जनसंख्या र वातावरण शिक्षा'
                        : 'Classes 4-5: Nepali, English, Mathematics, Science, Social Studies & Moral Education, Health, Population & Environment Education';
                } else if (classNum >= 6 && classNum <= 8) {
                    description = currentLanguage === 'np'
                        ? 'कक्षा ६-८: नेपाली, अंग्रेजी, गणित, विज्ञान, सामाजिक अध्ययन, स्वास्थ्य जनसंख्या र वातावरण, र वैकल्पिक विषय'
                        : 'Classes 6-8: Nepali, English, Mathematics, Science, Social Studies, Health, Population & Environment, and Optional Subject';
                } else if (classNum >= 9 && classNum <= 10) {
                    description = currentLanguage === 'np'
                        ? 'कक्षा ९-१०: नेपाली, अंग्रेजी, गणित, विज्ञान, सामाजिक अध्ययन, स्वास्थ्य जनसंख्या र वातावरण, र दुई वैकल्पिक विषयहरू'
                        : 'Classes 9-10: Nepali, English, Mathematics, Science, Social Studies, Health, Population & Environment, and two Optional Subjects';
                } else if (classNum >= 11 && classNum <= 12) {
                    description = currentLanguage === 'np'
                        ? 'कक्षा ११-१२ (+२ स्तर): विज्ञान, व्यवस्थापन, मानविकी, शिक्षा, र अन्य व्यावसायिक विषयहरूको विस्तृत श्रेणी'
                        : 'Classes 11-12 (+2 Level): Comprehensive range of Science, Management, Humanities, Education, and other professional subjects';
                }
                
                selectedClassDescription.innerHTML = `<span data-en="${description}" data-np="${description}">${description}</span>`;
                selectedClassInfo.style.display = 'block';
                
                // Show the view subjects button
                const viewSubjectsBtn = document.getElementById('viewSubjectsBtn');
                if (viewSubjectsBtn) {
                    viewSubjectsBtn.style.display = 'block';
                }
            }
        }
    }
}

// Language switching functionality
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update language buttons
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to the correct button
    const targetButton = document.querySelector(`.language-switcher button[onclick*="${lang}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
    
    // Update all translatable elements
    updateLanguage();
}

function updateLanguage() {
    document.querySelectorAll('[data-en][data-np]').forEach(element => {
        const currentText = element.textContent.trim();
        const newText = translations[currentLanguage][currentText] || currentText;
        element.textContent = newText;
    });
    
    // Update welcome message if we're on class detail page
    if (currentClass && document.getElementById('welcomeStudentName')) {
        const studentName = currentUser ? currentUser.name : 'Student';
        const welcomeElement = document.getElementById('welcomeStudentName');
        if (currentLanguage === 'np') {
            welcomeElement.innerHTML = `<span data-en="Welcome, ${studentName}!" data-np="स्वागत छ, ${studentName}!">स्वागत छ, ${studentName}!</span>`;
        } else {
            welcomeElement.innerHTML = `<span data-en="Welcome, ${studentName}!" data-np="स्वागत छ, ${studentName}!">Welcome, ${studentName}!</span>`;
        }
        
        // Update compulsory subjects description
        const descriptionElement = document.getElementById('compulsorySubjectsDescription');
        if (descriptionElement) {
            let description = '';
            
            if (currentClass >= 1 && currentClass <= 3) {
                description = currentLanguage === 'np' 
                    ? 'कक्षा १-३ का अनिवार्य विषयहरू: नेपाली, अंग्रेजी, गणित, र मेरो वातावरण'
                    : 'Classes 1-3: Nepali, English, Mathematics, and My Environment';
            } else if (currentClass >= 4 && currentClass <= 5) {
                description = currentLanguage === 'np'
                    ? 'कक्षा ४-५ का अनिवार्य विषयहरू: नेपाली, अंग्रेजी, गणित, विज्ञान, सामाजिक अध्ययन र नैतिक शिक्षा, स्वास्थ्य जनसंख्या र वातावरण शिक्षा'
                    : 'Classes 4-5: Nepali, English, Mathematics, Science, Social Studies & Moral Education, Health, Population & Environment Education';
            } else if (currentClass >= 6 && currentClass <= 8) {
                description = currentLanguage === 'np'
                    ? 'कक्षा ६-८ का अनिवार्य विषयहरू: नेपाली, अंग्रेजी, गणित, विज्ञान, सामाजिक अध्ययन, स्वास्थ्य जनसंख्या र वातावरण, र वैकल्पिक विषय'
                    : 'Classes 6-8: Nepali, English, Mathematics, Science, Social Studies, Health, Population & Environment, and Optional Subject';
            } else if (classNum >= 9 && classNum <= 10) {
                description = currentLanguage === 'np'
                    ? 'कक्षा ९-१०: नेपाली, अंग्रेजी, गणित, विज्ञान, सामाजिक अध्ययन, स्वास्थ्य जनसंख्या र वातावरण, र दुई वैकल्पिक विषयहरू'
                    : 'Classes 9-10: Nepali, English, Mathematics, Science, Social Studies, Health, Population & Environment, and two Optional Subjects';
            } else if (classNum >= 11 && classNum <= 12) {
                description = currentLanguage === 'np'
                    ? 'कक्षा ११-१२ (+२ स्तर): विज्ञान, व्यवस्थापन, मानविकी, शिक्षा, र अन्य व्यावसायिक विषयहरूको विस्तृत श्रेणी'
                    : 'Classes 11-12 (+2 Level): Comprehensive range of Science, Management, Humanities, Education, and other professional subjects';
            }
            
            descriptionElement.innerHTML = `<span data-en="${description}" data-np="${description}">${description}</span>`;
        }
        
        // Update selected class description if visible
        const selectedClassInfo = document.getElementById('selectedClassInfo');
        const selectedClassDescription = document.getElementById('selectedClassDescription');
        if (selectedClassInfo && selectedClassInfo.style.display !== 'none' && selectedClassDescription) {
            const selectedClass = localStorage.getItem('selectedClass');
            if (selectedClass) {
                let description = '';
                const classNum = parseInt(selectedClass);
                
                if (classNum >= 1 && classNum <= 3) {
                    description = currentLanguage === 'np' 
                        ? 'कक्षा १-३: नेपाली, अंग्रेजी, गणित, र मेरो वातावरण (विज्ञान र सामाजिक अध्ययन एकीकृत)'
                        : 'Classes 1-3: Nepali, English, Mathematics, and My Environment (integrated science and social studies)';
                } else if (classNum >= 4 && classNum <= 5) {
                    description = currentLanguage === 'np'
                        ? 'कक्षा ४-५: नेपाली, अंग्रेजी, गणित, विज्ञान, सामाजिक अध्ययन र नैतिक शिक्षा, स्वास्थ्य जनसंख्या र वातावरण शिक्षा'
                        : 'Classes 4-5: Nepali, English, Mathematics, Science, Social Studies & Moral Education, Health, Population & Environment Education';
                } else if (classNum >= 6 && classNum <= 8) {
                    description = currentLanguage === 'np'
                        ? 'कक्षा ६-८: नेपाली, अंग्रेजी, गणित, विज्ञान, सामाजिक अध्ययन, स्वास्थ्य जनसंख्या र वातावरण, र वैकल्पिक विषय'
                        : 'Classes 6-8: Nepali, English, Mathematics, Science, Social Studies, Health, Population & Environment, and Optional Subject';
                } else if (classNum >= 9 && classNum <= 10) {
                    description = currentLanguage === 'np'
                        ? 'कक्षा ९-१०: नेपाली, अंग्रेजी, गणित, विज्ञान, सामाजिक अध्ययन, स्वास्थ्य जनसंख्या र वातावरण, र दुई वैकल्पिक विषयहरू'
                        : 'Classes 9-10: Nepali, English, Mathematics, Science, Social Studies, Health, Population & Environment, and two Optional Subjects';
                } else if (classNum >= 11 && classNum <= 12) {
                    description = currentLanguage === 'np'
                        ? 'कक्षा ११-१२ (+२ स्तर): विज्ञान, व्यवस्थापन, मानविकी, शिक्षा, र अन्य व्यावसायिक विषयहरूको विस्तृत श्रेणी'
                        : 'Classes 11-12 (+2 Level): Comprehensive range of Science, Management, Humanities, Education, and other professional subjects';
                }
                
                selectedClassDescription.innerHTML = `<span data-en="${description}" data-np="${description}">${description}</span>`;
            }
        }
    }
}

// Navigation functionality
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
        updateNavigation(sectionId);
        
        // Initialize video chat if showing video chat section
        if (sectionId === 'videoChat') {
            initializeVideoChatSection();
        }
    }
}

function updateNavigation(activeSection) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[onclick="showSection('${activeSection}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Class and Subject Data
let currentClass = null;
let currentSubject = null;
let studyMaterials = [];
let homeworkList = [];
let subjectFiles = [];

// Subject definitions for each class
const subjectsByClass = {
    1: [
        { id: 'nepali', name: 'Nepali', icon: 'fas fa-language', color: '#f39c12' },
        { id: 'english', name: 'English', icon: 'fas fa-language', color: '#3498db' },
        { id: 'math', name: 'Mathematics', icon: 'fas fa-calculator', color: '#e74c3c' },
        { id: 'environment', name: 'My Environment (मेरो वातावरण)', icon: 'fas fa-leaf', color: '#27ae60' }
    ],
    2: [
        { id: 'nepali', name: 'Nepali', icon: 'fas fa-language', color: '#f39c12' },
        { id: 'english', name: 'English', icon: 'fas fa-language', color: '#3498db' },
        { id: 'math', name: 'Mathematics', icon: 'fas fa-calculator', color: '#e74c3c' },
        { id: 'environment', name: 'My Environment (मेरो वातावरण)', icon: 'fas fa-leaf', color: '#27ae60' }
    ],
    3: [
        { id: 'nepali', name: 'Nepali', icon: 'fas fa-language', color: '#f39c12' },
        { id: 'english', name: 'English', icon: 'fas fa-language', color: '#3498db' },
        { id: 'math', name: 'Mathematics', icon: 'fas fa-calculator', color: '#e74c3c' },
        { id: 'environment', name: 'My Environment (मेरो वातावरण)', icon: 'fas fa-leaf', color: '#27ae60' }
    ],
    4: [
        { id: 'nepali', name: 'Nepali', icon: 'fas fa-language', color: '#f39c12' },
        { id: 'english', name: 'English', icon: 'fas fa-language', color: '#3498db' },
        { id: 'math', name: 'Mathematics', icon: 'fas fa-calculator', color: '#e74c3c' },
        { id: 'science', name: 'Science', icon: 'fas fa-flask', color: '#27ae60' },
        { id: 'social_moral', name: 'Social Studies & Moral Education', icon: 'fas fa-globe', color: '#9b59b6' },
        { id: 'health_population', name: 'Health, Population & Environment Education', icon: 'fas fa-heartbeat', color: '#e67e22' }
    ],
    5: [
        { id: 'nepali', name: 'Nepali', icon: 'fas fa-language', color: '#f39c12' },
        { id: 'english', name: 'English', icon: 'fas fa-language', color: '#3498db' },
        { id: 'math', name: 'Mathematics', icon: 'fas fa-calculator', color: '#e74c3c' },
        { id: 'science', name: 'Science', icon: 'fas fa-flask', color: '#27ae60' },
        { id: 'social_moral', name: 'Social Studies & Moral Education', icon: 'fas fa-globe', color: '#9b59b6' },
        { id: 'health_population', name: 'Health, Population & Environment Education', icon: 'fas fa-heartbeat', color: '#e67e22' }
    ],
    6: [
        { id: 'nepali', name: 'Nepali', icon: 'fas fa-language', color: '#f39c12' },
        { id: 'english', name: 'English', icon: 'fas fa-language', color: '#3498db' },
        { id: 'math', name: 'Mathematics', icon: 'fas fa-calculator', color: '#e74c3c' },
        { id: 'science', name: 'Science', icon: 'fas fa-flask', color: '#27ae60' },
        { id: 'social', name: 'Social Studies', icon: 'fas fa-globe', color: '#9b59b6' },
        { id: 'health_population', name: 'Health, Population & Environment', icon: 'fas fa-heartbeat', color: '#e67e22' },
        { id: 'optional', name: 'Optional Subject', icon: 'fas fa-star', color: '#f1c40f' }
    ],
    7: [
        { id: 'nepali', name: 'Nepali', icon: 'fas fa-language', color: '#f39c12' },
        { id: 'english', name: 'English', icon: 'fas fa-language', color: '#3498db' },
        { id: 'math', name: 'Mathematics', icon: 'fas fa-calculator', color: '#e74c3c' },
        { id: 'science', name: 'Science', icon: 'fas fa-flask', color: '#27ae60' },
        { id: 'social', name: 'Social Studies', icon: 'fas fa-globe', color: '#9b59b6' },
        { id: 'health_population', name: 'Health, Population & Environment', icon: 'fas fa-heartbeat', color: '#e67e22' },
        { id: 'optional', name: 'Optional Subject', icon: 'fas fa-star', color: '#f1c40f' }
    ],
    8: [
        { id: 'nepali', name: 'Nepali', icon: 'fas fa-language', color: '#f39c12' },
        { id: 'english', name: 'English', icon: 'fas fa-language', color: '#3498db' },
        { id: 'math', name: 'Mathematics', icon: 'fas fa-calculator', color: '#e74c3c' },
        { id: 'science', name: 'Science', icon: 'fas fa-flask', color: '#27ae60' },
        { id: 'social', name: 'Social Studies', icon: 'fas fa-globe', color: '#9b59b6' },
        { id: 'health_population', name: 'Health, Population & Environment', icon: 'fas fa-heartbeat', color: '#e67e22' },
        { id: 'optional', name: 'Optional Subject', icon: 'fas fa-star', color: '#f1c40f' }
    ],
    9: [
        { id: 'nepali', name: 'Nepali', icon: 'fas fa-language', color: '#f39c12' },
        { id: 'english', name: 'English', icon: 'fas fa-language', color: '#3498db' },
        { id: 'math', name: 'Mathematics', icon: 'fas fa-calculator', color: '#e74c3c' },
        { id: 'science', name: 'Science', icon: 'fas fa-flask', color: '#27ae60' },
        { id: 'social', name: 'Social Studies', icon: 'fas fa-globe', color: '#9b59b6' },
        { id: 'health_population', name: 'Health, Population & Environment', icon: 'fas fa-heartbeat', color: '#e67e22' },
        { id: 'optional1', name: 'Optional I', icon: 'fas fa-star', color: '#f1c40f' },
        { id: 'optional2', name: 'Optional II', icon: 'fas fa-star', color: '#e91e63' }
    ],
    10: [
        { id: 'nepali', name: 'Nepali', icon: 'fas fa-language', color: '#f39c12' },
        { id: 'english', name: 'English', icon: 'fas fa-language', color: '#3498db' },
        { id: 'math', name: 'Mathematics', icon: 'fas fa-calculator', color: '#e74c3c' },
        { id: 'science', name: 'Science', icon: 'fas fa-flask', color: '#27ae60' },
        { id: 'social', name: 'Social Studies', icon: 'fas fa-globe', color: '#9b59b6' },
        { id: 'health_population', name: 'Health, Population & Environment', icon: 'fas fa-heartbeat', color: '#e67e22' },
        { id: 'optional1', name: 'Optional I', icon: 'fas fa-star', color: '#f1c40f' },
        { id: 'optional2', name: 'Optional II', icon: 'fas fa-star', color: '#e91e63' }
    ],
    11: [
        { id: 'nepali', name: 'Nepali', icon: 'fas fa-language', color: '#f39c12' },
        { id: 'english', name: 'English', icon: 'fas fa-language', color: '#3498db' },
        { id: 'math', name: 'Mathematics', icon: 'fas fa-calculator', color: '#e74c3c' },
        { id: 'physics', name: 'Physics', icon: 'fas fa-atom', color: '#8e44ad' },
        { id: 'chemistry', name: 'Chemistry', icon: 'fas fa-flask', color: '#27ae60' },
        { id: 'biology', name: 'Biology', icon: 'fas fa-dna', color: '#16a085' },
        { id: 'computer_science', name: 'Computer Science', icon: 'fas fa-laptop-code', color: '#2980b9' },
        { id: 'economics', name: 'Economics', icon: 'fas fa-chart-line', color: '#e67e22' },
        { id: 'accounting', name: 'Accounting', icon: 'fas fa-calculator', color: '#c0392b' },
        { id: 'business_studies', name: 'Business Studies', icon: 'fas fa-briefcase', color: '#2c3e50' },
        { id: 'sociology', name: 'Sociology', icon: 'fas fa-users', color: '#8e44ad' },
        { id: 'psychology', name: 'Psychology', icon: 'fas fa-brain', color: '#e74c3c' },
        { id: 'geography', name: 'Geography', icon: 'fas fa-map', color: '#27ae60' },
        { id: 'history', name: 'History', icon: 'fas fa-landmark', color: '#f39c12' },
        { id: 'political_science', name: 'Political Science', icon: 'fas fa-balance-scale', color: '#9b59b6' },
        { id: 'tourism', name: 'Tourism', icon: 'fas fa-plane', color: '#3498db' },
        { id: 'hotel_management', name: 'Hotel Management', icon: 'fas fa-hotel', color: '#e67e22' },
        { id: 'agriculture', name: 'Agriculture', icon: 'fas fa-seedling', color: '#27ae60' },
        { id: 'fashion_design', name: 'Fashion Design', icon: 'fas fa-tshirt', color: '#e91e63' },
        { id: 'fine_arts', name: 'Fine Arts', icon: 'fas fa-palette', color: '#f1c40f' },
        { id: 'music', name: 'Music', icon: 'fas fa-music', color: '#9b59b6' },
        { id: 'dance', name: 'Dance', icon: 'fas fa-dancing', color: '#e74c3c' },
        { id: 'sports', name: 'Sports', icon: 'fas fa-futbol', color: '#27ae60' },
        { id: 'journalism', name: 'Journalism', icon: 'fas fa-newspaper', color: '#34495e' },
        { id: 'mass_communication', name: 'Mass Communication', icon: 'fas fa-broadcast-tower', color: '#8e44ad' },
        { id: 'environmental_science', name: 'Environmental Science', icon: 'fas fa-leaf', color: '#16a085' },
        { id: 'mathematics', name: 'Mathematics', icon: 'fas fa-square-root-alt', color: '#e74c3c' },
        { id: 'statistics', name: 'Statistics', icon: 'fas fa-chart-bar', color: '#3498db' }
    ],
    12: [
        { id: 'nepali', name: 'Nepali', icon: 'fas fa-language', color: '#f39c12' },
        { id: 'english', name: 'English', icon: 'fas fa-language', color: '#3498db' },
        { id: 'math', name: 'Mathematics', icon: 'fas fa-calculator', color: '#e74c3c' },
        { id: 'physics', name: 'Physics', icon: 'fas fa-atom', color: '#8e44ad' },
        { id: 'chemistry', name: 'Chemistry', icon: 'fas fa-flask', color: '#27ae60' },
        { id: 'biology', name: 'Biology', icon: 'fas fa-dna', color: '#16a085' },
        { id: 'computer_science', name: 'Computer Science', icon: 'fas fa-laptop-code', color: '#2980b9' },
        { id: 'economics', name: 'Economics', icon: 'fas fa-chart-line', color: '#e67e22' },
        { id: 'accounting', name: 'Accounting', icon: 'fas fa-calculator', color: '#c0392b' },
        { id: 'business_studies', name: 'Business Studies', icon: 'fas fa-briefcase', color: '#2c3e50' },
        { id: 'sociology', name: 'Sociology', icon: 'fas fa-users', color: '#8e44ad' },
        { id: 'psychology', name: 'Psychology', icon: 'fas fa-brain', color: '#e74c3c' },
        { id: 'geography', name: 'Geography', icon: 'fas fa-map', color: '#27ae60' },
        { id: 'history', name: 'History', icon: 'fas fa-landmark', color: '#f39c12' },
        { id: 'political_science', name: 'Political Science', icon: 'fas fa-balance-scale', color: '#9b59b6' },
        { id: 'tourism', name: 'Tourism', icon: 'fas fa-plane', color: '#3498db' },
        { id: 'hotel_management', name: 'Hotel Management', icon: 'fas fa-hotel', color: '#e67e22' },
        { id: 'agriculture', name: 'Agriculture', icon: 'fas fa-seedling', color: '#27ae60' },
        { id: 'fashion_design', name: 'Fashion Design', icon: 'fas fa-tshirt', color: '#e91e63' },
        { id: 'fine_arts', name: 'Fine Arts', icon: 'fas fa-palette', color: '#f1c40f' },
        { id: 'music', name: 'Music', icon: 'fas fa-music', color: '#9b59b6' },
        { id: 'dance', name: 'Dance', icon: 'fas fa-dancing', color: '#e74c3c' },
        { id: 'sports', name: 'Sports', icon: 'fas fa-futbol', color: '#27ae60' },
        { id: 'journalism', name: 'Journalism', icon: 'fas fa-newspaper', color: '#34495e' },
        { id: 'mass_communication', name: 'Mass Communication', icon: 'fas fa-broadcast-tower', color: '#8e44ad' },
        { id: 'environmental_science', name: 'Environmental Science', icon: 'fas fa-leaf', color: '#16a085' },
        { id: 'mathematics', name: 'Mathematics', icon: 'fas fa-square-root-alt', color: '#e74c3c' },
        { id: 'statistics', name: 'Statistics', icon: 'fas fa-chart-bar', color: '#3498db' }
    ]
};

// Generate classes for dashboard
function generateClasses() {
    console.log('generateClasses called'); // Debug log
    
    // Generate class selection buttons
    console.log('Calling generateClassSelection...'); // Debug log
    generateClassSelection();
    
    // Generate class cards
    const container = document.getElementById('classesContainer');
    if (!container) {
        console.error('classesContainer not found!');
        return;
    }
    
    console.log('Generating class cards...'); // Debug log
    container.innerHTML = '';
    
    for (let i = 1; i <= 12; i++) {
        const classCard = document.createElement('div');
        classCard.className = 'col-md-6 col-lg-4 col-xl-3';
        
        // Special styling for +2 level (Class 11 and 12)
        const isPlusTwo = i >= 11;
        const cardClass = isPlusTwo ? 'class-card plus-two' : 'class-card';
        const iconClass = isPlusTwo ? 'fas fa-university fa-3x text-success' : 'fas fa-graduation-cap fa-3x text-primary';
        const levelText = isPlusTwo ? (currentLanguage === 'np' ? '+२ स्तर' : '+2 Level') : '';
        
        classCard.innerHTML = `
            <div class="card h-100 ${cardClass}" onclick="showClass(${i})" style="cursor: pointer;">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="${iconClass}"></i>
                    </div>
                    <h5 class="card-title">
                        <span data-en="Class" data-np="कक्षा">Class</span> ${i}
                        ${isPlusTwo ? `<br><small class="text-success">${levelText}</small>` : ''}
                    </h5>
                    <p class="card-text text-muted">
                        <span data-en="Class ${i} materials and subjects" data-np="कक्षा ${i} को सामग्री र विषयहरू">
                            Class ${i} materials and subjects
                        </span>
                    </p>
                    <div class="btn ${isPlusTwo ? 'btn-success' : 'btn-primary'}">
                        <i class="fas fa-arrow-right me-2"></i>
                        <span data-en="Enter" data-np="प्रवेश गर्नुहोस्">Enter</span>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(classCard);
    }
    
    console.log('generateClasses completed'); // Debug log
}

// Generate class selection buttons
function generateClassSelection() {
    console.log('generateClassSelection called'); // Debug log
    const container = document.getElementById('classSelectionContainer');
    if (!container) {
        console.error('classSelectionContainer not found!');
        return;
    }
    
    console.log('Container found, generating buttons...'); // Debug log
    container.innerHTML = '';
    
    for (let i = 1; i <= 12; i++) {
        const classButton = document.createElement('div');
        classButton.className = 'col-6 col-md-4 col-lg-2';
        
        // Special styling for +2 level (Class 11 and 12)
        const isPlusTwo = i >= 11;
        const buttonClass = isPlusTwo ? 'btn-outline-success' : 'btn-outline-primary';
        const iconClass = isPlusTwo ? 'fas fa-university fa-2x mb-2' : 'fas fa-graduation-cap fa-2x mb-2';
        const levelText = isPlusTwo ? (currentLanguage === 'np' ? '+२' : '+2') : '';
        
        classButton.innerHTML = `
            <button class="btn ${buttonClass} w-100 class-select-btn" onclick="selectClass(${i})" data-class="${i}" style="cursor: pointer;">
                <div class="d-flex flex-column align-items-center">
                    <i class="${iconClass}"></i>
                    <span class="fw-bold">Class ${i}</span>
                    ${isPlusTwo ? `<small class="text-success">${levelText}</small>` : ''}
                </div>
            </button>
        `;
        container.appendChild(classButton);
        console.log(`Added button for Class ${i}`); // Debug log
    }
    
    console.log('Class selection buttons generated successfully'); // Debug log
}

// Select a class
function selectClass(classNum) {
    console.log('selectClass called with:', classNum); // Debug log
    
    // Validate input
    if (!classNum || classNum < 1 || classNum > 12) {
        console.error('Invalid class number:', classNum);
        return;
    }
    
    // Remove active class from all buttons
    document.querySelectorAll('.class-select-btn').forEach(btn => {
        btn.classList.remove('btn-primary', 'btn-success');
        const isPlusTwo = parseInt(btn.getAttribute('data-class')) >= 11;
        btn.classList.add(isPlusTwo ? 'btn-outline-success' : 'btn-outline-primary');
    });
    
    // Add active class to selected button
    const selectedButton = document.querySelector(`[data-class="${classNum}"]`);
    if (selectedButton) {
        const isPlusTwo = classNum >= 11;
        selectedButton.classList.remove(isPlusTwo ? 'btn-outline-success' : 'btn-outline-primary');
        selectedButton.classList.add(isPlusTwo ? 'btn-success' : 'btn-primary');
        console.log('Button styling updated for class', classNum); // Debug log
    } else {
        console.error('Selected button not found for class:', classNum);
    }
    
    // Show selected class info
    const selectedClassInfo = document.getElementById('selectedClassInfo');
    const selectedClassNumber = document.getElementById('selectedClassNumber');
    const selectedClassDescription = document.getElementById('selectedClassDescription');
    
    if (!selectedClassInfo || !selectedClassNumber || !selectedClassDescription) {
        console.error('Required elements not found for class selection');
        console.error('selectedClassInfo:', !!selectedClassInfo);
        console.error('selectedClassNumber:', !!selectedClassNumber);
        console.error('selectedClassDescription:', !!selectedClassDescription);
        return;
    }
    
    selectedClassNumber.textContent = classNum;
    console.log('Updated selected class number to:', classNum); // Debug log
    
    // Get class description based on class level
    let description = '';
    if (classNum >= 1 && classNum <= 3) {
        description = currentLanguage === 'np' 
            ? 'कक्षा १-३: नेपाली, अंग्रेजी, गणित, र मेरो वातावरण (विज्ञान र सामाजिक अध्ययन एकीकृत)'
            : 'Classes 1-3: Nepali, English, Mathematics, and My Environment (integrated science and social studies)';
    } else if (classNum >= 4 && classNum <= 5) {
        description = currentLanguage === 'np'
            ? 'कक्षा ४-५: नेपाली, अंग्रेजी, गणित, विज्ञान, सामाजिक अध्ययन र नैतिक शिक्षा, स्वास्थ्य जनसंख्या र वातावरण शिक्षा'
            : 'Classes 4-5: Nepali, English, Mathematics, Science, Social Studies & Moral Education, Health, Population & Environment Education';
    } else if (classNum >= 6 && classNum <= 8) {
        description = currentLanguage === 'np'
            ? 'कक्षा ६-८: नेपाली, अंग्रेजी, गणित, विज्ञान, सामाजिक अध्ययन, स्वास्थ्य जनसंख्या र वातावरण, र वैकल्पिक विषय'
            : 'Classes 6-8: Nepali, English, Mathematics, Science, Social Studies, Health, Population & Environment, and Optional Subject';
    } else if (classNum >= 9 && classNum <= 10) {
        description = currentLanguage === 'np'
            ? 'कक्षा ९-१०: नेपाली, अंग्रेजी, गणित, विज्ञान, सामाजिक अध्ययन, स्वास्थ्य जनसंख्या र वातावरण, र दुई वैकल्पिक विषयहरू'
            : 'Classes 9-10: Nepali, English, Mathematics, Science, Social Studies, Health, Population & Environment, and two Optional Subjects';
    } else if (classNum >= 11 && classNum <= 12) {
        description = currentLanguage === 'np'
            ? 'कक्षा ११-१२ (+२ स्तर): विज्ञान, व्यवस्थापन, मानविकी, शिक्षा, र अन्य व्यावसायिक विषयहरूको विस्तृत श्रेणी'
            : 'Classes 11-12 (+2 Level): Comprehensive range of Science, Management, Humanities, Education, and other professional subjects';
    }
    
    selectedClassDescription.innerHTML = `<span data-en="${description}" data-np="${description}">${description}</span>`;
    selectedClassInfo.style.display = 'block';
    console.log('Updated class description and showed info section'); // Debug log
    
    // Store selected class
    localStorage.setItem('selectedClass', classNum);
    console.log('Stored selected class in localStorage:', classNum); // Debug log
    
    // Show notification
    showNotification(`Class ${classNum} selected! You can now explore the subjects.`, 'success');
    console.log('Class selection completed successfully for class:', classNum); // Debug log
}

// Select class from dropdown
function selectClassFromDropdown(classNum) {
    console.log('selectClassFromDropdown called with:', classNum); // Debug log
    
    if (!classNum || classNum === '') {
        // No class selected, hide the view subjects button
        document.getElementById('viewSubjectsBtn').style.display = 'none';
        document.getElementById('selectedClassInfo').style.display = 'none';
        return;
    }
    
    // Convert to number
    classNum = parseInt(classNum);
    
    // Call the existing selectClass function
    selectClass(classNum);
    
    // Show the view subjects button
    document.getElementById('viewSubjectsBtn').style.display = 'block';
}

// View subjects for selected class
function viewSelectedClassSubjects() {
    const selectedClass = localStorage.getItem('selectedClass');
    if (selectedClass) {
        const classNum = parseInt(selectedClass);
        showClass(classNum);
    } else {
        showNotification('Please select a class first!', 'warning');
    }
}

// Show class details
function showClass(classNum) {
    console.log('showClass called with:', classNum); // Debug log
    
    currentClass = classNum;
    
    const currentClassNumberElement = document.getElementById('currentClassNumber');
    const welcomeClassNumberElement = document.getElementById('welcomeClassNumber');
    
    if (!currentClassNumberElement || !welcomeClassNumberElement) {
        console.error('Required elements not found for showing class');
        return;
    }
    
    currentClassNumberElement.textContent = classNum;
    welcomeClassNumberElement.textContent = classNum;
    
    // Update welcome message with student name
    const studentName = currentUser ? currentUser.name : 'Student';
    const welcomeElement = document.getElementById('welcomeStudentName');
    if (currentLanguage === 'np') {
        welcomeElement.innerHTML = `<span data-en="Welcome, ${studentName}!" data-np="स्वागत छ, ${studentName}!">स्वागत छ, ${studentName}!</span>`;
    } else {
        welcomeElement.innerHTML = `<span data-en="Welcome, ${studentName}!" data-np="स्वागत छ, ${studentName}!">Welcome, ${studentName}!</span>`;
    }
    
    // Show compulsory subjects header for all classes (1-10)
    const compulsoryHeader = document.getElementById('compulsorySubjectsHeader');
    compulsoryHeader.style.display = 'block';
    
    // Update compulsory subjects description based on class level
    const descriptionElement = document.getElementById('compulsorySubjectsDescription');
    let description = '';
    
    if (classNum >= 1 && classNum <= 3) {
        description = currentLanguage === 'np' 
            ? 'कक्षा १-३ का अनिवार्य विषयहरू: नेपाली, अंग्रेजी, गणित, र मेरो वातावरण'
            : 'Classes 1-3: Nepali, English, Mathematics, and My Environment';
    } else if (classNum >= 4 && classNum <= 5) {
        description = currentLanguage === 'np'
            ? 'कक्षा ४-५ का अनिवार्य विषयहरू: नेपाली, अंग्रेजी, गणित, विज्ञान, सामाजिक अध्ययन र नैतिक शिक्षा, स्वास्थ्य जनसंख्या र वातावरण शिक्षा'
            : 'Classes 4-5: Nepali, English, Mathematics, Science, Social Studies & Moral Education, Health, Population & Environment Education';
    } else if (classNum >= 6 && classNum <= 8) {
        description = currentLanguage === 'np'
            ? 'कक्षा ६-८ का अनिवार्य विषयहरू: नेपाली, अंग्रेजी, गणित, विज्ञान, सामाजिक अध्ययन, स्वास्थ्य जनसंख्या र वातावरण, र वैकल्पिक विषय'
            : 'Classes 6-8: Nepali, English, Mathematics, Science, Social Studies, Health, Population & Environment, and Optional Subject';
    } else if (classNum >= 9 && classNum <= 10) {
        description = currentLanguage === 'np'
            ? 'कक्षा ९-१० का अनिवार्य विषयहरू: नेपाली, अंग्रेजी, गणित, विज्ञान, सामाजिक अध्ययन, स्वास्थ्य जनसंख्या र वातावरण, र दुई वैकल्पिक विषयहरू'
            : 'Classes 9-10: Nepali, English, Mathematics, Science, Social Studies, Health, Population & Environment, and two Optional Subjects';
    } else if (classNum >= 11 && classNum <= 12) {
        description = currentLanguage === 'np'
            ? 'कक्षा ११-१२ (+२ स्तर) का विषयहरू: विज्ञान, व्यवस्थापन, मानविकी, शिक्षा, र अन्य व्यावसायिक विषयहरूको विस्तृत श्रेणी'
            : 'Classes 11-12 (+2 Level): Comprehensive range of Science, Management, Humanities, Education, and other professional subjects';
    }
    
    descriptionElement.innerHTML = `<span data-en="${description}" data-np="${description}">${description}</span>`;
    
    generateSubjects(classNum);
    showSection('classDetail');
}

// Generate subjects for a class
function generateSubjects(classNum) {
    const container = document.getElementById('subjectsContainer');
    if (!container) return;
    
    const subjects = subjectsByClass[classNum] || [];
    container.innerHTML = '';
    
    subjects.forEach(subject => {
        const subjectCard = document.createElement('div');
        subjectCard.className = 'col-md-6 col-lg-4';
        subjectCard.innerHTML = `
            <div class="card h-100 subject-card ${subject.id}" onclick="showSubject('${subject.id}', '${subject.name}')" style="cursor: pointer;">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="${subject.icon} fa-3x" style="color: ${subject.color}"></i>
                    </div>
                    <h5 class="card-title">${subject.name}</h5>
                    <p class="card-text text-muted">
                        <span data-en="Study materials and homework" data-np="अध्ययन सामग्री र गृहकार्य">
                            Study materials and homework
                        </span>
                    </p>
                    <div class="btn btn-primary">
                        <i class="fas fa-arrow-right me-2"></i>
                        <span data-en="Open" data-np="खोल्नुहोस्">Open</span>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(subjectCard);
    });
}

// Show subject details
function showSubject(subjectId, subjectName) {
    console.log('showSubject called with:', subjectId, subjectName); // Debug log
    
    currentSubject = subjectId;
    
    const subjectClassNumberElement = document.getElementById('subjectClassNumber');
    const currentSubjectNameElement = document.getElementById('currentSubjectName');
    
    if (!subjectClassNumberElement || !currentSubjectNameElement) {
        console.error('Required elements not found for showing subject');
        return;
    }
    
    subjectClassNumberElement.textContent = currentClass;
    currentSubjectNameElement.textContent = subjectName;
    
    // Load subject data
    loadStudyMaterials();
    loadHomework();
    loadSubjectFiles();
    
    showSection('subjectDetail');
}

// Study Materials Functions
function addStudyMaterial() {
    const modal = new bootstrap.Modal(document.getElementById('studyMaterialModal'));
    modal.show();
}

function loadStudyMaterials() {
    const container = document.getElementById('studyMaterialsList');
    if (!container) return;
    
    // Load from localStorage or use sample data
    const materials = JSON.parse(localStorage.getItem(`materials_${currentClass}_${currentSubject}`)) || [];
    
    if (materials.length === 0) {
        container.innerHTML = `
            <div class="text-center text-muted py-4">
                <i class="fas fa-book fa-3x mb-3"></i>
                <p><span data-en="No study materials yet" data-np="अहिलेसम्म कुनै अध्ययन सामग्री छैन">No study materials yet</span></p>
                <button class="btn btn-primary" onclick="addStudyMaterial()">
                    <i class="fas fa-plus me-2"></i>
                    <span data-en="Add First Material" data-np="पहिलो सामग्री थप्नुहोस्">Add First Material</span>
                </button>
            </div>
        `;
    } else {
        container.innerHTML = materials.map((material, index) => `
            <div class="card material-card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h6 class="mb-0">${material.title}</h6>
                    <div class="d-flex align-items-center gap-2">
                        <span class="material-type ${material.type}">${material.type}</span>
                        <div class="btn-group" role="group">
                            <button class="btn btn-sm btn-outline-primary" onclick="viewStudyMaterial(${index})" title="View Material">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-warning" onclick="editStudyMaterial(${index})" title="Edit Material">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-info" onclick="shareStudyMaterial(${index})" title="Share Material">
                                <i class="fas fa-share"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-danger" onclick="deleteStudyMaterial(${index})" title="Delete Material">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-text">${material.description}</p>
                    ${material.file ? `<p class="text-muted"><i class="fas fa-paperclip me-2"></i>${material.file}</p>` : ''}
                    <small class="text-muted">Added: ${material.date}</small>
                </div>
            </div>
        `).join('');
    }
}

// View Study Material Function
function viewStudyMaterial(index) {
    const materials = JSON.parse(localStorage.getItem(`materials_${currentClass}_${currentSubject}`)) || [];
    
    if (index >= 0 && index < materials.length) {
        const material = materials[index];
        
        // Generate file viewer content based on file type
        let fileViewerContent = '';
        if (material.file) {
            const fileExtension = material.file.split('.').pop().toLowerCase();
            const fileName = material.file;
            
            if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'].includes(fileExtension)) {
                // Image viewer
                fileViewerContent = `
                    <div class="file-viewer-section mb-4">
                        <h6><i class="fas fa-image me-2"></i><span data-en="Image Preview" data-np="छवि पूर्वावलोकन">Image Preview</span></h6>
                        <div class="image-viewer">
                            <img src="uploads/${fileName}" alt="${material.title}" class="img-fluid rounded" 
                                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZjNzU3ZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4='">
                        </div>
                        <div class="mt-2">
                            <button class="btn btn-sm btn-outline-primary" onclick="downloadMaterialFile('${fileName}')">
                                <i class="fas fa-download me-1"></i><span data-en="Download" data-np="डाउनलोड">Download</span>
                            </button>
                            <button class="btn btn-sm btn-outline-secondary" onclick="openImageInNewTab('${fileName}')">
                                <i class="fas fa-external-link-alt me-1"></i><span data-en="Open in New Tab" data-np="नयाँ ट्याबमा खोल्नुहोस्">Open in New Tab</span>
                            </button>
                        </div>
                    </div>
                `;
            } else if (['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm', 'mkv'].includes(fileExtension)) {
                // Video viewer
                fileViewerContent = `
                    <div class="file-viewer-section mb-4">
                        <h6><i class="fas fa-video me-2"></i><span data-en="Video Player" data-np="भिडियो प्लेयर">Video Player</span></h6>
                        <div class="video-viewer">
                            <video controls class="w-100 rounded" preload="metadata">
                                <source src="uploads/${fileName}" type="video/${fileExtension}">
                                <span data-en="Your browser does not support the video tag." data-np="तपाईंको ब्राउजरले भिडियो ट्याग समर्थन गर्दैन।">Your browser does not support the video tag.</span>
                            </video>
                        </div>
                        <div class="mt-2">
                            <button class="btn btn-sm btn-outline-primary" onclick="downloadMaterialFile('${fileName}')">
                                <i class="fas fa-download me-1"></i><span data-en="Download" data-np="डाउनलोड">Download</span>
                            </button>
                        </div>
                    </div>
                `;
            } else if (['pdf'].includes(fileExtension)) {
                // PDF viewer
                fileViewerContent = `
                    <div class="file-viewer-section mb-4">
                        <h6><i class="fas fa-file-pdf me-2"></i><span data-en="PDF Document" data-np="PDF कागजात">PDF Document</span></h6>
                        <div class="pdf-viewer">
                            <iframe src="uploads/${fileName}#toolbar=1&navpanes=1&scrollbar=1" 
                                    class="w-100" style="height: 400px; border: 1px solid #dee2e6; border-radius: 0.375rem;">
                            </iframe>
                        </div>
                        <div class="mt-2">
                            <button class="btn btn-sm btn-outline-primary" onclick="downloadMaterialFile('${fileName}')">
                                <i class="fas fa-download me-1"></i><span data-en="Download" data-np="डाउनलोड">Download</span>
                            </button>
                            <button class="btn btn-sm btn-outline-secondary" onclick="openPDFInNewTab('${fileName}')">
                                <i class="fas fa-external-link-alt me-1"></i><span data-en="Open in New Tab" data-np="नयाँ ट्याबमा खोल्नुहोस्">Open in New Tab</span>
                            </button>
                        </div>
                    </div>
                `;
            } else if (['doc', 'docx'].includes(fileExtension)) {
                // Word document viewer (using Google Docs viewer)
                fileViewerContent = `
                    <div class="file-viewer-section mb-4">
                        <h6><i class="fas fa-file-word me-2"></i><span data-en="Word Document" data-np="वर्ड कागजात">Word Document</span></h6>
                        <div class="document-viewer">
                            <iframe src="https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + '/uploads/' + fileName)}&embedded=true" 
                                    class="w-100" style="height: 400px; border: 1px solid #dee2e6; border-radius: 0.375rem;">
                            </iframe>
                        </div>
                        <div class="mt-2">
                            <button class="btn btn-sm btn-outline-primary" onclick="downloadMaterialFile('${fileName}')">
                                <i class="fas fa-download me-1"></i><span data-en="Download" data-np="डाउनलोड">Download</span>
                            </button>
                        </div>
                    </div>
                `;
            } else if (['xls', 'xlsx'].includes(fileExtension)) {
                // Excel file viewer
                fileViewerContent = `
                    <div class="file-viewer-section mb-4">
                        <h6><i class="fas fa-file-excel me-2"></i><span data-en="Excel Spreadsheet" data-np="एक्सेल स्प्रेडशिट">Excel Spreadsheet</span></h6>
                        <div class="alert alert-info">
                            <i class="fas fa-info-circle me-2"></i>
                            <span data-en="Excel files can be viewed after downloading. Click download to open in Excel." data-np="एक्सेल फाइलहरू डाउनलोड गरेपछि हेर्न सकिन्छ। एक्सेलमा खोल्न डाउनलोड क्लिक गर्नुहोस्।">
                                Excel files can be viewed after downloading. Click download to open in Excel.
                            </span>
                        </div>
                        <div class="mt-2">
                            <button class="btn btn-sm btn-outline-primary" onclick="downloadMaterialFile('${fileName}')">
                                <i class="fas fa-download me-1"></i><span data-en="Download" data-np="डाउनलोड">Download</span>
                            </button>
                        </div>
                    </div>
                `;
            } else if (['ppt', 'pptx'].includes(fileExtension)) {
                // PowerPoint viewer
                fileViewerContent = `
                    <div class="file-viewer-section mb-4">
                        <h6><i class="fas fa-file-powerpoint me-2"></i><span data-en="PowerPoint Presentation" data-np="पावरपोइन्ट प्रेजेन्टेसन">PowerPoint Presentation</span></h6>
                        <div class="alert alert-info">
                            <i class="fas fa-info-circle me-2"></i>
                            <span data-en="PowerPoint files can be viewed after downloading. Click download to open in PowerPoint." data-np="पावरपोइन्ट फाइलहरू डाउनलोड गरेपछि हेर्न सकिन्छ। पावरपोइन्टमा खोल्न डाउनलोड क्लिक गर्नुहोस्।">
                                PowerPoint files can be viewed after downloading. Click download to open in PowerPoint.
                            </span>
                        </div>
                        <div class="mt-2">
                            <button class="btn btn-sm btn-outline-primary" onclick="downloadMaterialFile('${fileName}')">
                                <i class="fas fa-download me-1"></i><span data-en="Download" data-np="डाउनलोड">Download</span>
                            </button>
                        </div>
                    </div>
                `;
            } else if (['txt', 'md', 'rtf'].includes(fileExtension)) {
                // Text file viewer
                fileViewerContent = `
                    <div class="file-viewer-section mb-4">
                        <h6><i class="fas fa-file-alt me-2"></i><span data-en="Text Document" data-np="पाठ कागजात">Text Document</span></h6>
                        <div class="text-viewer">
                            <pre class="bg-light p-3 rounded" style="max-height: 300px; overflow-y: auto; font-size: 14px;" id="textContent-${index}">Loading...</pre>
                        </div>
                        <div class="mt-2">
                            <button class="btn btn-sm btn-outline-primary" onclick="downloadMaterialFile('${fileName}')">
                                <i class="fas fa-download me-1"></i><span data-en="Download" data-np="डाउनलोड">Download</span>
                            </button>
                        </div>
                    </div>
                `;
            } else {
                // Generic file viewer
                fileViewerContent = `
                    <div class="file-viewer-section mb-4">
                        <h6><i class="fas fa-file me-2"></i><span data-en="File Attachment" data-np="फाइल संलग्न">File Attachment</span></h6>
                        <div class="alert alert-info">
                            <i class="fas fa-paperclip me-2"></i>
                            <strong><span data-en="File:" data-np="फाइल:">File:</span></strong> ${fileName}
                        </div>
                        <div class="mt-2">
                            <button class="btn btn-sm btn-outline-primary" onclick="downloadMaterialFile('${fileName}')">
                                <i class="fas fa-download me-1"></i><span data-en="Download" data-np="डाउनलोड">Download</span>
                            </button>
                        </div>
                    </div>
                `;
            }
        }
        
        // Create and show view modal
        const modalHtml = `
            <div class="modal fade" id="viewMaterialModal" tabindex="-1">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                <i class="fas fa-eye me-2"></i>
                                <span data-en="View Material" data-np="सामग्री हेर्नुहोस्">View Material</span>
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-8">
                                    <h4>${material.title}</h4>
                                    <span class="material-type ${material.type} mb-3 d-inline-block">${material.type}</span>
                                    <p class="lead">${material.description}</p>
                                    ${fileViewerContent}
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-header">
                                            <h6 class="mb-0"><span data-en="Material Details" data-np="सामग्री विवरण">Material Details</span></h6>
                                        </div>
                                        <div class="card-body">
                                            <p><strong><span data-en="Type:" data-np="प्रकार:">Type:</span></strong> ${material.type}</p>
                                            <p><strong><span data-en="Added:" data-np="थपियो:">Added:</span></strong> ${material.date}</p>
                                            <p><strong><span data-en="Class:" data-np="कक्षा:">Class:</span></strong> ${currentClass}</p>
                                            <p><strong><span data-en="Subject:" data-np="विषय:">Subject:</span></strong> ${currentSubject}</p>
                                            ${material.file ? `<p><strong><span data-en="File:" data-np="फाइल:">File:</span></strong> ${material.file}</p>` : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                <span data-en="Close" data-np="बन्द गर्नुहोस्">Close</span>
                            </button>
                            <button type="button" class="btn btn-warning" onclick="editStudyMaterial(${index})" data-bs-dismiss="modal">
                                <i class="fas fa-edit me-1"></i>
                                <span data-en="Edit" data-np="सम्पादन गर्नुहोस्">Edit</span>
                            </button>
                            <button type="button" class="btn btn-info" onclick="shareStudyMaterial(${index})" data-bs-dismiss="modal">
                                <i class="fas fa-share me-1"></i>
                                <span data-en="Share" data-np="शेयर गर्नुहोस्">Share</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Remove existing modal if any
        const existingModal = document.getElementById('viewMaterialModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Add modal to body
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        
        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('viewMaterialModal'));
        modal.show();
        
        // Load text file content if it's a text file
        if (material.file && ['txt', 'md', 'rtf'].includes(material.file.split('.').pop().toLowerCase())) {
            loadTextFileContent(material.file, index);
        }
        
        // Update language
        updateLanguage();
    }
}

// Edit Study Material Function
function editStudyMaterial(index) {
    const materials = JSON.parse(localStorage.getItem(`materials_${currentClass}_${currentSubject}`)) || [];
    
    if (index >= 0 && index < materials.length) {
        const material = materials[index];
        
        // Populate the existing modal with material data
        document.getElementById('materialTitle').value = material.title;
        document.getElementById('materialDescription').value = material.description;
        document.getElementById('materialType').value = material.type;
        
        // Store the index for updating
        document.getElementById('studyMaterialForm').setAttribute('data-edit-index', index);
        
        // Change modal title and button
        const modalTitle = document.querySelector('#studyMaterialModal .modal-title');
        modalTitle.innerHTML = '<i class="fas fa-edit me-2"></i><span data-en="Edit Material" data-np="सामग्री सम्पादन गर्नुहोस्">Edit Material</span>';
        
        const submitBtn = document.querySelector('#studyMaterialForm .btn-primary');
        submitBtn.innerHTML = '<i class="fas fa-save me-2"></i><span data-en="Update Material" data-np="सामग्री अपडेट गर्नुहोस्">Update Material</span>';
        
        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('studyMaterialModal'));
        modal.show();
        
        // Update language
        updateLanguage();
    }
}

// Share Study Material Function
function shareStudyMaterial(index) {
    const materials = JSON.parse(localStorage.getItem(`materials_${currentClass}_${currentSubject}`)) || [];
    
    if (index >= 0 && index < materials.length) {
        const material = materials[index];
        
        // Create share modal
        const modalHtml = `
            <div class="modal fade" id="shareMaterialModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                <i class="fas fa-share me-2"></i>
                                <span data-en="Share Material" data-np="सामग्री शेयर गर्नुहोस्">Share Material</span>
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <h6>${material.title}</h6>
                            <p class="text-muted">${material.description}</p>
                            
                            <div class="mb-3">
                                <label class="form-label">
                                    <span data-en="Share via:" data-np="यस मार्फत शेयर गर्नुहोस्:">Share via:</span>
                                </label>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-outline-primary" onclick="shareViaEmail('${material.title}')">
                                        <i class="fas fa-envelope me-2"></i>
                                        <span data-en="Email" data-np="इमेल">Email</span>
                                    </button>
                                    <button class="btn btn-outline-success" onclick="shareViaWhatsApp('${material.title}')">
                                        <i class="fab fa-whatsapp me-2"></i>
                                        <span data-en="WhatsApp" data-np="व्हाट्सएप">WhatsApp</span>
                                    </button>
                                    <button class="btn btn-outline-info" onclick="shareViaLink('${material.title}')">
                                        <i class="fas fa-link me-2"></i>
                                        <span data-en="Copy Link" data-np="लिङ्क कपी गर्नुहोस्">Copy Link</span>
                                    </button>
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label class="form-label">
                                    <span data-en="Share with specific students:" data-np="विशेष विद्यार्थीहरूसँग शेयर गर्नुहोस्:">Share with specific students:</span>
                                </label>
                                <select class="form-select" id="studentSelect">
                                    <option value="">
                                        <span data-en="Select a student..." data-np="विद्यार्थी छान्नुहोस्...">Select a student...</span>
                                    </option>
                                    <option value="student1">Student 1</option>
                                    <option value="student2">Student 2</option>
                                    <option value="student3">Student 3</option>
                                </select>
                                <button class="btn btn-primary mt-2" onclick="shareWithStudent('${material.title}')">
                                    <i class="fas fa-user-plus me-1"></i>
                                    <span data-en="Share" data-np="शेयर गर्नुहोस्">Share</span>
                                </button>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                <span data-en="Close" data-np="बन्द गर्नुहोस्">Close</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Remove existing modal if any
        const existingModal = document.getElementById('shareMaterialModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Add modal to body
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        
        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('shareMaterialModal'));
        modal.show();
        
        // Update language
        updateLanguage();
    }
}

// Delete Study Material Function
function deleteStudyMaterial(index) {
    const materials = JSON.parse(localStorage.getItem(`materials_${currentClass}_${currentSubject}`)) || [];
    
    if (index >= 0 && index < materials.length) {
        const materialToDelete = materials[index];
        const confirmMessage = currentLanguage === 'np' 
            ? `के तपाईं यो सामग्री मेटाउन निश्चित हुनुहुन्छ? "${materialToDelete.title}"`
            : `Are you sure you want to delete this material? "${materialToDelete.title}"`;
            
        if (confirm(confirmMessage)) {
            materials.splice(index, 1);
            localStorage.setItem(`materials_${currentClass}_${currentSubject}`, JSON.stringify(materials));
            loadStudyMaterials();
            
            const successMessage = currentLanguage === 'np' 
                ? 'सामग्री सफलतापूर्वक मेटाइयो!'
                : 'Material deleted successfully!';
            showNotification(successMessage, 'success');
        }
    }
}

// Share Helper Functions
function shareViaEmail(materialTitle) {
    const subject = `Study Material: ${materialTitle}`;
    const body = `Check out this study material: ${materialTitle}\n\nClass: ${currentClass}\nSubject: ${currentSubject}\n\nShared from Mero School`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    const message = currentLanguage === 'np' 
        ? 'इमेल एप्लिकेसन खुल्यो!'
        : 'Email application opened!';
    showNotification(message, 'info');
}

function shareViaWhatsApp(materialTitle) {
    const text = `Check out this study material: ${materialTitle}\n\nClass: ${currentClass}\nSubject: ${currentSubject}\n\nShared from Mero School`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink);
    
    const message = currentLanguage === 'np' 
        ? 'व्हाट्सएप खुल्यो!'
        : 'WhatsApp opened!';
    showNotification(message, 'info');
}

function shareViaLink(materialTitle) {
    const shareUrl = `${window.location.origin}${window.location.pathname}?material=${encodeURIComponent(materialTitle)}&class=${currentClass}&subject=${currentSubject}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(shareUrl).then(() => {
        const message = currentLanguage === 'np' 
            ? 'लिङ्क क्लिपबोर्डमा कपी गरियो!'
            : 'Link copied to clipboard!';
        showNotification(message, 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const message = currentLanguage === 'np' 
            ? 'लिङ्क क्लिपबोर्डमा कपी गरियो!'
            : 'Link copied to clipboard!';
        showNotification(message, 'success');
    });
}

function shareWithStudent(materialTitle) {
    const studentSelect = document.getElementById('studentSelect');
    const selectedStudent = studentSelect.value;
    
    if (!selectedStudent) {
        const message = currentLanguage === 'np' 
            ? 'कृपया विद्यार्थी छान्नुहोस्!'
            : 'Please select a student!';
        showNotification(message, 'warning');
        return;
    }
    
    const message = currentLanguage === 'np' 
        ? `${materialTitle} ${selectedStudent} सँग शेयर गरियो!`
        : `${materialTitle} shared with ${selectedStudent}!`;
    showNotification(message, 'success');
}

function downloadMaterialFile(filename) {
    // Simulate file download
    const message = currentLanguage === 'np' 
        ? `${filename} डाउनलोड सुरु भयो!`
        : `Download started for ${filename}!`;
    showNotification(message, 'info');
}

// File viewing helper functions
function openImageInNewTab(filename) {
    const imageUrl = `uploads/${filename}`;
    window.open(imageUrl, '_blank');
}

function openPDFInNewTab(filename) {
    const pdfUrl = `uploads/${filename}`;
    window.open(pdfUrl, '_blank');
}

function loadTextFileContent(filename, index) {
    const textElement = document.getElementById(`textContent-${index}`);
    if (!textElement) return;
    
    // Simulate loading text file content
    // In a real application, you would fetch the file content from the server
    fetch(`uploads/${filename}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('File not found');
            }
            return response.text();
        })
        .then(content => {
            textElement.textContent = content;
        })
        .catch(error => {
            textElement.textContent = `Error loading file: ${error.message}\n\nThis is a demo. In a real application, the file content would be loaded here.`;
        });
}

// Enhanced file upload function to handle different file types
function handleFileUpload(file, materialId) {
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const allowedTypes = {
        'image': ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'],
        'video': ['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm', 'mkv'],
        'document': ['pdf', 'doc', 'docx', 'txt', 'md', 'rtf'],
        'spreadsheet': ['xls', 'xlsx'],
        'presentation': ['ppt', 'pptx']
    };
    
    let fileType = 'other';
    for (const [type, extensions] of Object.entries(allowedTypes)) {
        if (extensions.includes(fileExtension)) {
            fileType = type;
            break;
        }
    }
    
    // In a real application, you would upload the file to the server
    // For now, we'll simulate the upload
    const message = currentLanguage === 'np' 
        ? `${file.name} सफलतापूर्वक अपलोड गरियो!`
        : `${file.name} uploaded successfully!`;
    showNotification(message, 'success');
    
    return {
        name: file.name,
        type: fileType,
        size: file.size,
        url: `uploads/${file.name}`
    };
}

// Homework Functions
function addHomework() {
    const modal = new bootstrap.Modal(document.getElementById('homeworkModal'));
    modal.show();
}

function loadHomework() {
    const container = document.getElementById('homeworkList');
    if (!container) return;
    
    // Load from localStorage or use sample data
    const homework = JSON.parse(localStorage.getItem(`homework_${currentClass}_${currentSubject}`)) || [];
    
    if (homework.length === 0) {
        container.innerHTML = `
            <div class="text-center text-muted py-4">
                <i class="fas fa-tasks fa-3x mb-3"></i>
                <p><span data-en="No homework assigned yet" data-np="अहिलेसम्म कुनै गृहकार्य दिइएको छैन">No homework assigned yet</span></p>
                <button class="btn btn-success" onclick="addHomework()">
                    <i class="fas fa-plus me-2"></i>
                    <span data-en="Add First Homework" data-np="पहिलो गृहकार्य थप्नुहोस्">Add First Homework</span>
                </button>
            </div>
        `;
    } else {
        container.innerHTML = homework.map(hw => {
            const dueDate = new Date(hw.dueDate);
            const isOverdue = dueDate < new Date();
            return `
                <div class="card homework-card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h6 class="mb-0">${hw.title}</h6>
                        <span class="homework-priority ${hw.priority}">${hw.priority}</span>
                    </div>
                    <div class="card-body">
                        <p class="card-text">${hw.description}</p>
                        ${hw.file ? `<p class="text-muted"><i class="fas fa-paperclip me-2"></i>${hw.file}</p>` : ''}
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="homework-due ${isOverdue ? 'overdue' : ''}">
                                <i class="fas fa-calendar me-1"></i>
                                <span data-en="Due" data-np="समाप्ति">Due</span>: ${dueDate.toLocaleDateString()}
                                ${isOverdue ? ' (<span data-en="Overdue" data-np="ढिलो">Overdue</span>)' : ''}
                            </small>
                            <div class="d-flex gap-2">
                                <button class="btn btn-sm btn-outline-primary" onclick="markHomeworkComplete('${hw.id}')">
                                    <i class="fas fa-check me-1"></i>
                                    <span data-en="Complete" data-np="पूरा गर्नुहोस्">Complete</span>
                                </button>
                                <button class="btn btn-sm btn-outline-danger" onclick="deleteHomework('${hw.id}')" title="Delete Homework">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// File Functions
function uploadFile() {
    // Simulate file upload
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            addSubjectFile(file.name, file.size);
        }
    };
    fileInput.click();
}

function loadSubjectFiles() {
    const container = document.getElementById('filesList');
    if (!container) return;
    
    // Load from localStorage or use sample data
    const files = JSON.parse(localStorage.getItem(`files_${currentClass}_${currentSubject}`)) || [];
    
    if (files.length === 0) {
        container.innerHTML = `
            <div class="text-center text-muted py-4">
                <i class="fas fa-file fa-3x mb-3"></i>
                <p><span data-en="No files uploaded yet" data-np="अहिलेसम्म कुनै फाइल अपलोड गरिएको छैन">No files uploaded yet</span></p>
                <button class="btn btn-info" onclick="uploadFile()">
                    <i class="fas fa-upload me-2"></i>
                    <span data-en="Upload First File" data-np="पहिलो फाइल अपलोड गर्नुहोस्">Upload First File</span>
                </button>
            </div>
        `;
    } else {
        container.innerHTML = files.map(file => `
            <div class="file-item">
                <div class="file-icon">
                    <i class="fas fa-file"></i>
                </div>
                <div class="file-info">
                    <div class="file-name">${file.name}</div>
                    <div class="file-meta">${formatFileSize(file.size)} • ${file.date}</div>
                </div>
                <div class="file-actions">
                    <button class="btn btn-sm btn-outline-primary" onclick="downloadFile('${file.name}')">
                        <i class="fas fa-download"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" onclick="deleteFile('${file.name}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
}

// Utility Functions
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function addSubjectFile(name, size) {
    const files = JSON.parse(localStorage.getItem(`files_${currentClass}_${currentSubject}`)) || [];
    const newFile = {
        name: name,
        size: size,
        date: new Date().toLocaleDateString()
    };
    files.push(newFile);
    localStorage.setItem(`files_${currentClass}_${currentSubject}`, JSON.stringify(files));
    loadSubjectFiles();
}

function downloadFile(filename) {
    alert(`Downloading ${filename}...`);
}

function deleteFile(filename) {
    if (confirm('Are you sure you want to delete this file?')) {
        const files = JSON.parse(localStorage.getItem(`files_${currentClass}_${currentSubject}`)) || [];
        const updatedFiles = files.filter(file => file.name !== filename);
        localStorage.setItem(`files_${currentClass}_${currentSubject}`, JSON.stringify(updatedFiles));
        loadSubjectFiles();
    }
}

function markHomeworkComplete(homeworkId) {
    alert('Homework marked as complete!');
}

function deleteHomework(homeworkId) {
    const homework = JSON.parse(localStorage.getItem(`homework_${currentClass}_${currentSubject}`)) || [];
    const homeworkIndex = homework.findIndex(hw => hw.id === homeworkId);
    
    if (homeworkIndex !== -1) {
        const homeworkToDelete = homework[homeworkIndex];
        const confirmMessage = currentLanguage === 'np' 
            ? `के तपाईं यो गृहकार्य मेटाउन निश्चित हुनुहुन्छ? "${homeworkToDelete.title}"`
            : `Are you sure you want to delete this homework? "${homeworkToDelete.title}"`;
            
        if (confirm(confirmMessage)) {
            homework.splice(homeworkIndex, 1);
            localStorage.setItem(`homework_${currentClass}_${currentSubject}`, JSON.stringify(homework));
            loadHomework();
            
            const successMessage = currentLanguage === 'np' 
                ? 'गृहकार्य सफलतापूर्वक मेटाइयो!'
                : 'Homework deleted successfully!';
            showNotification(successMessage, 'success');
        }
    }
}

// Social Authentication Functions
function signInWithGoogle() {
    const button = event.target;
    
    // Check if button is already loading
    if (button.classList.contains('btn-loading')) {
        return;
    }
    
    // Add loading state
    button.classList.add('btn-loading');
    button.disabled = true;
    
    // Store original button text
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Signing in...';
    
    // Simulate Google OAuth flow
    setTimeout(() => {
        try {
            // Simulate successful Google sign-in
            const googleUser = {
                id: 'google_' + Date.now(),
                name: 'Google User',
                email: 'user@gmail.com',
                provider: 'google',
                avatar: 'https://via.placeholder.com/40/4285f4/ffffff?text=G'
            };
            
            handleSocialLogin(googleUser);
        } catch (error) {
            console.error('Google sign-in error:', error);
            showNotification('Failed to sign in with Google. Please try again.', 'error');
        } finally {
            // Remove loading state
            button.classList.remove('btn-loading');
            button.disabled = false;
            button.innerHTML = originalText;
        }
    }, 2000);
}

function signUpWithGoogle() {
    const button = event.target;
    
    // Check if button is already loading
    if (button.classList.contains('btn-loading')) {
        return;
    }
    
    // Add loading state
    button.classList.add('btn-loading');
    button.disabled = true;
    
    // Store original button text
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Signing up...';
    
    // Simulate Google OAuth flow for signup
    setTimeout(() => {
        try {
            // Simulate successful Google signup
            const googleUser = {
                id: 'google_' + Date.now(),
                name: 'New Google User',
                email: 'newuser@gmail.com',
                provider: 'google',
                avatar: 'https://via.placeholder.com/40/4285f4/ffffff?text=G'
            };
            
            handleSocialSignup(googleUser);
        } catch (error) {
            console.error('Google signup error:', error);
            showNotification('Failed to sign up with Google. Please try again.', 'error');
        } finally {
            // Remove loading state
            button.classList.remove('btn-loading');
            button.disabled = false;
            button.innerHTML = originalText;
        }
    }, 2000);
}

function signInWithApple() {
    const button = event.target;
    
    // Check if button is already loading
    if (button.classList.contains('btn-loading')) {
        return;
    }
    
    // Add loading state
    button.classList.add('btn-loading');
    button.disabled = true;
    
    // Store original button text
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Signing in...';
    
    // Simulate Apple OAuth flow
    setTimeout(() => {
        try {
            // Simulate successful Apple sign-in
            const appleUser = {
                id: 'apple_' + Date.now(),
                name: 'Apple User',
                email: 'user@icloud.com',
                provider: 'apple',
                avatar: 'https://via.placeholder.com/40/000000/ffffff?text=A'
            };
            
            handleSocialLogin(appleUser);
        } catch (error) {
            console.error('Apple sign-in error:', error);
            showNotification('Failed to sign in with Apple. Please try again.', 'error');
        } finally {
            // Remove loading state
            button.classList.remove('btn-loading');
            button.disabled = false;
            button.innerHTML = originalText;
        }
    }, 2000);
}

function signUpWithApple() {
    const button = event.target;
    
    // Check if button is already loading
    if (button.classList.contains('btn-loading')) {
        return;
    }
    
    // Add loading state
    button.classList.add('btn-loading');
    button.disabled = true;
    
    // Store original button text
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Signing up...';
    
    // Simulate Apple OAuth flow for signup
    setTimeout(() => {
        try {
            // Simulate successful Apple signup
            const appleUser = {
                id: 'apple_' + Date.now(),
                name: 'New Apple User',
                email: 'newuser@icloud.com',
                provider: 'apple',
                avatar: 'https://via.placeholder.com/40/000000/ffffff?text=A'
            };
            
            handleSocialSignup(appleUser);
        } catch (error) {
            console.error('Apple signup error:', error);
            showNotification('Failed to sign up with Apple. Please try again.', 'error');
        } finally {
            // Remove loading state
            button.classList.remove('btn-loading');
            button.disabled = false;
            button.innerHTML = originalText;
        }
    }, 2000);
}

function handleSocialLogin(user) {
    // Store user data
    localStorage.setItem('currentUser', JSON.stringify(user));
    currentUser = user;
    
    // Update UI
    document.getElementById('userDisplay').textContent = user.name;
    document.getElementById('userName').textContent = user.name;
    
    // Show user avatar and provider info
    if (user.avatar) {
        const avatarContainer = document.getElementById('userAvatar');
        const avatarImg = avatarContainer.querySelector('img');
        avatarImg.src = user.avatar;
        avatarContainer.style.display = 'block';
    }
    
    if (user.email) {
        const emailElement = document.getElementById('userEmail');
        emailElement.textContent = user.email;
        emailElement.style.display = 'block';
    }
    
    if (user.provider) {
        const providerElement = document.getElementById('userProvider');
        const providerName = user.provider.charAt(0).toUpperCase() + user.provider.slice(1);
        providerElement.textContent = providerName;
        providerElement.style.display = 'block';
    }
    
    // Update account dropdown
    updateAccountDropdown(user);
    
    // Show success message
    showNotification(`Welcome back, ${user.name}!`, 'success');
    
    // Navigate to dashboard
    showSection('dashboard');
    updateNavigation('dashboard');
}

function handleSocialSignup(user) {
    // Store user data
    localStorage.setItem('currentUser', JSON.stringify(user));
    currentUser = user;
    
    // Save to users list (simulate database)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Update UI
    document.getElementById('userDisplay').textContent = user.name;
    document.getElementById('userName').textContent = user.name;
    
    // Show user avatar and provider info
    if (user.avatar) {
        const avatarContainer = document.getElementById('userAvatar');
        const avatarImg = avatarContainer.querySelector('img');
        avatarImg.src = user.avatar;
        avatarContainer.style.display = 'block';
    }
    
    if (user.email) {
        const emailElement = document.getElementById('userEmail');
        emailElement.textContent = user.email;
        emailElement.style.display = 'block';
    }
    
    if (user.provider) {
        const providerElement = document.getElementById('userProvider');
        const providerName = user.provider.charAt(0).toUpperCase() + user.provider.slice(1);
        providerElement.textContent = providerName;
        providerElement.style.display = 'block';
    }
    
    // Update account dropdown
    updateAccountDropdown(user);
    
    // Show success message
    showNotification(`Welcome to Mero School, ${user.name}!`, 'success');
    
    // Navigate to dashboard
    showSection('dashboard');
    updateNavigation('dashboard');
}

// Enhanced notification function
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Update account dropdown based on login status
function updateAccountDropdown(user) {
    const userInfoSections = document.querySelectorAll('#userInfoSection');
    const authSections = document.querySelectorAll('#authSection');
    const userActionsSections = document.querySelectorAll('#userActionsSection');
    
    if (user) {
        // User is logged in - show user info and actions, hide auth
        userInfoSections.forEach(section => section.style.display = 'block');
        authSections.forEach(section => section.style.display = 'none');
        userActionsSections.forEach(section => section.style.display = 'block');
        
        // Update user display in navbar
        document.getElementById('userDisplay').textContent = user.name;
    } else {
        // User is not logged in - hide user info and actions, show auth
        userInfoSections.forEach(section => section.style.display = 'none');
        authSections.forEach(section => section.style.display = 'block');
        userActionsSections.forEach(section => section.style.display = 'none');
        
        // Reset user display in navbar
        document.getElementById('userDisplay').textContent = 'Account';
    }
}

// Show user profile
function showUserProfile() {
    if (!currentUser) {
        showNotification('Please login first', 'warning');
        return;
    }
    
    // Create profile modal content
    const profileContent = `
        <div class="text-center mb-4">
            <img src="${currentUser.avatar || 'https://via.placeholder.com/100/667eea/ffffff?text=U'}" 
                 alt="Profile" class="rounded-circle mb-3" width="100" height="100">
            <h4>${currentUser.name}</h4>
            <p class="text-muted">${currentUser.email}</p>
            <span class="badge bg-primary">${currentUser.provider ? currentUser.provider.charAt(0).toUpperCase() + currentUser.provider.slice(1) : 'Local'}</span>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label"><strong>Name:</strong></label>
                    <p>${currentUser.name}</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label"><strong>Email:</strong></label>
                    <p>${currentUser.email}</p>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <label class="form-label"><strong>Account Type:</strong></label>
            <p>${currentUser.provider ? currentUser.provider.charAt(0).toUpperCase() + currentUser.provider.slice(1) + ' Account' : 'Local Account'}</p>
        </div>
    `;
    
    // Show profile in a modal or alert
    alert(`Profile Information:\n\nName: ${currentUser.name}\nEmail: ${currentUser.email}\nProvider: ${currentUser.provider || 'Local'}`);
}

// Logout function
function logout() {
    // Clear user data
    localStorage.removeItem('currentUser');
    currentUser = null;
    
    // Reset UI
    document.getElementById('userDisplay').textContent = 'Account';
    document.getElementById('userName').textContent = '';
    document.getElementById('userAvatar').style.display = 'none';
    document.getElementById('userEmail').style.display = 'none';
    document.getElementById('userProvider').style.display = 'none';
    
    // Update account dropdown
    updateAccountDropdown(null);
    
    // Show logout message
    showNotification('You have been logged out successfully', 'info');
    
    // Navigate to home
    showSection('home');
    updateNavigation('home');
}

// Form submission handlers
document.addEventListener('DOMContentLoaded', function() {
    // Study Material Form
    const studyMaterialForm = document.getElementById('studyMaterialForm');
    if (studyMaterialForm) {
        studyMaterialForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('materialTitle').value;
            const description = document.getElementById('materialDescription').value;
            const type = document.getElementById('materialType').value;
            const file = document.getElementById('materialFile').files[0];
            
            // Check if this is an edit operation
            const editIndex = studyMaterialForm.getAttribute('data-edit-index');
            
            if (editIndex !== null) {
                // Edit existing material
                const materials = JSON.parse(localStorage.getItem(`materials_${currentClass}_${currentSubject}`)) || [];
                const index = parseInt(editIndex);
                
                if (index >= 0 && index < materials.length) {
                    materials[index] = {
                        ...materials[index],
                        title: title,
                        description: description,
                        type: type,
                        file: file ? file.name : materials[index].file,
                        date: materials[index].date // Keep original date
                    };
                    
                    localStorage.setItem(`materials_${currentClass}_${currentSubject}`, JSON.stringify(materials));
                    
                    // Reset form and modal
                    studyMaterialForm.removeAttribute('data-edit-index');
                    const modalTitle = document.querySelector('#studyMaterialModal .modal-title');
                    modalTitle.innerHTML = '<i class="fas fa-plus me-2"></i><span data-en="Add Study Material" data-np="अध्ययन सामग्री थप्नुहोस्">Add Study Material</span>';
                    
                    const submitBtn = document.querySelector('#studyMaterialForm .btn-primary');
                    submitBtn.innerHTML = '<i class="fas fa-plus me-2"></i><span data-en="Add Material" data-np="सामग्री थप्नुहोस्">Add Material</span>';
                    
                    const successMessage = currentLanguage === 'np' 
                        ? 'सामग्री सफलतापूर्वक अपडेट गरियो!'
                        : 'Material updated successfully!';
                    showNotification(successMessage, 'success');
                }
            } else {
                // Add new material
                const material = {
                    id: Date.now().toString(),
                    title: title,
                    description: description,
                    type: type,
                    file: file ? file.name : null,
                    date: new Date().toLocaleDateString()
                };
                
                const materials = JSON.parse(localStorage.getItem(`materials_${currentClass}_${currentSubject}`)) || [];
                materials.push(material);
                localStorage.setItem(`materials_${currentClass}_${currentSubject}`, JSON.stringify(materials));
                
                const successMessage = currentLanguage === 'np' 
                    ? 'सामग्री सफलतापूर्वक थपियो!'
                    : 'Study material added successfully!';
                showNotification(successMessage, 'success');
            }
            
            // Close modal and reload
            const modal = bootstrap.Modal.getInstance(document.getElementById('studyMaterialModal'));
            modal.hide();
            studyMaterialForm.reset();
            loadStudyMaterials();
            updateLanguage();
        });
    }
    
    // Homework Form
    const homeworkForm = document.getElementById('homeworkForm');
    if (homeworkForm) {
        homeworkForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('homeworkTitle').value;
            const description = document.getElementById('homeworkDescription').value;
            const dueDate = document.getElementById('homeworkDueDate').value;
            const priority = document.getElementById('homeworkPriority').value;
            const file = document.getElementById('homeworkFile').files[0];
            
            const homework = {
                id: Date.now().toString(),
                title: title,
                description: description,
                dueDate: dueDate,
                priority: priority,
                file: file ? file.name : null,
                date: new Date().toLocaleDateString()
            };
            
            // Save to localStorage
            const homeworkList = JSON.parse(localStorage.getItem(`homework_${currentClass}_${currentSubject}`)) || [];
            homeworkList.push(homework);
            localStorage.setItem(`homework_${currentClass}_${currentSubject}`, JSON.stringify(homeworkList));
            
            // Close modal and reload
            const modal = bootstrap.Modal.getInstance(document.getElementById('homeworkModal'));
            modal.hide();
            homeworkForm.reset();
            loadHomework();
            
            showNotification('Homework added successfully!', 'success');
        });
    }
});

// Add some sample data for demonstration
function addSampleData() {
    // Sample study materials for Class 1 Math
    const sampleMaterials = [
        {
            id: '1',
            title: 'Basic Addition',
            description: 'Learn to add numbers from 1 to 10 with fun examples and exercises.',
            type: 'lesson',
            file: null,
            date: '2024-01-15'
        },
        {
            id: '2',
            title: 'Addition Practice',
            description: 'Practice problems for addition with visual aids and step-by-step solutions.',
            type: 'exercise',
            file: 'sample.txt',
            date: '2024-01-16'
        },
        {
            id: '3',
            title: 'Mathematics Notes',
            description: 'Comprehensive notes covering basic mathematics concepts for Class 1.',
            type: 'note',
            file: 'sample.md',
            date: '2024-01-17'
        }
    ];
    
    // Sample homework for Class 1 Math
    const sampleHomework = [
        {
            id: '1',
            title: 'Complete Addition Worksheet',
            description: 'Finish the addition problems on pages 1-3 of your workbook.',
            dueDate: '2024-01-20',
            priority: 'medium',
            file: 'homework_sheet.pdf',
            date: '2024-01-17'
        },
        {
            id: '2',
            title: 'Practice Counting',
            description: 'Practice counting from 1 to 50 and write the numbers in your notebook.',
            dueDate: '2024-01-18',
            priority: 'high',
            file: null,
            date: '2024-01-17'
        }
    ];
    
    // Save sample data
    localStorage.setItem('materials_1_math', JSON.stringify(sampleMaterials));
    localStorage.setItem('homework_1_math', JSON.stringify(sampleHomework));
    
    // Add more sample data for search testing
    const nepaliMaterials = [
        {
            id: '1',
            title: 'Nepali Alphabets',
            description: 'Learn the fundamental Nepali alphabets and their pronunciation.',
            type: 'lesson',
            file: 'nepali_alphabets.pdf',
            date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
            id: '2',
            title: 'Nepali Grammar Quiz',
            description: 'Test your knowledge of basic Nepali grammar rules.',
            type: 'quiz',
            file: 'grammar_quiz.pdf',
            date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
        }
    ];
    
    const englishMaterials = [
        {
            id: '1',
            title: 'English Vocabulary',
            description: 'Essential English vocabulary for daily communication.',
            type: 'lesson',
            file: 'vocabulary.pdf',
            date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
            id: '2',
            title: 'English Grammar Notes',
            description: 'Comprehensive notes on English grammar rules.',
            type: 'note',
            file: 'grammar_notes.pdf',
            date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString()
        }
    ];
    
    const scienceMaterials = [
        {
            id: '1',
            title: 'Basic Science Experiments',
            description: 'Simple science experiments for young learners.',
            type: 'exercise',
            file: 'experiments.pdf',
            date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
        }
    ];
    
    // Save additional sample data
    localStorage.setItem('materials_1_nepali', JSON.stringify(nepaliMaterials));
    localStorage.setItem('materials_1_english', JSON.stringify(englishMaterials));
    localStorage.setItem('materials_1_science', JSON.stringify(scienceMaterials));
    
    // Add homework for different subjects
    const nepaliHomework = [
        {
            id: '1',
            title: 'Practice Nepali Writing',
            description: 'Write Nepali alphabets in your notebook.',
            dueDate: '2024-01-25',
            priority: 'high',
            file: null,
            date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
        }
    ];
    
    const englishHomework = [
        {
            id: '1',
            title: 'English Reading Assignment',
            description: 'Read the assigned story and answer questions.',
            dueDate: '2024-01-26',
            priority: 'medium',
            file: 'reading_assignment.pdf',
            date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
        }
    ];
    
    localStorage.setItem('homework_1_nepali', JSON.stringify(nepaliHomework));
    localStorage.setItem('homework_1_english', JSON.stringify(englishHomework));
}

// Advanced Calculator functionality
let calculatorDisplay = '0';
let calculatorPreviousValue = null;
let calculatorOperation = null;
let calculatorWaitingForOperand = false;
let calculatorHistory = [];
let calculatorMemory = 0;
let isScientificMode = false;
let currentNumberSystem = 'english'; // 'english' or 'nepali'

// Nepali number mapping
const nepaliNumbers = {
    '0': '०', '1': '१', '2': '२', '3': '३', '4': '४',
    '5': '५', '6': '६', '7': '७', '8': '८', '9': '९'
};

const englishNumbers = {
    '०': '0', '१': '1', '२': '2', '३': '3', '४': '4',
    '५': '5', '६': '6', '७': '7', '८': '8', '९': '9'
};

function calculatorInput(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        // Handle operators
        if (calculatorOperation && !calculatorWaitingForOperand) {
            calculate();
        }
        calculatorOperation = value;
        calculatorPreviousValue = parseFloat(calculatorDisplay);
        calculatorWaitingForOperand = true;
        addToHistory(calculatorPreviousValue + ' ' + getOperatorSymbol(calculatorOperation));
    } else {
        // Handle numbers and decimal
        if (calculatorWaitingForOperand) {
            calculatorDisplay = value;
            calculatorWaitingForOperand = false;
        } else {
            if (value === '.' && calculatorDisplay.includes('.')) {
                return; // Don't add multiple decimals
            }
            calculatorDisplay = calculatorDisplay === '0' && value !== '.' ? value : calculatorDisplay + value;
        }
    }
    updateCalculatorDisplay();
}

function calculatorFunction(func) {
    switch (func) {
        case 'clear':
            clearCalculator();
            break;
        case 'backspace':
            backspace();
            break;
        case 'percent':
            percent();
            break;
        case 'plusMinus':
            plusMinus();
            break;
    }
}

function scientificFunction(func) {
    const value = parseFloat(calculatorDisplay);
    let result;
    
    switch (func) {
        case 'sin':
            result = Math.sin(value * Math.PI / 180);
            break;
        case 'cos':
            result = Math.cos(value * Math.PI / 180);
            break;
        case 'tan':
            result = Math.tan(value * Math.PI / 180);
            break;
        case 'asin':
            result = Math.asin(value) * 180 / Math.PI;
            break;
        case 'acos':
            result = Math.acos(value) * 180 / Math.PI;
            break;
        case 'atan':
            result = Math.atan(value) * 180 / Math.PI;
            break;
        case 'log':
            result = Math.log10(value);
            break;
        case 'ln':
            result = Math.log(value);
            break;
        case 'sqrt':
            result = Math.sqrt(value);
            break;
        case 'pow':
            result = Math.pow(value, 2);
            break;
        case 'cube':
            result = Math.pow(value, 3);
            break;
        case 'factorial':
            result = factorial(value);
            break;
    }
    
    if (isNaN(result)) {
        alert('Invalid input for this function!');
        return;
    }
    
    calculatorDisplay = String(result);
    addToHistory(func + '(' + value + ') = ' + result);
    updateCalculatorDisplay();
}

function memoryFunction(func) {
    const value = parseFloat(calculatorDisplay);
    
    switch (func) {
        case 'mc':
            calculatorMemory = 0;
            break;
        case 'mr':
            calculatorDisplay = String(calculatorMemory);
            updateCalculatorDisplay();
            break;
        case 'm+':
            calculatorMemory += value;
            break;
        case 'm-':
            calculatorMemory -= value;
            break;
    }
}

function calculate() {
    const currentValue = parseFloat(calculatorDisplay);
    
    if (calculatorPreviousValue === null || !calculatorOperation) {
        return;
    }
    
    let result;
    switch (calculatorOperation) {
        case '+':
            result = calculatorPreviousValue + currentValue;
            break;
        case '-':
            result = calculatorPreviousValue - currentValue;
            break;
        case '*':
            result = calculatorPreviousValue * currentValue;
            break;
        case '/':
            if (currentValue === 0) {
                alert('Cannot divide by zero!');
                clearCalculator();
                return;
            }
            result = calculatorPreviousValue / currentValue;
            break;
        default:
            return;
    }
    
    const expression = calculatorPreviousValue + ' ' + getOperatorSymbol(calculatorOperation) + ' ' + currentValue + ' = ' + result;
    addToHistory(expression);
    
    calculatorDisplay = String(result);
    calculatorPreviousValue = result;
    calculatorOperation = null;
    calculatorWaitingForOperand = true;
    updateCalculatorDisplay();
}

function clearCalculator() {
    calculatorDisplay = '0';
    calculatorPreviousValue = null;
    calculatorOperation = null;
    calculatorWaitingForOperand = false;
    updateCalculatorDisplay();
}

function backspace() {
    if (calculatorDisplay.length > 1) {
        calculatorDisplay = calculatorDisplay.slice(0, -1);
    } else {
        calculatorDisplay = '0';
    }
    updateCalculatorDisplay();
}

function percent() {
    const value = parseFloat(calculatorDisplay);
    const result = value / 100;
    calculatorDisplay = String(result);
    updateCalculatorDisplay();
}

function plusMinus() {
    const value = parseFloat(calculatorDisplay);
    calculatorDisplay = String(-value);
    updateCalculatorDisplay();
}

function factorial(n) {
    if (n < 0 || n !== Math.floor(n)) {
        return NaN;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function getOperatorSymbol(operator) {
    switch (operator) {
        case '+': return '+';
        case '-': return '-';
        case '*': return '×';
        case '/': return '÷';
        default: return operator;
    }
}

function addToHistory(entry) {
    calculatorHistory.push(entry);
    if (calculatorHistory.length > 10) {
        calculatorHistory.shift();
    }
    updateCalculatorHistory();
}

function updateCalculatorHistory() {
    const historyElement = document.getElementById('calculatorHistory');
    if (historyElement) {
        historyElement.innerHTML = calculatorHistory.join('<br>');
        historyElement.scrollTop = historyElement.scrollHeight;
    }
}

function toggleCalculatorMode() {
    isScientificMode = !isScientificMode;
    const scientificFunctions = document.getElementById('scientificFunctions');
    const modeButton = document.querySelector('.calculator-mode-switch button');
    
    if (isScientificMode) {
        scientificFunctions.style.display = 'block';
        modeButton.innerHTML = '<i class="fas fa-calculator me-1"></i><span data-en="Standard" data-np="मानक">Standard</span>';
    } else {
        scientificFunctions.style.display = 'none';
        modeButton.innerHTML = '<i class="fas fa-cog me-1"></i><span data-en="Scientific" data-np="वैज्ञानिक">Scientific</span>';
    }
}

function convertToNepaliNumbers(text) {
    return text.split('').map(char => nepaliNumbers[char] || char).join('');
}

function convertToEnglishNumbers(text) {
    return text.split('').map(char => englishNumbers[char] || char).join('');
}

function toggleNumberSystem(system) {
    currentNumberSystem = system;
    
    // Update button states
    document.querySelectorAll('.calculator-number-toggle button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('button').classList.add('active');
    
    // Update number buttons
    const numberButtons = document.querySelectorAll('.number-btn');
    numberButtons.forEach(btn => {
        if (system === 'nepali') {
            btn.classList.add('nepali-active');
        } else {
            btn.classList.remove('nepali-active');
        }
    });
    
    // Update calculator display
    const display = document.getElementById('calculatorDisplay');
    if (display) {
        if (system === 'nepali') {
            display.classList.add('nepali-active');
            display.textContent = convertToNepaliNumbers(calculatorDisplay);
        } else {
            display.classList.remove('nepali-active');
            display.textContent = convertToEnglishNumbers(calculatorDisplay);
        }
    }
    
    // Update history
    updateCalculatorHistory();
}

function updateCalculatorDisplay() {
    const display = document.getElementById('calculatorDisplay');
    if (display) {
        if (currentNumberSystem === 'nepali') {
            display.textContent = convertToNepaliNumbers(calculatorDisplay);
        } else {
            display.textContent = calculatorDisplay;
        }
    }
}

function updateCalculatorHistory() {
    const historyElement = document.getElementById('calculatorHistory');
    if (historyElement) {
        let historyText = calculatorHistory.join('<br>');
        if (currentNumberSystem === 'nepali') {
            historyText = convertToNepaliNumbers(historyText);
        }
        historyElement.innerHTML = historyText;
        historyElement.scrollTop = historyElement.scrollHeight;
    }
}

// Form handling
function setupEventListeners() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    // Video chat event listeners
    setupVideoChatEvents();
    
    // Whiteboard event listeners
    setupWhiteboardEvents();
    
    // Homework filter event listener
    const homeworkFilter = document.getElementById('homeworkFilter');
    if (homeworkFilter) {
        homeworkFilter.addEventListener('change', loadHomework);
    }
}

// Video Chat Event Setup
function setupVideoChatEvents() {
    // Initialize video chat when section is shown
    document.addEventListener('click', function(e) {
        if (e.target && e.target.getAttribute('onclick') && e.target.getAttribute('onclick').includes('showSection(\'videoChat\')')) {
            setTimeout(initVideoChat, 100);
        }
    });
}

// Initialize Video Chat
function initVideoChat() {
    const mainVideo = document.getElementById('mainVideo');
    const videoOverlay = document.getElementById('videoOverlay');
    
    if (mainVideo && videoOverlay) {
        // Set up video element
        mainVideo.style.display = 'block';
        videoOverlay.style.display = 'flex';
        
        // Initialize chat functionality
        initChat();
        initParticipants();
        initRoomManagement();
    }
}

// Initialize Chat
function initChat() {
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    
    if (sendMessageBtn) {
        sendMessageBtn.addEventListener('click', sendMessage);
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

// Send Chat Message
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    
    if (chatInput && chatInput.value.trim()) {
        const message = chatInput.value.trim();
        const timestamp = new Date().toLocaleTimeString();
        
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message sent';
        messageElement.innerHTML = `
            <div class="message-content">
                <div class="message-text">${message}</div>
                <div class="message-time">${timestamp}</div>
            </div>
        `;
        
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        chatInput.value = '';
        
        // Simulate response after 1-3 seconds
        setTimeout(() => {
            const responses = [
                'Great question!',
                'I understand.',
                'Let me explain that.',
                'Excellent point!',
                'Thank you for asking.'
            ];
            const response = responses[Math.floor(Math.random() * responses.length)];
            
            const responseElement = document.createElement('div');
            responseElement.className = 'chat-message received';
            responseElement.innerHTML = `
                <div class="message-content">
                    <div class="message-text">${response}</div>
                    <div class="message-time">${new Date().toLocaleTimeString()}</div>
                </div>
            `;
            
            chatMessages.appendChild(responseElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000 + Math.random() * 2000);
    }
}

// Initialize Participants
function initParticipants() {
    const participantsList = document.getElementById('participantsList');
    
    if (participantsList) {
        // Add sample participants
        const participants = [
            { name: 'Teacher Ram', role: 'Teacher', status: 'online' },
            { name: 'Student Sita', role: 'Student', status: 'online' },
            { name: 'Student Hari', role: 'Student', status: 'online' }
        ];
        
        participantsList.innerHTML = '';
        participants.forEach(participant => {
            const participantElement = document.createElement('div');
            participantElement.className = 'participant-item';
            participantElement.innerHTML = `
                <div class="participant-info">
                    <div class="participant-name">${participant.name}</div>
                    <div class="participant-role">${participant.role}</div>
                </div>
                <div class="participant-status ${participant.status}"></div>
            `;
            participantsList.appendChild(participantElement);
        });
    }
}

// Initialize Room Management
function initRoomManagement() {
    const createRoomBtn = document.getElementById('createRoomBtn');
    const joinRoomBtn = document.getElementById('joinRoomBtn');
    
    if (createRoomBtn) {
        createRoomBtn.addEventListener('click', createRoom);
    }
    
    if (joinRoomBtn) {
        joinRoomBtn.addEventListener('click', joinRoom);
    }
}

// Create Room
function createRoom() {
    const roomId = Math.random().toString(36).substr(2, 8).toUpperCase();
    document.getElementById('roomId').value = roomId;
    showNotification(`Room created: ${roomId}`, 'success');
}

// Join Room
function joinRoom() {
    const roomId = document.getElementById('roomId').value.trim();
    if (roomId) {
        showNotification(`Joined room: ${roomId}`, 'success');
    } else {
        showNotification('Please enter a room ID', 'error');
    }
}

// Toggle Video
function toggleVideo() {
    const startVideoBtn = document.getElementById('startVideoBtn');
    const mainVideo = document.getElementById('mainVideo');
    const videoOverlay = document.getElementById('videoOverlay');
    
    if (!isVideoOn) {
        // Start video
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(stream => {
                localStream = stream;
                mainVideo.srcObject = stream;
                isVideoOn = true;
                
                startVideoBtn.innerHTML = '<i class="fas fa-video-slash me-2"></i><span data-en="Stop Video" data-np="भिडियो रोक्नुहोस्">Stop Video</span>';
                videoOverlay.style.display = 'none';
                showNotification('Video started', 'success');
            })
            .catch(error => {
                console.error('Error accessing camera:', error);
                showNotification('Failed to start video', 'error');
            });
    } else {
        // Stop video
        if (localStream) {
            localStream.getTracks().forEach(track => track.stop());
            localStream = null;
        }
        
        mainVideo.srcObject = null;
        isVideoOn = false;
        
        startVideoBtn.innerHTML = '<i class="fas fa-video me-2"></i><span data-en="Start Video" data-np="भिडियो सुरु गर्नुहोस्">Start Video</span>';
        videoOverlay.style.display = 'flex';
        showNotification('Video stopped', 'info');
    }
}

// Toggle Audio
function toggleAudio() {
    const startAudioBtn = document.getElementById('startAudioBtn');
    
    if (!isAudioOn) {
        // Start audio
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            .then(stream => {
                isAudioOn = true;
                startAudioBtn.innerHTML = '<i class="fas fa-microphone-slash me-2"></i><span data-en="Mute Audio" data-np="अडियो म्युट गर्नुहोस्">Mute Audio</span>';
                showNotification('Audio started', 'success');
            })
            .catch(error => {
                console.error('Error accessing microphone:', error);
                showNotification('Failed to start audio', 'error');
            });
    } else {
        // Stop audio
        isAudioOn = false;
        startAudioBtn.innerHTML = '<i class="fas fa-microphone me-2"></i><span data-en="Start Audio" data-np="अडियो सुरु गर्नुहोस्">Start Audio</span>';
        showNotification('Audio stopped', 'info');
    }
}

// End Call
function endCall() {
    // Stop all media streams
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        localStream = null;
    }
    
    if (screenShareStream) {
        screenShareStream.getTracks().forEach(track => track.stop());
        screenShareStream = null;
    }
    
    // Reset states
    isVideoOn = false;
    isAudioOn = false;
    isScreenSharing = false;
    isWhiteboardActive = false;
    
    // Reset UI
    const mainVideo = document.getElementById('mainVideo');
    const videoOverlay = document.getElementById('videoOverlay');
    const screenShareOverlay = document.getElementById('screenShareOverlay');
    const whiteboardOverlay = document.getElementById('whiteboardOverlay');
    
    if (mainVideo) mainVideo.srcObject = null;
    if (videoOverlay) videoOverlay.style.display = 'flex';
    if (screenShareOverlay) screenShareOverlay.style.display = 'none';
    if (whiteboardOverlay) whiteboardOverlay.style.display = 'none';
    
    // Reset buttons
    const startVideoBtn = document.getElementById('startVideoBtn');
    const startAudioBtn = document.getElementById('startAudioBtn');
    const screenShareBtn = document.getElementById('screenShareBtn');
    const whiteboardBtn = document.getElementById('whiteboardBtn');
    
    if (startVideoBtn) startVideoBtn.innerHTML = '<i class="fas fa-video me-2"></i><span data-en="Start Video" data-np="भिडियो सुरु गर्नुहोस्">Start Video</span>';
    if (startAudioBtn) startAudioBtn.innerHTML = '<i class="fas fa-microphone me-2"></i><span data-en="Start Audio" data-np="अडियो सुरु गर्नुहोस्">Start Audio</span>';
    if (screenShareBtn) screenShareBtn.innerHTML = '<i class="fas fa-desktop me-2"></i><span data-en="Share Screen" data-np="स्क्रिन शेयर गर्नुहोस्">Share Screen</span>';
    if (whiteboardBtn) whiteboardBtn.innerHTML = '<i class="fas fa-chalkboard me-2"></i><span data-en="Whiteboard" data-np="वाइटबोर्ड">Whiteboard</span>';
    
    showNotification('Call ended', 'info');
}

// Whiteboard Event Setup
function setupWhiteboardEvents() {
    // Color picker and brush size change handlers
    document.addEventListener('DOMContentLoaded', function() {
        const colorPicker = document.getElementById('colorPicker');
        const brushSize = document.getElementById('brushSize');
        
        if (colorPicker) {
            colorPicker.addEventListener('change', function() {
                currentColor = this.value;
                if (whiteboardCtx) {
                    whiteboardCtx.strokeStyle = currentColor;
                }
            });
        }
        
        if (brushSize) {
            brushSize.addEventListener('input', function() {
                brushSize = parseInt(this.value);
                if (whiteboardCtx) {
                    whiteboardCtx.lineWidth = brushSize;
                }
            });
        }
    });
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        showAlert('Please fill in all fields', 'danger');
        return;
    }
    
    // Simple validation (in real app, this would check against a database)
    if (username.length >= 3 && password.length >= 6) {
        currentUser = { username: username };
        document.getElementById('userDisplay').textContent = username;
        showAlert('Login successful!', 'success');
        showSection('dashboard');
    } else {
        showAlert('Invalid username or password', 'danger');
    }
}

function handleSignup(event) {
    event.preventDefault();
    
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('signupPassword').value;
    
    if (!username || !email || !password) {
        showAlert('Please fill in all fields', 'danger');
        return;
    }
    
    if (password.length < 6) {
        showAlert('Password must be at least 6 characters', 'danger');
        return;
    }
    
    // Simple validation (in real app, this would save to a database)
    currentUser = { username: username, email: email };
    document.getElementById('userDisplay').textContent = username;
    showAlert('Account created successfully!', 'success');
    showSection('dashboard');
}

// Utility functions
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert at the top of the current section
    const currentSection = document.querySelector('.section.active');
    if (currentSection) {
        currentSection.insertBefore(alertDiv, currentSection.firstChild);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 5000);
    }
}

// File upload functionality (simulated)
function uploadFile(file, classId, subject) {
    const fileData = {
        id: Date.now(),
        name: file.name,
        size: file.size,
        type: file.type,
        classId: classId,
        subject: subject,
        uploadedAt: new Date()
    };
    
    uploadedFiles.push(fileData);
    showAlert('File uploaded successfully!', 'success');
    
    // In a real app, this would upload to a server
    console.log('File uploaded:', fileData);
}

// Export functions for global access
window.showSection = showSection;
window.changeLanguage = changeLanguage;
window.showClass = showClass;
window.calculatorInput = calculatorInput;
window.calculate = calculate;
window.clearCalculator = clearCalculator;
window.calculatorFunction = calculatorFunction;
window.scientificFunction = scientificFunction;
window.memoryFunction = memoryFunction;
window.toggleCalculatorMode = toggleCalculatorMode;
window.toggleNumberSystem = toggleNumberSystem;

// Debug calculator functions
console.log('Calculator functions loaded:', {
    calculatorInput: typeof calculatorInput,
    calculate: typeof calculate,
    clearCalculator: typeof clearCalculator
});

// Test calculator on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Calculator display element:', document.getElementById('calculatorDisplay'));
    console.log('Calculator buttons:', document.querySelectorAll('.calculator-btn'));
    
    // Test calculator functionality
    setTimeout(() => {
        console.log('Testing calculator...');
        clearCalculator();
        calculatorInput('5');
        calculatorInput('+');
        calculatorInput('3');
        calculate();
        console.log('Calculator test result:', calculatorDisplay);
    }, 1000);
});

// Test function for debugging class selection
function testClassSelection() {
    console.log('=== CLASS SELECTION DEBUG TEST ===');
    
    // Check if dropdown exists
    const dropdown = document.getElementById('classSelect');
    console.log('Dropdown exists:', !!dropdown);
    if (dropdown) {
        console.log('Dropdown value:', dropdown.value);
        console.log('Dropdown options count:', dropdown.options.length);
    }
    
    // Check if container exists
    const container = document.getElementById('classSelectionContainer');
    console.log('Container exists:', !!container);
    if (container) {
        console.log('Container children count:', container.children.length);
        console.log('Container display style:', container.style.display);
    }
    
    // Check if buttons exist
    const buttons = document.querySelectorAll('.class-select-btn');
    console.log('Class selection buttons found:', buttons.length);
    
    // Check if selectClass function exists
    console.log('selectClass function exists:', typeof selectClass === 'function');
    console.log('selectClassFromDropdown function exists:', typeof selectClassFromDropdown === 'function');
    
    // Check if view subjects button exists
    const viewBtn = document.getElementById('viewSubjectsBtn');
    console.log('View subjects button exists:', !!viewBtn);
    if (viewBtn) {
        console.log('View subjects button display:', viewBtn.style.display);
    }
    
    // Check localStorage
    console.log('Selected class in localStorage:', localStorage.getItem('selectedClass'));
    
    // Try to manually call selectClass
    if (typeof selectClass === 'function') {
        console.log('Testing selectClass(1)...');
        selectClass(1);
    }
    
    console.log('=== END DEBUG TEST ===');
}

// Language switcher visibility management
function setupLanguageSwitcher() {
    const languageSwitcher = document.querySelector('.language-switcher');
    const languageIndicator = document.querySelector('.language-indicator');
    
    if (!languageSwitcher) return;
    
    // Add mouse enter/leave events for smoother interaction
    languageSwitcher.addEventListener('mouseenter', function() {
        this.style.opacity = '1';
        this.style.visibility = 'visible';
        this.style.transform = 'translateY(0)';
        if (languageIndicator) {
            languageIndicator.style.opacity = '0';
            languageIndicator.style.visibility = 'hidden';
        }
    });
    
    languageSwitcher.addEventListener('mouseleave', function() {
        this.style.opacity = '0';
        this.style.visibility = 'hidden';
        this.style.transform = 'translateY(-10px)';
        if (languageIndicator) {
            languageIndicator.style.opacity = '0.6';
            languageIndicator.style.visibility = 'visible';
        }
    });
    
    // Show language switcher when clicking the indicator
    if (languageIndicator) {
        languageIndicator.addEventListener('click', function() {
            languageSwitcher.style.opacity = '1';
            languageSwitcher.style.visibility = 'visible';
            languageSwitcher.style.transform = 'translateY(0)';
            this.style.opacity = '0';
            this.style.visibility = 'hidden';
        });
    }
    
    // Ensure language buttons are fully clickable
    const languageButtons = languageSwitcher.querySelectorAll('button');
    languageButtons.forEach(button => {
        // Make sure the button and all its children are clickable
        button.style.cursor = 'pointer';
        button.style.userSelect = 'none';
        
        // Add pointer events to all child elements
        const children = button.querySelectorAll('*');
        children.forEach(child => {
            child.style.pointerEvents = 'auto';
        });
        
        // Add click event listener to the entire button
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Remove active class from all buttons
            languageButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Determine language from button content or data attribute
            const buttonText = this.textContent.trim();
            let lang = 'en';
            if (buttonText.includes('ने') || buttonText.includes('Nepali')) {
                lang = 'np';
            }
            
            // Change language
            changeLanguage(lang);
        });
    });
}

// Video Chat Variables
let localStream = null;
let isVideoOn = false;
let isAudioOn = false;
let isScreenSharing = false;
let isWhiteboardActive = false;
let screenShareStream = null;

// Whiteboard Variables
let whiteboardCanvas = null;
let whiteboardCtx = null;
let isDrawing = false;
let currentTool = 'pen';
let currentColor = '#000000';
let brushSize = 3;
let lastX = 0;
let lastY = 0;

// Slides Variables
let currentSlideIndex = 0;
let slides = [
    {
        title: "Welcome to Mero School",
        content: "An interactive learning platform for students in Nepal",
        type: "title"
    },
    {
        title: "Mathematics",
        content: "Learn numbers, calculations, and problem-solving skills",
        type: "content"
    },
    {
        title: "English Language",
        content: "Improve reading, writing, and communication skills",
        type: "content"
    },
    {
        title: "Nepali Language",
        content: "Master Nepali grammar, literature, and culture",
        type: "content"
    },
    {
        title: "Interactive Learning",
        content: "Engage with animations, whiteboard, and real-time collaboration",
        type: "content"
    }
];

// Homework Data
let homeworkData = [
    {
        id: 1,
        student: "Ram Kumar",
        title: "Mathematics Assignment",
        content: "Complete exercises 1-10 from Chapter 3",
        status: "completed",
        submittedDate: "2024-01-15",
        grade: "A"
    },
    {
        id: 2,
        student: "Sita Sharma",
        title: "English Essay",
        content: "Write a 500-word essay on 'My School'",
        status: "pending",
        dueDate: "2024-01-20"
    },
    {
        id: 3,
        student: "Hari Thapa",
        title: "Nepali Grammar",
        content: "Practice verb conjugation exercises",
        status: "completed",
        submittedDate: "2024-01-14",
        grade: "B+"
    }
];

// Animation Variables
let currentAnimation = null;
let animationInterval = null;
let animationElements = [];

// Screen Sharing Functions
function toggleScreenShare() {
    if (!isScreenSharing) {
        startScreenShare();
    } else {
        stopScreenShare();
    }
}

async function startScreenShare() {
    try {
        screenShareStream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: false
        });
        
        const screenShareVideo = document.createElement('video');
        screenShareVideo.srcObject = screenShareStream;
        screenShareVideo.autoplay = true;
        screenShareVideo.muted = true;
        
        const screenShareContent = document.getElementById('screenShareContent');
        screenShareContent.innerHTML = '';
        screenShareContent.appendChild(screenShareVideo);
        
        document.getElementById('screenShareOverlay').style.display = 'flex';
        document.getElementById('screenShareBtn').innerHTML = '<i class="fas fa-stop me-2"></i><span data-en="Stop Sharing" data-np="शेयरिङ रोक्नुहोस्">Stop Sharing</span>';
        
        isScreenSharing = true;
        
        // Handle screen share stop
        screenShareStream.getVideoTracks()[0].onended = () => {
            stopScreenShare();
        };
        
        showNotification('Screen sharing started', 'success');
    } catch (error) {
        console.error('Error starting screen share:', error);
        showNotification('Failed to start screen sharing', 'error');
    }
}

function stopScreenShare() {
    if (screenShareStream) {
        screenShareStream.getTracks().forEach(track => track.stop());
        screenShareStream = null;
    }
    
    document.getElementById('screenShareOverlay').style.display = 'none';
    document.getElementById('screenShareBtn').innerHTML = '<i class="fas fa-desktop me-2"></i><span data-en="Share Screen" data-np="स्क्रिन शेयर गर्नुहोस्">Share Screen</span>';
    
    isScreenSharing = false;
    showNotification('Screen sharing stopped', 'info');
}

// Whiteboard Functions
function toggleWhiteboard() {
    const whiteboardOverlay = document.getElementById('whiteboardOverlay');
    
    if (!isWhiteboardActive) {
        whiteboardOverlay.style.display = 'flex';
        initWhiteboard();
        document.getElementById('whiteboardBtn').innerHTML = '<i class="fas fa-times me-2"></i><span data-en="Close Board" data-np="बोर्ड बन्द गर्नुहोस्">Close Board</span>';
        isWhiteboardActive = true;
    } else {
        whiteboardOverlay.style.display = 'none';
        document.getElementById('whiteboardBtn').innerHTML = '<i class="fas fa-chalkboard me-2"></i><span data-en="Whiteboard" data-np="वाइटबोर्ड">Whiteboard</span>';
        isWhiteboardActive = false;
    }
}

function initWhiteboard() {
    whiteboardCanvas = document.getElementById('whiteboardCanvas');
    whiteboardCtx = whiteboardCanvas.getContext('2d');
    
    // Set canvas size
    const container = whiteboardCanvas.parentElement;
    whiteboardCanvas.width = container.clientWidth - 40;
    whiteboardCanvas.height = container.clientHeight - 80;
    
    // Set initial styles
    whiteboardCtx.strokeStyle = currentColor;
    whiteboardCtx.lineWidth = brushSize;
    whiteboardCtx.lineCap = 'round';
    whiteboardCtx.lineJoin = 'round';
    
    // Add event listeners
    whiteboardCanvas.addEventListener('mousedown', startDrawing);
    whiteboardCanvas.addEventListener('mousemove', draw);
    whiteboardCanvas.addEventListener('mouseup', stopDrawing);
    whiteboardCanvas.addEventListener('mouseout', stopDrawing);
    
    // Touch events for mobile
    whiteboardCanvas.addEventListener('touchstart', handleTouch);
    whiteboardCanvas.addEventListener('touchmove', handleTouch);
    whiteboardCanvas.addEventListener('touchend', stopDrawing);
}

function startDrawing(e) {
    isDrawing = true;
    const rect = whiteboardCanvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;
}

function draw(e) {
    if (!isDrawing) return;
    
    const rect = whiteboardCanvas.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;
    
    whiteboardCtx.beginPath();
    whiteboardCtx.moveTo(lastX, lastY);
    whiteboardCtx.lineTo(currentX, currentY);
    whiteboardCtx.stroke();
    
    lastX = currentX;
    lastY = currentY;
}

function stopDrawing() {
    isDrawing = false;
}

function handleTouch(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent(e.type === 'touchstart' ? 'mousedown' : 
                                    e.type === 'touchmove' ? 'mousemove' : 'mouseup', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    whiteboardCanvas.dispatchEvent(mouseEvent);
}

function setTool(tool) {
    currentTool = tool;
    
    // Update active tool button
    document.querySelectorAll('.whiteboard-tools .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(tool + 'Tool').classList.add('active');
    
    // Update context based on tool
    switch(tool) {
        case 'pen':
            whiteboardCtx.globalCompositeOperation = 'source-over';
            whiteboardCtx.strokeStyle = currentColor;
            break;
        case 'eraser':
            whiteboardCtx.globalCompositeOperation = 'destination-out';
            break;
        case 'text':
            // Text tool implementation
            break;
        case 'shape':
            // Shape tool implementation
            break;
    }
}

function clearWhiteboard() {
    whiteboardCtx.clearRect(0, 0, whiteboardCanvas.width, whiteboardCanvas.height);
}

// Color and brush size change handlers
document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('colorPicker');
    const brushSize = document.getElementById('brushSize');
    
    if (colorPicker) {
        colorPicker.addEventListener('change', function() {
            currentColor = this.value;
            if (whiteboardCtx) {
                whiteboardCtx.strokeStyle = currentColor;
            }
        });
    }
    
    if (brushSize) {
        brushSize.addEventListener('input', function() {
            brushSize = parseInt(this.value);
            if (whiteboardCtx) {
                whiteboardCtx.lineWidth = brushSize;
            }
        });
    }
});

// Slides Functions
function showSlides() {
    const slidesModal = new bootstrap.Modal(document.getElementById('slidesModal'));
    slidesModal.show();
    loadSlides();
}

function loadSlides() {
    const slideContent = document.getElementById('slideContent');
    const slidesThumbnails = document.getElementById('slidesThumbnails');
    
    // Load current slide
    displaySlide(currentSlideIndex);
    
    // Generate thumbnails
    slidesThumbnails.innerHTML = '';
    slides.forEach((slide, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `slide-thumbnail ${index === currentSlideIndex ? 'active' : ''}`;
        thumbnail.innerHTML = `<strong>${index + 1}</strong>`;
        thumbnail.onclick = () => goToSlide(index);
        slidesThumbnails.appendChild(thumbnail);
    });
    
    updateSlideCounter();
}

function displaySlide(index) {
    const slide = slides[index];
    const slideContent = document.getElementById('slideContent');
    
    slideContent.innerHTML = `
        <div class="slide-in">
            <h1>${slide.title}</h1>
            <p>${slide.content}</p>
        </div>
    `;
}

function goToSlide(index) {
    currentSlideIndex = index;
    displaySlide(index);
    updateSlideCounter();
    
    // Update thumbnails
    document.querySelectorAll('.slide-thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    if (currentSlideIndex < slides.length - 1) {
        goToSlide(currentSlideIndex + 1);
    }
}

function previousSlide() {
    if (currentSlideIndex > 0) {
        goToSlide(currentSlideIndex - 1);
    }
}

function updateSlideCounter() {
    document.getElementById('currentSlide').textContent = currentSlideIndex + 1;
    document.getElementById('totalSlides').textContent = slides.length;
}

function shareSlide() {
    showNotification('Slide shared with students', 'success');
}

// Homework Functions
function showHomework() {
    const homeworkModal = new bootstrap.Modal(document.getElementById('homeworkModal'));
    homeworkModal.show();
    loadHomework();
}

function loadHomework() {
    const homeworkList = document.getElementById('homeworkList');
    const filter = document.getElementById('homeworkFilter').value;
    
    let filteredHomework = homeworkData;
    if (filter !== 'all') {
        filteredHomework = homeworkData.filter(hw => hw.status === filter);
    }
    
    homeworkList.innerHTML = '';
    filteredHomework.forEach(homework => {
        const homeworkItem = document.createElement('div');
        homeworkItem.className = 'homework-item';
        homeworkItem.innerHTML = `
            <div class="homework-header">
                <div class="homework-title">${homework.title}</div>
                <span class="homework-status ${homework.status}">
                    ${homework.status === 'completed' ? 'Completed' : 'Pending'}
                </span>
            </div>
            <div class="homework-student">Student: ${homework.student}</div>
            <div class="homework-content">${homework.content}</div>
            ${homework.grade ? `<div class="mb-2"><strong>Grade: ${homework.grade}</strong></div>` : ''}
            <div class="homework-actions">
                <button class="btn btn-sm btn-primary" onclick="viewHomework(${homework.id})">
                    <i class="fas fa-eye me-1"></i>
                    <span data-en="View" data-np="हेर्नुहोस्">View</span>
                </button>
                <button class="btn btn-sm btn-success" onclick="gradeHomework(${homework.id})">
                    <i class="fas fa-star me-1"></i>
                    <span data-en="Grade" data-np="मूल्याङ्कन">Grade</span>
                </button>
            </div>
        `;
        homeworkList.appendChild(homeworkItem);
    });
}

function viewHomework(id) {
    const homework = homeworkData.find(hw => hw.id === id);
    if (homework) {
        showNotification(`Viewing homework: ${homework.title}`, 'info');
    }
}

function gradeHomework(id) {
    const homework = homeworkData.find(hw => hw.id === id);
    if (homework) {
        const grade = prompt('Enter grade (A, B, C, D, F):', homework.grade || '');
        if (grade) {
            homework.grade = grade.toUpperCase();
            homework.status = 'completed';
            loadHomework();
            showNotification(`Homework graded: ${grade}`, 'success');
        }
    }
}

// Animation Functions
function showAnimations() {
    const animationsModal = new bootstrap.Modal(document.getElementById('animationsModal'));
    animationsModal.show();
    showAnimationCategory('math');
}

function showAnimationCategory(category) {
    // Update active category button
    document.querySelectorAll('.animation-categories .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    const animationPlayer = document.getElementById('animationPlayer');
    animationPlayer.innerHTML = '';
    
    // Clear previous animation
    if (animationInterval) {
        clearInterval(animationInterval);
    }
    
    // Create animation based on category
    switch(category) {
        case 'math':
            createMathAnimation();
            break;
        case 'science':
            createScienceAnimation();
            break;
        case 'english':
            createEnglishAnimation();
            break;
        case 'nepali':
            createNepaliAnimation();
            break;
    }
}

function createMathAnimation() {
    const player = document.getElementById('animationPlayer');
    
    // Create number elements
    for (let i = 0; i < 5; i++) {
        const element = document.createElement('div');
        element.className = 'animation-element math-animation';
        element.textContent = i + 1;
        element.style.left = Math.random() * (player.clientWidth - 100) + 'px';
        element.style.top = Math.random() * (player.clientHeight - 100) + 'px';
        element.style.animationDelay = i * 0.5 + 's';
        element.classList.add('bounce');
        player.appendChild(element);
    }
}

function createScienceAnimation() {
    const player = document.getElementById('animationPlayer');
    
    const element = document.createElement('div');
    element.className = 'animation-element science-animation';
    element.innerHTML = '<i class="fas fa-atom"></i>';
    element.style.left = '50%';
    element.style.top = '50%';
    element.style.transform = 'translate(-50%, -50%)';
    element.classList.add('rotate');
    player.appendChild(element);
}

function createEnglishAnimation() {
    const player = document.getElementById('animationPlayer');
    
    const words = ['Hello', 'World', 'Learn', 'English', 'Fun'];
    words.forEach((word, i) => {
        const element = document.createElement('div');
        element.className = 'animation-element english-animation';
        element.textContent = word;
        element.style.left = Math.random() * (player.clientWidth - 120) + 'px';
        element.style.top = Math.random() * (player.clientHeight - 60) + 'px';
        element.style.animationDelay = i * 0.3 + 's';
        element.classList.add('pulse');
        player.appendChild(element);
    });
}

function createNepaliAnimation() {
    const player = document.getElementById('animationPlayer');
    
    const nepaliWords = ['नमस्ते', 'विश्व', 'सिक्नुहोस्', 'नेपाली', 'रमाइलो'];
    nepaliWords.forEach((word, i) => {
        const element = document.createElement('div');
        element.className = 'animation-element nepali-animation';
        element.textContent = word;
        element.style.left = Math.random() * (player.clientWidth - 100) + 'px';
        element.style.top = Math.random() * (player.clientHeight - 100) + 'px';
        element.style.animationDelay = i * 0.4 + 's';
        element.classList.add('slide-in');
        player.appendChild(element);
    });
}

function playAnimation() {
    const elements = document.querySelectorAll('.animation-element');
    elements.forEach(element => {
        element.style.animationPlayState = 'running';
    });
    showNotification('Animation playing', 'info');
}

function pauseAnimation() {
    const elements = document.querySelectorAll('.animation-element');
    elements.forEach(element => {
        element.style.animationPlayState = 'paused';
    });
    showNotification('Animation paused', 'info');
}

function resetAnimation() {
    const player = document.getElementById('animationPlayer');
    player.innerHTML = '';
    
    // Recreate current animation
    const activeCategory = document.querySelector('.animation-categories .btn.active');
    if (activeCategory) {
        const category = activeCategory.textContent.trim().toLowerCase();
        showAnimationCategory(category);
    }
    
    showNotification('Animation reset', 'info');
}

function shareAnimation() {
    showNotification('Animation shared with students', 'success');
}

// Search functionality
let searchResults = [];
let currentSearchQuery = '';

// Perform search across all materials
function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const classFilter = document.getElementById('searchClassFilter').value;
    const subjectFilter = document.getElementById('searchSubjectFilter').value;
    const typeFilter = document.getElementById('searchTypeFilter').value;
    const dateFilter = document.getElementById('searchDateFilter').value;

    if (!query && !classFilter && !subjectFilter && !typeFilter && !dateFilter) {
        clearSearch();
        return;
    }

    currentSearchQuery = query;
    searchResults = [];

    // Search through all classes and subjects
    for (let classNum = 1; classNum <= 12; classNum++) {
        if (classFilter && classNum !== parseInt(classFilter)) continue;

        const subjects = subjectsByClass[classNum] || [];
        subjects.forEach(subject => {
            if (subjectFilter && subject.id !== subjectFilter) return;

            // Search study materials
            const materials = JSON.parse(localStorage.getItem(`materials_${classNum}_${subject.id}`)) || [];
            materials.forEach((material, index) => {
                if (matchesSearchCriteria(material, query, typeFilter, dateFilter, 'material')) {
                    searchResults.push({
                        type: 'material',
                        class: classNum,
                        subject: subject,
                        material: material,
                        index: index,
                        relevance: calculateRelevance(material, query)
                    });
                }
            });

            // Search homework
            const homework = JSON.parse(localStorage.getItem(`homework_${classNum}_${subject.id}`)) || [];
            homework.forEach((hw, index) => {
                if (matchesSearchCriteria(hw, query, typeFilter, dateFilter, 'homework')) {
                    searchResults.push({
                        type: 'homework',
                        class: classNum,
                        subject: subject,
                        homework: hw,
                        index: index,
                        relevance: calculateRelevance(hw, query)
                    });
                }
            });
        });
    }

    displaySearchResults();
}

// Check if item matches search criteria
function matchesSearchCriteria(item, query, typeFilter, dateFilter, itemType) {
    // Text search
    if (query) {
        const searchableText = `${item.title} ${item.description} ${item.subject || ''}`.toLowerCase();
        if (!searchableText.includes(query)) return false;
    }

    // Type filter
    if (typeFilter) {
        if (itemType === 'material' && item.type !== typeFilter) return false;
        if (itemType === 'homework' && typeFilter !== 'homework') return false;
    }

    // Date filter
    if (dateFilter) {
        const itemDate = new Date(item.date);
        const now = new Date();
        
        switch (dateFilter) {
            case 'today':
                if (itemDate.toDateString() !== now.toDateString()) return false;
                break;
            case 'week':
                const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                if (itemDate < weekAgo) return false;
                break;
            case 'month':
                const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                if (itemDate < monthAgo) return false;
                break;
            case 'year':
                const yearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
                if (itemDate < yearAgo) return false;
                break;
        }
    }

    return true;
}

// Calculate search relevance score
function calculateRelevance(item, query) {
    if (!query) return 0;
    
    let score = 0;
    const searchableText = `${item.title} ${item.description}`.toLowerCase();
    
    // Exact title match
    if (item.title.toLowerCase().includes(query)) score += 10;
    
    // Partial title match
    if (item.title.toLowerCase().includes(query.split(' ')[0])) score += 5;
    
    // Description match
    if (item.description.toLowerCase().includes(query)) score += 3;
    
    // Recent items get bonus
    const daysOld = (new Date() - new Date(item.date)) / (1000 * 60 * 60 * 24);
    if (daysOld < 7) score += 2;
    else if (daysOld < 30) score += 1;
    
    return score;
}

// Display search results
function displaySearchResults() {
    const resultsContainer = document.getElementById('searchResults');
    const resultsList = document.getElementById('searchResultsList');
    const resultsCount = document.getElementById('searchResultsCount');
    const noResults = document.getElementById('noSearchResults');

    if (searchResults.length === 0) {
        resultsContainer.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    resultsContainer.style.display = 'block';
    noResults.style.display = 'none';
    resultsCount.textContent = searchResults.length;

    // Sort by relevance by default
    searchResults.sort((a, b) => b.relevance - a.relevance);

    resultsList.innerHTML = searchResults.map(result => {
        const item = result.type === 'material' ? result.material : result.homework;
        const icon = getItemIcon(result.type, item.type);
        const color = getItemColor(result.type, item.type);
        
        return `
            <div class="col-md-6 col-lg-4">
                <div class="card search-result-card h-100" onclick="openSearchResult(${result.class}, '${result.subject.id}', ${result.index}, '${result.type}')">
                    <div class="card-body">
                        <div class="d-flex align-items-start mb-2">
                            <div class="me-3">
                                <i class="${icon} fa-2x" style="color: ${color}"></i>
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="card-title mb-1">${item.title}</h6>
                                <p class="card-text text-muted small mb-2">${item.description.substring(0, 100)}${item.description.length > 100 ? '...' : ''}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="badge bg-secondary">Class ${result.class}</span>
                                    <span class="badge" style="background-color: ${result.subject.color}">${result.subject.name}</span>
                                </div>
                                <div class="mt-2">
                                    <small class="text-muted">
                                        <i class="fas fa-calendar me-1"></i>${formatDate(item.date)}
                                    </small>
                                    <span class="badge bg-primary ms-2">${result.type}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Get icon for search result item
function getItemIcon(type, itemType) {
    if (type === 'homework') return 'fas fa-tasks';
    
    switch (itemType) {
        case 'lesson': return 'fas fa-book';
        case 'exercise': return 'fas fa-dumbbell';
        case 'quiz': return 'fas fa-question-circle';
        case 'note': return 'fas fa-sticky-note';
        default: return 'fas fa-file';
    }
}

// Get color for search result item
function getItemColor(type, itemType) {
    if (type === 'homework') return '#e74c3c';
    
    switch (itemType) {
        case 'lesson': return '#3498db';
        case 'exercise': return '#f39c12';
        case 'quiz': return '#9b59b6';
        case 'note': return '#27ae60';
        default: return '#95a5a6';
    }
}

// Open search result
function openSearchResult(classNum, subjectId, index, type) {
    // Navigate to the specific class and subject
    showClass(classNum);
    
    // Wait for the subject page to load, then open the specific item
    setTimeout(() => {
        showSubject(subjectId, subjectsByClass[classNum].find(s => s.id === subjectId).name);
        
        setTimeout(() => {
            if (type === 'material') {
                viewStudyMaterial(index);
            } else if (type === 'homework') {
                // For homework, we might want to show it in a modal or navigate to homework tab
                const homeworkTab = document.getElementById('homework-tab');
                if (homeworkTab) {
                    homeworkTab.click();
                }
            }
        }, 500);
    }, 500);
}

// Clear search
function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchClassFilter').value = '';
    document.getElementById('searchSubjectFilter').value = '';
    document.getElementById('searchTypeFilter').value = '';
    document.getElementById('searchDateFilter').value = '';
    
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('noSearchResults').style.display = 'none';
    
    searchResults = [];
    currentSearchQuery = '';
}

// Sort search results
function sortSearchResults(sortBy) {
    if (searchResults.length === 0) return;

    switch (sortBy) {
        case 'relevance':
            searchResults.sort((a, b) => b.relevance - a.relevance);
            break;
        case 'date':
            searchResults.sort((a, b) => {
                const itemA = a.type === 'material' ? a.material : a.homework;
                const itemB = b.type === 'material' ? b.material : b.homework;
                return new Date(itemB.date) - new Date(itemA.date);
            });
            break;
        case 'title':
            searchResults.sort((a, b) => {
                const itemA = a.type === 'material' ? a.material : a.homework;
                const itemB = b.type === 'material' ? b.material : b.homework;
                return itemA.title.localeCompare(itemB.title);
            });
            break;
    }

    displaySearchResults();
}

// Update subject filter based on class filter
function updateSubjectFilter() {
    const classFilter = document.getElementById('searchClassFilter').value;
    const subjectFilter = document.getElementById('searchSubjectFilter');
    
    subjectFilter.innerHTML = '<option value="">All Subjects</option>';
    
    if (classFilter) {
        const subjects = subjectsByClass[parseInt(classFilter)] || [];
        subjects.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject.id;
            option.textContent = subject.name;
            subjectFilter.appendChild(option);
        });
    }
    
    performSearch();
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    
    return date.toLocaleDateString();
}

// Add event listeners for search filters
document.addEventListener('DOMContentLoaded', function() {
    const classFilter = document.getElementById('searchClassFilter');
    if (classFilter) {
        classFilter.addEventListener('change', updateSubjectFilter);
    }
    
    // Add event listener for audio speed slider
    const audioSpeedSlider = document.getElementById('audioSpeed');
    if (audioSpeedSlider) {
        audioSpeedSlider.addEventListener('input', updateAudioSpeed);
    }
});

// AI Assistant Variables
let aiChatHistory = [];
let aiQuestionsAnswered = 0;
let aiIsTyping = false;

// AI Assistant Functions
function sendAIMessage() {
    const input = document.getElementById('aiChatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addAIMessage(message, 'user');
    input.value = '';
    
    // Show typing indicator
    showAITypingIndicator();
    
    // Process AI response
    setTimeout(() => {
        hideAITypingIndicator();
        const aiResponse = generateAIResponse(message);
        addAIMessage(aiResponse, 'ai-assistant');
        
        // Update stats
        aiQuestionsAnswered++;
        updateAIStats();
        
        // Add to recent topics
        addToRecentTopics(message);
    }, 1500 + Math.random() * 1000); // Random delay for realistic feel
}

function addAIMessage(text, sender) {
    const chatMessages = document.getElementById('aiChatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `ai-message ${sender}`;
    
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    messageDiv.innerHTML = `
        <div class="ai-avatar">
            <i class="fas fa-${sender === 'user' ? 'user' : 'robot'}"></i>
        </div>
        <div class="ai-message-content">
            <div class="ai-message-text">${formatAIMessage(text)}</div>
            <div class="ai-message-time">
                <small class="text-muted">${currentTime}</small>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Add to history
    aiChatHistory.push({ text, sender, timestamp: new Date() });
}

function formatAIMessage(text) {
    // Convert markdown-like syntax to HTML
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    text = text.replace(/`(.*?)`/g, '<code>$1</code>');
    text = text.replace(/```([\s\S]*?)```/g, '<pre>$1</pre>');
    text = text.replace(/\n/g, '<br>');
    
    return text;
}

function showAITypingIndicator() {
    const chatMessages = document.getElementById('aiChatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-message ai-assistant';
    typingDiv.id = 'aiTypingIndicator';
    
    typingDiv.innerHTML = `
        <div class="ai-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="ai-message-content">
            <div class="ai-typing-indicator">
                <div class="ai-typing-dot"></div>
                <div class="ai-typing-dot"></div>
                <div class="ai-typing-dot"></div>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    aiIsTyping = true;
}

function hideAITypingIndicator() {
    const typingIndicator = document.getElementById('aiTypingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
    aiIsTyping = false;
}

function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Math-related responses
    if (message.includes('math') || message.includes('गणित') || message.includes('calculate') || message.includes('equation')) {
        return generateMathResponse(userMessage);
    }
    
    // Science-related responses
    if (message.includes('science') || message.includes('विज्ञान') || message.includes('chemistry') || message.includes('physics')) {
        return generateScienceResponse(userMessage);
    }
    
    // English-related responses
    if (message.includes('english') || message.includes('अंग्रेजी') || message.includes('grammar') || message.includes('vocabulary')) {
        return generateEnglishResponse(userMessage);
    }
    
    // Nepali-related responses
    if (message.includes('nepali') || message.includes('नेपाली') || message.includes('नेपाली भाषा')) {
        return generateNepaliResponse(userMessage);
    }
    
    // Study tips
    if (message.includes('study') || message.includes('अध्ययन') || message.includes('tips') || message.includes('strategy')) {
        return generateStudyTipsResponse(userMessage);
    }
    
    // General educational responses
    return generateGeneralResponse(userMessage);
}

function generateMathResponse(message) {
    const responses = [
        "I'd be happy to help you with math! Here are some key concepts:\n\n**Basic Operations:**\n- Addition: a + b\n- Subtraction: a - b\n- Multiplication: a × b\n- Division: a ÷ b\n\n**Algebra:**\n- Linear equations: ax + b = c\n- Quadratic equations: ax² + bx + c = 0\n\nWhat specific math problem are you working on?",
        
        "Let me help you with mathematics! Here's a step-by-step approach:\n\n1. **Read the problem carefully**\n2. **Identify what you need to find**\n3. **Choose the appropriate formula**\n4. **Solve step by step**\n5. **Check your answer**\n\nCould you share the specific problem you're stuck on?",
        
        "Mathematics is all about patterns and logic! Here are some helpful tips:\n\n- **Practice regularly** - Math improves with practice\n- **Understand concepts** - Don't just memorize formulas\n- **Draw diagrams** - Visual representation helps\n- **Check your work** - Always verify your answers\n\nWhat area of math are you studying?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
}

function generateScienceResponse(message) {
    const responses = [
        "Science is fascinating! Here are some key scientific concepts:\n\n**Scientific Method:**\n1. Observation\n2. Question\n3. Hypothesis\n4. Experiment\n5. Analysis\n6. Conclusion\n\n**Key Areas:**\n- **Physics:** Matter, energy, forces\n- **Chemistry:** Elements, compounds, reactions\n- **Biology:** Living organisms, cells, ecosystems\n\nWhat science topic interests you?",
        
        "Let's explore science together! Here are some important principles:\n\n**Physics:**\n- Newton's Laws of Motion\n- Energy conservation\n- Wave properties\n\n**Chemistry:**\n- Atomic structure\n- Chemical bonding\n- Reaction types\n\n**Biology:**\n- Cell structure\n- Genetics\n- Evolution\n\nWhich branch of science are you studying?",
        
        "Science helps us understand the world around us! Here are some study tips:\n\n- **Make observations** - Notice patterns in nature\n- **Ask questions** - Curiosity drives discovery\n- **Conduct experiments** - Hands-on learning is best\n- **Record data** - Keep detailed notes\n\nWhat scientific concept are you learning about?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
}

function generateEnglishResponse(message) {
    const responses = [
        "English language learning is exciting! Here are some key areas:\n\n**Grammar:**\n- Parts of speech (nouns, verbs, adjectives)\n- Sentence structure\n- Tenses and verb forms\n\n**Vocabulary:**\n- Word meanings and usage\n- Synonyms and antonyms\n- Context clues\n\n**Reading & Writing:**\n- Comprehension strategies\n- Essay structure\n- Creative writing\n\nWhat aspect of English would you like to improve?",
        
        "Let's improve your English skills! Here are some helpful tips:\n\n**Reading:**\n- Read regularly (books, articles, news)\n- Use context clues for unknown words\n- Summarize what you read\n\n**Writing:**\n- Plan before writing\n- Use clear, simple sentences\n- Proofread your work\n\n**Speaking:**\n- Practice with others\n- Listen to native speakers\n- Don't be afraid to make mistakes\n\nWhat specific English skill are you working on?",
        
        "English is a global language! Here are some learning strategies:\n\n- **Immerse yourself** - Watch English movies, listen to music\n- **Practice daily** - Even 15 minutes helps\n- **Use a dictionary** - Look up new words\n- **Write regularly** - Keep a journal in English\n- **Speak confidently** - Practice with friends or family\n\nWhich English skill would you like to focus on today?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
}

function generateNepaliResponse(message) {
    const responses = [
        "नेपाली भाषा सिक्नु रोचक छ! यहाँ केही महत्वपूर्ण क्षेत्रहरू छन्:\n\n**व्याकरण:**\n- शब्दभेद (संज्ञा, सर्वनाम, विशेषण)\n- वाक्य संरचना\n- काल र क्रियापद\n\n**शब्दावली:**\n- शब्दको अर्थ र प्रयोग\n- समानार्थी र विपरीतार्थी\n- सन्दर्भ संकेतहरू\n\n**पठन र लेखन:**\n- बोध रणनीतिहरू\n- निबन्ध संरचना\n- सृजनात्मक लेखन\n\nतपाईं कुन नेपाली क्षेत्र सुधार गर्न चाहनुहुन्छ?",
        
        "चलो तपाईंको नेपाली कौशल सुधार गरौं! यहाँ केही उपयोगी सुझावहरू छन्:\n\n**पठन:**\n- नियमित रूपमा पढ्नुहोस् (किताबहरू, लेखहरू, समाचार)\n- अज्ञात शब्दहरूको लागि सन्दर्भ संकेतहरू प्रयोग गर्नुहोस्\n- जे पढ्नुभयो त्यसको सारांश लेख्नुहोस्\n\n**लेखन:**\n- लेख्नु अघि योजना बनाउनुहोस्\n- स्पष्ट, सरल वाक्यहरू प्रयोग गर्नुहोस्\n- आफ्नो काम जाँच गर्नुहोस्\n\n**बोलचाल:**\n- अरूसँग अभ्यास गर्नुहोस्\n- मातृभाषीहरू सुन्नुहोस्\n- गल्ती गर्न डराउनुहोस्\n\nतपाईं कुन विशिष्ट नेपाली कौशलमा काम गर्दै हुनुहुन्छ?",
        
        "नेपाली हाम्रो मातृभाषा हो! यहाँ केही सिक्ने रणनीतिहरू छन्:\n\n- **आफूलाई डुबाउनुहोस्** - नेपाली चलचित्र हेर्नुहोस्, संगीत सुन्नुहोस्\n- **दैनिक अभ्यास गर्नुहोस्** - 15 मिनेट पनि मद्दत गर्छ\n- **शब्दकोश प्रयोग गर्नुहोस्** - नयाँ शब्दहरू खोज्नुहोस्\n- **नियमित लेख्नुहोस्** - नेपालीमा डायरी राख्नुहोस्\n- **आत्मविश्वाससँग बोल्नुहोस्** - साथीहरू वा परिवारसँग अभ्यास गर्नुहोस्\n\nआज तपाईं कुन नेपाली कौशलमा ध्यान दिन चाहनुहुन्छ?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
}

// AI Media Generation Functions
let currentAIMediaType = null;
let currentAIMediaData = null;

function generateAIVideo() {
    const modal = new bootstrap.Modal(document.getElementById('aiVideoModal'));
    modal.show();
}

function generateAIAudio() {
    const modal = new bootstrap.Modal(document.getElementById('aiAudioModal'));
    modal.show();
}

function generateAIImage() {
    // For now, show a placeholder for image generation
    showNotification('Image generation feature coming soon!', 'info');
}

function startVideoGeneration() {
    const prompt = document.getElementById('videoPrompt').value.trim();
    const duration = document.getElementById('videoDuration').value;
    const style = document.getElementById('videoStyle').value;
    
    if (!prompt) {
        showNotification('Please enter a video description', 'warning');
        return;
    }
    
    // Close the input modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('aiVideoModal'));
    modal.hide();
    
    // Show generation progress
    showAIGenerationProgress('video', prompt, duration, style);
}

function startAudioGeneration() {
    const text = document.getElementById('audioText').value.trim();
    const voice = document.getElementById('audioVoice').value;
    const language = document.getElementById('audioLanguage').value;
    const speed = document.getElementById('audioSpeed').value;
    
    if (!text) {
        showNotification('Please enter text to convert to audio', 'warning');
        return;
    }
    
    // Close the input modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('aiAudioModal'));
    modal.hide();
    
    // Show generation progress
    showAIGenerationProgress('audio', text, voice, language, speed);
}

function showAIGenerationProgress(type, ...params) {
    currentAIMediaType = type;
    
    const progressHTML = `
        <div class="ai-media-generation">
            <h5><i class="fas fa-magic me-2"></i>AI ${type.charAt(0).toUpperCase() + type.slice(1)} Generation</h5>
            <div class="ai-generation-status">
                <i class="fas fa-spinner"></i>
                <span>Processing your request...</span>
            </div>
            <div class="ai-media-progress">
                <div class="ai-media-progress-bar" style="width: 0%"></div>
            </div>
            <p class="mb-0">This may take a few moments...</p>
        </div>
    `;
    
    // Show progress in a temporary overlay
    const overlay = document.createElement('div');
    overlay.className = 'position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center';
    overlay.style.cssText = 'background: rgba(0,0,0,0.8); z-index: 9999;';
    overlay.innerHTML = `
        <div class="bg-white rounded p-4 m-3" style="max-width: 500px;">
            ${progressHTML}
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Simulate progress
    let progress = 0;
    const progressBar = overlay.querySelector('.ai-media-progress-bar');
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            
            // Generate the media
            setTimeout(() => {
                generateAIMedia(type, params);
                document.body.removeChild(overlay);
            }, 500);
        }
        progressBar.style.width = progress + '%';
    }, 200);
}

function generateAIMedia(type, params) {
    let mediaContent = '';
    let mediaData = null;
    
    if (type === 'video') {
        const [prompt, duration, style] = params;
        mediaContent = `
            <div class="ai-media-preview">
                <h6>Generated Video: ${prompt}</h6>
                <video controls style="max-width: 100%; height: 300px; background: #000;">
                    <source src="data:video/mp4;base64,${generateSampleVideo()}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="ai-media-controls">
                    <button class="btn-play" onclick="playMedia()">
                        <i class="fas fa-play me-1"></i>Play
                    </button>
                    <button class="btn-pause" onclick="pauseMedia()">
                        <i class="fas fa-pause me-1"></i>Pause
                    </button>
                    <button class="btn-stop" onclick="stopMedia()">
                        <i class="fas fa-stop me-1"></i>Stop
                    </button>
                </div>
                <div class="mt-3">
                    <small class="text-muted">
                        Duration: ${duration}s | Style: ${style} | Generated by AI
                    </small>
                </div>
            </div>
        `;
        mediaData = { type: 'video', prompt, duration, style, url: 'sample-video.mp4' };
    } else if (type === 'audio') {
        const [text, voice, language, speed] = params;
        mediaContent = `
            <div class="ai-media-preview">
                <h6>Generated Audio</h6>
                <audio controls style="width: 100%;">
                    <source src="data:audio/mp3;base64,${generateSampleAudio()}" type="audio/mp3">
                    Your browser does not support the audio tag.
                </audio>
                <div class="ai-media-controls">
                    <button class="btn-play" onclick="playMedia()">
                        <i class="fas fa-play me-1"></i>Play
                    </button>
                    <button class="btn-pause" onclick="pauseMedia()">
                        <i class="fas fa-pause me-1"></i>Pause
                    </button>
                    <button class="btn-stop" onclick="stopMedia()">
                        <i class="fas fa-stop me-1"></i>Stop
                    </button>
                </div>
                <div class="mt-3">
                    <p class="mb-2"><strong>Text:</strong> ${text}</p>
                    <small class="text-muted">
                        Voice: ${voice} | Language: ${language} | Speed: ${speed}x | Generated by AI
                    </small>
                </div>
            </div>
        `;
        mediaData = { type: 'audio', text, voice, language, speed, url: 'sample-audio.mp3' };
    }
    
    currentAIMediaData = mediaData;
    
    // Show results modal
    const resultsModal = document.getElementById('aiMediaResultsModal');
    const contentDiv = document.getElementById('aiMediaContent');
    contentDiv.innerHTML = mediaContent;
    
    const modal = new bootstrap.Modal(resultsModal);
    modal.show();
}

function generateSampleVideo() {
    // This would be replaced with actual video generation
    // For demo purposes, return a placeholder
    return 'data:video/mp4;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT';
}

function generateSampleAudio() {
    // This would be replaced with actual audio generation
    // For demo purposes, return a placeholder
    return 'data:audio/mp3;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT';
}

function playMedia() {
    const mediaElement = document.querySelector('.ai-media-preview video, .ai-media-preview audio');
    if (mediaElement) {
        mediaElement.play();
    }
}

function pauseMedia() {
    const mediaElement = document.querySelector('.ai-media-preview video, .ai-media-preview audio');
    if (mediaElement) {
        mediaElement.pause();
    }
}

function stopMedia() {
    const mediaElement = document.querySelector('.ai-media-preview video, .ai-media-preview audio');
    if (mediaElement) {
        mediaElement.pause();
        mediaElement.currentTime = 0;
    }
}

function downloadAIMedia() {
    if (!currentAIMediaData) return;
    
    const link = document.createElement('a');
    link.href = currentAIMediaData.url;
    link.download = `ai-generated-${currentAIMediaData.type}-${Date.now()}.${currentAIMediaData.type === 'video' ? 'mp4' : 'mp3'}`;
    link.click();
    
    showNotification(`${currentAIMediaData.type.charAt(0).toUpperCase() + currentAIMediaData.type.slice(1)} download started!`, 'success');
}

function shareAIMedia() {
    if (!currentAIMediaData) return;
    
    const shareData = {
        title: `AI Generated ${currentAIMediaData.type.charAt(0).toUpperCase() + currentAIMediaData.type.slice(1)}`,
        text: `Check out this AI-generated ${currentAIMediaData.type}!`,
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData);
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareData.url);
        showNotification('Link copied to clipboard!', 'success');
    }
}

function regenerateAIMedia() {
    if (!currentAIMediaData) return;
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('aiMediaResultsModal'));
    modal.hide();
    
    // Show generation progress again
    if (currentAIMediaType === 'video') {
        showAIGenerationProgress('video', currentAIMediaData.prompt, currentAIMediaData.duration, currentAIMediaData.style);
    } else if (currentAIMediaType === 'audio') {
        showAIGenerationProgress('audio', currentAIMediaData.text, currentAIMediaData.voice, currentAIMediaData.language, currentAIMediaData.speed);
    }
}

// Audio speed range handler
function updateAudioSpeed() {
    const speedSlider = document.getElementById('audioSpeed');
    const speedValue = document.getElementById('audioSpeedValue');
    const speed = parseFloat(speedSlider.value);
    
    let speedText = 'Normal';
    if (speed < 0.8) speedText = 'Slow';
    else if (speed > 1.2) speedText = 'Fast';
    
    speedValue.textContent = speedText;
}