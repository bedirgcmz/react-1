let idCounter = 0;
class Article {
  constructor(id, name, summary, largeText, image, title, category, date) {
    this.id = id;
    this.name = name;
    this.summary = summary;
    this.largeText = largeText;
    this.image = image;
    this.title = title;
    this.category = category;
    this.date = date;
  }
}

// Örnek makaleler
export const articles = [
  new Article(
    idCounter++,
    "COVID-19 Vaccination Rates Rise",
    "Vaccination rates against COVID-19 have been increasing globally, providing hope for controlling the pandemic.",
    "Recent data shows a significant increase in COVID-19 vaccination rates worldwide...",
    "covid.jpeg",
    "Global Vaccination Rates on the Rise",
    "Health",
    "2024-03-17"
  ),
  new Article(
    idCounter++,
    "Renewable Energy Investment Surges",
    "Investment in renewable energy sources hits record levels as countries prioritize sustainable solutions.",
    "In a landmark development, global investment in renewable energy sources has surged...",
    "energy.jpeg",
    "Record Investment in Renewable Energy",
    "Environment",
    "2024-03-16"
  ),
  new Article(
    idCounter++,
    "Tech Giants Face Antitrust Scrutiny",
    "Big tech companies are under increased scrutiny as regulators aim to address antitrust concerns.",
    "Tech giants such as Google, Facebook, and Amazon are facing intensifying scrutiny...",
    "antitrust.jpeg",
    "Regulators Intensify Antitrust Scrutiny on Tech Giants",
    "Technology",
    "2024-03-15"
  ),
  new Article(
    idCounter++,
    "Climate Change Report Warns of Dire Consequences",
    "The latest climate change report highlights the urgent need for action to mitigate its effects.",
    "The latest report from the Intergovernmental Panel on Climate Change (IPCC) warns...",
    "climate.jpeg",
    "Urgent Action Needed to Address Climate Change, Says IPCC Report",
    "Environment",
    "2024-03-14"
  ),
  new Article(
    idCounter++,
    "Political Unrest Escalates in Region",
    "Political tensions continue to escalate in the region, raising concerns about stability and security.",
    "Tensions have reached a boiling point in the region as protests and clashes intensify...",
    "political.jpeg",
    "Escalating Political Unrest Raises Concerns in the Region",
    "Politics",
    "2024-03-13"
  ),
];
