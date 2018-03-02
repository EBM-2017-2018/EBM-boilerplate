import React, {PureComponent} from 'react';
import {Divider, Drawer as MaterialDrawer, List, ListItem, ListItemIcon, ListItemText, withStyles} from 'material-ui';
import {
  Drafts as DraftsIcon,
  Inbox as InboxIcon,
  Send as SendIcon,
  Star as StarIcon,
  Mail as MailIcon,
  Delete as DeleteIcon,
  Report as ReportIcon
} from 'material-ui-icons';

const drawerWidth = 240;

const style = theme => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative'
    }
  }
});

const drawerList = (
  <div>
    <ListItem button>
      <ListItemIcon><InboxIcon/></ListItemIcon>
      <ListItemText primary="Inbox"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon/>
      </ListItemIcon>
      <ListItemText primary="Starred"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon/>
      </ListItemIcon>
      <ListItemText primary="Send mail"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon/>
      </ListItemIcon>
      <ListItemText primary="Drafts"/>
    </ListItem>
  </div>
);

const otherDrawerList = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon/>
      </ListItemIcon>
      <ListItemText primary="All mail"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon/>
      </ListItemIcon>
      <ListItemText primary="Trash"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon/>
      </ListItemIcon>
      <ListItemText primary="Spam"/>
    </ListItem>
  </div>
);

class Drawer extends PureComponent {
  render() {
    const {classes, theme} = this.props;

    return (
      <MaterialDrawer
        variant="permanent"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open
        classes={{
          paper: classes.drawerPaper
        }}>
        <div>
          <div className={classes.toolbar}/>
          <Divider/>
          <List>
            {drawerList}
          </List>
          <Divider/>
          <List>
            {otherDrawerList}
          </List>
        </div>
      </MaterialDrawer>
    );
  }
}

export default withStyles(style, {withTheme: true})(Drawer);
