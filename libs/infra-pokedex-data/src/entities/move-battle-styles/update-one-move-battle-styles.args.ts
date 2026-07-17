import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveBattleStylesUpdateInput } from './move-battle-styles-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MoveBattleStylesWhereUniqueInput } from './move-battle-styles-where-unique.input';

@ArgsType()
export class UpdateOneMoveBattleStylesArgs {

    @Field(() => MoveBattleStylesUpdateInput, {nullable:false})
    @Type(() => MoveBattleStylesUpdateInput)
    data!: MoveBattleStylesUpdateInput;

    @Field(() => MoveBattleStylesWhereUniqueInput, {nullable:false})
    @Type(() => MoveBattleStylesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveBattleStylesWhereUniqueInput, 'id'>;
}
