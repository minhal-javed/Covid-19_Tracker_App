import React from 'react';
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { grey } from '@material-ui/core/colors';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
           
            <Typography variant='h5' style={{ color: 'white' }}>
                Developed By MJ.
            </Typography>
            <div className={styles.social}>
                <a
                    href="https://github.com/minhal-javed/Covid-19_Tracker_App"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon style={{ color: grey[50], fontSize: 25 }} className={styles.socialIcon} />
                </a>
                <a
                    href="https://www.facebook.com/m.minhal9spoint/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FacebookIcon style={{ color: grey[50], fontSize: 25 }} className={styles.socialIcon} />
                </a>
            </div>
        </div>
    )
}

export default Footer;