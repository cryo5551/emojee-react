import { useState, useEffect } from 'react';
import emojee from '../EmojiList';

const Main = _ =>{
    const [list, setList] = useState(emojee);
    const [keyword, setKeywords] = useState("");

    const filter = (e) =>{
        const value = e.target.value;
        setKeywords(value);
    }

    useEffect( _ => {
        // console.log(`keyword -> ${keyword}`);
        const filterd = emojee.filter((emoji) => {
            if(emoji.description.startsWith(keyword)) return true;
            if(emoji.category.startsWith(keyword)) return true;
            if(emoji.aliases.some(e => e.startsWith(keyword))) return true;
            else return false;
        });
        setList(filterd);
        // console.log(filterd);
    },[keyword]);

    return (
        <main className="main">
            <searchbar>
            <input type="text" placeholder= "find 🔎" onKeyUp={filter} id="ipt"/>
            {/* <p>{keyword}</p> */}
            <hr/>
            </searchbar>
            <section id='emoji'>
                {(list.length ===0 )? (<h2>No Emoji Found</h2>) :( 
                list.map((singleEmoji, idx) => {
                    return(
                        <span  key ={idx} className="item">{list[idx].emoji}</span>
                    )
                }))}
            </section>
        </main>
    );
}

export default Main;