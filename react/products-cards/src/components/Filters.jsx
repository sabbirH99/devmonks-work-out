function Filters({ categories }) {
    return (
        <div className="filters">
            <div className="filter-tabs">
                <button type="button" className="filter-tab is-active">
                    All
                </button>
                {categories.map((category) => (
                    <button key={category.id} type="button" className="filter-tab">
                        {category.name}
                    </button>
                ))}
            </div>
            <div className="filter-stock">
                <button type="button" className="filter-switch" role="switch" aria-checked="false">
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
