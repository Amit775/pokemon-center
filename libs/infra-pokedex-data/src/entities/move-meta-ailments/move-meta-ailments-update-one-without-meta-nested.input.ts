import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaAilmentsCreateWithoutMetaInput } from './move-meta-ailments-create-without-meta.input';
import { Type } from 'class-transformer';
import { MoveMetaAilmentsCreateOrConnectWithoutMetaInput } from './move-meta-ailments-create-or-connect-without-meta.input';
import { MoveMetaAilmentsUpsertWithoutMetaInput } from './move-meta-ailments-upsert-without-meta.input';
import { MoveMetaAilmentsWhereInput } from './move-meta-ailments-where.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaAilmentsWhereUniqueInput } from './move-meta-ailments-where-unique.input';
import { MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput } from './move-meta-ailments-update-to-one-with-where-without-meta.input';

@InputType()
export class MoveMetaAilmentsUpdateOneWithoutMetaNestedInput {

    @Field(() => MoveMetaAilmentsCreateWithoutMetaInput, {nullable:true})
    @Type(() => MoveMetaAilmentsCreateWithoutMetaInput)
    create?: Identity<MoveMetaAilmentsCreateWithoutMetaInput>;

    @Field(() => MoveMetaAilmentsCreateOrConnectWithoutMetaInput, {nullable:true})
    @Type(() => MoveMetaAilmentsCreateOrConnectWithoutMetaInput)
    connectOrCreate?: Identity<MoveMetaAilmentsCreateOrConnectWithoutMetaInput>;

    @Field(() => MoveMetaAilmentsUpsertWithoutMetaInput, {nullable:true})
    @Type(() => MoveMetaAilmentsUpsertWithoutMetaInput)
    upsert?: Identity<MoveMetaAilmentsUpsertWithoutMetaInput>;

    @Field(() => MoveMetaAilmentsWhereInput, {nullable:true})
    @Type(() => MoveMetaAilmentsWhereInput)
    disconnect?: Identity<MoveMetaAilmentsWhereInput>;

    @Field(() => MoveMetaAilmentsWhereInput, {nullable:true})
    @Type(() => MoveMetaAilmentsWhereInput)
    delete?: Identity<MoveMetaAilmentsWhereInput>;

    @Field(() => MoveMetaAilmentsWhereUniqueInput, {nullable:true})
    @Type(() => MoveMetaAilmentsWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveMetaAilmentsWhereUniqueInput, 'id'>;

    @Field(() => MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput, {nullable:true})
    @Type(() => MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput)
    update?: Identity<MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput>;
}
