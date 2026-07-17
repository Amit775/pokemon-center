import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { LocationAreasCreateInput } from './location-areas-create.input';
import { LocationAreasUpdateInput } from './location-areas-update.input';

@ArgsType()
export class UpsertOneLocationAreasArgs {

    @Field(() => LocationAreasWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreasWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>;

    @Field(() => LocationAreasCreateInput, {nullable:false})
    @Type(() => LocationAreasCreateInput)
    create!: Identity<LocationAreasCreateInput>;

    @Field(() => LocationAreasUpdateInput, {nullable:false})
    @Type(() => LocationAreasUpdateInput)
    update!: Identity<LocationAreasUpdateInput>;
}
