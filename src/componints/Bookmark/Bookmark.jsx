import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h1 className="text-xl bg-white mb-5 p-5">{title}</h1>
        </div>
    );
};


Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;