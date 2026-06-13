import { BlogList } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = { 
    title: "Blog",
    description: "Dicas e estrategias para impulsionar seu negocio online",
    robots: "index, follow",
    openGraph: {
        title: "Blog",
        description: "Dicas e estrategias para impulsionar seu negocio online",
        url: "https://site-blog-ochre-zeta.vercel.app/og-image.jpg",
        siteName: "Site.Set",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "https://site-blog-ochre-zeta.vercel.app/og-image.jpg",
                width: 800,
                height: 600,
                alt: "Blog - Site.Set"
            }
        ]
    }
};

export default function BlogListPage() {

    const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return(
        <BlogList posts={sortedPosts}/>
    )
}