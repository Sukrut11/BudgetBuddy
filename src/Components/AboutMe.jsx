import React from "react";

export default function AboutMe() {
    return (
        <div className="max-w-2xl mx-auto px-8" style={{ marginTop: 70, paddingLeft: 115, paddingRight: 115 }}>
            <p className="text-lg font-serif text-gray-800 leading-relaxed">
                <span className="block mb-2 font-semibold text-xl">Hey there, </span>
                I am <strong>Sukrut Mayekar</strong>, the creator of this simple and intuitive expense tracker web application.
                As a passionate software engineer, I love building applications that make daily financial management effortless.
            </p>

            <p className="text-lg font-serif text-gray-800 leading-relaxed mt-4">
                While managing my own finances, I realized the importance of tracking expenses efficiently.
                So, I created <strong>BudgetBuddy</strong>, an easy-to-use expense tracker that helps users monitor their spending, 
                set budgets, and gain better control over their financial habits.
            </p>

            <h3 className="text-xl font-semibold mt-6 text-gray-900">How to Use BudgetBuddy</h3>

            <ul className="list-disc list-inside mt-3 text-lg text-gray-700 leading-relaxed">
                <li>
                    <strong>Adding an Expense:</strong> Enter the expense name, amount, and category, then click the
                    <span className="text-green-600 font-semibold"> Add Expense</span> button.
                </li>
                <li>
                    <strong>Viewing Expenses:</strong> Your expenses will be displayed in a categorized format,
                    helping you understand your spending patterns.
                </li>
                <li>
                    <strong>Filtering and Sorting:</strong> Easily filter expenses by date, category, or amount to track spending trends.
                </li>
                <li>
                    <strong>Removing an Expense:</strong> Click on the 
                    <span className="text-red-600 font-semibold"> Delete</span> button to remove an unwanted expense.
                    <br />
                    <span className="text-sm text-gray-500"><strong className="text-red-600">Note:</strong> This action cannot be undone!</span>
                </li>
                <li>
                    <strong>Clearing All Expenses:</strong> If you wish to start fresh, you can delete all expenses with the
                    <span className="text-red-600 font-semibold"> Clear All</span> button.
                    <br />
                    <span className="text-sm text-gray-500"><strong className="text-red-600">Note:</strong> This will permanently remove all recorded expenses.</span>
                </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 text-gray-900">How to Contact Me</h3>
            <p className="text-lg font-serif text-gray-800 leading-relaxed mt-2">
                I would love to hear your feedback or collaborate on exciting projects! Feel free to connect with me:
            </p>

            <ul className="mt-4 space-y-2 text-lg">
                <li>
                    📧 <strong>Email:</strong>{" "}
                    <a href="mailto:SukrutSwapnilMayekar@gmail.com" className="text-blue-600 hover:underline">
                        SukrutSwapnilMayekar@gmail.com
                    </a>
                </li>
                <li>
                    💼 <strong>LinkedIn:</strong>{" "}
                    <a href="https://www.linkedin.com/in/sukrutmayekar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        linkedin.com/in/sukrutmayekar
                    </a>
                </li>
                <li>
                    🖥️ <strong>GitHub:</strong>{" "}
                    <a href="https://github.com/Sukrut11" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        github.com/Sukrut11
                    </a>
                </li>
            </ul>

            <p className="text-lg font-serif text-gray-800 leading-relaxed mt-6">
                I will keep enhancing <strong>BudgetBuddy</strong> with more features to make personal finance tracking seamless.
                Thank you for using this app, and I hope it helps you achieve financial clarity!
            </p>

            <p className="text-lg font-serif text-gray-800 leading-relaxed mt-4">
                <strong className="block font-semibold">Best Regards,</strong>
                <br />
                <strong className="block text-gray-900 font-bold text-xl">Sukrut Mayekar</strong>
            </p>
        </div>
    );
}