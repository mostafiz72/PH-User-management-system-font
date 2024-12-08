import React from 'react'

export default function Slider() {
    return (
        <>
            <div className=''>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src="https://static-resize.movies.do/img/movie/yXyuQnZtyBI7umLRzPIzMVWOIueGEcuJGqmdyAz0_Ih8HFpQfJolHrD8JG94iIKDAc9kVKAOMaXGHhqDxS9E_SVT_cr-k43hIq8CeVUIJpM.jpg?width=1640&q=1733392791"
                            className="w-full h-[700px]" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://static-resize.movies.do/img/movie/jRtSkUIaVY91DX_Bopu7otAoOnt8CAZmm3fSgeVZsQMATXPlrTA00XLdrkyR_tSPa8eQD0sh1V48HA5bEaXecbjCuDhofVDNAZEJAJbcwNs.jpg?width=1640&q=1733392791"
                            className="w-full h-[700px]" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://static-resize.movies.do/img/movie/RExI8FJlF0kYv34uvbjihH0EH791MaNLb25ZhmqEBt9pc_VxzM7BA4KMUBwo-574UCJ_AnPstNyFh0YtkEn3rmTp4Z4_HmSWSyl4_yAJAlU.jpg?width=1640&q=1733392791"
                            className="w-full h-[700px]" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://static-resize.movies.do/img/movie/lZh4iJqjBwi5wYn7_AUUgTQYoCiuLq02492YOpr0WrYzGe6djeXa1fmEpelLrgTJbRVNzT499fO1GWh6K0lkd-eI7FMzhVDF9aax3nCoPag.jpg?width=1640&q=1733392791"
                            className="w-full h-[700px]" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
