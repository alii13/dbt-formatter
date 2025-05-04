import { default as format } from '../src/dbt-formatter';
import { commentFollowedByComma } from './fixtures/queries';

describe('Edge Cases', () => {
  it('correctly formats comments followed by comma', () => {
    const { input, result } = commentFollowedByComma;
    const formatted = format(input);
    expect(formatted).toEqual(result);
  });
}); 