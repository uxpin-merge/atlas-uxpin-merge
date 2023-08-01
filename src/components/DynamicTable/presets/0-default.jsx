import React from 'react';
import DynamicTable from '../DynamicTable';

export const head = {
      cells: [
        {
          key: 'name',
          content: 'Name',
          isSortable: true,
          width: 25,
        },
        {
          key: 'party',
          content: 'Party',
          shouldTruncate: true,
          isSortable: true,
          width: 15,
        },
        {
          key: 'term',
          content: 'Term',
          shouldTruncate: true,
          isSortable: true,
          width: 10,
        },
        {
          key: 'content',
          content: 'Comment',
          shouldTruncate: true,
        },
        {
          key: 'more',
          shouldTruncate: true,
        },
      ],
  };

  const presidents = [
    {
        key: 'row-0-George Washington',
        isHighlighted: false,
        cells: [
            {
                key: 'GeorgeWashington',
                content: 'George Washington'
            },
            {
                key: 'None, Federalist',
                content: 'None, Federalist'
            },
            {
                key: 1,
                content: '1789-1797',
            },
            {
                key: 'comment',
                content: 12
            }
        ]
    },
    {
        key: 'row-1-John Adams',
        isHighlighted: false,
        cells: [
            {
                key: 'JohnAdams',
                content: 'John Adams'
            },
            {
                key: 'Federalist',
                content: 'Federalist'
            },
            {
                key: 1,
                content: '1797-1801',
            },
            {
                key: 'comment',
                content: 3
            }
        ]
    },
    {
        key: 'row-2-Thomas Jefferson',
        isHighlighted: false,
        cells: [
            {
                key: 'ThomasJefferson',
                content: 'Thomas Jefferson'
            },
            {
                key: 'Democratic-Republican',
                content: 'Democratic-Republican'
            },
            {
                key: 1,
                content: '1801-1809',
            },
            {
                key: 'comment',
                content: 6
            }
        ]
    },
    {
        key: 'row-3-James Madison',
        isHighlighted: false,
        cells: [
            {
                key: 'JamesMadison',
                content: 'James Madison'
            },
            {
                key: 'Democratic-Republican',
                content: 'Democratic-Republican'
            },
            {
                key: 1,
                content: '1809-1817',
            },
            {
                key: 'comment',
                content: 1
            }
        ]
    },
    {
        key: 'row-4-James Monroe',
        isHighlighted: false,
        cells: [
            {
                key: 'James Monroe',
                content: 'James Monroe'
            },
            {
                key: 'Democratic-Republican',
                content: 'Democratic-Republican'
            },
            {
                key: 1,
                content: '1817-1825',
            },
            {
                key: 'comment',
                content: 9
            }
        ]
    },
  ];

export default (
<DynamicTable
    caption="List of US Presidents"
    head={head}
    rows={presidents}
    rowsPerPage={5}
    defaultPage={1}
    isRankable
    uxpId="dynamic-table"/>
)