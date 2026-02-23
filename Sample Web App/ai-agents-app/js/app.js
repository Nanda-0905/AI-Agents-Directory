// AI Agents & Applications Database
const aiTools = [
    // LLMs & Chatbots
    {
        id: 1,
        name: 'ChatGPT',
        category: 'llm',
        emoji: '🤖',
        description: 'Advanced conversational AI by OpenAI capable of reasoning, code generation, and multimodal input.',
        features: ['Conversational AI', 'Code Gen', 'Creative Writing', 'Multi-language'],
        pricing: 'Free / $20/month',
        useCases: 'Customer support, content creation, research assistance',
        link: 'https://openai.com/chatgpt'
    },
    {
        id: 2,
        name: 'Claude 3.5',
        category: 'llm',
        emoji: '🧠',
        description: 'Anthropic\'s highly capable language model excelling at nuanced reasoning and long-form content.',
        features: ['Reasoning', 'Long Context', 'Safe by Design', 'Vision'],
        pricing: 'Free / $20/month',
        useCases: 'Analysis, creative projects, coding assistance',
        link: 'https://www.anthropic.com'
    },
    {
        id: 3,
        name: 'Gemini (Google)',
        category: 'llm',
        emoji: '✨',
        description: 'Google\'s multimodal AI with strong image understanding and integration across Google apps.',
        features: ['Multimodal', 'Real-time', 'Integration', 'Research'],
        pricing: 'Free / Premium',
        useCases: 'Summarization, image analysis, productivity',
        link: 'https://gemini.google.com'
    },
    {
        id: 4,
        name: 'Llama 3 (Meta)',
        category: 'llm',
        emoji: '🦙',
        description: 'Open-source large language model available for deployment and fine-tuning.',
        features: ['Open Source', 'Customizable', 'Efficient', 'Enterprise Ready'],
        pricing: 'Free (Open Source)',
        useCases: 'Custom applications, private deployments',
        link: 'https://www.llama.meta.com'
    },
    {
        id: 5,
        name: 'Mixtral 8x7B',
        category: 'llm',
        emoji: '🎯',
        description: 'Mistral\'s efficient mixture-of-experts model offering strong performance with lower compute.',
        features: ['MoE Architecture', 'Efficient', 'Fast', 'Multilingual'],
        pricing: 'Free (Open Source)',
        useCases: 'Real-time applications, cost-effective deployment',
        link: 'https://mistral.ai'
    },
    {
        id: 6,
        name: 'Perplexity AI',
        category: 'llm',
        emoji: '🔍',
        description: 'AI search engine combining LLM reasoning with real-time web search capabilities.',
        features: ['Web Search', 'Citations', 'Real-time Info', 'Reasoning'],
        pricing: 'Free / $20/month',
        useCases: 'Research, fact-checking, information synthesis',
        link: 'https://www.perplexity.ai'
    },
    {
        id: 7,
        name: 'Grok (xAI)',
        category: 'llm',
        emoji: '⚡',
        description: 'Elon Musk\'s AI with real-time data access and edgy sense of humor.',
        features: ['Real-time Data', 'Real-time Web', 'Conversational', 'Reasoning'],
        pricing: 'Subscription based',
        useCases: 'Current events analysis, brainstorming',
        link: 'https://grok.x.ai'
    },
    {
        id: 8,
        name: 'Copilot (Microsoft)',
        category: 'llm',
        emoji: '🚀',
        description: 'Microsoft\'s conversational AI integrated deeply with Windows and Office suite.',
        features: ['Integration', 'Cross-platform', 'Voice', 'Productivity'],
        pricing: 'Free / $20/month',
        useCases: 'Windows integration, document analysis',
        link: 'https://copilot.microsoft.com'
    },
    {
        id: 9,
        name: 'LaMA Index',
        category: 'llm',
        emoji: '🏗️',
        description: 'Framework for augmenting LLMs with custom data and retrieval systems.',
        features: ['RAG', 'Data Indexing', 'Customizable', 'Open Source'],
        pricing: 'Free (Open Source)',
        useCases: 'Document QA, knowledge bases',
        link: 'https://www.llamaindex.ai'
    },
    {
        id: 10,
        name: 'Together AI',
        category: 'llm',
        emoji: '🤝',
        description: 'Open-source model inference platform with fast, affordable access to multiple LLMs.',
        features: ['Multi-model', 'Fast API', 'Cost-effective', 'Open Source'],
        pricing: 'Pay-as-you-go',
        useCases: 'Application prototyping, cost optimization',
        link: 'https://www.together.ai'
    },

    // Code Assistants
    {
        id: 11,
        name: 'GitHub Copilot',
        category: 'code',
        emoji: '💻',
        description: 'AI pair programmer powered by OpenAI Codex suggesting code as you type.',
        features: ['Real-time Suggestions', 'Unit Tests', 'Multi-language', 'IDE Integration'],
        pricing: '$10/month or $100/year',
        useCases: 'Code completion, test generation, debugging',
        link: 'https://github.com/features/copilot'
    },
    {
        id: 12,
        name: 'Cursor',
        category: 'code',
        emoji: '⌨️',
        description: 'AI-first code editor with Ctrl+K for in-line edits and Chat for refactoring.',
        features: ['AI Chat', 'Cmd+K Edits', 'Multi-file Edits', 'Fast'],
        pricing: 'Free / $20/month Pro',
        useCases: 'Development, code review, refactoring',
        link: 'https://cursor.sh'
    },
    {
        id: 13,
        name: 'Tabnine',
        category: 'code',
        emoji: '🧩',
        description: 'IDE-agnostic AI code completion trained on permissive licenses.',
        features: ['Any IDE', 'Multiple Languages', 'Enterprise', 'Privacy-focused'],
        pricing: 'Free / $15/month',
        useCases: 'Code completion, team productivity',
        link: 'https://www.tabnine.com'
    },
    {
        id: 14,
        name: 'Replit Agent',
        category: 'code',
        emoji: '🚀',
        description: 'Full-stack AI agent for building complete applications from natural language.',
        features: ['Full-stack', 'Web Dev', 'Deployment', 'Collaboration'],
        pricing: 'Free / Paid tiers',
        useCases: 'Quick prototyping, full app development',
        link: 'https://replit.com'
    },
    {
        id: 15,
        name: 'Codeium',
        category: 'code',
        emoji: '✨',
        description: 'Free alternative to Copilot with broad IDE support and fast suggestions.',
        features: ['IDE Support', 'Free Tier', 'Fast', 'Multi-language'],
        pricing: 'Free / Premium',
        useCases: 'Code completion, beginner-friendly',
        link: 'https://codeium.com'
    },
    {
        id: 16,
        name: 'Amazon CodeWhisperer',
        category: 'code',
        emoji: '🎯',
        description: 'AWS\'s AI code assistant integrated with AWS services and security scanning.',
        features: ['AWS Integration', 'Security Scan', 'Reference Tracking', 'IDE Support'],
        pricing: 'Free / Premium',
        useCases: 'AWS development, enterprise coding',
        link: 'https://aws.amazon.com/codewhisperer'
    },
    {
        id: 17,
        name: 'DeepSeek Coder',
        category: 'code',
        emoji: '🔧',
        description: 'Open-source code model focused on efficient programming task completion.',
        features: ['Open Source', 'Efficient', 'Code Focus', 'Customizable'],
        pricing: 'Free (Open Source)',
        useCases: 'Custom code assistants, local deployment',
        link: 'https://www.deepseek.com'
    },
    {
        id: 18,
        name: 'JetBrains AI Assistant',
        category: 'code',
        emoji: '🛠️',
        description: 'AI built directly into JetBrains IDEs for code generation and refactoring.',
        features: ['IDE Native', 'Context Aware', 'JetBrains Tools', 'Real-time'],
        pricing: 'Subscription based',
        useCases: 'Professional development, refactoring',
        link: 'https://www.jetbrains.com/ai'
    },
    {
        id: 19,
        name: 'MetaGPT',
        category: 'code',
        emoji: '🏢',
        description: 'Multi-agent framework for generating entire software projects from requirements.',
        features: ['Multi-agent', 'Project Gen', 'Open Source', 'Enterprise'],
        pricing: 'Free (Open Source)',
        useCases: 'Project scaffolding, team automation',
        link: 'https://metagpt.dev'
    },
    {
        id: 20,
        name: 'Phind.com',
        category: 'code',
        emoji: '🔎',
        description: 'Search engine and assistant specifically optimized for developer queries.',
        features: ['Dev Search', 'Code Snippets', 'Fast Answers', 'Community'],
        pricing: 'Free / Premium',
        useCases: 'Learning, problem-solving, documentation',
        link: 'https://www.phind.com'
    },

    // Image Generation
    {
        id: 21,
        name: 'DALL-E 3',
        category: 'image',
        emoji: '🎨',
        description: 'OpenAI\'s advanced image generator creating detailed, artistic visuals from text.',
        features: ['Text-to-Image', 'Editing', 'Inpainting', 'Outpainting'],
        pricing: 'Pay per image',
        useCases: 'Marketing assets, concept art, illustrations',
        link: 'https://openai.com/dall-e-3'
    },
    {
        id: 22,
        name: 'Midjourney',
        category: 'image',
        emoji: '✨',
        description: 'Discord-based image generator known for aesthetic, artistic results.',
        features: ['Discord Native', 'Style Control', 'Upscaling', 'Fast Generation'],
        pricing: '$10-30/month',
        useCases: 'Concept art, social media, creative projects',
        link: 'https://www.midjourney.com'
    },
    {
        id: 23,
        name: 'Stable Diffusion 3',
        category: 'image',
        emoji: '🌊',
        description: 'Open-source image generation model available for local deployment.',
        features: ['Open Source', 'Local Deployment', 'Text Accuracy', 'Efficient'],
        pricing: 'Free (Open Source)',
        useCases: 'Private generation, custom applications',
        link: 'https://www.stabilitai.com'
    },
    {
        id: 24,
        name: 'Adobe Firefly',
        category: 'image',
        emoji: '🔥',
        description: 'Generative AI integrated into Creative Cloud for designers.',
        features: ['Adobe Integration', 'Content Aware Fill', 'Text Effects', 'Professional'],
        pricing: 'Creative Cloud subscription',
        useCases: 'Professional design, photo editing',
        link: 'https://www.adobe.com/products/firefly'
    },
    {
        id: 25,
        name: 'Bing Image Creator',
        category: 'image',
        emoji: '🖼️',
        description: 'Microsoft\'s free image generator powered by DALL-E 3.',
        features: ['Free Tier', 'Daily Credits', 'Web-based', 'DALL-E 3 Powered'],
        pricing: 'Free',
        useCases: 'Quick image creation, free alternative',
        link: 'https://www.bing.com/create'
    },
    {
        id: 26,
        name: 'Leonardo.ai',
        category: 'image',
        emoji: '🎭',
        description: 'AI image generator with strong style control and custom model training.',
        features: ['Custom Models', 'Style Control', 'Photo Real', 'Video Generation'],
        pricing: 'Free / Paid plans',
        useCases: 'Game assets, marketing, character design',
        link: 'https://leonardo.ai'
    },
    {
        id: 27,
        name: 'Runway',
        category: 'image',
        emoji: '🎬',
        description: 'Creative suite for image and video generation, editing, and animation.',
        features: ['Multi-modal', 'Video Gen', 'Editing Tools', 'Collaboration'],
        pricing: 'Free / $12/month',
        useCases: 'Video production, creative editing',
        link: 'https://runwayml.com'
    },
    {
        id: 28,
        name: 'Perplexity Art',
        category: 'image',
        emoji: '🎪',
        description: 'Image generation powered by Perplexity\'s AI technology.',
        features: ['Text-to-Image', 'Web Integration', 'Fast', 'Affordable'],
        pricing: 'Subscription based',
        useCases: 'Content creation, quick assets',
        link: 'https://www.perplexity.ai'
    },
    {
        id: 29,
        name: 'Shutterstock Generative AI',
        category: 'image',
        emoji: '🏞️',
        description: 'Stock imagery platform with integrated generative AI for custom image creation.',
        features: ['Stock Access', 'Custom Gen', 'Licensed', 'Professional'],
        pricing: 'Subscription based',
        useCases: 'Commercial projects, marketing',
        link: 'https://www.shutterstock.com'
    },
    {
        id: 30,
        name: 'Imagine (Magic Write)',
        category: 'image',
        emoji: '✏️',
        description: 'Canva\'s integrated image generation for design templates.',
        features: ['Canva Integration', 'Design Ready', 'Templates', 'Easy to Use'],
        pricing: 'Canva Pro',
        useCases: 'Social media design, presentations',
        link: 'https://www.canva.com'
    },

    // Data Analysis & ML
    {
        id: 31,
        name: 'ChatGPT Data Analysis',
        category: 'data',
        emoji: '📊',
        description: 'GPT-4 with code interpreter for data analysis, visualization, and processing.',
        features: ['Code Execution', 'Visualization', 'File Analysis', 'Multi-format'],
        pricing: '$20/month',
        useCases: 'Data exploration, statistical analysis',
        link: 'https://openai.com/chatgpt'
    },
    {
        id: 32,
        name: 'Google BigQuery ML',
        category: 'data',
        emoji: '🔬',
        description: 'SQL-based ML for building and deploying models without ML expertise.',
        features: ['SQL-based', 'Auto ML', 'Scalable', 'Google Integration'],
        pricing: 'Pay-as-you-go',
        useCases: 'Predictive analytics, business intelligence',
        link: 'https://cloud.google.com/bigquery-ml'
    },
    {
        id: 33,
        name: 'Auto-sklearn',
        category: 'data',
        emoji: '🤖',
        description: 'Automated machine learning framework selecting and tuning algorithms.',
        features: ['AutoML', 'Ensemble', 'Hyperparameter Tuning', 'Open Source'],
        pricing: 'Free (Open Source)',
        useCases: 'Quick ML models, baseline creation',
        link: 'https://automl.github.io/auto-sklearn'
    },
    {
        id: 34,
        name: 'DataRobot',
        category: 'data',
        emoji: '🤖',
        description: 'Enterprise AI cloud platform for automated machine learning at scale.',
        features: ['Enterprise', 'AutoML', 'Deployment', 'Monitoring'],
        pricing: 'Enterprise pricing',
        useCases: 'Large-scale ML, enterprise analytics',
        link: 'https://www.datarobot.com'
    },
    {
        id: 35,
        name: 'H2O.ai',
        category: 'data',
        emoji: '💧',
        description: 'Open-source AI platform with AutoML and interpretability features.',
        features: ['AutoML', 'Interpretable', 'Scalable', 'Open Source'],
        pricing: 'Free / Enterprise',
        useCases: 'AutoML projects, model interpretation',
        link: 'https://h2o.ai'
    },
    {
        id: 36,
        name: 'Databricks',
        category: 'data',
        emoji: '⚙️',
        description: 'Lakehouse platform simplifying data pipelines and ML model deployment.',
        features: ['Data Lakehouse', 'ML Platform', 'SQL & Python', 'Scalable'],
        pricing: 'Usage-based',
        useCases: 'Data engineering, ML workflows',
        link: 'https://www.databricks.com'
    },
    {
        id: 37,
        name: 'Amazon SageMaker',
        category: 'data',
        emoji: '🔧',
        description: 'AWS managed ML service with AutoML and monitoring capabilities.',
        features: ['AutoML', 'Notebooks', 'Deployment', 'AWS Integration'],
        pricing: 'Pay-as-you-go',
        useCases: 'AWS-based ML projects',
        link: 'https://aws.amazon.com/sagemaker'
    },
    {
        id: 38,
        name: 'MLflow',
        category: 'data',
        emoji: '📈',
        description: 'Open-source ML lifecycle management platform.',
        features: ['Experiment Tracking', 'Model Registry', 'Deployment', 'Open Source'],
        pricing: 'Free (Open Source)',
        useCases: 'ML project organization, tracking',
        link: 'https://mlflow.org'
    },
    {
        id: 39,
        name: 'Weights & Biases',
        category: 'data',
        emoji: '⚖️',
        description: 'ML experiment tracking and model monitoring platform.',
        features: ['Experiment Tracking', 'Viz', 'Collaboration', 'Monitoring'],
        pricing: 'Free / Paid',
        useCases: 'ML team collaboration, experiment tracking',
        link: 'https://wandb.ai'
    },
    {
        id: 40,
        name: 'Hugging Face',
        category: 'data',
        emoji: '🤗',
        description: 'Hub for pre-trained NLP models, datasets, and transformers library.',
        features: ['Model Hub', 'Datasets', 'Transformers', 'Community'],
        pricing: 'Free / Premium',
        useCases: 'NLP projects, transfer learning',
        link: 'https://huggingface.co'
    },

    // Voice & Speech
    {
        id: 41,
        name: 'Eleven Labs',
        category: 'voice',
        emoji: '🎙️',
        description: 'Advanced AI text-to-speech with natural, expressive voice synthesis.',
        features: ['Natural Voices', 'Voice Cloning', 'Multiple Languages', 'API'],
        pricing: 'Free / $5-99/month',
        useCases: 'Audiobooks, podcasts, accessibility',
        link: 'https://elevenlabs.io'
    },
    {
        id: 42,
        name: 'Google Cloud Speech-to-Text',
        category: 'voice',
        emoji: '🎤',
        description: 'Accurate speech recognition with noise robustness and language support.',
        features: ['Speech Recognition', 'Real-time', 'Multi-language', 'Transcription'],
        pricing: 'Pay-as-you-go',
        useCases: 'Transcription, voice commands, accessibility',
        link: 'https://cloud.google.com/speech-to-text'
    },
    {
        id: 43,
        name: 'Whisper (OpenAI)',
        category: 'voice',
        emoji: '🤐',
        description: 'Open-source speech recognition model trained on diverse audio.',
        features: ['Open Source', 'Multilingual', 'Robust', 'Fast'],
        pricing: 'Free',
        useCases: 'Local transcription, custom applications',
        link: 'https://openai.com/research/whisper'
    },
    {
        id: 44,
        name: 'Azure Speech Services',
        category: 'voice',
        emoji: '☁️',
        description: 'Microsoft\'s speech recognition and synthesis integrated with Azure.',
        features: ['Speech Recognition', 'TTS', 'Translation', 'Azure Integration'],
        pricing: 'Pay-as-you-go',
        useCases: 'Enterprise voice solutions',
        link: 'https://azure.microsoft.com/services/cognitive-services/speech-services'
    },
    {
        id: 45,
        name: 'Descript',
        category: 'voice',
        emoji: '✂️',
        description: 'Audio/video editing with automatic transcription and word-level editing.',
        features: ['Transcription', 'Editing', 'Overdub Voice Cloning', 'Collaboration'],
        pricing: 'Free / $24/month',
        useCases: 'Podcast editing, video production',
        link: 'https://www.descript.com'
    },
    {
        id: 46,
        name: 'Synthesia',
        category: 'voice',
        emoji: '🎬',
        description: 'AI video generation with synthetic avatars and voice synthesis.',
        features: ['Video Gen', 'Avatar', 'TTS', 'Multiple Languages'],
        pricing: '$25-40/month',
        useCases: 'Training videos, marketing content',
        link: 'https://www.synthesia.io'
    },
    {
        id: 47,
        name: 'Murf AI',
        category: 'voice',
        emoji: '🎵',
        description: 'Text-to-speech platform with realistic AI voices across languages.',
        features: ['Realistic Voices', 'Multilingual', 'Style Control', 'Commercial'],
        pricing: 'Free / Paid plans',
        useCases: 'Voiceovers, commercials, education',
        link: 'https://murf.ai'
    },
    {
        id: 48,
        name: 'Play.ht',
        category: 'voice',
        emoji: '▶️',
        description: 'AI voice generator for video, blogs, and social media content.',
        features: ['TTS', 'Realistic', 'AI Voices', 'Fast'],
        pricing: 'Free / Paid',
        useCases: 'Video narration, content creation',
        link: 'https://www.play.ht'
    },
    {
        id: 49,
        name: 'Voiceflow',
        category: 'voice',
        emoji: '🗣️',
        description: 'Platform for building voice and conversational AI applications.',
        features: ['Voice Design', 'Conversational AI', 'No Code', 'Analytics'],
        pricing: 'Free / Paid plans',
        useCases: 'Voice assistants, chatbots',
        link: 'https://www.voiceflow.com'
    },
    {
        id: 50,
        name: 'IBM Watson Speech',
        category: 'voice',
        emoji: '🔊',
        description: 'Enterprise speech recognition and synthesis from IBM Cloud.',
        features: ['Speech Recognition', 'Speaker ID', 'Customization', 'Enterprise'],
        pricing: 'Usage-based',
        useCases: 'Enterprise voice solutions',
        link: 'https://www.ibm.com/cloud/watson-speech'
    },

    // Video & Media
    {
        id: 51,
        name: 'Runway',
        category: 'video',
        emoji: '🎬',
        description: 'AI video generation, editing, and effects suite for creators.',
        features: ['Video Gen', 'Editing', 'Effects', 'Collaboration'],
        pricing: 'Free / $12-28/month',
        useCases: 'Video production, creative editing',
        link: 'https://runwayml.com'
    },
    {
        id: 52,
        name: 'Synthesia',
        category: 'video',
        emoji: '🎭',
        description: 'Create AI-generated videos with digital avatars and scripts.',
        features: ['Video Gen', 'Avatars', 'Text-to-Video', 'Multi-language'],
        pricing: '$25-40/month',
        useCases: 'Training videos, corporate content',
        link: 'https://www.synthesia.io'
    },
    {
        id: 53,
        name: 'Pika Labs',
        category: 'video',
        emoji: '🎪',
        description: 'AI video generator with motion control and creative flexibility.',
        features: ['Text-to-Video', 'Motion Control', 'Effects', 'Discord Native'],
        pricing: 'Free / Paid',
        useCases: 'Short videos, animations, creative content',
        link: 'https://pika.art'
    },
    {
        id: 54,
        name: 'Opus Clip',
        category: 'video',
        emoji: '✂️',
        description: 'AI-powered tool for repurposing long-form videos into short clips.',
        features: ['Auto Cropping', 'Clip Generation', 'Caption', 'SEO Optimization'],
        pricing: 'Free / $50/month',
        useCases: 'Content distribution, social media',
        link: 'https://www.opus.pro'
    },
    {
        id: 55,
        name: 'Descript',
        category: 'video',
        emoji: '📝',
        description: 'Video editing through transcript editing with frame-accurate control.',
        features: ['Video Editing', 'Transcription', 'Voice Cloning', 'Collaboration'],
        pricing: 'Free / $24/month',
        useCases: 'Podcast editing, video production',
        link: 'https://www.descript.com'
    },
    {
        id: 56,
        name: 'Adobe Firefly Video',
        category: 'video',
        emoji: '🎥',
        description: 'Generative AI video tools integrated into Creative Cloud.',
        features: ['Video Gen', 'Effects', 'Adobe Integration', 'Professional'],
        pricing: 'Creative Cloud subscription',
        useCases: 'Professional video editing',
        link: 'https://www.adobe.com'
    },
    {
        id: 57,
        name: 'Topaz Gigapixel',
        category: 'video',
        emoji: '🔍',
        description: 'AI video upscaling and enhancement software.',
        features: ['Upscaling', 'Restoration', 'Fast', 'Professional Quality'],
        pricing: '$99 (one-time)',
        useCases: 'Video restoration, quality improvement',
        link: 'https://www.topazlabs.com'
    },
    {
        id: 58,
        name: 'FlexClip',
        category: 'video',
        emoji: '🎬',
        description: 'Online video editor with AI features for quick video creation.',
        features: ['Video Editing', 'Templates', 'AI Avatar', 'Easy to Use'],
        pricing: 'Free / $7.99+/month',
        useCases: 'Quick videos, social content',
        link: 'https://www.flexclip.com'
    },
    {
        id: 59,
        name: 'Pictory',
        category: 'video',
        emoji: '📸',
        description: 'Convert text and blog posts into short, branded videos.',
        features: ['Text-to-Video', 'Branding', 'Auto Captions', 'Stock Media'],
        pricing: '$19-99/month',
        useCases: 'Content repurposing, marketing',
        link: 'https://www.pictory.ai'
    },
    {
        id: 60,
        name: 'Invideo AI',
        category: 'video',
        emoji: '🎬',
        description: 'AI video generator from text and blog posts.',
        features: ['Text-to-Video', 'Automation', 'Templates', 'Captions'],
        pricing: 'Free / $19-60/month',
        useCases: 'Video marketing, content creation',
        link: 'https://invideo.io'
    },

    // Automation & RPA
    {
        id: 61,
        name: 'Make (Integromat)',
        category: 'automation',
        emoji: '⚙️',
        description: 'Visual automation platform with AI-enhanced workflow creation.',
        features: ['Visual Builder', 'Integrations', 'AI Assist', 'No Code'],
        pricing: 'Free / $10-38/month',
        useCases: 'Workflow automation, app integration',
        link: 'https://www.make.com'
    },
    {
        id: 62,
        name: 'Zapier',
        category: 'automation',
        emoji: '⚡',
        description: 'Popular automation platform connecting apps and workflows.',
        features: ['2000+ Apps', 'Automation', 'Multi-step Zaps', 'AI Actions'],
        pricing: 'Free / $10-99/month',
        useCases: 'App integration, business automation',
        link: 'https://zapier.com'
    },
    {
        id: 63,
        name: 'Microsoft Power Automate',
        category: 'automation',
        emoji: '🔄',
        description: 'Microsoft\'s enterprise automation with AI and cloud integration.',
        features: ['Microsoft Integration', 'RPAs', 'Cloud Flows', 'Enterprise'],
        pricing: 'Free / $10-40/user/month',
        useCases: 'Enterprise automation, Microsoft ecosystem',
        link: 'https://flow.microsoft.com'
    },
    {
        id: 64,
        name: 'UiPath',
        category: 'automation',
        emoji: '🤖',
        description: 'Robotic process automation platform for enterprise automation.',
        features: ['RPA', 'AI', 'Process Intelligence', 'Enterprise Ready'],
        pricing: 'Enterprise pricing',
        useCases: 'Business process automation',
        link: 'https://www.uipath.com'
    },
    {
        id: 65,
        name: 'Automation Anywhere',
        category: 'automation',
        emoji: '🔗',
        description: 'Cloud-native intelligent process automation platform.',
        features: ['Cloud Native', 'AI-driven', 'Bot Store', 'Enterprise'],
        pricing: 'Enterprise pricing',
        useCases: 'Process automation, enterprise scale',
        link: 'https://www.automationanywhere.com'
    },
    {
        id: 66,
        name: 'n8n',
        category: 'automation',
        emoji: '🔀',
        description: 'Open-source workflow automation and integration platform.',
        features: ['Open Source', 'Self-hosted', '400+ Integrations', 'Free'],
        pricing: 'Free / $20/month cloud',
        useCases: 'Custom automation, self-hosted workflows',
        link: 'https://n8n.io'
    },
    {
        id: 67,
        name: 'IFTTT',
        category: 'automation',
        emoji: '🔔',
        description: 'Simple automation platform with conditional triggers and actions.',
        features: ['Simple Interface', 'Mobile App', '700+ Services', 'Free'],
        pricing: 'Free / Premium',
        useCases: 'Simple automations, home automation',
        link: 'https://ifttt.com'
    },
    {
        id: 68,
        name: 'Blue Prism',
        category: 'automation',
        emoji: '👻',
        description: 'Enterprise RPA platform with AI and intelligent process automation.',
        features: ['RPA', 'AI', 'Intelligent', 'Enterprise'],
        pricing: 'Enterprise pricing',
        useCases: 'Large-scale process automation',
        link: 'https://www.blueprism.com'
    },
    {
        id: 69,
        name: 'Workato',
        category: 'automation',
        emoji: '📡',
        description: 'Integration and automation platform with 1000+ pre-built connectors.',
        features: ['1000+ Connectors', 'Enterprise', 'AI Assist', 'No Code'],
        pricing: 'Enterprise pricing',
        useCases: 'Enterprise integration and automation',
        link: 'https://www.workato.com'
    },
    {
        id: 70,
        name: 'Kestra',
        category: 'automation',
        emoji: '🎯',
        description: 'Open-source workflow orchestration and automation platform.',
        features: ['Open Source', 'Workflow Orchestration', 'Event-driven', 'Self-hosted'],
        pricing: 'Free / Enterprise',
        useCases: 'Complex workflow automation',
        link: 'https://kestra.io'
    }
];

