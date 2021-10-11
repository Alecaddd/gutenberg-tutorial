import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save( props ) {
	return (
		<div {...useBlockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
