import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaAilmentsWhereInput } from './move-meta-ailments-where.input';

@InputType()
export class MoveMetaAilmentsScalarRelationFilter {

    @Field(() => MoveMetaAilmentsWhereInput, {nullable:true})
    is?: Identity<MoveMetaAilmentsWhereInput>;

    @Field(() => MoveMetaAilmentsWhereInput, {nullable:true})
    isNot?: Identity<MoveMetaAilmentsWhereInput>;
}
