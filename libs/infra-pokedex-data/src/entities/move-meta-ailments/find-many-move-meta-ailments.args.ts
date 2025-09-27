import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaAilmentsWhereInput } from './move-meta-ailments-where.input';
import { Type } from 'class-transformer';
import { MoveMetaAilmentsOrderByWithRelationInput } from './move-meta-ailments-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MoveMetaAilmentsWhereUniqueInput } from './move-meta-ailments-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveMetaAilmentsScalarFieldEnum } from './move-meta-ailments-scalar-field.enum';

@ArgsType()
export class FindManyMoveMetaAilmentsArgs {

    @Field(() => MoveMetaAilmentsWhereInput, {nullable:true})
    @Type(() => MoveMetaAilmentsWhereInput)
    where?: MoveMetaAilmentsWhereInput;

    @Field(() => [MoveMetaAilmentsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveMetaAilmentsOrderByWithRelationInput>;

    @Field(() => MoveMetaAilmentsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveMetaAilmentsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MoveMetaAilmentsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MoveMetaAilmentsScalarFieldEnum}`>;
}
