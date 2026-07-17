import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaAilmentsCreateWithoutMetaInput } from './move-meta-ailments-create-without-meta.input';
import { Type } from 'class-transformer';
import { MoveMetaAilmentsCreateOrConnectWithoutMetaInput } from './move-meta-ailments-create-or-connect-without-meta.input';
import { Prisma } from '@prisma/client';
import { MoveMetaAilmentsWhereUniqueInput } from './move-meta-ailments-where-unique.input';

@InputType()
export class MoveMetaAilmentsCreateNestedOneWithoutMetaInput {

    @Field(() => MoveMetaAilmentsCreateWithoutMetaInput, {nullable:true})
    @Type(() => MoveMetaAilmentsCreateWithoutMetaInput)
    create?: MoveMetaAilmentsCreateWithoutMetaInput;

    @Field(() => MoveMetaAilmentsCreateOrConnectWithoutMetaInput, {nullable:true})
    @Type(() => MoveMetaAilmentsCreateOrConnectWithoutMetaInput)
    connectOrCreate?: MoveMetaAilmentsCreateOrConnectWithoutMetaInput;

    @Field(() => MoveMetaAilmentsWhereUniqueInput, {nullable:true})
    @Type(() => MoveMetaAilmentsWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveMetaAilmentsWhereUniqueInput, 'id'>;
}
