<h2 class="blog-title">My daily struggle to answer pandas questions</h2>

I use [Discord](https://discord.com) a lot. Occassionally for gaming, mostly for programming.

My biggest _and possibly favourite_ time sink on Discord is [PyDis](https://discord.gg/python), the Python Discord server. Just over 350k members, it's pretty much the premiere gathering spot for Python enthusiasts, ranging from beginners to CPython Core devs. It's a nice hangout.

The core feature of the server is the help system the staff have built over the years. Tons of channels cycling in and out of availability for people to claim for their python-related software questions exclusively. Getting help with your python woes is a seamless experience for both helper and helpee.

Now to the topic of the blog post!

Whenever I'm bored, especially whevever I'm bored _at work_, I like to venture into the help channels and assist where I can. It ain't much, but it's honest work.

Python is a dominant force in data analysis and that status is primarily credited to one package, [**pandas**](https://pandas.pydata.org/). For anyone unfamiliar, pandas is a ginormously powerful data manipulation package and pretty much ubiquitous in the data analysis and engineering line of work. It provides multiple objects to help you create data series and tables and makes transformations on these objects incredibly easy, simple and fast. **pandas** questions in the PyDis help channels are a common sight for this very reason.

The **pandas** core data structure is the [DataFrame](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html#pandas.DataFrame), a structure to manipulate tabular data. Think Excel worksheet. But also, forget Excel because this is just so much better.

The DataFrame is backed by [numpy](https://numpy.org/) arrays, which do a whole lot of magic behind the scenes to bring you the wonderful concept of vectorization and speeds far surpassing pure Python implementations.

To create a DataFrame, import the class, create an instance and finally pass it some data.

<pre><code class="language-python">
import pandas as pd

df = pd.DataFrame({"name":["alex", "james", "sarah"], "ages":[26, 18, 24]})

df
    name   ages
0   alex     26
1  james     18
2  sarah     24
</code></pre>

Fairly simple, yes?

No. The overwhelming majority of **pandas** questions come from being stuck on a real life project, not some hypothetical on DataFrame operations. Data comes from the internet, a CSV file, a database, all sorts of places, people don't hardcode DataFrames into their code.

Something like the follow looks much closer to reality,

<pre><code class="language-python">
import pandas as pd

df = pd.read_csv("path/to/some/data/file")
# bajillion columns and thousands of rows moment 
</code></pre>

Here lies the issue. How do you even begin to mock a DataFrame with possibly hundreds of columns and thousands of rows? It feels so much like an entire exercise in itself just to produce a mock of similar shape and content that I've started skipping **pandas** questions because I know my brain would fry trying to come up with some test data.

Skipping questions because they're cumbersome isn't the most polite thing I could be doing however, so we're here today to try to tackle this issue and pad GitHub stats all in one move. :^)

We launch our trusty terminal, start a project somewhere and then open that project with VSCode.

We're going to make use of **pandas** to create our mocked DataFrame and [**faker**](https://github.com/joke2k/faker) to quickly pump out randomly generated data for it.

<span style="font-size:0.8em;color:#3f3f3f;">_mockframe/core.py_</span>

<pre><code class="language-python">
import typing

import pandas
import faker
from faker.providers import python

T = typing.TypeVar("T")
Shape = dict[str, T]

fake = faker.Faker()
fake.add_provider(python)
</code></pre>

_faker.providers.python_ gives us access to a few Python specific functions. <span class="inline-code-block">T = typing.TypeVar("T")</span>
allows us to declare a generic type T, we're going to use it to annotate our functions in a bit.

Let's define a simple interface and implementation for this module with 2 functions, one to act as our DataFrame mocking function and the other one to help generate the columns of data for each data type.

<pre><code class="language-python">
def MockFrame(shape: Shape, rows: int = 100) -> pandas.DataFrame:
    cols = {heading: mock_column(type_, rows) for heading, type_ in shape.items()}

    df = pandas.DataFrame(cols)
    return df

def mock_column(data_type: T, length: int) -> list[T]:
    col = fake.pylist(length, False, data_type)
    return col
</code></pre>

Both functions are really simple, <span class="inline-code-block">MockFrame</span> accepts any object satisfying the Shape alias (<span class="inline-code-block">dict[str, T]</span>), which is a dictionary with string keys and generic values. Let's try out this preliminary implementation.

<pre><code class="language-python">
shape: Shape = {"name": str, "age": int}
print(MockFrame(shape, rows=10))
</code></pre>

Running the code yields,

<pre><code class="language-python noLineNums">
➜ py -m mockframe.core
                   name   age
0  SZJNtJgcAFHKsccrNgAo  2445
1  hBdXhXovJtxjKgPlSrmT  4440
2  bXkVHRqXxBbFJMyGHrtj  7407
3  xZVaFALRDTgxgtAhqwnl   957
4  gXmstUYFptrbiMeuZGFw  8056
5  FDxoRCEpvfcQfcggzTQq  9873
6  zZCzAOXKDbUTbAabLOpx  6657
7  VikJFcltjlGmdnrFldQj  9488
8  iHwezoihgVFKmHDmIDIN  1774
9  bACHFUeLxFRooSWHtwvr  4879
</code></pre>

Nice! We can now generate DataFrames with random data by only declaring the shape of our data and **faker** does the rest. This is far from perfect however, I personally don't know anyone named "SZJNtJgcAFHKsccrNgAo" or ever heard of a 4440 year old person outside of the Natural History museum. **faker** let's us generate realistic looking data, so let's improve our project a bit by creating alias for **faker** types.

<span style="font-size:0.8em;color:#3f3f3f;">_mockframe/provider.py_</span>

<pre><code class="language-python">
import datetime
from typing import Callable
from dataclasses import dataclass

import faker
from faker.providers import python as faker_python, person, date_time

fake = faker.Faker()
fake.add_provider(faker_python)
fake.add_provider(person)
fake.add_provider(date_time)

@dataclass
class Types:
    Name: str = fake.name
    Address: str = fake.address
    Date: datetime.datetime = fake.date_object
    Age: Callable = lambda: fake.unique.random_int(min=1, max=110)
</code></pre>

We also need to change the <span class="inline-code-block">mock_column</span> function to accommodate the ugly hack I had to do for the <span class="inline-code-block">Types.Age</span> type.

<span style="font-size:0.8em;color:#3f3f3f;">_mockframe/provider.py_</span>

<pre><code class="language-python">
from mockframe.provider import fake, Types

...

def mock_column(t: T, length: int) -> dict[str, list[T]]:
    try:
        col = fake.pylist(length, False, t)
    except AttributeError:
        col = [t() for _ in range(length)]

    return col
</code></pre>

Finally, we need to change the code that calls MockFrame to make use of these new types.

<pre><code class="language-python">
shape: Shape = {
    "name": Types.Name,
    "age": Types.Age,
    "date": Types.Date,
    "home": Types.Address,
}
print(MockFrame(shape, rows=10))
</code></pre>

Run the new code!

<pre><code class="language-python noLineNums">
➜ py -m mockframe.core
                name  age        date                                               home
0  Cameron Contreras  104  1981-05-14  0470 Walker Flats Suite 215\nNorth Maureenport...
1       Steven White   23  1978-03-23       82228 Long Coves\nPort Tabithaport, PA 94573
2      Robert Hanson    9  1978-01-29   689 Nicole Light Apt. 001\nStevenhaven, NM 27075
3     Connie Johnson   12  1975-09-24                          USNS Miller\nFPO AE 05821
4      Daniel Pierce   64  1985-06-14  31265 Dustin Plains Suite 080\nEast Beckyhaven...
5     Christina Love   51  2001-09-13          0151 Alexandria Ways\nJonesport, KS 43736
6    Daniel Marshall    2  2014-11-02  77322 Miller Underpass Apt. 773\nAndreland, VA...
7     Lisa Patterson   39  1978-12-16             9021 Carol Roads\nHesterfurt, KY 08259
8    Travis Oconnell   33  1987-08-09         5127 Lopez Turnpike\nCrosbyville, ID 73102
9         Lori White  100  2016-10-02           86176 Davis Manor\nCynthiatown, NJ 27288
</code></pre>

---

A few last thoughts.

The code is working reasonably well for a half hour side-thought yet there's one more thing we could do to improve it before calling it a day.

If we run the following code block we'll see what the problem is.

<pre><code class="language-python">
import mockframe as mf
df = mf.MockFrame(
    {
        "name": mf.Types.Name,
        "address": mf.Types.Address,
        "age": mf.Types.Age,
    }
)
print(df.dtypes)
# name       object
# address    object
# age         int64
# dtype: object
</code></pre>

A minor issue but an issue nonetheless, we want our DataFrame to have the proper types and not some generic <span class="inline-code-block">object</span> type. Fixing this issue is actually a really simple change to our code,

<pre><code class="language-python">
def MockFrame(shape: Shape, rows: int = 100) -> pandas.DataFrame:
    data = {heading: mock_column(col, rows) for heading, col in shape.items()}

    df = pandas.DataFrame(data)
    return df.convert_dtypes() # <--- convert_dtypes() automatically converts our columns 
</code></pre>

Double-checking with the same piece of code as above...

<pre><code class="language-python">
import mockframe as mf
df = mf.MockFrame(
    {
        "name": mf.Types.Name,
        "address": mf.Types.Address,
        "age": mf.Types.Age,
    }
)
print(df.dtypes)
name       string
address    string
age         Int64
dtype: object
</code></pre>

Hurray, one step closer to an actual workable package!

Next step, sneaking the package into the PyDis sandboxed code eval bot.

<!-- pan-duh! -->
