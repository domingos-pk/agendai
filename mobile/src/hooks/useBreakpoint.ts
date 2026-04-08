import { useWindowDimensions } from 'react-native';

export const useBreakpoint = () => {
    const { width } = useWindowDimensions();

    // Definição de Breakpoints comuns
    const isSmallPhone = width < 380;
    const isTablet = width >= 600;
    const isDesktop = width >= 1024; // Para uso futuro ou Web

    // Lógica específica para os grids do Agendai
    const numColumns = width > 700 ? 3 : 2;

    return {
        width,
        isSmallPhone,
        isTablet,
        isDesktop,
        numColumns,
        // Helper para layouts de grid (padding 20, gap 16)
        getCardWidth: (padding = 20, gap = 16) => (width - (padding * 2) - (gap * (numColumns - 1))) / numColumns,
    };
};