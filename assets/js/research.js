/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "IoT Based Smart Classroom Automation Using Arduino",
        authors : "Prakash Ravichandran",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "popup1",
        image : "assets/images/research-page/iot.png",
        citation: {
            vancouver: "IoT Based Smart Classroom Automation Using Arduino-Prakash Ravichandran-The 58th Annual Meeting of the Association for Computational Linguistics-2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 1",
        absbox: "absPopup1"
    },

    {
        title : "IoT Based Smart Classroom Automation Using Arduino and SOFC",
        authors : "Prakash Ravichandran",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "popup2",
        image : "assets/images/research-page/bloom.jpg",
        citation: {
            vancouver: "IoT Based Smart Classroom Automation Using Arduino and SOFC-Prakash Ravichandran-2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 2",
        absbox: "absPopup2"
    },

    {
        title : "Electric Vehicle using Bloom Energy",
        authors : "Prakash Ravichandran",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "popup3",
        image : "assets/images/research-page/EV.png",
        citation: {
            vancouver: "Electric Vehicle using Bloom Energy-Prakash Ravichandran-The 58th Annual Meeting of the Association for Computational Linguistics-2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 3",
        absbox: "absPopup3"
    },

    {
        title : "Spherical shaped Transparent solar panel",
        authors : "Prakash Ravichandran",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "popup4",
        image : "assets/images/research-page/ss.jpg",
        citation: {
            vancouver: "Transparent Spherical solar panel-Prakash Ravichandran-2020"
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 4",
        absbox: "absPopup4"
    },

    {
        title : "Dual Super-Resolution Learning for Semantic Segmentation",
        authors : "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        researchYr : 2020,
        citebox : "popup5",
        image : "assets/images/research-page/semanticSegmentation.png",
        citation: {
            vancouver: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 5",
        absbox: "absPopup5"
    },

    {
        title : "Deep Unfolding Network for Image Super-Resolution",
        authors : "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        researchYr : 2020,
        citebox : "popup6",
        image : "assets/images/research-page/deepNetwork.png",
        citation: {
            vancouver: "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 6",
        absbox: "absPopup6"
    },

    {
        title : "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
        authors : "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        researchYr : 2020,
        citebox : "popup7",
        image : "assets/images/research-page/imageDecomposition.png",
        citation: {
            vancouver: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 7",
        absbox: "absPopup7"
    },
    {
        title : "Forward and Backward Information Retention for Accurate Binary Neural Networks",
        authors : "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
        conferences : "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        researchYr : 2020,
        citebox : "popup8",
        image : "assets/images/research-page/neuralNetworks.jpg",
        citation: {
            vancouver: "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 8",
        absbox: "absPopup8"
    }
];
AOS.init();   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

