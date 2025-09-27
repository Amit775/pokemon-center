import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveBattleStylesWhereUniqueInput } from './move-battle-styles-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMoveBattleStylesArgs {

    @Field(() => MoveBattleStylesWhereUniqueInput, {nullable:false})
    @Type(() => MoveBattleStylesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveBattleStylesWhereUniqueInput, 'id'>;
}
