import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeGameIndicesWhereInput } from './type-game-indices-where.input';
import { Type } from 'class-transformer';
import { TypeGameIndicesOrderByWithRelationInput } from './type-game-indices-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TypeGameIndicesWhereUniqueInput } from './type-game-indices-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TypeGameIndicesScalarFieldEnum } from './type-game-indices-scalar-field.enum';

@ArgsType()
export class FindManyTypeGameIndicesArgs {

    @Field(() => TypeGameIndicesWhereInput, {nullable:true})
    @Type(() => TypeGameIndicesWhereInput)
    where?: TypeGameIndicesWhereInput;

    @Field(() => [TypeGameIndicesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TypeGameIndicesOrderByWithRelationInput>;

    @Field(() => TypeGameIndicesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TypeGameIndicesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TypeGameIndicesScalarFieldEnum}`>;
}
