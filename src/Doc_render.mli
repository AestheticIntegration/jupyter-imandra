
type 'a html = ([<Html_types.div] as 'a) Tyxml.Html.elt

val to_html : Imandra_lib.Document.t -> Html_types.div html

val mime_of_html : _ html -> Jupyter_kernel.Client.mime_data

