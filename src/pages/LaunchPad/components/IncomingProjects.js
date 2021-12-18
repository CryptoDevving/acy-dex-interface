import React from 'react';
import ExpandingCard from './ExpandingCard.js';
import '../css/ProjectsCard.css';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import ProjectsCard from './ProjectsCard.js';
import ExpandedContent from './ExpandedContent.js';

const IncomingProjects = ({ data, openProject }) => {
  var $cell = $('.card');

//open and close card when clicked on card
  $cell.find('.js-expander').click(function() {
    
    var $thisCell = $(this).closest('.card');
    var $container = $(this).closest('.expanding-card')

    if ($thisCell.hasClass('is-collapsed')) {
      console.log("hello")
      $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed')
      $thisCell.removeClass('is-collapsed').addClass('is-expanded');
      $container.addClass('expanded')
    


    } else {
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');

      $container.removeClass('expanded')
      
      
    }
  
});

//close card when click on cross
$cell.find('.js-collapser').click(function() {

  var $thisCell = $(this).closest('.card');

  $thisCell.removeClass('is-expanded').addClass('is-collapsed');
  $cell.not($thisCell).removeClass('is-inactive');

});

  const [isActiveUpcoming, setIsActiveUpcoming] = useState(false);
  const [isIncomingExpanded, setisIncomingExpanded] = useState(false);

  const toggleExpanded = event => {
    console.log(this);
    setisIncomingExpanded(!isIncomingExpanded);
  };

  return (
    <div className={isActiveUpcoming ? 'incoming-container incoming-container-active' : 'incoming-container'}>
      <div
        className='expanding-card'
        style={{
          zIndex: 1,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {data &&
          data.map(obj => (
            <div className="cards">
              <div className=" card [ is-collapsed ]">
                <div
                  className="card__inner [ js-expander ]"
                  // onClick={() => setisIncomingExpanded(!isIncomingExpanded)}
                >
                  <div className="">
                    <ProjectsCard
                      projectID={obj.projectID}
                      ddl={obj.saleEnd}
                      raise={obj.totalRaise.toString() + ' USDT'}
                      sales={obj.totalSale.toString() + ' ' + obj.projectToken}
                      rate={'1 ' + obj.projectToken + ' = ' + obj.tokenPrice.toString() + ' USDT'}
                      title={obj.projectName}
                      isUpcoming={true}
                      openProject={openProject}
                    />
                  </div>
                  {/* <i className="fa fa-folder-o" /> */}
                </div>
                <div className="card__expander">
                  <i className="fa fa-close [ js-collapser ]" />
                  <ExpandedContent />
                </div>
              </div>
            </div>
          ))}
      </div>
      {data.length > 3 ? (
        <a className="see-more-incoming" onClick={() => setIsActiveUpcoming(!isActiveUpcoming)} />
      ) : (
        ''
      )}
    </div>
  );
};

export default IncomingProjects;
