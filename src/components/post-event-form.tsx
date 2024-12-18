import { Form, Input, Radio, RadioGroup, TextArea } from 'informed';
import { FormItem } from './form-item';

export const PostEventForm = ({}) => {
  // @ts-expect-error raw form data
  const onSubmit = ({ values }) => console.log(values);

  return (
    <Form onSubmit={onSubmit} className="form">
      <FormItem>
        <Input name="name" label="Name" />
      </FormItem>

      <FormItem>
        <Input type="date" name="event date" label="Event Date" />
      </FormItem>

      <FormItem className="radio-rating">
        <RadioGroup name="rating" label="Overall Rating">
          {[1, 2, 3, 4, 5].map((rating) => (
            <Radio
              key={rating}
              label={rating.toString()}
              value={rating.toString()}
            />
          ))}
        </RadioGroup>
      </FormItem>

      <FormItem>
        <TextArea
          name="likes"
          label="What did you like about the event?"
          placeholder="Hopefully the food!"
          rows={4}
        />
      </FormItem>

      <FormItem>
        <TextArea
          name="dislikes"
          label="What was your least favorite thing?"
          placeholder="Hopefully not the food :)"
          rows={4}
        />
      </FormItem>

      <FormItem>
        <TextArea
          name="changes"
          label="What parts of the services/process would you change?"
          placeholder="Anything like logistics, organization, comms, type of utensils, ..."
          rows={4}
        />
      </FormItem>

      <p>Thank you!</p>

      <button type="submit">Submit</button>
    </Form>
  );
};
