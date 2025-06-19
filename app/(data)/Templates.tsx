export default [
  {
    name: "Blog Title",
    description: "Generate a catchy title for your blog post.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/1187/1187595.png",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on given niche &  outline and give me result in Rich text editor format ",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    description:
      "Generate a complete blog post based on the title and outline.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/1187/1187595.png",
    aiPrompt:
      "Generate a complete blog post based on the title and outline provided. The content should be engaging, informative, and well-structured.",
    slug: "generate-blog-content",
    form: [
      {
        label: "Enter your blog title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    description: "Get creative blog topic ideas based on your niche.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/1187/1187595.png",
    aiPrompt:
      "Generate 5 creative blog topic ideas based on the provided niche. Each idea should be unique and engaging.",
    slug: "generate-blog-topic-ideas",
    form: [
      {
        label: "Enter yout Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    description: "Generate an SEO-optimized title for your YouTube video.",
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt:
      "Generate an SEO-optimized title for a YouTube video based on the provided topic. The title should be catchy and include relevant keywords.",
    slug: "youtube-seo-title",
    form: [
      {
        label: "Enter your video topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: " Enter your video description",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  {
    name: "Youtube SEO Description",
    description:
      "Generate an SEO-optimized description for your YouTube video.",
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt:
      "Generate an SEO-optimized description for a YouTube video based on the provided topic and outline. The description should be engaging and include relevant keywords.",
    slug: "youtube-seo-description",
    form: [
      {
        label: "Enter yout blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter your video description",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube SEO Tags",
    description: "Generate SEO-optimized tags for your YouTube video.",
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt:
      "Generate SEO-optimized tags for a YouTube video based on the provided topic. The tags should be relevant and help improve the video's visibility.",
    slug: "youtube-seo-tags",
    form: [
      {
        label: "Enter yout blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter your video description",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Video Script",
    description:
      "Generate a script for your YouTube video based on the title and outline.",
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt:
      "Generate a script for a YouTube video based on the provided title and outline. The script should be engaging, informative, and well-structured.",
    slug: "youtube-video-script",
    form: [
      {
        label: "Enter your video title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter video outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Instagram Quotes Generator",
    description:
      "Generate engaging and inspirational quotes for your Instagram posts or images.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
    aiPrompt:
      "Generate 5 unique and engaging quotes suitable for Instagram posts based on the given theme and tone. Keep the quotes short and visually appealing for image or caption use.",
    slug: "instagram-quotes-generator",
    form: [
      {
        label: "Enter the theme (e.g., motivation, love, travel)",
        field: "input",
        name: "theme",
        required: true,
      },
      {
        label: "Choose the tone (e.g., inspirational, humorous, emotional)",
        field: "input",
        name: "tone",
      },
    ],
  },
  {
    name: "Cold Outreach Email",
    description:
      "Craft a professional cold outreach email for sales or networking.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    aiPrompt:
      "Generate a professional cold outreach email based on the provided recipient type, purpose, and product/service. Keep the tone polite and persuasive.",
    slug: "cold-outreach-email",
    form: [
      {
        label: "Recipient type (e.g., HR Manager, Startup Founder)",
        field: "input",
        name: "recipient",
        required: true,
      },
      {
        label: "Purpose of email (e.g., demo request, job pitch)",
        field: "input",
        name: "purpose",
        required: true,
      },
      {
        label: "Describe your product/service/skills",
        field: "textarea",
        name: "description",
      },
    ],
  },
  {
    name: "Follow-Up Email",
    description:
      "Generate a polite and professional follow-up email after meetings or interviews.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    aiPrompt:
      "Generate a professional follow-up email based on the context. Keep it concise, polite, and to the point.",
    slug: "follow-up-email",
    form: [
      {
        label: "Context (e.g., job interview, client meeting)",
        field: "input",
        name: "context",
        required: true,
      },
      {
        label: "Any additional message or reminder",
        field: "textarea",
        name: "message",
      },
    ],
  },
  {
    name: "Professional Complaint/Feedback Email",
    description:
      "Generate a respectful complaint or feedback email to a company or individual.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    aiPrompt:
      "Generate a professional and respectful complaint or feedback email based on the given issue and recipient. Be clear and solution-oriented.",
    slug: "feedback-complaint-email",
    form: [
      {
        label: "Recipient (e.g., Customer Support, Manager)",
        field: "input",
        name: "recipient",
        required: true,
      },
      {
        label: "Describe the issue or feedback",
        field: "textarea",
        name: "issue",
        required: true,
      },
      {
        label: "Your expected resolution or message",
        field: "textarea",
        name: "resolution",
      },
    ],
  },
  {
    name: "Invoice Generator",
    description:
      "Generate a professional invoice based on the client's details and service/product information.",
    category: "Business Documents",
    icon: "https://cdn-icons-png.flaticon.com/128/4306/4306889.png",
    aiPrompt:
      "Generate a professional invoice with client details, itemized list of services/products, prices, taxes, and total amount.",
    slug: "invoice-generator",
    form: [
      {
        label: "Client Name & Company",
        field: "input",
        name: "client",
        required: true,
      },
      {
        label: "List of services/products (with quantity and price)",
        field: "textarea",
        name: "items",
        required: true,
      },
      {
        label: "Tax Percentage (optional)",
        field: "input",
        name: "tax",
      },
    ],
  },
  {
    name: "Quotation Generator",
    description:
      "Generate a formal quotation for services or products offered.",
    category: "Business Documents",
    icon: "https://cdn-icons-png.flaticon.com/128/18564/18564225.png",
    aiPrompt:
      "Generate a professional quotation with details about the service or product being offered, estimated costs, and validity.",
    slug: "quotation-generator",
    form: [
      {
        label: "Client Name & Company",
        field: "input",
        name: "client",
        required: true,
      },
      {
        label: "Service/Product Description with Estimated Cost",
        field: "textarea",
        name: "items",
        required: true,
      },
      {
        label: "Quotation Validity (e.g. 7 days, 15 days)",
        field: "input",
        name: "validity",
      },
    ],
  },
  {
    name: "Delivery Note Generator",
    description: "Generate a professional delivery note for goods dispatched.",
    category: "Business Documents",
    icon: "https://cdn-icons-png.flaticon.com/128/2861/2861971.png",
    aiPrompt:
      "Generate a delivery note listing items delivered, quantities, and recipient details. Keep the format clean and professional.",
    slug: "delivery-note-generator",
    form: [
      {
        label: "Recipient Name & Address",
        field: "textarea",
        name: "recipient",
        required: true,
      },
      {
        label: "List of items and quantities",
        field: "textarea",
        name: "items",
        required: true,
      },
      {
        label: "Delivery Date",
        field: "input",
        name: "deliveryDate",
      },
    ],
  },
  {
    name: "GRN Generator",
    description:
      "Generate a Goods Receipt Note (GRN) for recording received goods.",
    category: "Business Documents",
    icon: "https://cdn-icons-png.flaticon.com/128/9721/9721335.png",
    aiPrompt:
      "Generate a Goods Receipt Note listing received items, quantities, supplier, and remarks. Format it formally for business use.",
    slug: "grn-generator",
    form: [
      {
        label: "Supplier Name & Company",
        field: "input",
        name: "supplier",
        required: true,
      },
      {
        label: "Received Items and Quantities",
        field: "textarea",
        name: "items",
        required: true,
      },
      {
        label: "Receiving Date",
        field: "input",
        name: "date",
      },
      {
        label: "Additional Remarks (if any)",
        field: "textarea",
        name: "remarks",
      },
    ],
  },
];
