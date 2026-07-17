import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreasUpdateInput } from './location-areas-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';

@ArgsType()
export class UpdateOneLocationAreasArgs {

    @Field(() => LocationAreasUpdateInput, {nullable:false})
    @Type(() => LocationAreasUpdateInput)
    data!: Identity<LocationAreasUpdateInput>;

    @Field(() => LocationAreasWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreasWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>;
}
