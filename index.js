function introduction(name) {
   return (`Hi, my name is ${name}.`);
  }
  introduction("Victor");

  function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }
  introductionWithLanguage(Victor, "") ;

  function introductionWithLanguageOptional(name, language="JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }
  introductionWithLanguageOptional(Victor, Javascript) ;