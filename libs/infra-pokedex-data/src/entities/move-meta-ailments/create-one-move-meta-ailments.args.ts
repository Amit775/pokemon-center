import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaAilmentsCreateInput } from './move-meta-ailments-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMoveMetaAilmentsArgs {

    @Field(() => MoveMetaAilmentsCreateInput, {nullable:false})
    @Type(() => MoveMetaAilmentsCreateInput)
    data!: Identity<MoveMetaAilmentsCreateInput>;
}
