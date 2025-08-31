export interface Quote {
  id: number;
  text: string;
  isAlpha?: boolean;
}

export const quotes: Quote[] = [
  { id: 1, text: "Money respects only tempo." },
  { id: 2, text: "Deals aren't discussed, they're closed." },
  { id: 3, text: "Your empire grows when excuses die." },
  { id: 4, text: "Weak energy makes weak deals." },
  { id: 5, text: "Time is leverage, not a gift." },
  { id: 6, text: "Talk less, move faster." },
  { id: 7, text: "Power is taken, never given." },
  { id: 8, text: "Sleep is cheap, tempo is expensive." },
  { id: 9, text: "Winners don't explain, they demonstrate." },
  { id: 10, text: "Fear kills more deals than failure." },
  { id: 11, text: "Energy creates momentum, momentum creates wealth." },
  { id: 12, text: "You are only as strong as your last move." },
  { id: 13, text: "Money flows to speed." },
  { id: 14, text: "Discipline is the highest luxury." },
  { id: 15, text: "No loyalty without leverage." },
  { id: 16, text: "Comfort is the enemy of power." },
  { id: 17, text: "Silence builds empires." },
  { id: 18, text: "Invest in tempo, not in doubts." },
  { id: 19, text: "Empire > excuses." },
  { id: 20, text: "Every move is either empire-building or empire-breaking." },
];

// Alpha pack quotes (unlocked after 5 consecutive days)
export const alphaQuotes: Quote[] = [
  { id: 21, text: "The strongest negotiation position is being able to walk away.", isAlpha: true },
  { id: 22, text: "Consistency compounds, mediocrity evaporates.", isAlpha: true },
  { id: 23, text: "Wealth is created in silence, not in noise.", isAlpha: true },
];

// Get all quotes including alpha if unlocked
export const getAllQuotes = (includeAlpha: boolean = false): Quote[] => {
  if (includeAlpha) {
    return [...quotes, ...alphaQuotes];
  }
  return quotes;
};

// Get a random quote
export const getRandomQuote = (includeAlpha: boolean = false): Quote => {
  const allQuotes = getAllQuotes(includeAlpha);
  const randomIndex = Math.floor(Math.random() * allQuotes.length);
  return allQuotes[randomIndex];
};