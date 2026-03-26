import type { FlashcardDeck } from '@/types/flashcard'

export const flashcardDecks: FlashcardDeck[] = [
  {
    id: 'greetings',
    name: 'Greetings',
    description: 'Essential German greetings and farewells',
    emoji: '👋',
    cards: [
      { id: 'g1', german: 'Hallo', english: 'Hello', exampleSentence: 'Hallo, wie geht es dir?', exampleTranslation: 'Hello, how are you?', category: 'greetings', difficulty: 'easy' },
      { id: 'g2', german: 'Guten Morgen', english: 'Good morning', exampleSentence: 'Guten Morgen! Hast du gut geschlafen?', exampleTranslation: 'Good morning! Did you sleep well?', category: 'greetings', difficulty: 'easy' },
      { id: 'g3', german: 'Guten Abend', english: 'Good evening', exampleSentence: 'Guten Abend, schön Sie zu sehen.', exampleTranslation: 'Good evening, nice to see you.', category: 'greetings', difficulty: 'easy' },
      { id: 'g4', german: 'Auf Wiedersehen', english: 'Goodbye', exampleSentence: 'Auf Wiedersehen, bis morgen!', exampleTranslation: 'Goodbye, see you tomorrow!', category: 'greetings', difficulty: 'easy' },
      { id: 'g5', german: 'Bitte', english: 'Please / You\'re welcome', exampleSentence: 'Bitte helfen Sie mir.', exampleTranslation: 'Please help me.', category: 'greetings', difficulty: 'easy' },
      { id: 'g6', german: 'Danke schön', english: 'Thank you very much', exampleSentence: 'Danke schön für Ihre Hilfe!', exampleTranslation: 'Thank you very much for your help!', category: 'greetings', difficulty: 'easy' },
      { id: 'g7', german: 'Entschuldigung', english: 'Excuse me / Sorry', exampleSentence: 'Entschuldigung, wo ist die Toilette?', exampleTranslation: 'Excuse me, where is the bathroom?', category: 'greetings', difficulty: 'medium' },
      { id: 'g8', german: 'Wie heißen Sie?', english: 'What is your name?', exampleSentence: 'Wie heißen Sie? Ich heiße Maria.', exampleTranslation: 'What is your name? My name is Maria.', category: 'greetings', difficulty: 'medium' },
      { id: 'g9', german: 'Freut mich', english: 'Nice to meet you', exampleSentence: 'Freut mich, Sie kennenzulernen.', exampleTranslation: 'Nice to meet you.', category: 'greetings', difficulty: 'medium' },
      { id: 'g10', german: 'Bis bald', english: 'See you soon', exampleSentence: 'Es war schön. Bis bald!', exampleTranslation: 'It was nice. See you soon!', category: 'greetings', difficulty: 'easy' },
    ]
  },
  {
    id: 'food',
    name: 'Food & Drink',
    description: 'Vocabulary for restaurants and grocery shopping',
    emoji: '🍽️',
    cards: [
      { id: 'f1', german: 'das Brot', english: 'bread', exampleSentence: 'Ich kaufe frisches Brot beim Bäcker.', exampleTranslation: 'I buy fresh bread at the bakery.', category: 'food', difficulty: 'easy' },
      { id: 'f2', german: 'das Wasser', english: 'water', exampleSentence: 'Ein Glas Wasser, bitte.', exampleTranslation: 'A glass of water, please.', category: 'food', difficulty: 'easy' },
      { id: 'f3', german: 'der Kaffee', english: 'coffee', exampleSentence: 'Morgens trinke ich immer Kaffee.', exampleTranslation: 'I always drink coffee in the morning.', category: 'food', difficulty: 'easy' },
      { id: 'f4', german: 'das Fleisch', english: 'meat', exampleSentence: 'Ich esse kein Fleisch.', exampleTranslation: 'I don\'t eat meat.', category: 'food', difficulty: 'medium' },
      { id: 'f5', german: 'das Gemüse', english: 'vegetables', exampleSentence: 'Frisches Gemüse ist gesund.', exampleTranslation: 'Fresh vegetables are healthy.', category: 'food', difficulty: 'medium' },
      { id: 'f6', german: 'die Rechnung', english: 'the bill', exampleSentence: 'Die Rechnung, bitte!', exampleTranslation: 'The bill, please!', category: 'food', difficulty: 'medium' },
      { id: 'f7', german: 'lecker', english: 'delicious / tasty', exampleSentence: 'Das Essen ist sehr lecker!', exampleTranslation: 'The food is very delicious!', category: 'food', difficulty: 'easy' },
      { id: 'f8', german: 'der Nachtisch', english: 'dessert', exampleSentence: 'Als Nachtisch nehme ich Schokoladenkuchen.', exampleTranslation: 'For dessert I\'ll have chocolate cake.', category: 'food', difficulty: 'medium' },
      { id: 'f9', german: 'vegetarisch', english: 'vegetarian', exampleSentence: 'Haben Sie vegetarische Gerichte?', exampleTranslation: 'Do you have vegetarian dishes?', category: 'food', difficulty: 'medium' },
      { id: 'f10', german: 'das Frühstück', english: 'breakfast', exampleSentence: 'Das Frühstück wird von 7 bis 10 Uhr serviert.', exampleTranslation: 'Breakfast is served from 7 to 10 o\'clock.', category: 'food', difficulty: 'hard' },
    ]
  },
  {
    id: 'travel',
    name: 'Travel',
    description: 'Words you need when exploring Germany',
    emoji: '✈️',
    cards: [
      { id: 't1', german: 'der Bahnhof', english: 'train station', exampleSentence: 'Der Bahnhof ist nicht weit von hier.', exampleTranslation: 'The train station is not far from here.', category: 'travel', difficulty: 'medium' },
      { id: 't2', german: 'das Ticket', english: 'ticket', exampleSentence: 'Ich brauche ein Ticket nach Berlin.', exampleTranslation: 'I need a ticket to Berlin.', category: 'travel', difficulty: 'easy' },
      { id: 't3', german: 'die Unterkunft', english: 'accommodation', exampleSentence: 'Haben Sie eine günstige Unterkunft?', exampleTranslation: 'Do you have affordable accommodation?', category: 'travel', difficulty: 'hard' },
      { id: 't4', german: 'links / rechts', english: 'left / right', exampleSentence: 'Biegen Sie links ab und dann rechts.', exampleTranslation: 'Turn left and then right.', category: 'travel', difficulty: 'easy' },
      { id: 't5', german: 'geradeaus', english: 'straight ahead', exampleSentence: 'Gehen Sie geradeaus bis zur Ampel.', exampleTranslation: 'Go straight ahead to the traffic light.', category: 'travel', difficulty: 'medium' },
      { id: 't6', german: 'der Flughafen', english: 'airport', exampleSentence: 'Wie komme ich zum Flughafen?', exampleTranslation: 'How do I get to the airport?', category: 'travel', difficulty: 'medium' },
      { id: 't7', german: 'das Hotel', english: 'hotel', exampleSentence: 'Ich habe ein Zimmer im Hotel reserviert.', exampleTranslation: 'I have reserved a room at the hotel.', category: 'travel', difficulty: 'easy' },
      { id: 't8', german: 'die Sehenswürdigkeit', english: 'tourist attraction / sight', exampleSentence: 'Was sind die Sehenswürdigkeiten hier?', exampleTranslation: 'What are the tourist attractions here?', category: 'travel', difficulty: 'hard' },
      { id: 't9', german: 'verloren', english: 'lost', exampleSentence: 'Ich habe mich verloren. Können Sie helfen?', exampleTranslation: 'I am lost. Can you help?', category: 'travel', difficulty: 'medium' },
      { id: 't10', german: 'der Reisepass', english: 'passport', exampleSentence: 'Ich habe meinen Reisepass vergessen!', exampleTranslation: 'I forgot my passport!', category: 'travel', difficulty: 'hard' },
    ]
  },
  {
    id: 'numbers',
    name: 'Numbers & Time',
    description: 'Count and tell time in German',
    emoji: '🔢',
    cards: [
      { id: 'n1', german: 'eins', english: 'one', exampleSentence: 'Ich möchte eins davon.', exampleTranslation: 'I would like one of those.', category: 'numbers', difficulty: 'easy' },
      { id: 'n2', german: 'zwei', english: 'two', exampleSentence: 'Ich brauche zwei Karten.', exampleTranslation: 'I need two tickets.', category: 'numbers', difficulty: 'easy' },
      { id: 'n3', german: 'zehn', english: 'ten', exampleSentence: 'Es kostet zehn Euro.', exampleTranslation: 'It costs ten euros.', category: 'numbers', difficulty: 'easy' },
      { id: 'n4', german: 'zwanzig', english: 'twenty', exampleSentence: 'Ich bin zwanzig Jahre alt.', exampleTranslation: 'I am twenty years old.', category: 'numbers', difficulty: 'medium' },
      { id: 'n5', german: 'hundert', english: 'one hundred', exampleSentence: 'Das kostet hundert Euro.', exampleTranslation: 'That costs one hundred euros.', category: 'numbers', difficulty: 'medium' },
      { id: 'n6', german: 'Wie viel Uhr ist es?', english: 'What time is it?', exampleSentence: 'Entschuldigung, wie viel Uhr ist es?', exampleTranslation: 'Excuse me, what time is it?', category: 'numbers', difficulty: 'medium' },
      { id: 'n7', german: 'halb drei', english: 'half past two (2:30)', exampleSentence: 'Wir treffen uns um halb drei.', exampleTranslation: 'We meet at half past two.', category: 'numbers', difficulty: 'hard' },
      { id: 'n8', german: 'heute', english: 'today', exampleSentence: 'Heute ist Montag.', exampleTranslation: 'Today is Monday.', category: 'numbers', difficulty: 'easy' },
      { id: 'n9', german: 'morgen', english: 'tomorrow', exampleSentence: 'Morgen fahre ich nach Hamburg.', exampleTranslation: 'Tomorrow I am going to Hamburg.', category: 'numbers', difficulty: 'easy' },
      { id: 'n10', german: 'übermorgen', english: 'the day after tomorrow', exampleSentence: 'Übermorgen kommt meine Familie.', exampleTranslation: 'The day after tomorrow my family is coming.', category: 'numbers', difficulty: 'hard' },
    ]
  }
]
