import { Input, Textarea, Divider, Button } from "@nextui-org/react";





export default function EventForm() {

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      name: e.target.name.value,
      organization: e.target.organization.value,
      event: e.target.event.value,
      location: e.target.event.value,
      link: e.target.event.value,
      date: e.target.event.value,
      startTime: e.target.event.value,
      endTime: e.target.event.value,
      description: e.target.event.value
    };
    const JSONdata = JSON.stringify(data);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };
    fetch("/api/event", options).then(d => console.log(d)).catch(e => console.log("error", e));

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    // const result = await response.json();
    // console.log(result);
  };

    return (
      <div className="">
        <h2 className="text-3xl">Event Form:</h2>
        <p>Hosting an event? Fill this out and we can add it to the calendar</p>
        <form className=" flex flex-col flex-wrap gap-4 p-5" onSubmit={handleSubmit}>
          <fieldset className="flex flex-wrap gap-3 w-full">
            <legend>About you:</legend>
            <Input
              // isRequired
              className=" max-w-sm min-w-50"
              type="email"
              label="Email"
              placeholder="Enter your email"
              name="email"
            />
            <Input
              className="max-w-sm min-w-50"
              type="text"
              label="Name"
              placeholder="Enter your Name"
              name="name"
            />
            <Input
              className="max-w-sm min-w-50"
              type="text"
              label="Organization"
              placeholder="Enter the organization you're affiliated with"
              name="organization"
            />
          </fieldset>
          <Divider />
          <div className="flex flex-wrap gap-3 w-full">
            <p>About the event:</p>
            <fieldset className="flex flex-wrap gap-3 w-full">
              <Input
                // isRequired
                className=" max-w-sm min-w-50"
                type="text"
                label="Event Name"
                name="event"
              />
              <Input
                className="max-w-sm min-w-50"
                type="text"
                label="Location"
                name="location"
              />
              <Input
                type="url"
                label="Website"
                placeholder="noladevs.com"
                className="max-w-sm"
                name="link"
              />
            </fieldset>
            <fieldset className="flex flex-wrap gap-3 w-full">
              <Input
                className="max-w-fit"
                type="date"
                description="Date"
                labelPlacement="outside"
                name="date"
              />
              <Input
                className="max-w-fit"
                type="time"
                description="Start Time"
                labelPlacement="outside"
                name="startTime"
              />
              <Input
                className="max-w-fit"
                type="time"
                description="End Time"
                labelPlacement="outside"
                name="endTime"
              />
            </fieldset>
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Enter your description"
              className="max-w-xl"
              name="description"
            />
          </div>
          <Button
            className="max-w-p"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
}