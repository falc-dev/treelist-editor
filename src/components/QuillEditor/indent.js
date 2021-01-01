import { Quill } from 'react-quill';
const Parchment = Quill.import("parchment")

class IdentAttributor extends Parchment.Attributor.Style {
    add(node, value) {
        if (value === '+1' || value === '-1') {
            let indent = this.value(node) || 0;
            value = (value === '+1' ? (indent + 1) : (indent - 1));
        }
        if (value === 0) {
            this.remove(node);
            return true;
        } else {
            return super.add(node, `${value}em`);
        }
    }

    canAdd(node, value) {
        return super.canAdd(node, value) || super.canAdd(node, parseInt(value));
    }

    value(node) {
        let val = super.value(node);
        let m = val.match(/\d+(\.\d*)?/);
        return parseInt(m[0]) || undefined;  // Don't return NaN
    }
}

let IndentStyle = new IdentAttributor('indent', 'padding-left', {
    scope: Parchment.Scope.BLOCK,
    whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});

export default IndentStyle;