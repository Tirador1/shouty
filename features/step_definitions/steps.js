import { assertThat, is } from "hamjest";
import { Person } from "../../src/shouty.js";
import { Given, When, Then } from "@cucumber/cucumber";

Given("Lucy is located {int} meters from Sean", function (distance) {
  this.Lucy = new Person();
  this.Sean = new Person();
  this.Lucy.moveTo(distance);
});

When("Sean shouts {string}", function (message) {
  this.Sean.shout(message);
  this.message = message;

  for (let person of Person.all) {
    if (person.distance <= 15) {
      person.hear(message);
    }
  }
});

Then("Lucy hears Sean's message", function () {
  assertThat(this.Lucy.messagesHeard(), is([this.message]));
});
