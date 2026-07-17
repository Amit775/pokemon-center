import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaCreateWithoutMetaAilmentInput } from './move-meta-create-without-meta-ailment.input';
import { Type } from 'class-transformer';
import { MoveMetaCreateOrConnectWithoutMetaAilmentInput } from './move-meta-create-or-connect-without-meta-ailment.input';
import { MoveMetaUpsertWithWhereUniqueWithoutMetaAilmentInput } from './move-meta-upsert-with-where-unique-without-meta-ailment.input';
import type { Identity } from 'identity-type';
import { MoveMetaCreateManyMetaAilmentInputEnvelope } from './move-meta-create-many-meta-ailment-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { MoveMetaUpdateWithWhereUniqueWithoutMetaAilmentInput } from './move-meta-update-with-where-unique-without-meta-ailment.input';
import { MoveMetaUpdateManyWithWhereWithoutMetaAilmentInput } from './move-meta-update-many-with-where-without-meta-ailment.input';
import { MoveMetaScalarWhereInput } from './move-meta-scalar-where.input';

@InputType()
export class MoveMetaUpdateManyWithoutMetaAilmentNestedInput {

    @Field(() => [MoveMetaCreateWithoutMetaAilmentInput], {nullable:true})
    @Type(() => MoveMetaCreateWithoutMetaAilmentInput)
    create?: Array<MoveMetaCreateWithoutMetaAilmentInput>;

    @Field(() => [MoveMetaCreateOrConnectWithoutMetaAilmentInput], {nullable:true})
    @Type(() => MoveMetaCreateOrConnectWithoutMetaAilmentInput)
    connectOrCreate?: Array<MoveMetaCreateOrConnectWithoutMetaAilmentInput>;

    @Field(() => [MoveMetaUpsertWithWhereUniqueWithoutMetaAilmentInput], {nullable:true})
    @Type(() => MoveMetaUpsertWithWhereUniqueWithoutMetaAilmentInput)
    upsert?: Array<MoveMetaUpsertWithWhereUniqueWithoutMetaAilmentInput>;

    @Field(() => MoveMetaCreateManyMetaAilmentInputEnvelope, {nullable:true})
    @Type(() => MoveMetaCreateManyMetaAilmentInputEnvelope)
    createMany?: Identity<MoveMetaCreateManyMetaAilmentInputEnvelope>;

    @Field(() => [MoveMetaWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>>;

    @Field(() => [MoveMetaWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>>;

    @Field(() => [MoveMetaWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>>;

    @Field(() => [MoveMetaWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>>;

    @Field(() => [MoveMetaUpdateWithWhereUniqueWithoutMetaAilmentInput], {nullable:true})
    @Type(() => MoveMetaUpdateWithWhereUniqueWithoutMetaAilmentInput)
    update?: Array<MoveMetaUpdateWithWhereUniqueWithoutMetaAilmentInput>;

    @Field(() => [MoveMetaUpdateManyWithWhereWithoutMetaAilmentInput], {nullable:true})
    @Type(() => MoveMetaUpdateManyWithWhereWithoutMetaAilmentInput)
    updateMany?: Array<MoveMetaUpdateManyWithWhereWithoutMetaAilmentInput>;

    @Field(() => [MoveMetaScalarWhereInput], {nullable:true})
    @Type(() => MoveMetaScalarWhereInput)
    deleteMany?: Array<MoveMetaScalarWhereInput>;
}
