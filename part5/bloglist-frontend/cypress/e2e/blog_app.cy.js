describe('Blog app', function() {
    // 5.17
    beforeEach(function() {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        // create here a user to backend
        cy.visit('http://localhost:3000')
    })

    it('Login form is shown', function() {
        // ...
    })

    // 5.18
    describe('Login',function() {
        it('succeeds with correct credentials', function() {
            // ...
        })

        it('fails with wrong credentials', function() {
            // ...
        })
    })

    // 5.19
    describe('When logged in', function() {
        beforeEach(function() {
            // log in user here
        })

        it('A blog can be created', function() {
            // ...
        })
    })

    // And others... 5.20 - 5.23

})