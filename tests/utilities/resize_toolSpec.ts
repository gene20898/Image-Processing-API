import jasmine from 'jasmine';
import resize_img from '../../src/utilities/resize_tool';

describe('Test for image resizing function', () => {
  it('should return output img info', async() => {
    const result = await resize_img('fjord',200,200);
    expect(result).toEqual({
        'format': 'jpeg',
        'width': 200,
        'height': 200,
        'channels': 3,
        'premultiplied': false,
        'size': 6977
      });
  });
});
