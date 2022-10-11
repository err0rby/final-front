import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./about.module.css";

const About = React.memo(() => {
    return (
        <div className={styles.rod}>
            <Header />
            <div className={styles.img}><img src="https://lyonturnbull.blob.core.windows.net/auction-headers/641-web-hero2.jpg" alt="" /></div>
            <div className={styles.AboutUS}>
                <div className={styles.title}><h1 >About Us</h1><p>Operating since 1826, Lyon & Turnbull are one of the longest established fine art and antiques auction houses in the United Kingdom. In the 21st century, we combine dedicated personal advice and attention with innovative, thoughtful marketing and a deep understanding of the world of art and antiques to offer an unparalleled auctioneer service. </p>
                    <p>We hold approximately 45 auctions per annum, including specialist categories such as Scottish paintings, British & European paintings, Asian works of art, jewellery, silver, antiques, books, furniture and contemporary art and design. For details of the categories of art and antiques we sell, please visit the departments page.</p></div>
                <div className={styles.conteiner}>
                    <div className={styles.wrapper}><h3><em>"You did everything you said you would in respect to marketing the collection and I think the enormous interest generated was testament to that. Creative, passionate and enthusiastic - exactly what you promised us!"</em><br /><strong>Jonathan Brown, Drambuie Liqueur Company</strong></h3></div>
                    <div><img src="https://lyonturnbull.blob.core.windows.net/site-images/drambuie-crowded_0.jpg" alt="" /></div>
                </div>

                <div className={styles.p4}>
                    <p>In addition to our specialist auctions, our raison d'etre are single-owner collection sales. Each one carefully crafted to accentuate the quality and uniqueness of the particular collection, generating un-missable events for collectors, and high (often record) prices for our clients.</p>
                    <p>Lyon & Turnbull operates internationally, providing valuation and auction services worldwide, and ensuring our client's works of art and antiques are seen, desired, and purchased by the world’s largest art markets in Europe, America and Asia.</p>
                    <p>We maintain galleries in London and Glasgow, and our neoclassical headquarters and saleroom in Edinburgh is, we believe, the most beautiful in  the UK. We also maintain an alliance with the historic American auctioneers, Freeman's.</p>
                    <p> However, our international reach and commercial success are only part of our appeal. The real reason why our clients choose us over our competitors is the knowledge and approachability of our experts, and the efforts we make to understand and fulfil our clients’ tastes and needs.</p>
                </div>
            </div>
            <div><img src="https://lyonturnbull.blob.core.windows.net/auction-headers/1711%20DoI%20500px%20banner.jpg" alt="" /></div>
            <div className={styles.AboutUS}>
                <div className={styles.block}>
                    <h4>OUR INTERNATIONAL ALLIANCE</h4>
                    <p>Expanding its reach into the international market, Lyon & Turnbull formed a strategic marketing alliance with the historic U.S. auction house Freeman’s, in 2000.</p>
                    <p>Freeman’s holds an esteemed place as America's oldest auction house and as one of the country’s first family-owned businesses. The company was founded by Tristram Bampfylde Freeman in 1805 and remained in the hands of the Freeman family for six generations with landmark sales throughout its storied history. </p>
                    <p>In 2016, controlling interest of the auction house was transferred to an internal management team in support of an ambitious growth strategy. At the onset of 2020, Freeman’s opened its new flagship location in Center City’s prestigious 2400 Market Street and a second Philadelphia location at 1600 West Girard Avenue.</p> 
                    <button className={styles.btn}>Visit Freeman's</button>
                </div>
                <div className={styles.block}>
                    <h4>OUR HISTORY</h4>
                    <p>Established in Edinburgh in 1826, Lyon & Turnbull are Scotland's oldest firm of auctioneers. In the nineteenth century the firm conducted regular auctions in Edinburgh, handling a bewildering variety of art and antiques including such highlights as furniture from the Queen's residence at Balmoral. In the early 1840’s Lyon & Turnbull moved premises to George Street, and continued selling fine art and antiques at this address (changing ownership in 1864) for over 130 years until 1999. The legacy of Lyon & Turnbull’s George Street premises can still be seen, as some of the old signage is still visible on Thistle Street Lane North.</p>
                    <div className={styles.conteiner}>
                        <div className={styles.imgBook}><img src="https://lyonturnbull.blob.core.windows.net/site-images/Letter%20from%20Jonathan%20Lyon%201826.jpg" alt="" /></div>
                        <div className={styles.wrapper}><h3><em>"Having recently commenced business as auctioneer and appraiser, I take the liberty most respectfully to solicit your patronage..." </em><br /><strong>Jonathan Lyon, 1826</strong></h3></div>
                    </div>
                </div>
                <div className={styles.block}> <p> In 1999 Lyon & Turnbull was acquired by a group of auctioneers previously part of the Phillips team, an auction house that was the third largest in the world during the 1990s. They were joined in the enterprise by Sir Angus Grossart, Chairman of one of Scotland’s leading merchant banks Noble Grossart and a past Chairman of The Trustees of the National Galleries of Scotland. The company's stated aim on regeneration was: "To rescue a national institution for Scotland and to establish a high quality auction house with an international footprint from a base in Edinburgh. </p><p> "Since re-launching, Lyon & Turnbull have not only become Scotland's most successful auction house but also one of the premier in the United Kingdom, respected internationally as a diligent and trusted firm of auctioneers.</p></div>
            </div>

            <div><img src="https://lyonturnbull.blob.core.windows.net/site-images/LT%20saleroom%20-%20about%20us%20-%20580px.jpg" alt="" /></div>
            <div className={styles.AboutUS} >
                <div className={styles.block}><h4>OUR HISTORIC HQ</h4>
                    <p>Our headquarters in Edinburgh is housed in an important example of the work of Archibald Elliot (1760-1823), one of Scotland's leading architects in the early 19th century. </p> <p> Designed and built as a church for the great and good of Edinburgh’s fashionable New Town, the design is somewhat unusual due to Elliot’s adoption of the Greek Revival style for an ecclesiastical commission. The church construction began in May 1820 and it opened for its first service in May 1821. A plan and elevation signed by Elliot shows that he originally intended the building to have a tower and spire, but, perhaps for financial reasons, these were never built. The ceiling rose in the auditorium originally held a large octagonal gasolier, which was removed in 1853. </p> <p>Broughton Place Church featured in the 1981 multi-Oscar winning film Chariots of Fire. The Broughton McDonald congregation left in 1991 and most of the interior furnishings were dispersed; the organ and organ screen being relocated to a church in Italy. Malcolm Fraser Architects won the Edinburgh Architectural Association Regeneration/Conservation Award and Roses Design Award in 2006, having completed the conversion of the church to an auction house in 2003. </p> <p> Today the auction house is a bright and airy space, combining the grandeur, materials, and high quality workmanship of the past with a distinctly modern design aesthetic. As such, the Broughton Place saleroom is perfectly suited to Lyon & Turnbull’s style and we are proud to be the guardians of the grade-A listed property for future generations of architecture, art and antique lovers.</p>
                    <h6>Lyon & Turnbull Ltd | 33 Broughton Place, Edinburgh, EH1 3RR | Registered in Scotland No: 191166</h6></div>
            </div>
            <Footer />
        </div>
    );
});

export default About;