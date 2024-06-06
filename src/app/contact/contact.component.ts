import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", () => {
      const form = document.querySelector('form') as HTMLFormElement;

      form.addEventListener('submit', async (e: Event) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
          const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });

          if (response.ok) {
            form.reset();
            alert('Thank you for your message!');
          } else {
            alert('Oops! There was a problem submitting your form');
          }
        } catch (error) {
          alert('Oops! There was a problem submitting your form');
        }
      });
    });

  }
}
