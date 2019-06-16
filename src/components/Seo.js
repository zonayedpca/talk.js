import React from "react"
import Helmet from "react-helmet"

function SEO() {
  const title = 'Meetup.js - Grand JavaScript Meetup';
  const metaDescription = 'A Long-awaited Developers Event. A meetup for Bangladeshi JavaScript developers. Happening on 29th of June, Banani, Dhaka. Register Yourself beforehand';

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: "og:image",
          content: require("../assets/images/thumbnail.png"),
        },
        {
          property: "og:image:secure_url",
          content: require("../assets/images/thumbnail.png"),
        },
        {
          property: "og:image:width",
          content: "1200",
        },

        {
          property: "og:image:height",
          content: "675",
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: 'meetup.js',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: 'metaDescription',
        },
      ]}
    />
  )
}

export default SEO;
