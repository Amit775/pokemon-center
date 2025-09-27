import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationGameIndicesWhereInput } from './location-game-indices-where.input';
import { Type } from 'class-transformer';
import { LocationGameIndicesOrderByWithRelationInput } from './location-game-indices-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LocationGameIndicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LocationGameIndicesScalarFieldEnum } from './location-game-indices-scalar-field.enum';

@ArgsType()
export class FindFirstLocationGameIndicesArgs {

    @Field(() => LocationGameIndicesWhereInput, {nullable:true})
    @Type(() => LocationGameIndicesWhereInput)
    where?: LocationGameIndicesWhereInput;

    @Field(() => [LocationGameIndicesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LocationGameIndicesOrderByWithRelationInput>;

    @Field(() => LocationGameIndicesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LocationGameIndicesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${LocationGameIndicesScalarFieldEnum}`>;
}
