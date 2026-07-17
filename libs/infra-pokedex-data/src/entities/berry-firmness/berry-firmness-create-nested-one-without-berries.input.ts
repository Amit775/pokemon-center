import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFirmnessCreateWithoutBerriesInput } from './berry-firmness-create-without-berries.input';
import { Type } from 'class-transformer';
import { BerryFirmnessCreateOrConnectWithoutBerriesInput } from './berry-firmness-create-or-connect-without-berries.input';
import { Prisma } from '@pokemon-center/prisma';
import { BerryFirmnessWhereUniqueInput } from './berry-firmness-where-unique.input';

@InputType()
export class BerryFirmnessCreateNestedOneWithoutBerriesInput {

    @Field(() => BerryFirmnessCreateWithoutBerriesInput, {nullable:true})
    @Type(() => BerryFirmnessCreateWithoutBerriesInput)
    create?: Identity<BerryFirmnessCreateWithoutBerriesInput>;

    @Field(() => BerryFirmnessCreateOrConnectWithoutBerriesInput, {nullable:true})
    @Type(() => BerryFirmnessCreateOrConnectWithoutBerriesInput)
    connectOrCreate?: Identity<BerryFirmnessCreateOrConnectWithoutBerriesInput>;

    @Field(() => BerryFirmnessWhereUniqueInput, {nullable:true})
    @Type(() => BerryFirmnessWhereUniqueInput)
    connect?: Prisma.AtLeast<BerryFirmnessWhereUniqueInput, 'id'>;
}
