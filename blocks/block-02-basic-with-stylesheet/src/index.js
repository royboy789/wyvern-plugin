import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'wyvern-plugin/block-02-basic-with-stylesheet', {
    title:      'Basic Example #2 - Adding Stylesheets',
    icon:       'smiley',
    category:   'layout',
    
    example:    {},
    
    edit( { className } ) {
        return <p className={ className }>Hello, World, again.</p>;
    },

    save() {
        return <p>Hello, World, again.</p>;
    },
} );