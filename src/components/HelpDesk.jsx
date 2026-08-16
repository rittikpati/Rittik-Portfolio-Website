import { useEffect, useRef, useState } from 'react'

const STOPWORDS = new Set([
  'what', 'whats', 'which', 'who', 'whos', 'whose', 'how', 'when', 'where', 'why',
  'is', 'are', 'was', 'were', 'am', 'be', 'been', 'do', 'does', 'did', 'can',
  'could', 'would', 'should', 'will', 'shall', 'the', 'a', 'an', 'of', 'to', 'in',
  'on', 'at', 'for', 'with', 'his', 'her', 'him', 'it', 'its', 'he', 'she', 'me',
  'my', 'about', 'tell', 'give', 'show', 'know', 'regarding', 'regards', 'please',
  'pls', 'any', 'some', 'their', 'them', 'from', 'by', 'or', 'and', 'also', 'only',
  'just', 'really', 'much', 'many', 'more', 'most', 'this', 'that', 'these',
  'those', 'you', 'your', 'yours', 'have', 'has', 'had', 'would', 'up', 'down',
  'out', 'over', 'under', 'then', 'than', 'there', 'here', 'everything', 'thing',
  'things', 'like', 'using', 'used', 'use', 'work', 'works', 'working', 'detail',
  'details', 'explain', 'elaborate', 'something',
])

const TECH_CATEGORIES = [
  { techs: ['python'], category: 'Core Languages', blurb: 'His core languages are Python, SQL, JavaScript (ES6+), HTML5 and CSS3.' },
  { techs: ['sql', 'postgresql', 'postgres', 'neon', 'mongodb', 'redis', 'database', 'databases', 'chromadb', 'pinecone', 'vector database', 'vector databases'], category: 'Databases & Vector Stores', blurb: 'He works with PostgreSQL, Neon Cloud Database, MongoDB, Redis, and vector databases like ChromaDB and Pinecone for RAG pipelines.' },
  { techs: ['javascript', 'js', 'html5', 'css3', 'es6'], category: 'Core Languages', blurb: 'His core languages are Python, SQL, JavaScript (ES6+), HTML5 and CSS3.' },
  { techs: ['django', 'drf', 'django rest'], category: 'Backend & APIs', blurb: 'He builds backends with Django, Django REST Framework (DRF), FastAPI, Node.js and Express.js, including RESTful APIs, microservices, JWT auth and CSRF security.' },
  { techs: ['fastapi', 'node', 'express', 'express.js', 'node.js'], category: 'Backend & APIs', blurb: 'He builds backends with Django, Django REST Framework (DRF), FastAPI, Node.js and Express.js, including RESTful APIs, microservices, JWT auth and CSRF security.' },
  { techs: ['jwt', 'csrf', 'rest', 'restful', 'microservice', 'microservices', 'api', 'apis'], category: 'Backend & APIs', blurb: 'He builds backends with Django, Django REST Framework (DRF), FastAPI, Node.js and Express.js, including RESTful APIs, microservices, JWT auth and CSRF security.' },
  { techs: ['docker', 'aws', 'amazon', 's3', 'ec2', 'cloud', 'vercel', 'cloudinary', 'whitenoise', 'cicd', 'ci/cd', 'github actions', 'git'], category: 'Cloud, DevOps & Databases', blurb: 'He uses Docker, AWS (Amazon S3, Amazon EC2), Vercel, Cloudinary, WhiteNoise, Git, GitHub Actions and CI/CD for deployment and operations.' },
  { techs: ['llm', 'llms', 'rag', 'agentic', 'agents', 'prompt', 'prompting', 'langchain', 'llamaindex', 'llama index', 'deepseek', 'nlp', 'generative', 'genai', 'ai', 'artificial intelligence', 'machine learning', 'ml'], category: 'AI & Generative AI', blurb: 'He specializes in LLMs, RAG, Agentic AI, Prompt Engineering, LangChain, LlamaIndex, DeepSeek API, NLP and vector databases.' },
  { techs: ['react', 'redux', 'react.js', 'bootstrap', 'chart.js', 'chartjs', 'tailwind', 'frontend'], category: 'Frontend & Visualization', blurb: 'He builds frontends with React.js, Redux, Bootstrap 5 and Chart.js, with responsive web design.' },
]

