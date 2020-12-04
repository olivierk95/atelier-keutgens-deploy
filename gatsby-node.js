const path = require("path")
const slugify = require('slugify')
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createPages = async({ graphql, actions}) => {
    const { createPage } = actions
    const projetTemplate = path.resolve('src/templates/projet.js')

    return graphql(`
        {
            projets: allStrapiProjets {
                nodes {
                    id
                    titre
                }
            }
        }
    `).then(result => { 
        if(result.errors) {
            Promise.reject(result.errors);
        }

        result.data.projets.nodes.forEach(projet => {
            createPage({
                path: `/${slugify(projet.titre)}`,
                component: projetTemplate,
                context: {
                    id: projet.id,
                }
            })
        });
    }) 
}



// Code d'internet pour permettre la gestion de gatsby-image sur l'entrée "groupe d'images" de Strapi
exports.onCreateNode = async ({
        node,
        actions,
        store,
        cache,
        createNodeId,
    }) => {
        const { createNode } = actions
        
        let multipleImages = node.carousel
    
        if (node.internal.type === "StrapiProjets") {
        if (multipleImages.length > 0) {
            // multipleImages.forEach(el => console.log(el))
            const images = await Promise.all(
            multipleImages.map(el =>
                createRemoteFileNode({
                    url: process.env.DEPLOY_URL ? el.url : `http://localhost:1337${el.url}`,
                    parentNodeId: node.id,
                    store,
                    cache,
                    createNode,
                    createNodeId,
                })
            )
            )
        
        multipleImages.forEach((image, i) => {
                image.localFile___NODE = images[i].id
            })
        }
    }
}

