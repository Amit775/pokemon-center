import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaAilmentsWhereInput } from './move-meta-ailments-where.input';

@InputType()
export class MoveMetaAilmentsNullableScalarRelationFilter {

    @Field(() => MoveMetaAilmentsWhereInput, {nullable:true})
    is?: MoveMetaAilmentsWhereInput;

    @Field(() => MoveMetaAilmentsWhereInput, {nullable:true})
    isNot?: MoveMetaAilmentsWhereInput;
}