const NOT_IN_RESUME = [
  'java', 'c++', 'c#', 'go lang', 'golang', 'rust', 'ruby', 'php', 'kotlin', 'swift',
  'flutter', 'vue', 'vue.js', 'angular', 'svelte', 'next.js', 'nextjs', 'tensorflow',
  'pytorch', 'keras', 'openai', 'gpt', 'chatgpt', 'claude', 'gemini', 'hugging face',
  'transformers', 'kubernetes', 'k8s', 'terraform', 'ansible', 'jenkins', 'azure',
  'firebase', 'supabase', 'graphql', 'typescript', 'sass', 'webpack', 'wordpress',
  'laravel', 'spring', 'spring boot', 'c', 'r', 'scala', 'perl', 'matlab', 'unity',
]

const CONCEPTS = [
  {
    keywords: ['rag', 'retrieval-augmented', 'retrieval augmented'],
    answer:
      "RAG (Retrieval-Augmented Generation) combines an LLM with a retrieval system: relevant documents are fetched from a vector database and injected into the model's context, so answers are grounded in real data instead of the model's memory. Rittik specializes in building exactly this — using DeepSeek API, ChromaDB and Pinecone.",
  },
  {
    keywords: ['llm', 'large language model', 'language model', 'chatgpt'],
    answer:
      "An LLM (Large Language Model) is a deep neural network trained on massive text data that understands and generates human language. Rittik works with LLMs like DeepSeek — building applications around them with RAG, prompt engineering and agentic workflows.",
  },
  {
    keywords: ['agentic ai', 'ai agent', 'ai agents', 'autonomous agent'],
    answer:
      "Agentic AI refers to AI systems that can plan, use tools, and act autonomously to complete multi-step tasks — beyond simple Q&A. Rittik works on agentic AI workflows, which is one of his core specializations.",
  },
  {
    keywords: ['prompt engineering', 'prompting', 'prompt'],
    answer:
      "Prompt engineering is the practice of designing instructions and context to get accurate, useful outputs from an LLM. It's a core skill in Rittik's AI toolkit.",
  },
  {
    keywords: ['vector database', 'vector store', 'embeddings', 'embedding', 'chromadb', 'pinecone'],
    answer:
      "A vector database stores text as high-dimensional embeddings, enabling similarity search — the backbone of RAG. Rittik uses ChromaDB and Pinecone for his RAG pipelines.",
  },
  {
    keywords: ['langchain', 'llamaindex', 'llama index', 'orchestration'],
    answer:
      "LangChain and LlamaIndex are frameworks for building LLM applications — chaining prompts, retrievers, tools and agents. Both are part of Rittik's AI stack.",
  },
  {
    keywords: ['nlp', 'natural language'],
    answer:
      "NLP (Natural Language Processing) is the field of making computers understand and generate human language. It underpins everything Rittik does in AI — LLMs, RAG, agents.",
  },
  {
    keywords: ['fine-tuning', 'finetuning', 'training a model', 'fine tune'],
    answer:
      "Fine-tuning adapts a pre-trained LLM to a specific domain by further training on targeted data. Rittik's focus is more on RAG and prompting — engineering around LLMs rather than training them from scratch.",
  },
  {
    keywords: ['neural network', 'deep learning', 'transformer', 'machine learning model'],
    answer:
      "Neural networks (and their deep-learning variants like Transformers) are the foundation of modern AI. Rittik studied Neural Networks and Generative AI as part of his B.Tech AI & ML specialization.",
  },
  {
    keywords: ['microservices', 'microservice'],
    answer:
      "Microservices is an architecture where an application is split into small independent services that communicate via APIs. Rittik builds RESTful APIs and understands microservice design.",
  },
  {
    keywords: ['jwt', 'json web token', 'authentication'],
    answer:
      "JWT (JSON Web Token) is a compact, signed token used for secure API authentication. Rittik implements JWT auth and CSRF security in his Django/Node.js backends.",
  },
  {
    keywords: ['csrf'],
    answer:
      "CSRF (Cross-Site Request Forgery) protection prevents malicious websites from making unauthorized requests on behalf of a logged-in user. Rittik implements it in his web backends.",
  },
  {
    keywords: ['docker', 'containerization', 'containers'],
    answer:
      "Docker packages applications into portable containers, making deployment consistent across environments. Rittik containerizes his projects with Docker — including RittikDesk AI.",
  },
  {
    keywords: ['ci/cd', 'cicd', 'continuous integration', 'continuous deployment'],
    answer:
      "CI/CD (Continuous Integration / Continuous Deployment) automates testing and shipping code. Rittik uses GitHub Actions for CI/CD pipelines.",
  },
  {
    keywords: ['crm', 'customer relationship'],
    answer:
      "A CRM (Customer Relationship Management) system manages customer data, sales and interactions. RittikDesk AI — his flagship project — is an AI-powered CRM built with Django, React and Docker.",
  },
]

