import {
	PlainText,
	useBlockProps,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	RadioControl,
	Dashicon,
} from "@wordpress/components";

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
                { attributes.accountType == "twitter" && (
					<div>
						<Dashicon icon="twitter"/>
						<PlainText
							placeholder="Follow me on Twitter"
							value={ attributes.twitter.text }
							onChange={(value) => {
								setAttributes({
									twitter: { ...attributes.twitter, text: value },
								});
							}}
						/>
						<PlainText
							placeholder="Your Twitter account"
							value={ attributes.twitter.account }
							onChange={(value) => {
								setAttributes({
									twitter: { ...attributes.twitter, account: value },
								});
							}}
						/>
					</div>
				)}
                { attributes.accountType == "tweet" && (
					<Dashicon icon="twitter"/>
				)}
                { attributes.accountType == "youtube" && (
					<Dashicon icon="youtube"/>
				)}
            </div>
        );
	},
	save() {
		return <div {...useBlockProps}></div>;
	},
};
