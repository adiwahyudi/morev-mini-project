import React from 'react'
import SimpleReactFooter from "simple-react-footer";

export default function NewFooter() {
    const description = "MO-REV is Movie Review, its place toshare your opinion about film a giving rate to it. Its a Front End mini project from I Wayan Adi Wahyudi in Alterra Academy"
    const title = "ABOUT";
    const columns = [
      {
          title: "Resources",
          resources: [
              {
                  name: "Login",
                  link: "/about"
              },
              {
                  name: "Register",
                  link: "/careers"
              },
              {
                  name: "List Movies",
                  link: "/contact"
              }
          ]
      },
   ];
   
   return <SimpleReactFooter 
        description={description} 
        title={title}
        columns={columns}
        youtube=""
        twitter="fluffy_cat_on_twitter"
        facebook="fluffy_cat_on_fb"
        instagram="fluffy_cat_live"
        linkedin=""
        pinterest="fluffy_cats_collections"
        copyright="2021 MO-REV"
        iconColor="white"
        backgroundColor="#4B4747"
        fontColor="white"
        copyrightColor="white"
    />;
}
