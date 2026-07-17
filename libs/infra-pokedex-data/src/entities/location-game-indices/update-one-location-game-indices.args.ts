import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationGameIndicesUpdateInput } from './location-game-indices-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LocationGameIndicesWhereUniqueInput } from './location-game-indices-where-unique.input';

@ArgsType()
export class UpdateOneLocationGameIndicesArgs {

    @Field(() => LocationGameIndicesUpdateInput, {nullable:false})
    @Type(() => LocationGameIndicesUpdateInput)
    data!: LocationGameIndicesUpdateInput;

    @Field(() => LocationGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => LocationGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>;
}
