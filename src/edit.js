import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const MY_TEMPLATE = [
	["core/image", {}],
	["core/heading", { placeholder: "Giveaway Title" }],
	["core/paragraph", { placeholder: "Giveaway description" }],
	["create-block/alecaddd-giveaway-social-row"],
	["core/button", { placeholder: "Call to Action" }],
];

import './editor.scss';

export default function edit() {
	return (
		<div {...useBlockProps}>
			<InnerBlocks
				template={MY_TEMPLATE}
				allowedBlocks={["create-block/alecaddd-giveaway-social-row"]}
			/>
		</div>
	);
}
