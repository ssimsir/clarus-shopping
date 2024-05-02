import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function CategoryBar() {
	return (
		<FormControl>
			<RadioGroup
				row
				aria-labelledby="demo-row-radio-buttons-group-label"
				name="row-radio-buttons-group"
			>
				<FormControlLabel value="all" control={<Radio />} label="All" />
				<FormControlLabel
					value="smartphones"
					control={<Radio />}
					label="Smartphones"
				/>
				<FormControlLabel
					value="laptops"
					control={<Radio />}
					label="Laptops"
				/>
				<FormControlLabel
					value="fragrances"
					control={<Radio />}
					label="Fragrances"
				/>
				<FormControlLabel
					value="skincare"
					control={<Radio />}
					label="Skincare"
				/>
				<FormControlLabel
					value="groceries"
					control={<Radio />}
					label="Groceries"
				/>
				<FormControlLabel
					value="home-decoration"
					control={<Radio />}
					label="Home-decoration"
				/>
				<FormControlLabel
					value="golden"
					control={<Radio />}
					label="Golden"
				/>
			</RadioGroup>
		</FormControl>
	);
}
