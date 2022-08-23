import { collectDefaultMetrics, Counter, register } from 'prom-client';

class Metrics {
  static collectDefaultMetrics = collectDefaultMetrics;

  static rando = new Counter({
    name: 'REPLACEME_rando',
    help: 'The total number of randos',
    labelNames: ['rando_label'],
  });

  static async metrics() {
    return register.metrics();
  }

  static nowMicro() {
    const [secs, nano] = process.hrtime();
    return Math.floor(secs * 1000000 + nano / 1000);
  }
}

Metrics.collectDefaultMetrics({ register });

export default Metrics;
