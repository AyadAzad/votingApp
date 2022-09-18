import React from 'react'
import Product from './Product'

// generating the votes 
function generateVoteCount() {
    return Math.floor((Math.random() * 100) + 20);
    
  }

  // list of info
const products_info = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: 'images/products/image-aqua.png',
    },
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/kristy.png',
      productImageUrl: 'images/products/image-rose.png',
    },
    {
      id: 3,
      title: 'Tinfoild: Tailored tinfoil hats',
      description: 'We already have your measurements and shipping address.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/veronika.jpg',
      productImageUrl: 'images/products/image-steel.png',
    },
    {
      id: 4,
      title: 'Haught or Naught',
      description: 'High-minded or absent-minded? You decide.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/molly.png',
      productImageUrl: 'images/products/image-yellow.png',
    },
  ];


class ProductList extends React.Component{
  state = {
    products_info:[],
  };

  handleProductUpVote(productId) {
   const nextProducts = this.state.products.map((product) =>{
      if(product.id === productId)
      return Object.assign({}, product, {
        votes: product.votes + 1,
      });
      else{
        return product;
      }
   });
   this.setState({
    products: nextProducts,
   });
  }
 
    componentDidMount() {
    this.setState({ products: products_info });
    }
    
    render(){
      // eslint-disable-next-line no-unused-vars
      const products_products = products_info.sort((a,b) =>(
        b.votes - a.votes
      ));
    
       
        // using map 
        const productComponents = products_info.map((product) => (
            <Product
              key={'product-' + product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              url={product.url}
              votes={product.votes}
              submitterAvatarUrl={product.submitterAvatarUrl}
              productImageUrl={product.productImageUrl}
              onVote={this.handleProductUpVote}
            />
          ));
    
        return(
           <div>

            {productComponents}

            {/* another way to use prop without using map */}
          {/* <Product
          id='1'
          title='Supermajority: The Fantasy Congress League'
          description='Earn points when your favorite politicians pass legislation.'
          url= '#'
          votes={generateVoteCount()}
          submitterAvatarUrl='images/avatars/kristy.png'
          productImageUrl='images/products/image-rose.png'
          />
          <Product
          id='2'
          title='Yellow Pail'
          description='Earn points when your favorite politicians pass legislation.'
          url= '#'
          votes={generateVoteCount()}
          submitterAvatarUrl='images/avatars/daniel.jpg'
          productImageUrl='images/products/image-aqua.png'
          />
          <Product
          id='3'
          title='Tinfoild: Tailored tinfoil hats'
          description='We already have your measurements and shipping address.'
          url= '#'
          votes={generateVoteCount()}
          submitterAvatarUrl='images/avatars/veronika.jpg'
          productImageUrl='images/products/image-steel.png'
          />
          <Product
          id='4'
          title='Haught or Naught'
          description='High-minded or absent-minded? You decide.'
          url= '#'
          votes={generateVoteCount()}
          submitterAvatarUrl='images/avatars/molly.png'
          productImageUrl='images/products/image-yellow.png'
          /> */}
           </div>
        );
    }
}

export default ProductList;