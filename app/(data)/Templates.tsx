export default[
    {
        name: "Blog Title",
        description: "Generate a catchy title for your blog post.",
        category: "Blog",
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on given niche &  outline and give me result in Rich text editor format ',
        slug:'generate-blog-title',
        form:[
            {
            label:'Enter your blog niche',
            field:'input',
            name: 'niche',
            required:true
        },
        {
            label:'Enter blog outline',
            field:'textarea',
            name: 'outline',
        }
    ]
    },
    {
        name: "Blog Content",
        description: "Generate a complete blog post based on the title and outline.",
        category: "Blog",
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'Generate a complete blog post based on the title and outline provided. The content should be engaging, informative, and well-structured.',
        slug:'generate-blog-content',
        form : [
            {
                label: 'Enter your blog title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: "Blog Topic Ideas",
        description: "Get creative blog topic ideas based on your niche.",
        category: "Blog",
        icon:'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
        aiPrompt:'Generate 5 creative blog topic ideas based on the provided niche. Each idea should be unique and engaging.',
        slug:'generate-blog-topic-ideas',
        form: [
            {
                label:'Enter yout Niche',
                field:'input',
                name:'niche',
                required:true
            },
        ]
    },
    {
        name: 'Youtube SEO Title',
        description: 'Generate an SEO-optimized title for your YouTube video.',
        category: 'YouTube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Generate an SEO-optimized title for a YouTube video based on the provided topic. The title should be catchy and include relevant keywords.',
        slug: 'youtube-seo-title',
        form : [
            {
                label: 'Enter your video topic',
                field: 'input',
                name: 'topic',
                required: true
    },
    {
        label:' Enter your video description',
        field:'textarea',
        name: 'outline',
    }
        ]
    },

    {
        name: 'Youtube SEO Description',
        description: 'Generate an SEO-optimized description for your YouTube video.',
        category: 'YouTube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Generate an SEO-optimized description for a YouTube video based on the provided topic and outline. The description should be engaging and include relevant keywords.',
        slug: 'youtube-seo-description',
        form : [
            {
                label:'Enter yout blog topic/title',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter your video description',
                field:'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Youtube SEO Tags',
        description: 'Generate SEO-optimized tags for your YouTube video.',
        category: 'YouTube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Generate SEO-optimized tags for a YouTube video based on the provided topic. The tags should be relevant and help improve the video\'s visibility.',
        slug: 'youtube-seo-tags',
        form : [
            {
                label:'Enter yout blog topic/title',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter your video description',
                field:'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Youtube Video Script',
        description: 'Generate a script for your YouTube video based on the title and outline.',
        category: 'YouTube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Generate a script for a YouTube video based on the provided title and outline. The script should be engaging, informative, and well-structured.',
        slug: 'youtube-video-script',
        form : [{
            label: 'Enter your video title',
            field: 'input',
            name: 'title',
            required: true
        },
        {
            label: 'Enter video outline',
            field: 'textarea',
            name: 'outline',
        }]
    }
]