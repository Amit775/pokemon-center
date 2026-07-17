import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { BerryFirmnessWhereUniqueInput } from './berry-firmness-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { BerryFirmnessCreateWithoutBerriesInput } from './berry-firmness-create-without-berries.input';

@InputType()
export class BerryFirmnessCreateOrConnectWithoutBerriesInput {

    @Field(() => BerryFirmnessWhereUniqueInput, {nullable:false})
    @Type(() => BerryFirmnessWhereUniqueInput)
    where!: Prisma.AtLeast<BerryFirmnessWhereUniqueInput, 'id'>;

    @Field(() => BerryFirmnessCreateWithoutBerriesInput, {nullable:false})
    @Type(() => BerryFirmnessCreateWithoutBerriesInput)
    create!: Identity<BerryFirmnessCreateWithoutBerriesInput>;
}
