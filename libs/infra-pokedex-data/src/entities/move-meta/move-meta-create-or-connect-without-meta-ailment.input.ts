import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { Type } from 'class-transformer';
import { MoveMetaCreateWithoutMetaAilmentInput } from './move-meta-create-without-meta-ailment.input';

@InputType()
export class MoveMetaCreateOrConnectWithoutMetaAilmentInput {

    @Field(() => MoveMetaWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;

    @Field(() => MoveMetaCreateWithoutMetaAilmentInput, {nullable:false})
    @Type(() => MoveMetaCreateWithoutMetaAilmentInput)
    create!: MoveMetaCreateWithoutMetaAilmentInput;
}
