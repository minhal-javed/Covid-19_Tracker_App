import React,{useEffect,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";




const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
  },
}));

const useStylesTypography = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function GlobalData() {
  const classes = useStyles();
  const classTypography = useStylesTypography();
  const [globalData,updateGlobalData]=useState();

  useEffect(()=>{
    async function fetchGlobalData(){
      const apiResponse = await fetch('https://covid19.mathdro.id/api')
      const data=await apiResponse.json()
      console.log(data)

      updateGlobalData(data)
    }
    fetchGlobalData();
  },[])

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div className={classTypography.root}>
          <Typography variant="h3" gutterBottom>
            1000
          </Typography>
          <Typography variant="subtitiles" gutterBottom>
           { globalData.confirmed}
          </Typography>
        </div>
      </Paper>
      <Paper elevation={3}>
        <div className={classTypography.root}>
          <Typography variant="h3" gutterBottom>
          1000
          </Typography>
        <Typography variant="subtitiles" gutterBottom>
          Active Cases
          </Typography>
        </div>
      </Paper>
      <Paper elevation={3}>
      <div className={classTypography.root}>
          <Typography variant="h3" gutterBottom>
        1000
          </Typography>
      <Typography variant="subtitiles" gutterBottom>
        Total Recovered
          </Typography>
        </div>
      </Paper>
      <Paper elevation={3}>
        <div className={classTypography.root}>
          <Typography variant="h3" gutterBottom>
            1000
          </Typography>
          <Typography variant="subtitiles" gutterBottom>
            Deaths
          </Typography>
        </div>
      </Paper>
    </div>
  );
}
