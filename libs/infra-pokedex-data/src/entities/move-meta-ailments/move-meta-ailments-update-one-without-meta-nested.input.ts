import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaAilmentsCreateWithoutMetaInput } from './move-meta-ailments-create-without-meta.input';
import { Type } from 'class-transformer';
import { MoveMetaAilmentsCreateOrConnectWithoutMetaInput } from './move-meta-ailments-create-or-connect-without-meta.input';
import { MoveMetaAilmentsUpsertWithoutMetaInput } from './move-meta-ailments-upsert-without-meta.input';
import { MoveMetaAilmentsWhereInput } from './move-meta-ailments-where.input';
import { Prisma } from '@prisma/client';
import { MoveMetaAilmentsWhereUniqueInput } from './move-meta-ailments-where-unique.input';
import { MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput } from './move-meta-ailments-update-to-one-with-where-without-meta.input';

@InputType()
export class MoveMetaAilmentsUpdateOneWithoutMetaNestedInput {

    @Field(() => MoveMetaAilmentsCreateWithoutMetaInput, {nullable:true})
    @Type(() => MoveMetaAilmentsCreateWithoutMetaInput)
    create?: MoveMetaAilmentsCreateWithoutMetaInput;

    @Field(() => MoveMetaAilmentsCreateOrConnectWithoutMetaInput, {nullable:true})
    @Type(() => MoveMetaAilmentsCreateOrConnectWithoutMetaInput)
    connectOrCreate?: MoveMetaAilmentsCreateOrConnectWithoutMetaInput;

    @Field(() => MoveMetaAilmentsUpsertWithoutMetaInput, {nullable:true})
    @Type(() => MoveMetaAilmentsUpsertWithoutMetaInput)
    upsert?: MoveMetaAilmentsUpsertWithoutMetaInput;

    @Field(() => MoveMetaAilmentsWhereInput, {nullable:true})
    @Type(() => MoveMetaAilmentsWhereInput)
    disconnect?: MoveMetaAilmentsWhereInput;

    @Field(() => MoveMetaAilmentsWhereInput, {nullable:true})
    @Type(() => MoveMetaAilmentsWhereInput)
    delete?: MoveMetaAilmentsWhereInput;

    @Field(() => MoveMetaAilmentsWhereUniqueInput, {nullable:true})
    @Type(() => MoveMetaAilmentsWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveMetaAilmentsWhereUniqueInput, 'id'>;

    @Field(() => MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput, {nullable:true})
    @Type(() => MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput)
    update?: MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput;
}