const KNOWLEDGE_BASE = [
  {
    keywords: ['who is rittik', 'about rittik', 'about you', 'tell me about', 'introduction', 'who are you', 'yourself', 'your name', 'bio', 'profile'],
    answer:
      "Rittik Pati is an aspiring AI Engineer specializing in Retrieval-Augmented Generation (RAG) and Agentic AI. He is currently pursuing a B.Tech in CSE (AI & ML) at Chandigarh University (2023–2027, CGPA 8.2/10) and has worked as an AI Business Solutions Architect Intern at YuvaIntern and a Full Stack Development Intern at Thiranex.",
    extended:
      "More about him: Rittik focuses on LLM engineering and generative AI, has published research on low-resource neural machine translation and federated learning, and holds certifications from Oracle, MongoDB University and Microsoft. He's currently seeking full-time opportunities in Machine Learning and Data Engineering.",
  },
  {
    keywords: ['skills', 'technical', 'stack', 'technologies', 'proficient', 'good at', 'capable', 'tools', 'expertise', 'competencies'],
    answer:
      "Rittik's key skills are: AI & Generative AI (LLMs, RAG, Agentic AI, Prompt Engineering, LangChain, LlamaIndex, DeepSeek API, NLP, ChromaDB, Pinecone), Backend & APIs (Django, DRF, FastAPI, Node.js, Express.js, RESTful APIs, Microservices, JWT, CSRF), Cloud, DevOps & Databases (Docker, AWS, Amazon S3, Amazon EC2, PostgreSQL, Neon, MongoDB, Redis, Git, GitHub Actions, CI/CD, Vercel, Cloudinary, WhiteNoise), and Frontend & Visualization (React.js, Redux, Bootstrap 5, Chart.js). Core languages: Python, SQL, JavaScript (ES6+), HTML5, CSS3.",
    extended:
      "You can see the full categorized breakdown in the Technical Arsenal section of this website — each card groups his skills by AI/GenAI, Backend & APIs, Cloud/DevOps/Databases, and Frontend.",
  },
  {
    keywords: ['languages', 'programming languages', 'core languages', 'language'],
    answer:
      "His core programming languages are Python, SQL, JavaScript (ES6+), HTML5 and CSS3. Python is his primary language for AI/ML work, and he uses JavaScript across full-stack projects.",
  },
  {
    keywords: ['experience', 'internship', 'intern', 'work', 'job', 'yuvaintern', 'thiranex', 'career', 'professional', 'fresher', 'how many internships', 'years of experience'],
    answer:
      "Rittik has two internships: (1) AI Business Solutions Architect Intern at YuvaIntern (Aug 2026 – Present) — integrated DeepSeek API and RAG workflows into enterprise solutions, reducing query latency by 35%. (2) Intern - Full Stack Development at Thiranex (Jul 2026 – Aug 2026) — project-based remote internship working on practical full-stack projects under industry mentorship. You can view both offer letters from the Experience section.",
    extended:
      "Both internships are remote. His current focus is building RAG and agentic AI workflows, and he is open to new opportunities in ML and data engineering.",
  },
  {
    keywords: ['education', 'university', 'college', 'degree', 'b.tech', 'study', 'studying', 'cgpa', 'academic', 'chandigarh', 'graduate', 'graduation', 'pass out', 'passout'],
    answer:
      "Rittik is pursuing a B.Tech in CSE with a specialization in AI & ML at Chandigarh University (2023–2027) with a CGPA of 8.2/10. He will graduate in 2027. He is specialized in Generative AI, Neural Networks, and Scalable Data Systems.",
  },
  {
    keywords: ['project', 'rittikdesk', 'crm', 'build', 'built', 'featured', 'portfolio project', 'creations', 'what has he made', 'what has he built'],
    answer:
      "His flagship project is RittikDesk AI — an AI-powered CRM system featuring DeepSeek LLM integration for automated customer insights, built with Django, React, and Docker, with advanced analytics to boost user engagement. You can see it in the Projects section of this site.",
    extended:
      "RittikDesk AI demonstrates his full-stack ability: Django + React + Docker, with an LLM (DeepSeek) integrated for automated customer insights.",
  },
  {
    keywords: ['certification', 'certificate', 'certified', 'oracle', 'mongodb', 'microsoft', 'azure', 'credential', 'badge', 'courses', 'course'],
    answer:
      "Rittik holds: Oracle Agentic AI Foundations Associate (2026), Building RAG Applications Using MongoDB (July 2026), and Microsoft: AI Solutions & Azure Cloud Fundamentals (2025).",
  },
  {
    keywords: ['research', 'publication', 'paper', 'arxiv', 'iclr', 'published', 'academic work', 'papers'],
    answer:
      "Rittik has published research on low-resource neural machine translation (ICLR 2023 Workshop) and communication-efficient federated learning via model pruning (arXiv preprint) — you can find both in the Research & Publications section.",
  },
  {
    keywords: ['leadership', 'mentor', 'mentorship', 'open source', 'open-source', 'community', 'students', 'teaching', 'guide', 'volunteer'],
    answer:
      "Rittik led engineering mentorship for over 50 students in his university's AI student group — organizing weekly code reviews and architecture deep-dives — and actively contributes to open-source ML libraries, focusing on data loading pipelines and documentation.",
  },
  {
    keywords: ['strength', 'strengths', 'strong at', 'why hire', 'hire him', 'why should i', 'advantage', 'good candidate', 'best at', 'unique'],
    answer:
      "Rittik's strongest areas are RAG and Agentic AI engineering — he combines production full-stack skills (Django, React, Docker, AWS) with real LLM integration experience (DeepSeek API) and has proven, measurable results: a 35% reduction in query latency at YuvaIntern. He's currently seeking full-time ML and Data Engineering roles.",
  },
  {
    keywords: ['weakness', 'weaknesses', 'bad at', 'not good', 'improve'],
    answer:
      "Like any engineer early in his career, Rittik is still deepening his expertise in production-scale distributed systems — but he's actively growing through real internships and building LLM applications end-to-end. Ask him about it directly at rittikpati434@gmail.com!",
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'hiring', 'linkedin', 'github', 'social', 'connect', 'availability', 'available', 'call', 'whatsapp', 'message', 'interview', 'recruiter', 'recruiting'],
    answer:
      "You can reach Rittik at rittikpati434@gmail.com. His LinkedIn is linkedin.com/in/rittik-pati-229389290 and GitHub is github.com/rittikpati. He is currently seeking full-time opportunities in Machine Learning and Data Engineering — his inbox is always open.",
    extended:
      "For recruiters: the fastest way is email (rittikpati434@gmail.com) or a LinkedIn connection request. He usually responds within a day.",
  },
  {
    keywords: ['resume', 'cv', 'download resume', 'offer letter', 'letter', 'document'],
    answer:
      "You can view and download Rittik's resume by clicking the 'Resume' button in the top navigation or 'Download Resume' in the hero section. Offer letters for both internships are also available — 'View Offer Letter' buttons are inside each experience card.",
  },
  {
    keywords: ['website', 'this site', 'built with', 'react', 'tailwind', 'vite', 'framework', 'code', 'tech stack of', 'source code', 'open source website'],
    answer:
      "This website is built with React 18, Tailwind CSS 3 (custom Material 3 design tokens), and Vite — a production-grade frontend stack with scroll-reveal animations, glassmorphism cards, and a cinematic background crossfade. Its source is on his GitHub: github.com/rittikpati.",
  },
  {
    keywords: ['navigate', 'sections', 'how to use this website', 'how to browse', 'menu', 'pages'],
    answer:
      "This is a single-page site: use the top navigation (Projects, Skills, Experience, Contact) or simply scroll — sections appear in order: Projects, Skills, Experience, Research, Certifications, Leadership, Contact. The chat button stays at the bottom-right on every screen.",
  },
  {
    keywords: ['location', 'where', 'based', 'country', 'india', 'live', 'remote', 'city', 'timezone'],
    answer:
      "Rittik is based in India and works fully remotely. He's open to remote full-time roles in Machine Learning, Generative AI, and Data Engineering.",
  },
  {
    keywords: ['salary', 'ctc', 'compensation', 'pay', 'stipend', 'expectation', 'package'],
    answer:
      "Compensation details aren't public — the best way to discuss that is to reach out directly at rittikpati434@gmail.com or via LinkedIn.",
  },
  {
    keywords: ['goal', 'future', 'ambition', 'plan', 'aspiration', 'dream', 'looking for', 'seeking', 'want to do', 'career goal'],
    answer:
      "Rittik's goal is to grow as an AI/LLM Engineer — building production RAG systems and agentic AI solutions. He is currently seeking full-time opportunities in Machine Learning and Data Engineering.",
  },
  {
    keywords: ['currently', 'right now', 'now working', 'day to day', 'daily', 'what is he doing', 'current work'],
    answer:
      "Right now Rittik is working as an AI Business Solutions Architect Intern at YuvaIntern — integrating DeepSeek API and RAG workflows into enterprise solutions — while completing his B.Tech (AI & ML) at Chandigarh University.",
  },
  {
    keywords: ['hello', 'hi', 'hey', 'namaste', 'good morning', 'good evening', 'good afternoon', 'hola', 'yo', 'hello there'],
    answer:
      "Hello! I'm the Rittik AI Help Desk. Ask me anything about Rittik — his skills, experience, projects, education, certifications, or even what technical terms like RAG mean. Try one of the quick questions below.",
  },
  {
    keywords: ['thank', 'thanks', 'great', 'awesome', 'nice', 'cool', 'good', 'perfect', 'helpful'],
    answer:
      "You're welcome! If you have any other questions about Rittik or his work, feel free to ask — or reach him directly at rittikpati434@gmail.com.",
  },
  {
    keywords: ['age', 'birthday', 'hobbies', 'personal', 'family', 'relationship', 'marriage', 'dating'],
    answer:
      "That's personal information he keeps private — but I can tell you about his skills, experience, projects and education instead!",
  },
  {
    keywords: ['gpa', 'marks', 'score', 'grade', 'percentage', 'academic performance', 'rank'],
    answer:
      "Rittik's CGPA is 8.2/10 at Chandigarh University (B.Tech CSE — AI & ML, 2023–2027).",
  },
  {
    keywords: ['recommend', 'advice', 'suggest', 'what should i', 'how can i'],
    answer:
      "For the best overview: read the hero section for his summary, Projects for RittikDesk AI, Experience for his internships (with offer letters), and Contact to reach him. If you're hiring, email rittikpati434@gmail.com directly — the resume button is in the top navigation.",
  },
  {
    keywords: ['problem', 'issue', 'broken', 'error', 'bug', 'not working', 'report'],
    answer:
      "If something on the site isn't working, please email rittikpati434@gmail.com with what happened — he'll fix it quickly. Thanks for reporting!",
  },
  {
    keywords: ['byebye', 'bye', 'goodbye', 'see you', 'cya', 'good night', 'gtg', 'later'],
    answer:
      "Goodbye! Thanks for visiting Rittik's portfolio — feel free to come back anytime, or reach him at rittikpati434@gmail.com.",
  },
  {
    keywords: ['what can you do', 'help me with', 'your capabilities', 'your features', 'how do you work', 'are you ai', 'are you a bot', 'are you robot', 'who made you', 'who built you', 'who created you', 'what are you', 'your purpose', 'your job', 'your role', 'about you bot'],
    answer:
      "I'm a smart assistant trained on Rittik's verified portfolio data. I can answer questions about his skills (including 'Does he know X?'), experience, education, projects, certifications, research, and how to contact him — and I can explain AI concepts like RAG and LLMs. I only answer from verified info, so I never guess or make things up.",
  },
  {
    keywords: ['are you human', 'real person', 'is this a real person', 'human or bot'],
    answer:
      "I'm an AI assistant — but everything I tell you about Rittik is real, verified information from his resume and portfolio. If you want to talk to the human directly, email rittikpati434@gmail.com.",
  },
]

