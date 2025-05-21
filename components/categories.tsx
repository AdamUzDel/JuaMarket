import { Smartphone, ShoppingBag, Utensils, Shirt, Home, Tv, Baby, Car, Flower } from "lucide-react"

const categories = [
  { name: "Electronics", icon: Smartphone, color: "#FF7A00" },
  { name: "Groceries", icon: ShoppingBag, color: "#4CAF50" },
  { name: "Food", icon: Utensils, color: "#F44336" },
  { name: "Fashion", icon: Shirt, color: "#9C27B0" },
  { name: "Home", icon: Home, color: "#2196F3" },
  { name: "Appliances", icon: Tv, color: "#607D8B" },
  { name: "Baby", icon: Baby, color: "#E91E63" },
  { name: "Auto", icon: Car, color: "#795548" },
  { name: "Garden", icon: Flower, color: "#8BC34A" },
]

export default function Categories() {
  return (
    <section className="py-4">
      <h2 className="text-lg font-semibold mb-3 font-poppins text-jua-blue">Popular Categories</h2>
      <div className="category-scroll flex overflow-x-auto gap-3 pb-2">
        {categories.map((category, index) => (
          <div key={index} className="flex-shrink-0">
            <div
              className="flex flex-col items-center justify-center w-16 h-16 rounded-xl shadow-sm"
              style={{ backgroundColor: `${category.color}20` }}
            >
              <category.icon className="h-6 w-6 mb-1" style={{ color: category.color }} />
              <span className="text-xs text-center font-medium" style={{ color: category.color }}>
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
