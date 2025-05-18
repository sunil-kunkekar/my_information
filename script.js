function showStep(stepNumber) {
    const sections = document.querySelectorAll(".step-section");
    sections.forEach(section => section.classList.add("hidden"));

    const currentStep = document.getElementById(`step${stepNumber}`);
    if (currentStep) {
        currentStep.classList.remove("hidden");
    }
}
