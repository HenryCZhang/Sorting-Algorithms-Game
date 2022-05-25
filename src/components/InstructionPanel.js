import left_arrow from '../assets/svg/left-arrow.svg';
import right_arrow from '../assets/svg/right-arrow.svg';

export default function Footer(props) {

    const mergeSortDict = {
        1: [
            "Welcome to the Merge Sort Algorithm! Press 'start' to begin.",
            "A random unsorted list of ten numbers are generated. The following is the procedure of Merge Sort",
            "1. Split the array into two equal halves. (create two subsets from the original set)",
            "2. Repeat the same process and create more subsets",
            "3. When all numbers are in stand-alone subsets, the spliting process stops.",
            "4. Now, it's time to sort out the numbers in the order of minimum to maximum from left to right",
            "5. Compare the two adjacent numbers and merge the two subsets into one uion set with smaller number on the left",
            "6. Compare the two adjacent numbers and merge the two subsets into one uion set with smaller number on the left",
            "7. Continue the sorting and merging steps for the rest of the subsets, and finally merge all the subsets back into one sorted number set",
            "8. Congratulations, you have learnt Merge Sort Algorithm!"
        ],
        2: [
            "Welcome to the Merge Sort Algorithm! Press 'start' to begin.",
            "1. Now it's time to implement your knowledge of Merge Sort Algorithm!",
            "2. Split the unsorted number set into two subsets. (fill the blank with the correct numbers)",
            "3. Repeat the splitting process. (fill the blank with the correct numbers)",
            "4. Repeat the same steps until all numbers are in individual sets.",
            "5. Compare and merge the two adjacent numbers in the correct order.",
            "6. Continue the merging process.",
            "7. Fill out the final row and you will complete the merge sort process!"
        ],
        3: [
            "Hope you learned the Merge Sort Algorithm! Press 'start' to begin.",
            "You are on your own now. Good lucky!"
        ],
        4: [
            "Hope you learned the Merge Sort Algorithm! Press 'start' to begin.",
            "You are on your own now. Good lucky!"
        ],
        5: [
            "Hope you learned the Merge Sort Algorithm! Press 'start' to begin.",
            "You are on your own now. Good lucky!"
        ],
        6: ["Welcome to the Merge Sort Algorithm! Press 'start' to begin.",
            "A random unsorted list of five to eight numbers are generated, the following are the procedure of Merge Sorting.",
            "You are on your own now. Good lucky!"
        ]

    };

    const bubbleSortDict = {
        1: [
            "Welcome to the Bubble Sort Algorithm! Press 'start' to begin.",
            "A random unsorted list of ten numbers are generated, the following are the procedure of Merge Sorting",
            "Repeatedly swapping the adjacent numbers until they are in the correct order"
        ],
        2: [
            "Welcome to the Bubble Sort Algorithm! Press 'start' to begin.",
            "Repeatedly swapping the adjacent numbers until they are in the correct order"
        ],
        3: [
            "Hope you learned the Bubble Sort Algorithm! Press 'start' to begin.",
            "You are on your own now. Good lucky!"
        ],
        4: [
            "Hope you learned the Bubble Sort Algorithm! Press 'start' to begin.",
            "You are on your own now. Good lucky!"
        ],
        5: [
            "Hope you learned the Bubble Sort Algorithm! Press 'start' to begin.",
            "You are on your own now. Good lucky!"
        ],
        6: [
            "Welcome to the Bubble Sort Algorithm! Press 'start' to begin.",
            "A random unsorted list of five to eight numbers are generated, the following are the procedure of Bubble Sort.",
            "You are on your own now. Good lucky!"
        ]
    }

    const InstructionHelper = (currentAlgorithm, currentLevel, currentStep) => {
        let selectedDictionary = [];
        switch (currentAlgorithm) {
            case 'ms':
                selectedDictionary = mergeSortDict;
                break;
            case 'bs':
                selectedDictionary = bubbleSortDict;
                break;
            default:
                selectedDictionary = mergeSortDict;
        }

        let validIndex = 0;
        while (selectedDictionary[currentLevel][validIndex + 1] !== undefined) {
            validIndex++;
        }

        if (currentStep <= validIndex) {
            return selectedDictionary[currentLevel][currentStep];
        }
        return selectedDictionary[currentLevel][validIndex];
    }

    return (
        <div className="footer-container">
            <div className="footer-body">
                <div className="footer-navigator">
                    <div
                        className={`footer-navigator-button ${props.canPrev ? "" : "disabled"
                            }`}
                        onClick={props.canPrev ? props?.onPrevStep : () => { }}
                    >
                        <img
                            src={left_arrow}
                            alt="left-arrow"
                        />
                    </div>
                    <div
                        className={`footer-navigator-button ${props.canNext ? "" : "disabled"
                            }`}
                        onClick={props.canNext ? props?.onNextStep : () => { }}
                    >
                        <img
                            src={right_arrow}
                            alt="right-arrow"
                        />
                    </div>
                </div>
                <div className="footer-tips">
                    <p className="footer-tips-title">Steps:</p>
                    <div className="footer-tips-content">
                        <p>{InstructionHelper(localStorage.getItem("selectedAlgorithm"), props.currentLevel, props.currentStep)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


