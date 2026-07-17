import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveBattleStylesUpdateInput } from './move-battle-styles-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { MoveBattleStylesWhereUniqueInput } from './move-battle-styles-where-unique.input';

@ArgsType()
export class UpdateOneMoveBattleStylesArgs {

    @Field(() => MoveBattleStylesUpdateInput, {nullable:false})
    @Type(() => MoveBattleStylesUpdateInput)
    data!: Identity<MoveBattleStylesUpdateInput>;

    @Field(() => MoveBattleStylesWhereUniqueInput, {nullable:false})
    @Type(() => MoveBattleStylesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveBattleStylesWhereUniqueInput, 'id'>;
}
