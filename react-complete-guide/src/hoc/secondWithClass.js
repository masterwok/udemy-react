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
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrapperComponent {...this.props}/>
                </div>
            );
        }
    };
}
