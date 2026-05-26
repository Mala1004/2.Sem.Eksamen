const products = [
  {
    id: 1,
    name: "A Dictionary Of Colors",
    author: "Sanzo Wada",
    description:
      "A Dictionary Of Colors is a seminal work in color theory. Wada, a Japanese artist, costume designer, and teacher, created this work to blend traditional Japanese color sensibilities with Western-influenced, modern color research. The book is in japanese, however it contains more than 100 pages of colorcombinations, for you to use. ",
    image:
      "/wp-content/themes/kadence/library-indhold/a-dictionary-of-colors/cover1.png",
    pdf: "/wp-content/themes/kadence/library-indhold/a-dictionary-of-colors/a-dictionary-of-color-combinations-vol-1-vol-1-bilingualnbsped-4861522471-9784861522475_compress.pdf",
  },
  {
    id: 2,
    name: "A Technique for Producing Ideas",
    author: "James Webb Young",
    description:
      "All ideas follow a five-step process of 1) gathering material, 2) intensely working over the material in your mind, 3) stepping away from the problem, 4) allowing the idea to come back to you naturally, and 5) testing your idea in the real world and adjusting it based on feedback.",
    image:
      "/wp-content/themes/kadence/library-indhold/a-technique-for-producing-ideas/cover2.png",
    pdf: "/wp-content/themes/kadence/library-indhold/a-technique-for-producing-ideas/a-technique-for-producing-ideas.pdf",
  },
  {
    id: 3,
    name: "Creativity/ Flow and the Psychology of Discovery and Invention",
    author: "Mihaly Csikszentmihalyi",
    description:
      "a foundational psychological study that demystifies the creative process by examining it not as a magical talent, but as a systematic interaction between a person, a cultural domain, and a field of experts. Based on over 30 years of research and interviews with 91 exceptional individuals (artists, scientists, business leaders), it reveals that creativity often arises from Flow — a state of deep enjoyment, peak performance, and total immersion in one´s work.",
    image:
      "/wp-content/themes/kadence/library-indhold/creativity-flow-and-the-psychology-of-discovery-and-invention/cover3.png",
    pdf: "/wp-content/themes/kadence/library-indhold/creativity-flow-and-the-psychology-of-discovery-and-invention/creativity-flow-and-the-psychology-of-discovery-and-invention.pdf",
  },
  {
    id: 4,
    name: "Graphic Design Theory",
    author: "Helen Armstrong",
    description:
      "This book is an introduction to graphic design theory. Each selection, written in its own time and place across a century of design evolution, explores the aesthetic and social purposes of design practice. All of these writers were—or are—visual producers active in the field, engaged with the realities of creating graphic communication. Why did they pause from making their work and building their careers to write about what they do?",
    image:
      "/wp-content/themes/kadence/library-indhold/graphic-design-theory/cover4.png",
    pdf: "/wp-content/themes/kadence/library-indhold/graphic-design-theory/graphic-design-theory.pdf",
  },
  {
    id: 5,
    name: "Icograda Education Manifesto (exerpt)",
    author: "International Council of Graphic Design Associations",
    description:
      "The Icograda Design Education Manifesto 2011, developed by the International Council of Graphic Design Associations (now ico-D), outlines principles for modern design education, including interdisciplinarity, ethics, and sustainability. The document emphasizes a shift toward fostering adaptive learning environments to navigate technology-driven, global contexts.",
    image:
      "/wp-content/themes/kadence/library-indhold/icograda-education-manifesto/cover5.png",
    pdf: "/wp-content/themes/kadence/library-indhold/icograda-education-manifesto/icograda-education-manifesto.pdf",
  },
  {
    id: 6,
    name: "Made With Creative Commons",
    author: "Paul Stacey and Sarah Hinchliff Pearson",
    description:
      "Made With Creative Commons is a book about sharing. It is about sharing textbooks, music, data, art, and more. People, organizations, and businesses all over the world are sharing their work using Creative Commons licenses because they want to encourage the public to reuse their works, to copy them, to modify them. They are Made with Creative Commons.",
    image:
      "/wp-content/themes/kadence/library-indhold/made-with-creative-commons/cover6.png",
    pdf: "/wp-content/themes/kadence/library-indhold/made-with-creative-commons/made-with-creative-commons.pdf",
  },
  {
    id: 7,
    name: "Pedagogical Sketchbook",
    author: "Paul Klee",
    description:
      "Pedagogical Sketchbook (1925) is a seminal Bauhaus primer presenting 43 design lessons that explore the relationships between line, form, space, and motion. It acts as an adventure in seeing, guiding students through conceptual, intuitive approaches to art—such as a line Going For a Walk — using simple, lucid drawings.",
    image:
      "/wp-content/themes/kadence/library-indhold/pedagogical-sketchbook/cover7.png",
    pdf: "/wp-content/themes/kadence/library-indhold/pedagogical-sketchbook/made-with-creative-commons.pdf",
  },
  {
    id: 8,
    name: "The Act of Creation",
    author: "Arthur Koestler",
    description:
      "The Act of Creation (1964) is a comprehensive study proposing that all creative activity—in art, humor, and science—stems from bisociation, the sudden linking of two previously unrelated frames of reference. Koestler argues that creativity is not creation from nothing, but a novel reorganization of existing elements, breaking routines of thought",
    image:
      "/wp-content/themes/kadence/library-indhold/the-act-of-creation/cover8.png",
    pdf: "/wp-content/themes/kadence/library-indhold/the-act-of-creation/the-act-of-creation.pdf",
  },
  {
    id: 9,
    name: "The Creative Habit",
    author: "Twyla Tharp",
    description:
      "The Creative Habit: Learn It and Use It for Life by renowned choreographer Twyla Tharp is a practical guide arguing that creativity is not a divine gift but a result of hard work, preparation, and daily routine. Tharp shares techniques for fostering creativity through rituals, overcoming mental blocks, and treating creativity as a learned skill.",
    image:
      "/wp-content/themes/kadence/library-indhold/the-creative-habit/cover9.png",
    pdf: "/wp-content/themes/kadence/library-indhold/the-creative-habit/the-creative-habit.pdf",
  },

  {
    id: 10,
    name: "The Design of Everyday Things",
    author: "Don Norman",
    description:
      "his book shows that good, usable design is possible. The rules are simple: make things visible, exploit natural relationships that couple function and control, and make intelligent use of constraints.",
    image:
      "/wp-content/themes/kadence/library-indhold/the-design-of-everyday-things/cover10.png",
    pdf: "/wp-content/themes/kadence/library-indhold/the-design-of-everyday-things/the-design-of-everyday-things.pdf",
  },
  {
    id: 11,
    name: "The Shape Of Design",
    author: "Frank Chimero",
    description:
      "The Shape of Design is a short, accessible book about the creative process & the intersection of storytelling, craft & improvisation.",
    image:
      "/wp-content/themes/kadence/library-indhold/the-shape-of-design/cover11.png",
    pdf: "/wp-content/themes/kadence/library-indhold/the-shape-of-design/the-shape-of-design.pdf",
  },
  {
    id: 12,
    name: "The Vignelli Canon",
    author: "Massimo Vignell",
    description:
      "The Vignelli Canon is a foundational design guide promoting modernist principles: discipline, timelessness, and utility over trendy, temporary design. It focuses on Intangibles (semantics, coherence, responsibility) and Tangibles (grids, typefaces, color), advocating for structured, functional design that avoids visual pollution.",
    image:
      "/wp-content/themes/kadence/library-indhold/the-vignelli-canon/cover12.png",
    pdf: "/wp-content/themes/kadence/library-indhold/the-vignelli-canon/the-vignelli-canon.pdf",
  },
];
