import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { Type } from 'class-transformer';
import { BerryFlavorsUpdateWithoutTypeInput } from './berry-flavors-update-without-type.input';
import { BerryFlavorsCreateWithoutTypeInput } from './berry-flavors-create-without-type.input';

@InputType()
export class BerryFlavorsUpsertWithWhereUniqueWithoutTypeInput {

    @Field(() => BerryFlavorsWhereUniqueInput, {nullable:false})
    @Type(() => BerryFlavorsWhereUniqueInput)
    where!: Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>;

    @Field(() => BerryFlavorsUpdateWithoutTypeInput, {nullable:false})
    @Type(() => BerryFlavorsUpdateWithoutTypeInput)
    update!: BerryFlavorsUpdateWithoutTypeInput;

    @Field(() => BerryFlavorsCreateWithoutTypeInput, {nullable:false})
    @Type(() => BerryFlavorsCreateWithoutTypeInput)
    create!: BerryFlavorsCreateWithoutTypeInput;
}
