import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveMetaAilmentsWhereUniqueInput } from './move-meta-ailments-where-unique.input';
import { Type } from 'class-transformer';
import { MoveMetaAilmentsCreateInput } from './move-meta-ailments-create.input';
import { MoveMetaAilmentsUpdateInput } from './move-meta-ailments-update.input';

@ArgsType()
export class UpsertOneMoveMetaAilmentsArgs {

    @Field(() => MoveMetaAilmentsWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaAilmentsWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaAilmentsWhereUniqueInput, 'id'>;

    @Field(() => MoveMetaAilmentsCreateInput, {nullable:false})
    @Type(() => MoveMetaAilmentsCreateInput)
    create!: MoveMetaAilmentsCreateInput;

    @Field(() => MoveMetaAilmentsUpdateInput, {nullable:false})
    @Type(() => MoveMetaAilmentsUpdateInput)
    update!: MoveMetaAilmentsUpdateInput;
}