const QUICK_SUGGESTIONS = [
  'Who is Rittik?',
  'What are his skills?',
  'What is RAG?',
  'Does he know Python?',
  'How to contact him?',
]

const GREETING =
  "Hi, I'm Rittik's AI Help Desk assistant! Ask me anything about Rittik — skills, experience, projects, education, certifications, contact details, even tech concepts like RAG. What would you like to know?"

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/\bu\b/g, 'you')
    .replace(/\br\b/g, 'are')
    .replace(/\bplz\b/g, 'please')
    .replace(/\bpls\b/g, 'please')
    .replace(/\bthx\b/g, 'thanks')
    .replace(/\bty\b/g, 'thank you')
}

function tokenize(text) {
  return normalize(text)
    .replace(/[^a-z0-9+.#\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t && !STOPWORDS.has(t))
}

function stem(token) {
  if (token.endsWith('ies') && token.length > 4) return token.slice(0, -3) + 'y'
  if (token.endsWith('es') && token.length > 3) return token.slice(0, -2)
  if (token.endsWith('s') && token.length > 3) return token.slice(0, -1)
  return token
}

function findTechMatch(question) {
  const q = normalize(question)
  for (const entry of TECH_CATEGORIES) {
    for (const tech of entry.techs) {
      const escaped = tech.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      if (new RegExp(`\\b${escaped}\\b`).test(q)) {
        return { label: tech, category: entry.category, blurb: entry.blurb }
      }
    }
  }
  return null
}

function findMissingTech(question) {
  const q = normalize(question)
  for (const tech of NOT_IN_RESUME) {
    const escaped = tech.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    if (new RegExp(`\\b${escaped}\\b`).test(q)) return tech
  }
  return null
}

function findConcept(question) {
  const q = normalize(question)
  const asking = /\b(what|whats|what is|explain|define|meaning|how does|tell me about|whats|about)\b/.test(q)
  if (!asking) return null
  for (const entry of CONCEPTS) {
    for (const keyword of entry.keywords) {
      const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      if (new RegExp(`\\b${escaped}\\b`).test(q)) return entry.answer
    }
  }
  return null
}

function findBestAnswers(question) {
  const q = normalize(question)
  const tokens = tokenize(question).map(stem)
  const scored = []

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0
    for (const phrase of entry.keywords) {
      const phraseTokens = tokenize(phrase).map(stem)
      if (q.includes(phrase) && phrase.length > 3) {
        score += phraseTokens.length * 3
        continue
      }
      for (const token of phraseTokens) {
        if (tokens.includes(token)) score += 1
      }
    }
    if (score > 0) scored.push({ entry, score })
  }

  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, 3)
}

