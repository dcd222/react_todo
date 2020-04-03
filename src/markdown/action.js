// action
export const mdText = 'mdText';

export function onChange(e) {
    return {
        type: mdText,
        payload: {
            value:e.target.value
        }
    }
}