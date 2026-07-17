import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaAilmentsUpdateManyMutationInput } from './move-meta-ailments-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MoveMetaAilmentsWhereInput } from './move-meta-ailments-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMoveMetaAilmentsArgs {

    @Field(() => MoveMetaAilmentsUpdateManyMutationInput, {nullable:false})
    @Type(() => MoveMetaAilmentsUpdateManyMutationInput)
    data!: MoveMetaAilmentsUpdateManyMutationInput;

    @Field(() => MoveMetaAilmentsWhereInput, {nullable:true})
    @Type(() => MoveMetaAilmentsWhereInput)
    where?: MoveMetaAilmentsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
