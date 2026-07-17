import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveMetaUpdateWithoutMetaAilmentInput } from './move-meta-update-without-meta-ailment.input';

@InputType()
export class MoveMetaUpdateWithWhereUniqueWithoutMetaAilmentInput {

    @Field(() => MoveMetaWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;

    @Field(() => MoveMetaUpdateWithoutMetaAilmentInput, {nullable:false})
    @Type(() => MoveMetaUpdateWithoutMetaAilmentInput)
    data!: Identity<MoveMetaUpdateWithoutMetaAilmentInput>;
}
