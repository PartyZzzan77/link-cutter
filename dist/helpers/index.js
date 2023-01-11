import chalk from 'chalk';
export const logOK = (msg) => chalk.bgGreen.white(msg);
export const logError = (msg) => chalk.bgRed.white(msg);
