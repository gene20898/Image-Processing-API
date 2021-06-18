import jasmine from 'jasmine';
import resize_img from '../../src/utilities/resize_tool';

describe('Test for image resizing function', () => {
  it('should return output img info', async () => {
    const result = await resize_img('fjord', 200, 200);
    expect(result).toEqual('C:\\Users\\gene_\\Desktop\\img_API\\assets\\thumb\\fjord-resized-200x200.jpg');
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
