export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Bachelor';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'BOP3000 1 Bach IT og inf.syst 23V Bø';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '(ﾉ*ФωФ)ﾉ彡┻━┻';

  return {
    name,
    blogTitle,
    footerText,
  };
};
