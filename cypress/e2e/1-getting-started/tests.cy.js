describe('checks home', () => {
  beforeEach(() => {
    // after starting the app
    // visit the base url || home page
    cy.visit('http://localhost:3000/')
  })

  it("contains header title", () => {
    // checks if the header title exists
    cy.get('h1').should('contains.text',"movies")
  })

  it('input tag should be empty', () => { 
    // checks if the input tag is empty
    cy.get('input').should('contains.text', '')
  })

  it('displays no previous queries by defaults', () => {
    // checks if the previous querys are empty 
    cy.get('#query-not').should('contains.text', 'No Previous Search')
  })

  it('searchs for a new movie', () => {
    // We'll store our item text in a variable so we can reuse it
    // Type a search query into the input field
    const movieTitle = "Dune"
    cy.get('input').type(`${movieTitle}`)

    // Verify that the input value matches what was typed
    cy.get("#default-search").should("have.value", movieTitle);

    // Trigger the onChange event (assuming it's bound correctly)
    cy.get("#default-search").trigger("change");

    cy.get("button[type='submit']").click();
    cy.wait(5000)
  })

  it("displays correct placeholder text", () => {  
    // Verify the placeholder text
    cy.get("#default-search").should(
      "have.attr",
      "placeholder",
      "Search Movies..."
    );
  });

  context('with a checked task', () => {
    beforeEach(() => {
      const movieTitle = "Dune"
      cy.get('input').type(`${movieTitle}`)
  
      // Verify that the input value matches what was typed
      cy.get("#default-search").should("have.value", movieTitle);
      cy.get("#default-search").trigger("change");
  
      cy.get("button[type='submit']").click();
      cy.wait(5000)
    })

    it('it stores last searches in the list', () => {

      // check if it stores the newly searched item on the screen
      cy.get('div').should('contains.text', 'Dune')

      cy.contains('No Previous Search').should("not.exist")
    })

    it('Search for multiple items sequentially', () => {

      const movieTitleList = ["Dune", "After", "ALl", "God", "Dune"]

      movieTitleList.forEach((state) => {
        cy.get('input').type(`${state}`)
        cy.get("button[type='submit']").click();
        cy.wait(5000)
      })

      cy.wait(2000)
    })

    it('Go to detail Page & go back to home Page',() => {
      // it should visit the details page for more info and return to the home Page
      cy.get('#details-button').click()
      cy.url().should('include', '/details');
      cy.wait(3000)
      cy.get("#home-btn").click()
    })
  })
})
