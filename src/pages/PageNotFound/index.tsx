import DefaultPageTemplate from "templates/DefaultPageTemplate/DefaultPageTemplate";

const PageNotFoundView = () => {
  return (
    <DefaultPageTemplate crtOverlay={true}>
      <h1 className="title">Page not found</h1>
    </DefaultPageTemplate>
  );
};

export default PageNotFoundView;
