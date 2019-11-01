import React from "react";
import Comment from "./Comment"
import Card from "./Card"
import faker from "faker";


const App = () => 
{
    return(
        <div>
            <Card>
                <Comment author="Alex" date="29/10/2019 9:30 AM" image={faker.image.avatar()} text="This is idiot" />
            </Card>

            <Card>
                <Comment author="Derek" date="28/10/2019 9:30 AM" image={faker.image.avatar()} text="This is Cool" />
            </Card>

            <Card>
                <Comment author="David" date="02/01/1994 2:02 AM" image={faker.image.avatar()} text="Happy Birthday" />
            </Card>

            <Card>
                <Comment author="Jodie" date="01/01/1932 4:00 AM" image={faker.image.avatar()} text="Jodie!" />
            </Card>

            <Card>
                <Comment author="Aidan" date="11/11/2011 00:00 AM" image={faker.image.avatar()} text="American" />
            </Card>
        </div>
    )
}

export default App