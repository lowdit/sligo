module github.com/lowdit/sligo/exampleSite

go 1.20

require (
	github.com/lowdit/minigo v0.5.0 // indirect
	github.com/lowdit/sligo v0.3.1 // indirect
)

// CI Pages : thème Sligo = checkout courant (favicons, assets module).
replace github.com/lowdit/sligo => ../
