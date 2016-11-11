include FactoryGirl::Syntax::Methods

create(:quiz, content: 'How old is <script>alert("＼Akkariin／")</script>Akari?', correct_answer: 'thirteen')
create(:quiz, content: 'Which flavor of <b>Potate chips</b> does Akari like?', correct_answer: 'lightly salt')
create(:quiz, content: '<span style="background-color: red">How many members in Goraku-bu?</span>', correct_answer: 'four')
