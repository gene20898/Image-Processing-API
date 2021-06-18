import resize_img from '../../utilities/resize_tool';

describe('Test for image resizing function', () => {
  it('should return output img path', async () => {
    const result = await resize_img('fjord',400, 400);
    expect(result).toBe(
      'assets/thumb/fjord-resized-400x400.jpg'
    );
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
