import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title,
  description,
  keywords = `
    web development, software services, branding, UI/UX design, mobile app development,
    SEO optimization, performance marketing, lead generation, digital transformation,
    full stack development, Next.js, React, Tailwind CSS, ecommerce development,
    beauty app, salon booking, spa app, online appointment, wellness services,
    skincare services, hair styling app, makeup artist booking, GCC business services,
    Dubai software company, tech startup India, digital agency Kuwait, online marketing,
    SaaS product, SEO tools, blog platform, author CMS, influencer platform,
    AI beauty matcher, AI-powered blogs, chat forums, business listing, partner onboarding,
    JustDial alternative, software development India, UI animation, Framer Motion UI,
    scalable web apps, secure login system, JWT OAuth login
  `,
  image = "/default-og.png",
  url = "https://yourwebsite.com",
}: SEOProps) => {
  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.trim().replace(/\s+/g, " ")} />
      <meta name="author" content="E-Bindle Software Solutions" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEO;
