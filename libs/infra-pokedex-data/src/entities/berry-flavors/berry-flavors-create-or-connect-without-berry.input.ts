import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { BerryFlavorsCreateWithoutBerryInput } from './berry-flavors-create-without-berry.input';

@InputType()
export class BerryFlavorsCreateOrConnectWithoutBerryInput {

    @Field(() => BerryFlavorsWhereUniqueInput, {nullable:false})
    @Type(() => BerryFlavorsWhereUniqueInput)
    where!: Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>;

    @Field(() => BerryFlavorsCreateWithoutBerryInput, {nullable:false})
    @Type(() => BerryFlavorsCreateWithoutBerryInput)
    create!: Identity<BerryFlavorsCreateWithoutBerryInput>;
}
