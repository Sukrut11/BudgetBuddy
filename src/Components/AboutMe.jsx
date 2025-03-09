import React from "react";

export default function AboutMe() {
    return (
        <div className="container max-w-2xl mx-auto p-6" style={{ marginTop: 70 }}>
            <p className="text-lg font-serif text-gray-800 leading-relaxed">
                <span className="block mb-2 font-semibold text-xl">Hey there, </span>
                I am <strong>Sukrut Mayekar</strong>, and I have brought to you another fun application.
                This is <strong>BudgetBuddy</strong>, your smart expense tracker. This web application is designed to help you track and manage your expenses efficiently. Whether you want to monitor your spending habits or categorize your expenses, BudgetBuddy makes it easy.
            </p>

            <h3 className="text-xl font-semibold mt-6 text-gray-900">How to use BudgetBuddy</h3>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                <li><strong>Open the Application:</strong> Navigate to the BudgetBuddy website.</li>
                <li><strong>Home Screen:</strong> You will see a clean interface with a form to input your expenses and options to manage them.</li>
            </ul>

            <h2 className="text-xxl font-semibold mt-6 text-gray-900">Adding an Expense</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                <li><strong>Enter Expense Name:</strong> Type the name of the expense (e.g. "1 Liter Milk").</li>
                <li><strong>Enter Expense Amount:</strong> Enter the amount spent.</li>
                <li><strong>Select Expense Category:</strong> Choose the appropriate category from the dropdown (e.g., Personal Expense, Food, Travel, etc.).</li>
                <li><strong>Select Expense Date:</strong> Pick the date of the expense from the date picker.</li>
                <li><strong>Click "Add Expense":</strong> Your expense will now be recorded and displayed in the expense list.</li>
            </ul>

            <h2 className="text-xxl font-semibold mt-6 text-gray-900">Managing Expenses</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                <li><strong>Removing an Expense:</strong> Click the "Remove Expense" button next to an entry to delete that expense permanently.</li>
                <li><strong>Filtering Expenses:</strong> Click "Filter Expense" and select a category from the dropdown to view only those expenses.</li>
                <li><strong>Clearing the Filter:</strong> Click "Clear Filter" to remove the applied filter and view all recorded expenses.</li>
            </ul>


            <h2 className="text-xl font-semibold mt-6">Viewing Your Expenses</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                <li>All expenses are displayed in a chronological order.</li>
                <li>The date of the expense is mentioned alongside each entry.</li>
                <li>The amount is displayed in bold for better visibility.</li>
                <li>Each expense has a color-coded category label.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Additional Features</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                <li><strong>User-Friendly Interface:</strong> Simple and intuitive design for hassle-free expense tracking.</li>
                <li><strong>Expense Categorization:</strong> Helps you analyze spending patterns.</li>
                <li><strong>Easy Expense Removal:</strong> Delete any unwanted expenses instantly.</li>
                <li><strong>Filter for Better Analysis:</strong> View specific expense categories quickly.</li>
            </ul>

            <p className="text-lg font-serif text-gray-800 leading-relaxed mt-6">
                BudgetBuddy helps you stay on top of your finances with ease. Keep adding and managing your expenses effectively to maintain financial control. I will keep adding more features to BudgetBuddy to make it even better!
            </p>

            <p className="text-lg font-serif text-gray-800 leading-relaxed mt-2">
                Also, I would love to collaborate with you on your project or startup! Feel free to reach out to me via the following platforms:
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

            Thank you for using BudgetBuddy! <p className="text-lg font-semibold text-gray-900 mt-2">Happy budgeting! 🎯</p>

            <p className="text-lg font-serif text-gray-800 leading-relaxed mt-4">
                <strong className="block font-semibold">Best Regards,</strong>
                <br />
                <strong className="block text-gray-900 font-bold text-xl">Sukrut Mayekar</strong>
            </p>
        </div>
    );
}