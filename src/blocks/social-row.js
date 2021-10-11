import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import metadata from "./social-row-block.json";

const { name } = metadata;

export { metadata, name };

const TEMPLATE = [
    ["core/columns", {}, [
        ["core/column", { templateLock: "all", width: "30%", verticalAlignment: "center" }, [
            ["core/image", { sizeSlug: "thumbnail" }]
        ]],
        ["core/column", { templateLock: "all" }, [
            ["core/button"]
        ]],
    ]]
];

export const settings = {
    icon: "smiley",
    edit() {
        return (
            <div {...useBlockProps}>
                <InnerBlocks template={TEMPLATE} templateLock="all" />
            </div>
        );
    },
    save() {
        return (
            <div {...useBlockProps}>
                <InnerBlocks.Content />
            </div>
        );
    }
}
