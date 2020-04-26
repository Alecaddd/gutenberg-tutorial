const { registerBlockType } = wp.blocks;
const {
    RichText,
    InspectorControls,
    ColorPalette,
    MediaUpload,
    InnerBlocks,
    BlockControls,
    AlignmentToolbar
} = wp.editor;
const { PanelBody, IconButton, RangeControl } = wp.components;
const ALLOWED_BLOCKS = ['core/button'];

registerBlockType('alecaddd/custom-cta', {
    title: 'Call to Action',
    description: 'Block to generate a custom Call to Action',
    icon: 'format-image',
    category: 'layout',

    // custom attributes
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2'
        },
        titleColor: {
            type: 'string',
            default: 'black'
        },
        body: {
            type: 'string',
            source: 'html',
            selector: 'p'
        },
        alignment: {
            type: 'string',
            default: 'none',
        },
        backgroundImage: {
            type: 'string',
            default: null
        },
        overlayColor: {
            type: 'string',
            default: 'black'
        },
        overlayOpacity: {
            type: 'number',
            default: 0.3
        }
    },

    edit: ({ attributes, setAttributes }) => {
        const {
            title,
            body,
            alignment,
            titleColor,
            backgroundImage,
            overlayColor,
            overlayOpacity
        } = attributes;

        // custom functions
        function onChangeTitle(newTitle) {
            setAttributes( { title: newTitle } );
        }

        function onChangeBody(newBody) {
            setAttributes( { body: newBody } );
        }

        function onTitleColorChange(newColor) {
            setAttributes( { titleColor: newColor } );
        }

        function onSelectImage(newImage) {
            setAttributes( { backgroundImage: newImage.sizes.full.url } );
        }

        function onOverlayColorChange(newColor) {
            setAttributes( { overlayColor: newColor } );
        }

        function onOverlayOpacityChange(newOpacity) {
            setAttributes( { overlayOpacity: newOpacity } );
        }

        return ([
            <InspectorControls style={ { marginBottom: '40px' } }>
                <PanelBody title={ 'Font Color Settings' }>
                    <p><strong>Select a Title color:</strong></p>
                    <ColorPalette value={ titleColor }
                                  onChange={ onTitleColorChange } />
                </PanelBody>
                <PanelBody title={ 'Background Image Settings' }>
                    <p><strong>Select a Background Image:</strong></p>
                    <MediaUpload
                        onSelect={ onSelectImage }
                        type="image"
                        value={ backgroundImage }
                        render={ ( { open } ) => (
							<IconButton
								className="editor-media-placeholder__button is-button is-default is-large"
								icon="upload"
								onClick={ open }>
								 Background Image
							</IconButton>
                        )}/>
                    <div style={{ marginTop: '20px', marginBottom: '40px' }}>
                        <p><strong>Overlay Color:</strong></p>
                        <ColorPalette value={ overlayColor }
                                      onChange={ onOverlayColorChange } />
                    </div>
                    <RangeControl
                        label={ 'Overlay Opacity' }
                        value={ overlayOpacity }
                        onChange={ onOverlayOpacityChange }
                        min={ 0 }
                        max={ 1 }
                        step={ 0.01 }/>
                </PanelBody>
            </InspectorControls>,
            <div className="cta-container" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="cta-overlay" style={{background: overlayColor, opacity: overlayOpacity}}></div>
                {
                    <BlockControls>
                        <AlignmentToolbar value={ alignment }/>
                    </BlockControls>
                }
                <RichText key="editable"
                          tagName="h2"
                          placeholder="Your CTA Title"
                          value={ title }
                          onChange={ onChangeTitle }
                          style={ { color: titleColor } }/>
                <RichText key="editable"
                          tagName="p"
                          placeholder="Your CTA Description"
                          value={ body }
                          onChange={ onChangeBody }/>
                <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS }/>
            </div>,
        ]);
    },

    save: ({ attributes }) => {
        const {
            title,
            body,
            titleColor,
            backgroundImage,
            overlayColor,
            overlayOpacity
        } = attributes;

        return (
            <div className="cta-container" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="cta-overlay" style={{background: overlayColor, opacity: overlayOpacity}}></div>
                <h2 style={ { color: titleColor } }>{ title }</h2>
                <RichText.Content tagName="p"
                                  value={ body }/>
                <InnerBlocks.Content />
            </div>
        );
    }
});
