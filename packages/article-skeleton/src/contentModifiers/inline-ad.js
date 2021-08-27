const insertInlineAd = children => {
  const clonedChildren = [...children];
  const child = clonedChildren.find(item => item.name === "paywall");
  const paragraph = clonedChildren.filter(item => item.name === "paragraph");

  if (!child) {
    return clonedChildren;
  }

  const paywallChildren = child.children;
  const paywallParagraphs = paywallChildren
    .map((item, index) => ({ ...item, index }))
    .filter(item => item.name === "paragraph");
  const paraPostition = [13, 20, 27];

  paraPostition.map((item, i) => {
    const inlineAdPos = paywallParagraphs[item - paragraph.length]
      ? paywallChildren.splice(
          paywallParagraphs[item - paragraph.length]?.index + i,
          0,
          {
            name: `inlineAd${i + 1}`,
            children: []
          }
        )
      : null;

    return inlineAdPos;
  });

  return clonedChildren;
};

export default insertInlineAd;