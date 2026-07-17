import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveBattleStylesWhereUniqueInput } from './move-battle-styles-where-unique.input';
import { Type } from 'class-transformer';
import { MoveBattleStylesCreateInput } from './move-battle-styles-create.input';
import { MoveBattleStylesUpdateInput } from './move-battle-styles-update.input';

@ArgsType()
export class UpsertOneMoveBattleStylesArgs {

    @Field(() => MoveBattleStylesWhereUniqueInput, {nullable:false})
    @Type(() => MoveBattleStylesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveBattleStylesWhereUniqueInput, 'id'>;

    @Field(() => MoveBattleStylesCreateInput, {nullable:false})
    @Type(() => MoveBattleStylesCreateInput)
    create!: MoveBattleStylesCreateInput;

    @Field(() => MoveBattleStylesUpdateInput, {nullable:false})
    @Type(() => MoveBattleStylesUpdateInput)
    update!: MoveBattleStylesUpdateInput;
}
