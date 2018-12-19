import { defaultOptions } from './options';

describe('tooltip-default-options', () => {
    it('should have sensible default values', () => {
        const config = defaultTooltipOptions;

        expect(config.trigger).toBe('hover');
        expect(config.placement).toBe('top');
        expect(config.delay).toBe(0);
        expect(config['show-delay']).toBe(0);
        expect(config['hide-delay']).toBe(300);
        expect(config['hide-delay-mobile']).toBe(1500);
        expect(config['z-index']).toBe(0);
        expect(config['animation-duration']).toBe(300);
        expect(config['animation-duration-default']).toBe(300);
        expect(config['tooltip-class']).toBe('');
        expect(config['display-mobile']).toBeTruthy();
        expect(config.display).toBeTruthy();
        expect(config.shadow).toBeTruthy();
        expect(config.theme).toBe('dark');
        expect(config['max-width']).toBe('');
        expect(config.offset).toEqual(8);
        expect(config.id).toBeFalsy();
        expect(config['value-type']).toBe('text');
    });
});
