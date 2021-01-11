/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {
	return (
		<div>
			<RichText.Content
				tagName="h2"
				value={ props.attributes.title }
				style={{ color: props.attributes.titleColor }}
			/>
			<RichText.Content
				tagName="p"
				value={ props.attributes.description }
				style={{ color: props.attributes.descriptionColor }}
			/>
		</div>
	);
}
