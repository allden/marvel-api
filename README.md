Marvel API
--------------------------

-- CHARACTERS<br/>
&nbsp;&nbsp;&nbsp;&nbsp;--CHARACTER<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--COMICS<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--SERIES<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--STORIES<br/>

-- COMICS <br/>
&nbsp;&nbsp;&nbsp;&nbsp;--COMIC<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--CHARACTERS<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--CREATORS<br/>

-- SERIES<br/>
&nbsp;&nbsp;&nbsp;&nbsp;--SERIES<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--CHARACTERS<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--CREATORS<br/>

-- STORIES<br/>
&nbsp;&nbsp;&nbsp;&nbsp;--STORY<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--CHARACTERS<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--CREATORS<br/>

-- CREATORS<br/>
&nbsp;&nbsp;&nbsp;&nbsp;--CREATOR<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--COMICS<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--SERIES<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--STORIES<br/>

--------------------------

I've performed the initial testing, all the endpoints should work.
All you have to do if you want to use it is you need to set the MARVEL_PUBLIC_KEY and MARVEL_PRIVATE_KEY environment variables either in dotenv or Heroku.