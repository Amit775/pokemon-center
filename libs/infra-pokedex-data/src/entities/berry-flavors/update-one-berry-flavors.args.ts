import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFlavorsUpdateInput } from './berry-flavors-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';

@ArgsType()
export class UpdateOneBerryFlavorsArgs {

    @Field(() => BerryFlavorsUpdateInput, {nullable:false})
    @Type(() => BerryFlavorsUpdateInput)
    data!: Identity<BerryFlavorsUpdateInput>;

    @Field(() => BerryFlavorsWhereUniqueInput, {nullable:false})
    @Type(() => BerryFlavorsWhereUniqueInput)
    where!: Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>;
}
