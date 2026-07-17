import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaAilmentsWhereInput } from './move-meta-ailments-where.input';
import { Type } from 'class-transformer';
import { MoveMetaAilmentsUpdateWithoutMetaInput } from './move-meta-ailments-update-without-meta.input';

@InputType()
export class MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput {

    @Field(() => MoveMetaAilmentsWhereInput, {nullable:true})
    @Type(() => MoveMetaAilmentsWhereInput)
    where?: MoveMetaAilmentsWhereInput;

    @Field(() => MoveMetaAilmentsUpdateWithoutMetaInput, {nullable:false})
    @Type(() => MoveMetaAilmentsUpdateWithoutMetaInput)
    data!: MoveMetaAilmentsUpdateWithoutMetaInput;
}