// State
let currentCategory = 'all';
let currentSearch = '';

// DOM Elements
const toolsGrid = document.getElementById('toolsGrid');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filter-btn');

// Event Listeners
filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.dataset.category;
        renderTools();
    });
});

searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase();
    renderTools();
});

// Render Tools
function renderTools() {
    const filtered = aiTools.filter(tool => {
        const matchCategory = currentCategory === 'all' || tool.category === currentCategory;
        const matchSearch = !currentSearch || 
            tool.name.toLowerCase().includes(currentSearch) || 
            tool.description.toLowerCase().includes(currentSearch) ||
            tool.features.some(f => f.toLowerCase().includes(currentSearch));
        return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
        toolsGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    toolsGrid.innerHTML = filtered.map(tool => `
        <div class="tool-card">
            <div class="tool-header">
                <div class="tool-emoji">${tool.emoji}</div>
                <h3 class="tool-title">${tool.name}</h3>
                <span class="tool-category">${getCategoryLabel(tool.category)}</span>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-features">
                <p>Key Features:</p>
                <div class="features-list">
                    ${tool.features.map(f => `<span class="feature-badge">${f}</span>`).join('')}
                </div>
            </div>
            <div class="tool-footer">
                <div>
                    <div style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.5rem;">💰 ${tool.pricing}</div>
                    <div class="tool-pricing" style="color: var(--text-light); font-size: 0.8rem;">${tool.useCases}</div>
                </div>
                <a href="${tool.link}" target="_blank" class="tool-link">Visit →</a>
            </div>
        </div>
    `).join('');
}

function getCategoryLabel(cat) {
    const labels = {
        'llm': 'LLMs & Chatbots',
        'code': 'Code Assistant',
        'image': 'Image Gen',
        'data': 'Data & ML',
        'voice': 'Voice & Speech',
        'video': 'Video & Media',
        'automation': 'Automation'
    };
    return labels[cat] || cat;
}

// Initial render
renderTools();
