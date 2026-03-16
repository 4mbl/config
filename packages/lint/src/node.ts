import { defineConfig } from 'oxlint';
import base from './base.ts';

type NodeOptions = {};

// const DEFAULT_OPTIONS: NodeOptions = {};

export default function (_options?: Partial<NodeOptions>) {
  // const opts = { ...DEFAULT_OPTIONS, ...options };
  return defineConfig({
    extends: [base()],
  });
}
