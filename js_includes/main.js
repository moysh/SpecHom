PennController.SetCounter("counter","inc", 1)
// check
PennController.ResetPrefix(null)
Sequence("counter", "welcome" , rshuffle("Hom","Neg_dist","Neg_coll") , "send" , "final" )
newTrial( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>In this survey, you will be asked to give some truth value judgemnets.</p>")
    ,
    newText("<p>Please enter your name and then click the button below to start the survey.</p>")
    ,
    newTextInput("inputID")
        .print()
    ,
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .global()
        .set( getTextInput("inputID") )
)
.log( "ID" , getVar("ID") )

Template(
      GetTable( "fulldesign.csv" )
        .filter( "Test" , /Hom/ )  // 'ButtonText' should contain 'second'
    ,    
  row => newTrial( "Hom",
    newText(row.Context)
        .print()
    ,
    newCanvas("empty canvas", 1, 40)
        .print()
    ,
    newText("<p>Does the following sentence have a reading which is true in this context?</p>")
        .print()
    ,
    getCanvas("empty canvas", 1, 40)
        .print()
    ,
    newText(row.Sentence_pos)
        .print()
    ,
    getCanvas("empty canvas", 1, 40)
        .print()
    ,
    newScale("scale_pos", 2)
        .before( newText("left", "  Yes  ") )
        .after( newText("right", "  No  ") )
        .print()
        .wait()
    ,
    getScale("scale_pos")
        .log()
    ,
    newText("<p>Does the following sentence have a reading which is true in this context?</p>")
        .print()
    ,
    getCanvas("empty canvas", 1, 40)
        .print()
    ,
    newText(row.Sentence_neg)
        .print()
    ,
    getCanvas("empty canvas", 1, 40)
        .print()
    ,
    // newKey("yn")
    //     .log()
    //     .wait()
    // ,    
    newScale("scale_neg", 2)
        .before( newText("left", "  Yes  ") )
        .after( newText("right", "  No  ") )
        .print()
        .wait()
    ,
    getScale("scale_neg")
        .log()
    ,
    newButton("validation", "Continue")
        .print()
        .wait()

  )
  .log( "ID"     , getVar("ID")    )
  .log( "Pred_type"   , row.Pred_type   )
)

Template(
      GetTable( "fulldesign.csv" )
        .filter( "Test" , /Neg dist/ )  // 'ButtonText' should contain 'second'
    ,    
  row => newTrial( "Neg_dist",
    newText(row.Context)
        .print()
    ,
    newCanvas("empty canvas", 1, 40)
        .print()
    ,
    newText("<p>Does the following sentence have a reading which is true in this context?</p>")
        .print()
    ,
    getCanvas("empty canvas", 1, 40)
        .print()
    ,
    newText(row.Sentence_neg)
        .print()
    ,
    getCanvas("empty canvas", 1, 40)
        .print()
    ,
    newScale("scale", 2)
        .before( newText("left", "  Yes  ") )
        .after( newText("right", "  No  ") )
        .print()
        .wait()
    ,
    getScale("scale")
        .log()
    ,
    newButton("validation", "Continue")
        .print()
        .wait()

  )
  .log( "ID"     , getVar("ID")    )
  .log( "Pred_type"   , row.Pred_type   )
)



Template(
      GetTable( "fulldesign.csv" )
        .filter( "Test" , /Neg coll/ )  // 'ButtonText' should contain 'second'
    ,    
  row => newTrial( "Neg_coll",
    newText(row.Context)
        .print()
    ,
    newCanvas("empty canvas", 1, 40)
        .print()
    ,
    newText("<p>Does the following sentence have a reading which is true in this context?</p>")
        .print()
    ,
    getCanvas("empty canvas", 1, 40)
        .print()
    ,
    newText(row.Sentence_neg)
        .print()
    ,
    getCanvas("empty canvas", 1, 40)
        .print()
    ,
    newScale("scale", 2)
        .before( newText("left", "  Yes  ") )
        .after( newText("right", "  No  ") )
        .print()
        .wait()
    ,
    getScale("scale")
        .log()
    ,
    newButton("validation", "Continue")
        .print()
        .wait()

  )
  .log( "ID"     , getVar("ID")    )
  .log( "Pred_type"   , row.Pred_type   )
)

SendResults( "send" )
newTrial( "bye" ,
    newText("<p>Thank you for your participation!</p>")
        .print()
        .wait()
)
