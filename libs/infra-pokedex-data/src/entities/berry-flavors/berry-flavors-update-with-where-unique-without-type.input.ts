import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { Type } from 'class-transformer';
import { BerryFlavorsUpdateWithoutTypeInput } from './berry-flavors-update-without-type.input';

@InputType()
export class BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput {

    @Field(() => BerryFlavorsWhereUniqueInput, {nullable:false})
    @Type(() => BerryFlavorsWhereUniqueInput)
    where!: Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>;

    @Field(() => BerryFlavorsUpdateWithoutTypeInput, {nullable:false})
    @Type(() => BerryFlavorsUpdateWithoutTypeInput)
    data!: BerryFlavorsUpdateWithoutTypeInput;
}
