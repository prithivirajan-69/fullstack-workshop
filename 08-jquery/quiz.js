$(function () {

    // === Quiz Data (No AJAX) ===
    const quizData = [
        {
            id: 1,
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"
            ],
            correctAnswer: 0
        },
        {
            id: 2,
            question: "Inside which HTML element do we put the JavaScript?",
            options: [
                "<script>",
                "<js>",
                "<code>",
                "<javascript>"
            ],
            correctAnswer: 0
        },
        {
            id: 3,
            question: "What is CSS used for?",
            options: [
                "Styling web pages",
                "Adding logic to web pages",
                "Database management",
                "Server configuration"
            ],
            correctAnswer: 0
        }
    ];

    let current = 0;
    let answers = [];
    let timer;

    buildQuestionButtons();
    showQuestion();
    startTimer();

    function buildQuestionButtons() {
        $("#question-buttons").empty();
        quizData.forEach((q, i) => {
            $("#question-buttons").append(
                `<button class="q-btn" data-index="${i}">${i + 1}</button>`
            );
        });
    }

    function showQuestion() {
        let q = quizData[current];
        $("#progress-text").text(`Question ${current + 1} of ${quizData.length}`);
        $("#question-text").text(q.question);
        $("#options").empty();

        q.options.forEach((opt, i) => {
            $("#options").append(
                `<div class="option" data-index="${i}">${opt}</div>`
            );
        });

        highlightSelected();
        toggleNavButtons();
    }

    function highlightSelected() {
        $(".option").removeClass("selected");
        if (answers[current] !== undefined) {
            $(`.option[data-index="${answers[current]}"]`).addClass("selected");
        }
    }

    function toggleNavButtons() {
        $("#prev-btn").toggle(current > 0);
        $("#next-btn").toggle(current < quizData.length - 1);
        $("#submit-btn").toggle(current === quizData.length - 1);
    }

    $("#options").on("click", ".option", function () {
        answers[current] = parseInt($(this).data("index"));
        highlightSelected();
    });

    $("#next-btn").click(() => goToQuestion(current + 1));
    $("#prev-btn").click(() => goToQuestion(current - 1));

    $("#question-buttons").on("click", ".q-btn", function () {
        goToQuestion(parseInt($(this).data("index")));
    });

    $("#submit-btn").click(finishQuiz);

    $("#restart-btn").click(function () {
        answers = [];
        current = 0;
        $("#result-screen").hide();
        $("#quiz-screen").show();
        buildQuestionButtons();
        showQuestion();
        startTimer();
    });

    function goToQuestion(index) {
        current = index;
        showQuestion();
        resetTimer();
    }

    function startTimer() {
        clearInterval(timer);
        let timeLeft = 30;
        $("#timer").text(timeLeft + "s");

        timer = setInterval(() => {
            timeLeft--;
            $("#timer").text(timeLeft + "s");

            if (timeLeft <= 0) {
                clearInterval(timer);
                if (current < quizData.length - 1) {
                    goToQuestion(current + 1);
                } else {
                    finishQuiz();
                }
            }
        }, 1000);
    }

    function resetTimer() {
        startTimer();
    }

    function finishQuiz() {
        clearInterval(timer);
        $("#quiz-screen").hide();
        $("#result-screen").show();

        let score = 0;
        quizData.forEach((q, i) => {
            if (answers[i] === q.correctAnswer) score++;
        });

        $("#score-count").text(`${score}/${quizData.length}`);
        $("#score-percent").text(`${Math.round((score / quizData.length) * 100)}%`);

        $("#review").empty();
        quizData.forEach((q, i) => {
            $("#review").append(`
                <div>
                    <strong>Q${i + 1}:</strong> ${q.question}<br>
                    Your Answer: ${answers[i] !== undefined ? q.options[answers[i]] : "No answer"}<br>
                    Correct Answer: ${q.options[q.correctAnswer]}
                    <hr>
                </div>
            `);
        });
    }
});
