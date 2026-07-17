import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFirmnessWhereInput } from './berry-firmness-where.input';
import { Type } from 'class-transformer';
import { BerryFirmnessUpdateWithoutBerriesInput } from './berry-firmness-update-without-berries.input';

@InputType()
export class BerryFirmnessUpdateToOneWithWhereWithoutBerriesInput {

    @Field(() => BerryFirmnessWhereInput, {nullable:true})
    @Type(() => BerryFirmnessWhereInput)
    where?: Identity<BerryFirmnessWhereInput>;

    @Field(() => BerryFirmnessUpdateWithoutBerriesInput, {nullable:false})
    @Type(() => BerryFirmnessUpdateWithoutBerriesInput)
    data!: Identity<BerryFirmnessUpdateWithoutBerriesInput>;
}
