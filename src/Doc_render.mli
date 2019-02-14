
type 'a html = ([> Html_types.div] as 'a) Tyxml.Html.elt

val to_html : Imandra_lib.Document.t -> Html_types.div html

val alternatives : (string * [< Html_types.div_content_fun] Tyxml.Html.elt) list -> _ html

val html_of_verify_result : Imandra_lib.Top_result.verify_result -> Html_types.div html

val html_of_instance_result : Imandra_lib.Top_result.instance_result -> Html_types.div html
