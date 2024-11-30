import { Form, Input, Select, Relevant, TextArea } from 'informed';

export const ContactForm = ({}) => {
  // @ts-expect-error raw form data
  const onSubmit = ({ values }) => console.log(values);

  return (
    <Form onSubmit={onSubmit} className="form">
      <div className="form-item">
        <Input type="date" name="event date" label="Event Date" />
      </div>

      <div className="form-item">
        <Input
          name="people-count"
          type="number"
          label="Number of People"
          placeholder="0"
        />
      </div>

      <div className="form-item">
        <Select name="event-type" label="Type of Event">
          <option value="wedding" label="Wedding" />
          <option value="breakfast" label="Breakfast" />
          <option value="lunch" label="Lunch" />
          <option value="dinner" label="Dinner" />
          <option value="ongoing" label="Ongoing" />
          <option value="other" label="Other" />
        </Select>
      </div>

      <div className="form-item">
        <Relevant
          when={({ formState }) => formState.values['event-type'] === 'other'}
        >
          <TextArea
            name="other-description"
            label="Describe Your Event"
            placeholder="All day, Rotating locations, "
          />
        </Relevant>
      </div>

      <hr />

      <div className="form-item">
        <Input name="name" label="Name" />
      </div>

      <div className="form-item">
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="name@example.com"
        />
      </div>

      <div className="form-item">
        <Input
          name="phone"
          label="Phone"
          type="phone"
          formatter="(###)-###-####"
          placeholder="(___)-___-____"
        />
      </div>

      <div className="form-item">
        <Select name="contact-preference" label="Contact Preference">
          <option value="email" label="Email" />
          <option value="text" label="Text" />
          <option value="phone" label="Phone" />
        </Select>
      </div>

      <div className="form-item">
        <Relevant
          when={({ formState }) =>
            formState.values['contact-preference'] === 'phone'
          }
        >
          <Select name="call-time" label="Best Times to Call">
            <option value="morning" label="Morning" />
            <option value="daytime" label="Daytime" />
            <option value="evening" label="Evening" />
            <option value="other" label="Other" />
          </Select>
        </Relevant>
      </div>
      <div className="form-item">
        <Relevant
          when={({ formState }) => formState.values['call-time'] === 'other'}
        >
          <Input
            name="call-time-other-"
            label="Please Specify"
            placeholder="6-7:30pm Pacific"
          />
        </Relevant>
      </div>

      <button type="submit">Submit</button>
    </Form>
  );
};

// email
// phone
// good times to call
// preference of call, text, email
