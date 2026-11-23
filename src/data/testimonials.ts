/**
 * Client testimonials, quoted verbatim from cindybairdrealtor.com
 * (home page, /about and /testimonials). `kind` is only set where the
 * quote itself says whether the client bought or sold.
 */
export type Testimonial = { name: string; quote: string; kind?: "Bought" | "Sold" };

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Roseanne G.",
    kind: "Bought",
    quote:
      "Cindy was a fantastic advocate during the purchase of our new home. She is incredibly knowledgeable about the area and has great insight. We found this especially valuable as we moved from out of state. She gets things done quickly and is very responsive. Would highly recommend her!",
  },
  {
    name: "Sandi S.",
    kind: "Bought",
    quote:
      "My family enjoyed working with Cindy in late 2022 to early 2023, to help us find our dream retirement home. Cindy was very helpful in selecting the best neighborhoods for us. Cindy has very good taste and designed her own home, so she was very helpful in pointing out the best ways to use the different rooms in the house we were looking at. The closing process went very smoothly.",
  },
  {
    name: "Peter M.",
    quote:
      "Cindy is a great real estate salesperson as she is personable, outgoing, and honest. She will tell prospective buyers and sellers everything they need to know to get a good outcome without being pushy about it. I know people who trust her with selling or buying property will be very satisfied with the outcome.",
  },
  {
    name: "Susan C.",
    kind: "Bought",
    quote:
      "We had an incredible experience buying our house with Cindy! First she was very responsive to calls and questions. She was genuine and easy to work with. And she stayed on top of things throughout the process of our purchase both before and after the closing communicating with us every step of the way. We have purchased and sold many homes and Cindy is one of the best realtors we have ever worked with! Highly recommend!",
  },
  {
    name: "Teri K.",
    kind: "Bought",
    quote:
      "Cindy was fabulous! So attentive and fun. She found us our perfect home, and we are forever grateful. My family and I highly recommend this super cool lady.",
  },
  {
    name: "Robert C.",
    quote:
      "Cindy was a hard worker, a great and attentive communicator, and advised us absolutely correctly on important strategic decisions we needed to make. She's the best!",
  },
];
