import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LocationGameIndicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { LocationGameIndicesCreateInput } from './location-game-indices-create.input';
import { LocationGameIndicesUpdateInput } from './location-game-indices-update.input';

@ArgsType()
export class UpsertOneLocationGameIndicesArgs {

    @Field(() => LocationGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => LocationGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>;

    @Field(() => LocationGameIndicesCreateInput, {nullable:false})
    @Type(() => LocationGameIndicesCreateInput)
    create!: Identity<LocationGameIndicesCreateInput>;

    @Field(() => LocationGameIndicesUpdateInput, {nullable:false})
    @Type(() => LocationGameIndicesUpdateInput)
    update!: Identity<LocationGameIndicesUpdateInput>;
}
