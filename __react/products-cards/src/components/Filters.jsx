function Filters({
    categories,
    currentCategory,
    isStockOnly,
    handleCategoryChange,
    handleStockState
}) {
    return (
        <div className="filters">
            <div className="filter-tabs">
                <button
                    type="button"
                    className={`filter-tab ${currentCategory === "All" ? "is-active" : ""}`}
                    onClick={() => handleCategoryChange("All")}
                >
                    All
                </button>

                {categories.map((category) => (
                    <button
                        key={category.id}
                        type="button"
                        className={`filter-tab ${currentCategory === category.name ? "is-active" : ""}`}
                        onClick={() => handleCategoryChange(category.name)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="filter-stock">
                <button
                    type="button"
                    className={`filter-switch ${isStockOnly ? "is-active" : ""}`}
                    role="switch"
                    aria-checked={isStockOnly}
                    onClick={() => handleStockState(!isStockOnly)}
                >
                    <span className="filter-switch_track">
                        <span className="filter-switch_thumb"></span>
                    </span>
                    In stock only
                </button>
            </div>
        </div>
    )
}

export default Filters;