import jasmine from 'jasmine';
import { stringify } from 'querystring';
import resize_img from '../../src/utilities/resize_tool';

describe('Test for image resizing function', () => {
  it('should return output img info', async () => {
    const result = await resize_img('fjord', 200, 200);
    expect(result).toEqual({
      format: 'jpeg',
      width: 200,
      height: 200,
      channels: 3,
      premultiplied: false,
      size: 6977,
    });
  });

  it('should return error message', async () => {
    let errorMessage = 'None';
    try {
      await resize_img('none', 200, 200);
    } catch (err) {
      errorMessage = err.message;
    }
    expect(errorMessage).toBe('Input file is missing');
  });
});
