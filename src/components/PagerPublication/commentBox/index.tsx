import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const CommentBox = ({ comment }) => {
    const formattedDate = formatDistanceToNow(new Date(comment.createdAt), {
        locale: ptBR,
        addSuffix: true,
    });

    return (

        <div style={{
            width: '100%',
            maxWidth: '600px',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                background: '#ffffff',
                width: '100%',
                maxWidth: '600px',
                height: '72px',
                padding: '36px, 44px, 36px, 44px',
                gap: '40px'
            }}>
                <div className="flex items-start gap-4 rounded-full w-10 h-10 bg-brands-brand1 p-4">

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '25px',
                        marginLeft: '2px',
                        marginTop: '-9px'


                    }}>
                        <p className="text-center mt-0.5 text-grey-whiteFixed">{comment.user.name.charAt(0)}</p>
                        <p className="font-semibold">{comment.user.name}</p>
                        <p className="text-gray-500" style={{ width: '150px' }}>{formattedDate}</p>
                    </div>

                    <p className="mt-2" style={{ width: '100%', minWidth: '300px',marginLeft: '-228px',  }}>{comment.description}</p>



                </div>
            </div>
        </div>

    );
};
