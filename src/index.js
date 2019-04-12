const { registerBlockType } = wp.blocks;

registerBlockType('alecaddd/custom-cta', {
    title: 'Call to Action',
    description: 'Block to generate a custom Call to Action',
    icon: 'format-image',
    category: 'layout',

    // custom attributes
    attributes: {},

    // custom functions

    edit() {
        return <p>Edited</p>;
    },

    save() {}
});