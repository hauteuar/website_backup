import React from 'react';
import BlogPost from './BlogPost'; // Adjust the import path as necessary


const blogPosts = [
    {
        id: 1,
        title: "Our Collaboration Humber college for a Capstone project.",
        content: `### Exciting Collaboration: Shaping the Future with Humber College’s Brightest Minds

In a world where innovation and education intersect, incredible opportunities arise.This May, we embarked on a remarkable journey, joining forces with a team of talented students from Humber College for a capstone grant project that promises to shape the future of technology and application development.

Our startup, always at the forefront of technological advancements, found a unique opportunity to collaborate with the next generation of innovators.The project aims to further develop our newest application, an endeavor that holds the promise of revolutionizing its field.Leading this venture from our side was our Chief Technology Officer, Sulochana, whose expertise and vision have been instrumental in guiding our technical team towards new horizons.

The heart of this collaboration beats with the passion and intelligence of four remarkable students from Humber College: Devansh, Ranveer Kaur, Samrat, and Sidan.Each brought their unique perspectives, skills, and unwavering dedication to the table, demonstrating the incredible potential of young minds when provided with the right opportunities and guidance.

This partnership wouldn't have been possible without the support and encouragement of Humber College’s esteemed faculty. A special thanks goes to Meena Dowlwani CHRM, Faculty / Industry Engagement Advisor, whose efforts in fostering a bridge between academia and industry are truly commendable. Meena’s role was pivotal in making this collaboration a reality, ensuring that the students could apply their theoretical knowledge in a practical, real-world setting.

The project kicked off with a series of meetings where our CTO and technical team met with the students to outline the project's scope, objectives, and milestones. These sessions were not just about planning but also about exchanging ideas, learning, and inspiring each other to push beyond boundaries.

As we move forward, we're excited about the potential outcomes of this collaboration. It's not just about the development of a new application but about nurturing a culture of innovation, learning, and mutual growth.Projects like these are a testament to the power of collaboration between industry and academia, and we're proud to be a part of this transformative journey.

We look forward to sharing updates as we progress and are confident that this venture will lead to outstanding results.Our heartfelt gratitude to Humber College, its faculty, and especially the students—Devansh, Ranveer Kaur, Samrat, and Sidan—for joining us in this adventure.Together, we're not just developing an application; we're building the future.

Stay tuned for more updates on this exciting project as we continue to innovate and inspire.`,
        author: "Sulochana",
        date: "March 9, 2024"
    },
    
];

function BlogPostsList() {
    return (
        <div>
            {blogPosts.map(post => (
                <BlogPost
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    date={post.date}
                />
            ))}
        </div>
    );
}

export default BlogPostsList;
