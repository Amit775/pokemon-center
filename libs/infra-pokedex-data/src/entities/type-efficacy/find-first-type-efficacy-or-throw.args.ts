import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeEfficacyWhereInput } from './type-efficacy-where.input';
import { Type } from 'class-transformer';
import { TypeEfficacyOrderByWithRelationInput } from './type-efficacy-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TypeEfficacyWhereUniqueInput } from './type-efficacy-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TypeEfficacyScalarFieldEnum } from './type-efficacy-scalar-field.enum';

@ArgsType()
export class FindFirstTypeEfficacyOrThrowArgs {

    @Field(() => TypeEfficacyWhereInput, {nullable:true})
    @Type(() => TypeEfficacyWhereInput)
    where?: TypeEfficacyWhereInput;

    @Field(() => [TypeEfficacyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TypeEfficacyOrderByWithRelationInput>;

    @Field(() => TypeEfficacyWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TypeEfficacyWhereUniqueInput, 'damage_type_id_target_type_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TypeEfficacyScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TypeEfficacyScalarFieldEnum}`>;
}
