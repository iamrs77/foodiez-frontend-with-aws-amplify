import React from 'react';

function Loader() {
    return (
        <div className="loader center">
            {/* <i className="fa fa-cog fa-spin" /> */}
            <i className="fas fa-spinner fa-spin"></i>
            {/* <i class="fa fa-circle-o-notch fa-spin"></i> */}
        </div>
    );
}

export default Loader;
