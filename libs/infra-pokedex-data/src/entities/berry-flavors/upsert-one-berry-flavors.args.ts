import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { BerryFlavorsCreateInput } from './berry-flavors-create.input';
import { BerryFlavorsUpdateInput } from './berry-flavors-update.input';

@ArgsType()
export class UpsertOneBerryFlavorsArgs {

    @Field(() => BerryFlavorsWhereUniqueInput, {nullable:false})
    @Type(() => BerryFlavorsWhereUniqueInput)
    where!: Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>;

    @Field(() => BerryFlavorsCreateInput, {nullable:false})
    @Type(() => BerryFlavorsCreateInput)
    create!: Identity<BerryFlavorsCreateInput>;

    @Field(() => BerryFlavorsUpdateInput, {nullable:false})
    @Type(() => BerryFlavorsUpdateInput)
    update!: Identity<BerryFlavorsUpdateInput>;
}
