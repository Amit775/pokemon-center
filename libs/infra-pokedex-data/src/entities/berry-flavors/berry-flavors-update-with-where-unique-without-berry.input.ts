import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { Type } from 'class-transformer';
import { BerryFlavorsUpdateWithoutBerryInput } from './berry-flavors-update-without-berry.input';

@InputType()
export class BerryFlavorsUpdateWithWhereUniqueWithoutBerryInput {

    @Field(() => BerryFlavorsWhereUniqueInput, {nullable:false})
    @Type(() => BerryFlavorsWhereUniqueInput)
    where!: Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>;

    @Field(() => BerryFlavorsUpdateWithoutBerryInput, {nullable:false})
    @Type(() => BerryFlavorsUpdateWithoutBerryInput)
    data!: BerryFlavorsUpdateWithoutBerryInput;
}
