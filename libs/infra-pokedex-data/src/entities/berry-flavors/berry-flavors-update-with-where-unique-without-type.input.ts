import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { BerryFlavorsUpdateWithoutTypeInput } from './berry-flavors-update-without-type.input';

@InputType()
export class BerryFlavorsUpdateWithWhereUniqueWithoutTypeInput {

    @Field(() => BerryFlavorsWhereUniqueInput, {nullable:false})
    @Type(() => BerryFlavorsWhereUniqueInput)
    where!: Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>;

    @Field(() => BerryFlavorsUpdateWithoutTypeInput, {nullable:false})
    @Type(() => BerryFlavorsUpdateWithoutTypeInput)
    data!: Identity<BerryFlavorsUpdateWithoutTypeInput>;
}
