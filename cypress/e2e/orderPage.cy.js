describe("Pizza Sipariş Formu Testleri", () => {
    beforeEach(() => {
      cy.visit("/order"); 
    });
  
    it("Form elemanlarının görünürlüğünü doğrula", () => {
      cy.get("input[name='name']").should("be.visible");
      cy.get("select[name='size']").should("be.visible");
      cy.get("textarea[name='note']").should("be.visible");
      cy.get("button[type='submit']").should("be.visible");
    });
  
    it("Formu doldurup siparişi başarıyla gönderebiliyor mu?", () => {
      cy.get("input[name='name']").type("Ali Veli");
      cy.get("select[name='size']").select("medium");
      cy.get("input[value='Peynir']").check();
      cy.get("textarea[name='note']").type("Bol malzemeli olsun.");
      cy.get("button[type='submit']").click();
  
   
      cy.contains("Sipariş başarıyla gönderildi!").should("be.visible");
    });
  
    it("Checkbox’ları kullanarak ekstra malzeme eklenebiliyor mu?", () => {
      cy.get("input[value='Peynir']").check().should("be.checked");
      cy.get("input[value='Sucuk']").check().should("be.checked");
      cy.get("input[value='Mantar']").check().should("be.checked");
  
  
      cy.get("input[value='Sucuk']").uncheck().should("not.be.checked");
    });
  });
  