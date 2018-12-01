import React, {Component} from 'react';

// export default (
//     WrapperComponent
//     , className
// ) => (props) => (
//     <div className={className}>
//         <WrapperComponent {...props}/>
//     </div>
// );

export default (
    WrapperComponent
    , className
) => {
    const SecondWithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrapperComponent ref={this.props.forwardedRef} {...this.props}/>
                </div>
            );
        }
    };

    return React.forwardRef((props, ref) => {
        return <SecondWithClass {...props} forwardedRef={ref}/>
    })
}
