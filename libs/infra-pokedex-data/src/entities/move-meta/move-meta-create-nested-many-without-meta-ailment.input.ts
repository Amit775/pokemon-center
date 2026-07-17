import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaCreateWithoutMetaAilmentInput } from './move-meta-create-without-meta-ailment.input';
import { Type } from 'class-transformer';
import { MoveMetaCreateOrConnectWithoutMetaAilmentInput } from './move-meta-create-or-connect-without-meta-ailment.input';
import type { Identity } from 'identity-type';
import { MoveMetaCreateManyMetaAilmentInputEnvelope } from './move-meta-create-many-meta-ailment-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';

@InputType()
export class MoveMetaCreateNestedManyWithoutMetaAilmentInput {

    @Field(() => [MoveMetaCreateWithoutMetaAilmentInput], {nullable:true})
    @Type(() => MoveMetaCreateWithoutMetaAilmentInput)
    create?: Array<MoveMetaCreateWithoutMetaAilmentInput>;

    @Field(() => [MoveMetaCreateOrConnectWithoutMetaAilmentInput], {nullable:true})
    @Type(() => MoveMetaCreateOrConnectWithoutMetaAilmentInput)
    connectOrCreate?: Array<MoveMetaCreateOrConnectWithoutMetaAilmentInput>;

    @Field(() => MoveMetaCreateManyMetaAilmentInputEnvelope, {nullable:true})
    @Type(() => MoveMetaCreateManyMetaAilmentInputEnvelope)
    createMany?: Identity<MoveMetaCreateManyMetaAilmentInputEnvelope>;

    @Field(() => [MoveMetaWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>>;
}
