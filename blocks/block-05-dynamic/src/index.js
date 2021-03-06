import { registerBlockType } from '@wordpress/blocks';
import { withSelect } from '@wordpress/data';

registerBlockType( 'wyern-plugin/block-05-dynamic', {
    title:      'Block Example #5 - Becoming Dynamic',
    icon:       'smiley',
    category:   'widgets',

    edit: withSelect( ( select ) => {
        return {
            posts: select( 'core' ).getEntityRecords( 'postType', 'post' ),
        };
    } )( ( { posts, className } ) => {
        if ( ! posts ) {
            return 'Loading...';
        }

        if ( posts && posts.length === 0 ) {
            return 'No posts.';
        }

        const post = posts[0];

        return <a className={ className } href={ post.link }>{ post.title.rendered }</a>;
    } )
} );