import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFirmnessUpdateWithoutBerriesInput } from './berry-firmness-update-without-berries.input';
import { Type } from 'class-transformer';
import { BerryFirmnessCreateWithoutBerriesInput } from './berry-firmness-create-without-berries.input';
import { BerryFirmnessWhereInput } from './berry-firmness-where.input';

@InputType()
export class BerryFirmnessUpsertWithoutBerriesInput {

    @Field(() => BerryFirmnessUpdateWithoutBerriesInput, {nullable:false})
    @Type(() => BerryFirmnessUpdateWithoutBerriesInput)
    update!: Identity<BerryFirmnessUpdateWithoutBerriesInput>;

    @Field(() => BerryFirmnessCreateWithoutBerriesInput, {nullable:false})
    @Type(() => BerryFirmnessCreateWithoutBerriesInput)
    create!: Identity<BerryFirmnessCreateWithoutBerriesInput>;

    @Field(() => BerryFirmnessWhereInput, {nullable:true})
    @Type(() => BerryFirmnessWhereInput)
    where?: Identity<BerryFirmnessWhereInput>;
}
