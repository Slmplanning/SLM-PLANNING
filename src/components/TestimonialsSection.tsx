import { FaStar } from "react-icons/fa";

const testimonials = [
	{
		quote: "SLM delivered beyond our expectations. Their team was professional, creative, and truly understood our needs.",
		name: "Wanjiku Mwangi",
		occupation: "Urban Planner, Nairobi County",
		rating: 5,
	},
	{
		quote: "The landscape design transformed our campus. We loved the collaborative process and the results!",
		name: "Samuel Kimani",
		occupation: "Facilities Manager, Kenyatta University",
		rating: 5,
	},
	{
		quote: "Their 3D visualizations made it easy to communicate our vision to stakeholders. Highly recommended!",
		name: "Aisha Otieno",
		occupation: "Project Lead, Kisumu Smart City",
		rating: 5,
	},
	{
		quote: "Working with SLM was a game changer for our community project. The team is innovative and reliable.",
		name: "John Kamau",
		occupation: "Community Organizer, Mombasa",
		rating: 5,
	},
	{
		quote: "Excellent service and attention to detail. We look forward to future collaborations.",
		name: "Grace Njeri",
		occupation: "Architect, Nairobi",
		rating: 5,
	},
	{
		quote: "SLM’s expertise in sustainable planning is unmatched. Our project was a huge success!",
		name: "Peter Oloo",
		occupation: "Developer, Eldoret",
		rating: 5,
	},
];

export default function TestimonialsSection() {
	return (
		<section className="py-16 bg-slm-cream">
			<div className="max-w-6xl mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-slm-green-700 mb-2 text-center">
					What Our Clients Say
				</h2>
				<p className="font-inter text-lg text-gray-700 mb-8 text-center">
					Real feedback from organizations and leaders we've partnered with.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((t, idx) => (
						<div
							key={idx}
							className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center group hover:shadow-2xl transition-all duration-300"
						>
							<div className="text-slm-green-700 text-3xl mb-4">“</div>
							<blockquote className="font-playfair text-lg text-center text-slm-brown-700 mb-4 italic">
								{t.quote}
							</blockquote>
							<div className="flex items-center mb-2">
								{[...Array(t.rating)].map((_, i) => (
									<FaStar key={i} className="text-yellow-400 text-lg mr-1" />
								))}
							</div>
							<div className="font-bold text-slm-green-700 text-base mt-2">
								{t.name}
							</div>
							<div className="font-inter text-sm text-gray-500">
								{t.occupation}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
