import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerryFirmnessWhereInput } from './berry-firmness-where.input';
import { Type } from 'class-transformer';
import { BerryFirmnessUpdateWithoutBerriesInput } from './berry-firmness-update-without-berries.input';

@InputType()
export class BerryFirmnessUpdateToOneWithWhereWithoutBerriesInput {

    @Field(() => BerryFirmnessWhereInput, {nullable:true})
    @Type(() => BerryFirmnessWhereInput)
    where?: BerryFirmnessWhereInput;

    @Field(() => BerryFirmnessUpdateWithoutBerriesInput, {nullable:false})
    @Type(() => BerryFirmnessUpdateWithoutBerriesInput)
    data!: BerryFirmnessUpdateWithoutBerriesInput;
}
