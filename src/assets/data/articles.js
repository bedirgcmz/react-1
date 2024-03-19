let idCounter = 0;
class Article {
  constructor(summary, largeText, image, title, category, date) {
    this.id = idCounter++;
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
    "Vaccination rates against COVID-19 have been increasing globally, providing hope for controlling the pandemic.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada felis id sapien lobortis, at gravida tortor posuere. Integer id convallis velit. Duis id lectus vel urna interdum fringilla non vitae erat. Cras semper, lectus vel pulvinar sodales, quam magna vestibulum lorem, nec hendrerit nisl dolor et metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris volutpat, eros vitae finibus bibendum, augue ligula fermentum orci, sit amet vehicula justo ex et nulla. Vivamus sed semper ligula. Vivamus porttitor, magna id finibus hendrerit,",
    "covid.jpeg",
    "Global Vaccination Rates on the Rise",
    "Health",
    "2024-03-17"
  ),
  new Article(
    "Investment in renewable energy sources hits record levels as countries prioritize sustainable solutions.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada felis id sapien lobortis, at gravida tortor posuere. Integer id convallis velit. Duis id lectus vel urna interdum fringilla non vitae erat. Cras semper, lectus vel pulvinar sodales, quam magna vestibulum lorem, nec hendrerit nisl dolor et metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris volutpat, eros vitae finibus bibendum, augue ligula fermentum orci, sit amet vehicula justo ex et nulla. Vivamus sed semper ligula. Vivamus porttitor, magna id finibus hendrerit,",
    "energy.jpeg",
    "Record Investment in Renewable Energy",
    "Environment",
    "2024-03-16"
  ),
  new Article(
    "Big tech companies are under increased scrutiny as regulators aim to address antitrust concerns.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada felis id sapien lobortis, at gravida tortor posuere. Integer id convallis velit. Duis id lectus vel urna interdum fringilla non vitae erat. Cras semper, lectus vel pulvinar sodales, quam magna vestibulum lorem, nec hendrerit nisl dolor et metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris volutpat, eros vitae finibus bibendum, augue ligula fermentum orci, sit amet vehicula justo ex et nulla. Vivamus sed semper ligula. Vivamus porttitor, magna id finibus hendrerit,",
    "antitrust.jpeg",
    "Regulators Intensify Antitrust Scrutiny on Tech Giants",
    "Technology",
    "2024-03-15"
  ),
  new Article(
    "The latest climate change report highlights the urgent need for action to mitigate its effects.",
    "TLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada felis id sapien lobortis, at gravida tortor posuere. Integer id convallis velit. Duis id lectus vel urna interdum fringilla non vitae erat. Cras semper, lectus vel pulvinar sodales, quam magna vestibulum lorem, nec hendrerit nisl dolor et metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris volutpat, eros vitae finibus bibendum, augue ligula fermentum orci, sit amet vehicula justo ex et nulla. Vivamus sed semper ligula. Vivamus porttitor, magna id finibus hendrerit,",
    "climate.jpeg",
    "Urgent Action Needed to Address Climate Change, Says IPCC Report",
    "Environment",
    "2024-03-14"
  ),
  new Article(
    "Political tensions continue to escalate in the region, raising concerns about stability and security.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada felis id sapien lobortis, at gravida tortor posuere. Integer id convallis velit. Duis id lectus vel urna interdum fringilla non vitae erat. Cras semper, lectus vel pulvinar sodales, quam magna vestibulum lorem, nec hendrerit nisl dolor et metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris volutpat, eros vitae finibus bibendum, augue ligula fermentum orci, sit amet vehicula justo ex et nulla. Vivamus sed semper ligula. Vivamus porttitor, magna id finibus hendrerit,",
    "political.jpeg",
    "Escalating Political Unrest Raises Concerns in the Region",
    "Politics",
    "2024-03-13"
  ),
];
