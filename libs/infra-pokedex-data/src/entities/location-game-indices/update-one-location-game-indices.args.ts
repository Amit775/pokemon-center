import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationGameIndicesUpdateInput } from './location-game-indices-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { LocationGameIndicesWhereUniqueInput } from './location-game-indices-where-unique.input';

@ArgsType()
export class UpdateOneLocationGameIndicesArgs {

    @Field(() => LocationGameIndicesUpdateInput, {nullable:false})
    @Type(() => LocationGameIndicesUpdateInput)
    data!: Identity<LocationGameIndicesUpdateInput>;

    @Field(() => LocationGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => LocationGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>;
}
