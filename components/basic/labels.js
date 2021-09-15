import React from 'react';
import { Badge } from 'reactstrap';

const Labels = () => {
    return (
        <div>
            <div className="spacer" id="label-component">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Badges</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <h1>Heading <Badge color="secondary">New</Badge></h1>
                            <h2>Heading <Badge color="secondary">New</Badge></h2>
                            <h3>Heading <Badge color="secondary">New</Badge></h3>
                            <h4>Heading <Badge color="secondary">New</Badge></h4>
                            <h5>Heading <Badge color="secondary">New</Badge></h5>
                            <h6>Heading <Badge color="secondary">New</Badge></h6>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h4 className="card-title">Colored Badges</h4>
                            <Badge color="primary">Primary</Badge>{' '}
                            <Badge color="secondary">Secondary</Badge>{' '}
                            <Badge color="success">Success</Badge>{' '}
                            <Badge color="danger">Danger</Badge>{' '}
                            <Badge color="warning">Warning</Badge>{' '}
                            <Badge color="info">Info</Badge>{' '}
                            <Badge color="light">Light</Badge>{' '}
                            <Badge color="dark">Dark</Badge>
                        </div>
                        <div className="mt-5">
                            <h4 className="card-title">Pills</h4>
                            <Badge color="primary" pill>Primary</Badge>{' '}
                            <Badge color="secondary" pill>Secondary</Badge>{' '}
                            <Badge color="success" pill>Success</Badge>{' '}
                            <Badge color="danger" pill>Danger</Badge>{' '}
                            <Badge color="warning" pill>Warning</Badge>{' '}
                            <Badge color="info" pill>Info</Badge>{' '}
                            <Badge color="light" pill>Light</Badge>{' '}
                            <Badge color="dark" pill>Dark</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Labels;
