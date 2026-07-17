import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveMetaAilmentsWhereUniqueInput } from './move-meta-ailments-where-unique.input';
import { Type } from 'class-transformer';
import { MoveMetaAilmentsCreateWithoutMetaInput } from './move-meta-ailments-create-without-meta.input';

@InputType()
export class MoveMetaAilmentsCreateOrConnectWithoutMetaInput {

    @Field(() => MoveMetaAilmentsWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaAilmentsWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaAilmentsWhereUniqueInput, 'id'>;

    @Field(() => MoveMetaAilmentsCreateWithoutMetaInput, {nullable:false})
    @Type(() => MoveMetaAilmentsCreateWithoutMetaInput)
    create!: MoveMetaAilmentsCreateWithoutMetaInput;
}
