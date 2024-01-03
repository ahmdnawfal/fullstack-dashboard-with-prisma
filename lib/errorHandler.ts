export const errorHandler = (error: any) => {
  switch (error.message) {
    case '\n' +
      'Invalid `prisma.user.create()` invocation:\n' +
      '\n' +
      '\n' +
      'Unique constraint failed on the constraint: `User_email_key`':
      return {
        title: 'Email already exists',
      };

    default:
      return {
        title: 'Something went wrong',
        description: `${error}`,
      };
  }
};
