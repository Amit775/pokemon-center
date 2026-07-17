import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { Type } from 'class-transformer';
import { MoveMetaUpdateWithoutMetaAilmentInput } from './move-meta-update-without-meta-ailment.input';
import { MoveMetaCreateWithoutMetaAilmentInput } from './move-meta-create-without-meta-ailment.input';

@InputType()
export class MoveMetaUpsertWithWhereUniqueWithoutMetaAilmentInput {

    @Field(() => MoveMetaWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;

    @Field(() => MoveMetaUpdateWithoutMetaAilmentInput, {nullable:false})
    @Type(() => MoveMetaUpdateWithoutMetaAilmentInput)
    update!: MoveMetaUpdateWithoutMetaAilmentInput;

    @Field(() => MoveMetaCreateWithoutMetaAilmentInput, {nullable:false})
    @Type(() => MoveMetaCreateWithoutMetaAilmentInput)
    create!: MoveMetaCreateWithoutMetaAilmentInput;
}
