import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaAilmentsUpdateInput } from './move-meta-ailments-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaAilmentsWhereUniqueInput } from './move-meta-ailments-where-unique.input';

@ArgsType()
export class UpdateOneMoveMetaAilmentsArgs {

    @Field(() => MoveMetaAilmentsUpdateInput, {nullable:false})
    @Type(() => MoveMetaAilmentsUpdateInput)
    data!: Identity<MoveMetaAilmentsUpdateInput>;

    @Field(() => MoveMetaAilmentsWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaAilmentsWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaAilmentsWhereUniqueInput, 'id'>;
}
