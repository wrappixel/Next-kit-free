import React, { useState } from 'react';
import { Button, Tooltip, Popover, PopoverHeader, PopoverBody, Container, Row, Col } from 'reactstrap';

const TooltipItem = (props) => {

    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => {
        setTooltipOpen(!tooltipOpen);
    }

    return (
        <span>
            <Button className="mr-1" color="secondary" id={'Tooltip-' + props.id}>
                {props.item.text}
            </Button>
            <Tooltip placement={props.item.placement} isOpen={tooltipOpen} target={'Tooltip-' + props.id} toggle={toggle.bind(null)}>
                Tooltip Content!
          </Tooltip>
        </span>
    );
}

const PopoverItem = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => {
        setPopoverOpen(!popoverOpen);
    }

    return (
        <span>
            <Button className="mr-1" color="secondary" id={'Popover-' + props.id} type="button">
                {props.item.text}
            </Button>
            <Popover placement={props.item.placement} isOpen={popoverOpen} target={'Popover-' + props.id} toggle={toggle.bind(null)}>
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
            </Popover>
        </span>
    );
}

const TooltipPopover = () => {

    const tooltips = [
        {
            placement: 'top',
            text: 'Tooltip on Top'
        },
        {
            placement: 'bottom',
            text: 'Tooltip on Bottom'
        },
        {
            placement: 'left',
            text: 'Tooltip on Left'
        },
        {
            placement: 'right',
            text: 'Tooltip on Right'
        }
    ];

    const popovers = [
        {
            placement: 'top',
            text: 'Popover on Top'
        },
        {
            placement: 'bottom',
            text: 'Popover on Bottom'
        },
        {
            placement: 'left',
            text: 'Popover on Left'
        },
        {
            placement: 'right',
            text: 'Popover on Right'
        }
    ];

    return (
        <div>
            <div className="spacer" id="toolpop-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Tooltip & Popover</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12" className="text-center">
                        <div className="button-box">
                            {tooltips.map((tooltip, i) => {
                                return <TooltipItem key={i} item={tooltip} id={i} />;
                            })}
                        </div>
                        <div className="button-box m-t-40">
                            {popovers.map((popover, i) => {
                                return <PopoverItem key={i} item={popover} id={i} />;
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TooltipPopover;
