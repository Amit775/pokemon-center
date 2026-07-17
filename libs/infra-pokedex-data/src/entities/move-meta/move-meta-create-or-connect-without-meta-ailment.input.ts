import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveMetaCreateWithoutMetaAilmentInput } from './move-meta-create-without-meta-ailment.input';

@InputType()
export class MoveMetaCreateOrConnectWithoutMetaAilmentInput {

    @Field(() => MoveMetaWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;

    @Field(() => MoveMetaCreateWithoutMetaAilmentInput, {nullable:false})
    @Type(() => MoveMetaCreateWithoutMetaAilmentInput)
    create!: Identity<MoveMetaCreateWithoutMetaAilmentInput>;
}