function composeAnswers(answers) {
  if (answers.length === 1) return answers[0]
  return "Here's what I found:\n\n• " + answers.map((a) => a.replace(/\n/g, ' ')).join('\n\n• ')
}

function renderAnswer(text) {
  const paragraphs = text.split('\n\n')
  return paragraphs.map((para, i) => {
    const parts = para.split(/(https?:\/\/[^\s]+)/g)
    return (
      <p key={i} className={paragraphs.length > 1 ? 'mb-2' : ''}>
        {parts.map((part, j) =>
          /^https?:\/\//.test(part) ? (
            <a
              key={j}
              className="text-primary underline hover:text-primary-fixed transition-colors"
              href={part}
              rel="noopener noreferrer"
              target="_blank"
            >
              {part}
            </a>
          ) : (
            <span key={j}>{part}</span>
          )
        )}
      </p>
    )
  })
}

export default function HelpDesk() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'bot', text: GREETING }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)
  const lastTopicRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, typing, open])

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100)
    }
  }, [open])

  function respondTo(question) {
    const q = normalize(question)

    const farewell = /\b(bye|goodbye|see you|cya|good night|gtg|later|byebye)\b/.test(q)
    if (farewell) {
      return KNOWLEDGE_BASE[KNOWLEDGE_BASE.length - 3].answer
    }

    const meta = /\b(what can you do|help me with|your capabilities|your features|how do you work|are you (an )?(ai|bot|robot)|who (made|built|created) you|what are you|your (purpose|job|role)|are you human|real person|human or bot)\b/.test(q)
    if (meta) {
      const entry = KNOWLEDGE_BASE.find((e) => e.keywords.some((k) => k.includes('what can you do')))
      return entry.answer
    }

    const concept = findConcept(q)
    if (concept) return concept

    const asksAboutTech =
      /\b(does|is|can|could|know|knows|use|uses|used|work|works|worked|working|familiar|experienced|good|skill|learned|learn|have|has|with|in)\b/.test(q)
    const tech = findTechMatch(q)
    if (tech && asksAboutTech) {
      return `Yes — ${tech.label} is part of Rittik's toolkit (${tech.category}). ${tech.blurb}`
    }

    const missingTech = asksAboutTech ? findMissingTech(q) : null
    if (missingTech) {
      return `${missingTech} isn't part of Rittik's listed skill set. His toolkit focuses on AI/LLM engineering (Python, RAG, LangChain, DeepSeek), full-stack web (Django, React, Node.js), and cloud/DevOps (AWS, Docker, CI/CD).`
    }

    const followUp =
      /\b(more|further|details|explain|elaborate|expand|continue|and)\b/.test(q) && lastTopicRef.current
    if (followUp) {
      return lastTopicRef.current.entry.extended || lastTopicRef.current.entry.answer
    }

    const matches = findBestAnswers(question)
    if (matches.length > 0) {
      lastTopicRef.current = { entry: matches[0].entry, question: q }
      return composeAnswers(matches.map((m) => m.entry.answer))
    }

    return "I'm sorry, I couldn't find an answer to that in my knowledge. Try asking about his skills, experience, projects, education, certifications, or how to contact him — or reach out directly at rittikpati434@gmail.com."
  }

  function send(text) {
    const question = (text || input).trim()
    if (!question || typing) return
    setMessages((prev) => [...prev, { role: 'user', text: question }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: respondTo(question) }])
      setTyping(false)
    }, 700)
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[60]">
        {!open && (
          <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" aria-hidden="true" />
        )}
        <button
          aria-label="Open Rittik AI Help Desk"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-surface-tint text-on-primary shadow-lg shadow-primary/20 border border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-primary/40"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="material-symbols-outlined transition-transform duration-300" style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}>
            {open ? 'close' : 'support_agent'}
          </span>
        </button>
      </div>

      <div
        aria-label="Rittik AI Help Desk chat"
        className={`fixed bottom-24 right-6 z-[60] w-[370px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-140px)] glass-card rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-black/50 transition-all duration-300 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        role="dialog"
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-gradient-to-br from-primary/25 via-surface-container/60 to-surface-tint/15">
          <span className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-surface-tint text-on-primary flex items-center justify-center shadow-md shadow-primary/25">
            <span className="material-symbols-outlined">support_agent</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary border-2 border-surface">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping" />
            </span>
          </span>
          <div className="flex-grow">
            <h3 className="font-body-md text-body-md font-semibold text-on-surface">
              Rittik AI Help Desk
            </h3>
            <p className="font-code-sm text-code-sm text-surface-tint flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse" />
              Online — answers instantly
            </p>
          </div>
          <button
            aria-label="Close chat"
            className="text-on-surface-variant hover:text-primary transition-colors p-1"
            onClick={() => setOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div ref={scrollRef} className="chat-scroll flex-grow overflow-y-auto px-4 py-4 flex flex-col gap-3">
          {messages.map((msg, i) =>
            msg.role === 'user' ? (
              <div
                key={i}
                aria-live="polite"
                className="msg-in self-end max-w-[85%] bg-gradient-to-br from-primary to-surface-tint/90 text-on-primary rounded-xl rounded-br-sm px-4 py-2.5 font-body-md text-body-md shadow-md shadow-primary/10"
              >
                {msg.text}
              </div>
            ) : (
              <div key={i} className="msg-in self-start max-w-[92%] flex items-start gap-2">
                <span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5">
                  <span className="material-symbols-outlined text-[14px]">support_agent</span>
                </span>
                <div className="bg-surface-container/80 border border-white/5 text-on-surface rounded-xl rounded-bl-sm px-4 py-2.5 font-body-md text-body-md">
                  {renderAnswer(msg.text)}
                </div>
              </div>
            )
          )}
          {typing && (
            <div className="self-start flex items-center gap-2">
              <span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[14px]">support_agent</span>
              </span>
              <div className="bg-surface-container/80 border border-white/5 rounded-xl rounded-bl-sm px-4 py-3 flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-surface-tint animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-surface-tint animate-bounce [animation-delay:0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-surface-tint animate-bounce [animation-delay:0.3s]" />
              </div>
            </div>
          )}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 mt-1">
              {QUICK_SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  className="tech-tag rounded-full px-3 py-1.5 font-code-sm text-code-sm inline-flex items-center gap-1.5 hover:bg-primary/15 hover:border-primary/40 transition-all duration-300"
                  onClick={() => send(s)}
                >
                  <span className="material-symbols-outlined text-[14px]">help</span>
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <form
          className="border-t border-white/5 p-3 flex gap-2 bg-surface-container/40"
          onSubmit={(e) => {
            e.preventDefault()
            send()
          }}
        >
          <input
            ref={inputRef}
            aria-label="Ask a question"
            className="flex-grow bg-surface-container/80 border border-white/10 rounded-xl px-3 py-2 font-body-md text-body-md text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Rittik..."
            type="text"
            value={input}
          />
          <button
            aria-label="Send message"
            className="bg-gradient-to-br from-primary to-surface-tint text-on-primary rounded-xl px-3.5 shadow-md shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
            type="submit"
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        </form>
      </div>
    </>
  )
}