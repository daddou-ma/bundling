/* @flow */
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';

export const parseCode = (code: string): Object => (
  parse(code, {
    sourceType: 'module',
  })
);

export const selectImportNodes = (ast: Object): Array<Object> => {
  const array: Array<Object> = [];
  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      array.push(node);
    },
  });

  return array;
};

export const getImportPath = (node: Object): string => (
  node.source.value
);
