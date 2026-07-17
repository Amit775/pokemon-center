import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { Type } from 'class-transformer';
import { BerryFlavorsUpdateWithoutBerryInput } from './berry-flavors-update-without-berry.input';
import { BerryFlavorsCreateWithoutBerryInput } from './berry-flavors-create-without-berry.input';

@InputType()
export class BerryFlavorsUpsertWithWhereUniqueWithoutBerryInput {

    @Field(() => BerryFlavorsWhereUniqueInput, {nullable:false})
    @Type(() => BerryFlavorsWhereUniqueInput)
    where!: Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>;

    @Field(() => BerryFlavorsUpdateWithoutBerryInput, {nullable:false})
    @Type(() => BerryFlavorsUpdateWithoutBerryInput)
    update!: BerryFlavorsUpdateWithoutBerryInput;

    @Field(() => BerryFlavorsCreateWithoutBerryInput, {nullable:false})
    @Type(() => BerryFlavorsCreateWithoutBerryInput)
    create!: BerryFlavorsCreateWithoutBerryInput;
}
