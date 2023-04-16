import React, { Component } from 'react';
import { Cafeteria } from './Cafeteria';
import pic0 from './Picture/0.jpg';

export class FindCafeteria extends Component {
    static displayName = FindCafeteria.name;

    render() {
        return (

            <div className="gap">
                <Cafeteria picture={pic0} pictireName="โรงพระเทพ" name="โรงอาหารพระเทพ" location="3 ถ. ฉลองกรุง แขวงลำปลาทิว เขตลาดกระบัง กรุงเทพมหานคร 10520 (ใกล้ตึกพระเทพ, ตึก ECC)" locationMap={pic0} />
                <Cafeteria picture={pic0} pictireName="โรงพระเทพ" name="โรงอาหารพระเทพ" location="3 ถ. ฉลองกรุง แขวงลำปลาทิว เขตลาดกระบัง กรุงเทพมหานคร 10520 (ใกล้ตึกพระเทพ, ตึก ECC)" locationMap={pic0} />
            </div>

        );
    }
}
