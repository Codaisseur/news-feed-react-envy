import React from 'react';
import $ from 'jquery';
import { mount,shallow } from 'enzyme';

import NewsItem from '../src/NewsItem.js';


describe('<NewsItem />', () => {
  it('renders renders a RaisedButton component when props are set', () => {
    const item = { author: "James Clear",
        categories: ["Entrepreneur", "Insider"],
        content: '<img src="http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2013/01/Cookies1-730x400.jpg" width="730" height="400"><br>In 2010, Thomas Thwaites decided he wanted to build a toaster from scratch. He walked into a shop, purchased the cheapest toaster he could find, and promptly went home and broke it down piece by piece. Thwaites had assumed the toaster would be a relatively simple machine. By the time he was finished deconstructing it, however, there were more than 400 components laid out on his floor. The toaster contained over 100 different materials with three of the primary ones being plastic, nickel, and steel. He decided to create the steel components first. After discovering that iron ore was required… <br><br><a href="http://thenextweb.com/entrepreneur/2016/09/01/dont-start-from-scratch/?utm_source=social&amp;utm_medium=feed&amp;utm_campaign=profeed">This story continues</a> at The Next Web',
        contentSnippet: "In 2010, Thomas Thwaites decided he wanted to build a toaster from scratch. He walked into a shop, purchased the cheapest ...",
        link: "http://thenextweb.com/entrepreneur/2016/09/01/dont-start-from-scratch/",
        publishedDate: "Thu, 01 Sep 2016 13:32:16 -0700",
        title: "Why you shouldn’t try to innovate anything from scratch"
    }

    var content = $("<div/>").html(item.content);
    var image = $("img", content).attr("src");

    const wrapper = shallow(<NewsItem  key={1}
                                     item={item}
                                     image={image}
                                     link={item.link} />);

    const linkButton = wrapper.find('RaisedButton');
    expect (linkButton.props().href).toBe("http://thenextweb.com/entrepreneur/2016/09/01/dont-start-from-scratch/")
  });
});



