import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacteristicsWhereInput } from './characteristics-where.input';
import { Type } from 'class-transformer';
import { CharacteristicsOrderByWithRelationInput } from './characteristics-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CharacteristicsWhereUniqueInput } from './characteristics-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CharacteristicsScalarFieldEnum } from './characteristics-scalar-field.enum';

@ArgsType()
export class FindManyCharacteristicsArgs {

    @Field(() => CharacteristicsWhereInput, {nullable:true})
    @Type(() => CharacteristicsWhereInput)
    where?: CharacteristicsWhereInput;

    @Field(() => [CharacteristicsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CharacteristicsOrderByWithRelationInput>;

    @Field(() => CharacteristicsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CharacteristicsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CharacteristicsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CharacteristicsScalarFieldEnum}`>;
}
