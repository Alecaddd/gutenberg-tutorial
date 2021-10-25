import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, PanelRow, RadioControl } from "@wordpress/components";

import metadata from "./social-row-block.json";

const { name } = metadata;

export { metadata, name };

export const settings = {
	icon: "smiley",

	attributes: {
		accountType: {
			type: "string",
			default: "twitter",
		},
		twitter: {
			default: {
				text: "",
				account: "",
			},
		},
		tweet: {
			default: {
				text: "",
				message: "",
				url: "",
			},
		},
		youtube: {
			default: {
				text: "",
				url: "",
			},
		},
	},

	edit({ attributes, setAttributes }) {
		return (
            <div {...useBlockProps}>
                <InspectorControls style={{ marginBottom: "40px" }}>
                    <PanelBody>
                        <PanelRow>
                            <RadioControl
                                label="Social Media"
                                help="The type of social media to use"
                                selected={ attributes.accountType }
                                options={[
                                    { label: "Follow on Twitter", value: "twitter" },
                                    { label: "Share a Tweet", value: "tweet" },
                                    { label: "Subscribe on YouTube", value: "youtube" },
                                ]}
                                onChange={(value) => setAttributes({ accountType: value })}
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
                { attributes.accountType }
            </div>
        );
	},
	save() {
		return <div {...useBlockProps}></div>;
	},
};
