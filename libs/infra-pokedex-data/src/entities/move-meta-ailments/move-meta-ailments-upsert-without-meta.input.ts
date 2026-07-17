import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaAilmentsUpdateWithoutMetaInput } from './move-meta-ailments-update-without-meta.input';
import { Type } from 'class-transformer';
import { MoveMetaAilmentsCreateWithoutMetaInput } from './move-meta-ailments-create-without-meta.input';
import { MoveMetaAilmentsWhereInput } from './move-meta-ailments-where.input';

@InputType()
export class MoveMetaAilmentsUpsertWithoutMetaInput {

    @Field(() => MoveMetaAilmentsUpdateWithoutMetaInput, {nullable:false})
    @Type(() => MoveMetaAilmentsUpdateWithoutMetaInput)
    update!: MoveMetaAilmentsUpdateWithoutMetaInput;

    @Field(() => MoveMetaAilmentsCreateWithoutMetaInput, {nullable:false})
    @Type(() => MoveMetaAilmentsCreateWithoutMetaInput)
    create!: MoveMetaAilmentsCreateWithoutMetaInput;

    @Field(() => MoveMetaAilmentsWhereInput, {nullable:true})
    @Type(() => MoveMetaAilmentsWhereInput)
    where?: MoveMetaAilmentsWhereInput;
}
