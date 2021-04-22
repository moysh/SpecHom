PennController.SetCounter("counter","inc", 1)
PennController.ResetPrefix(null)
Sequence("counter", "welcome" ,          "Hom","Neg_dist","Neg_coll","Ellipsis","Cumulative",             "send" , "final" )
// Sequence("counter", "welcome" , "Hom","Neg_dist","Neg_coll","Ellipsis","Cumulative" , "send" , "final" )
newTrial( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>In this experiment, you will be asked to provide your intuitions for some sentences.</p>")
    ,
    newText("<p>In most questions you will be given a context and asked to evaluate whether one or two sentences are true in this context. <br>In others you will be asked whether you can deduce one sentence from another sentence.</p>")
    ,
    newText("<p>Please enter your name and then click the button below to start the experiment.</p>")
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
    newText("<p><b>Context</b>: "+row.Context+"</p>")
        .print()
    ,
    newText("<p>Can you understand the following sentence as true in this context?</p>")
        .print()
    ,
    newText("<p><b>"+row.Sentence_pos+"</b>.</p>")
        .print()
    ,
    newScale("scale_pos", 2)
        .before( newText("left", "  No  ") )
        .after( newText("right", "  Yes  ") )
        .print()
        .wait()
    ,
    getScale("scale_pos")
        .log()
    ,
    newText("<p>Can you understand the following sentence as true in this context?</p>")
        .print()
    ,
    newText("<p><b>"+row.Sentence_neg+"</b>.</p>")
        .print()
    ,
    // newKey("yn")
    //     .log()
    //     .wait()
    // ,    
    newScale("scale_neg", 2)
        .before( newText("left", "  No  ") )
        .after( newText("right", "  Yes  ") )
        .print()
        .wait()
    ,
    getScale("scale_neg")
        .log()
    // ,
    // newButton("validation", "Continue")
    //     .print()
    //     .wait()
    ,
    newText("<p>Comments (if you have any):</p>")
        .print()
    ,
    newTextInput("Comments")
        .print()
    ,
    newButton("Continue")
        .print()
        .wait()
    ,
    getTextInput("Comments") 
        .log()
  )
  .log( "ID"     , getVar("ID")    )
  .log( "Pred_type"   , row.Pred_type   )
)

Template(
      GetTable( "fulldesign.csv" )
        .filter( "Test" , /Neg dist/ )  // 'ButtonText' should contain 'second'
    ,    
  row => newTrial( "Neg_dist",
    newText("<p><b>Context</b>: "+row.Context+"</p>")
        .print()
    ,
    newText("<p>Can you understand the following sentence as true in this context?</p>")
        .print()
    ,
    newText("<p><b>"+row.Explicit+"</b>.</p>")
        .print()
    ,
    newScale("scale_exp", 2)
        .before( newText("left", "  No  ") )
        .after( newText("right", "  Yes  ") )
        .print()
        .wait()
    ,
    getScale("scale_exp")
        .log()
    ,
    newText("<p>Can you understand the following sentence as true in this context?</p>")
        .print()
    ,
    newText("<p><b>"+row.Sentence_neg+"</b>.</p>")
        .print()
    ,
    newScale("scale_tar", 2)
        .before( newText("left", "  No  ") )
        .after( newText("right", "  Yes  ") )
        .print()
        .wait()
    ,
    getScale("scale_tar")
        .log()
    // ,
    // newButton("validation", "Continue")
    //     .print()
    //     .wait()
    ,
    newText("<p>Comments (if you have any):</p>")
        .print()
    ,
    newTextInput("Comments")
        .print()
    ,
    newButton("Continue")
        .print()
        .wait()
    ,
    getTextInput("Comments") 
        .log()
  )
  .log( "ID"     , getVar("ID")    )
  .log( "Pred_type"   , row.Pred_type   )
)



Template(
      GetTable( "fulldesign.csv" )
        .filter( "Test" , /Neg coll/ )  // 'ButtonText' should contain 'second'
    ,    
  row => newTrial( "Neg_coll",
    newText("<p><b>Context</b>: "+row.Context+"</p>")
        .print()
    ,
    newText("<p>Can you understand the following sentence as true in this context?</p>")
        .print()
    ,
    newText("<p><b>"+row.Explicit+"</b>.</p>")
        .print()
    ,
    newScale("scale_exp", 2)
        .before( newText("left", "  No  ") )
        .after( newText("right", "  Yes  ") )
        .print()
        .wait()
    ,
    getScale("scale_exp")
        .log()
    ,
    newText("<p>Can you understand the following sentence as true in this context?</p>")
        .print()
    ,
    newText("<p><b>"+row.Sentence_neg+"</b>.</p>")
        .print()
    ,
    newScale("scale_tar", 2)
        .before( newText("left", "  No  ") )
        .after( newText("right", "  Yes  ") )
        .print()
        .wait()
    ,
    getScale("scale_tar")
        .log()
    // ,
    // newButton("validation", "Continue")
    //     .print()
    //     .wait()
    ,
    newText("<p>Comments (if you have any):</p>")
        .print()
    ,
    newTextInput("Comments")
        .print()
    ,
    newButton("Continue")
        .print()
        .wait()
    ,
    getTextInput("Comments") 
        .log()
  )
  .log( "ID"     , getVar("ID")    )
  .log( "Pred_type"   , row.Pred_type   )
)

Template(
      GetTable( "fulldesign.csv" )
        .filter( "Test" , /Ellipsis/ )  // 'ButtonText' should contain 'second'
    ,    
  row => newTrial( "Ellipsis",
    newText("<p><b>Context</b>: "+row.Context+"</p>")
        .print()
    ,
    newText("<p>How natural do you find the following sentence as a description of this context?</p>")
        .print()
    ,
    newText("<p><b>"+row.Sentence_pos+"</b>.</p>")
        .print()
    ,
    newScale("scale", 7)
        .before( newText("left", "  Completely unnatural  ") )
        .after( newText("right", "  Completely natural  ") )
        .print()
        .wait()
    ,
    getScale("scale")
        .log()
    // ,
    // newButton("validation", "Continue")
    //     .print()
    //     .wait()
    ,
    newText("<p>Comments (if you have any):</p>")
        .print()
    ,
    newTextInput("Comments")
        .print()
    ,
    newButton("Continue")
        .print()
        .wait()
    ,
    getTextInput("Comments") 
        .log()
  )
  .log( "ID"     , getVar("ID")    )
  .log( "Pred_type"   , row.Pred_type   )
)

Template(
      GetTable( "fulldesign.csv" )
        .filter( "Test" , /Cumulative/ )  // 'ButtonText' should contain 'second'
    ,    
  row => newTrial( "Cumulative",
    newText("<p>Suppose you know that the following sentence is true:</p><p><b>"+row.Context+"</b></p>")
        .print()
    ,
    newText("<p>Does it follow from that that the following sentence is also true?</p>")
        .print()
    ,
    newText("<p><b>"+row.Sentence_pos+"</b>.</p>")
        .print()
    ,
    newScale("scale", 2)
        .before( newText("left", "  Doesn't follow  ") )
        .after( newText("right", "  Follows  ") )
        .print()
        .wait()
    ,
    getScale("scale")
        .log()
    // ,
    // newButton("validation", "Continue")
    //     .print()
    //     .wait()
    ,
    newText("<p>Comments (if you have any):</p>")
        .print()
    ,
    newTextInput("Comments")
        .print()
    ,
    newButton("Continue")
        .print()
        .wait()
    ,
    getTextInput("Comments") 
        .log()
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
