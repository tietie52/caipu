import React, { useState } from 'react';

const about = () => {
    return(
        <div className="p-4 bg-gary-100  min-h-screen">
            {/*平台背景*/}
            <h2 className="text-3xl font-bold mb-6 text-back">一、平台背景</h2>
            <ul className="list-disc text-2xl pl-9 mb-4">
                <li>随着人们生活品质提升与烹饪兴趣高涨，小项目菜谱平台应运而生。它聚焦碎片化烹饪需求，为用户提供快速易学、适配家庭场景的百字精简菜谱。整合专业厨师与美食达人资源，以图文、短视频形式呈现，填补快节奏生活中便捷烹饪指导的市场空白，助力用户轻松解锁美味。</li>
            </ul>

            {/*开发团队信息*/}
            <h3 className="text-3xl font-bold mb-6 text-black">二、团队开发信息</h3>
            <ul className="list-disc text-2xl pl-9 mb-4">
                <li>
                    团队名称：第三小组
                </li>
                <li>
                    团队成员：何芯轶、毛文慧、钟馨娜、覃林祥、周小雯、陈婷婷、黄芮莹
                </li>
                <li>
                    首页：何芯轶 
                </li>
                <li>
                    节日特辑；毛文慧
                </li>
                <li>
                    今日推荐：钟馨娜
                </li>
                <li>
                    分类菜谱：覃林祥
                </li>
                <li>
                    我的收藏：陈婷婷
                </li>
                <li>
                    饮食咨询：黄芮莹
                </li>
                <li>
                    关于我们：周小雯
                </li>
                
            </ul>

            {/*版权声明*/}
            <h4 className="text-3xl font-bold mb-6 text-black">三、版权声明</h4>
            <ul className="list-disc text-2xl pl-9 mb-4">
                <li>本平台所有菜谱内容、图文及视频均由专业厨师、美食达人原创或经合法授权发布，受《中华人民共和国著作权法》等相关法律法规保护。未经书面许可，任何单位和个人不得擅自复制、传播、改编或用于商业用途。若发现侵权行为，平台将依法追究责任，维护创作者合法权益。</li>
            </ul>

            {/*服务条款*/}
            <h5 className="text-3xl font-bold mb-6 text-black">四、服务条款</h5>
            <ul className="list-disc text-2xl pl-9 mb-4">
                <li>1. 使用规范：用户需遵守法律法规及平台规则，不得利用平台发布违法、侵权或有害信息，禁止恶意刷评、作弊等行为。</li>
                <li>2. 账号管理：用户对账号密码安全负责，不得转借、共享，若账号异常需及时联系平台处理。</li>
                <li>3. 内容服务：平台提供菜谱等内容，仅作参考，因使用内容产生的风险由用户自行承担。</li>
                <li>4. 隐私保护：平台依法保护用户信息，未经同意不向第三方披露，法律法规另有规定除外。</li>
                <li>5. 平台权利：有权根据运营需求调整服务，必要时可中断、终止部分或全部服务。</li>
                <li>6. 责任限制：非平台故意或重大过失，对用户使用服务的损失不承担赔偿责任。</li>
                <li>7. 协议变更：平台可更新服务条款，用户继续使用即视为接受新条款。</li>
            </ul>

            {/*平台愿景与使命*/}
            <h6 className="text-3xl font-bold mb-6 text-black">五、平台愿景与使命</h6>
            <ul className="list-disc text-2xl pl-9 mb-4">
                <li>愿景：成为全球领先的轻量化美食生活平台，让每个人随时随地都能轻松享受烹饪乐趣，用精简菜谱点亮生活的每一顿烟火日常。</li>
                <li>使命：以百字精编菜谱为纽带，打破烹饪门槛，传递便捷、创意的美食文化，赋能用户快速掌握烹饪技巧，为生活注入更多美味与温度。t</li>
            </ul>
        </div>
    

)}
export default about;