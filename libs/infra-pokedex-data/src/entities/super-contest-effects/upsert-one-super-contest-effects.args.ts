import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { SuperContestEffectsWhereUniqueInput } from './super-contest-effects-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { SuperContestEffectsCreateInput } from './super-contest-effects-create.input';
import { SuperContestEffectsUpdateInput } from './super-contest-effects-update.input';

@ArgsType()
export class UpsertOneSuperContestEffectsArgs {

    @Field(() => SuperContestEffectsWhereUniqueInput, {nullable:false})
    @Type(() => SuperContestEffectsWhereUniqueInput)
    where!: Prisma.AtLeast<SuperContestEffectsWhereUniqueInput, 'id'>;

    @Field(() => SuperContestEffectsCreateInput, {nullable:false})
    @Type(() => SuperContestEffectsCreateInput)
    create!: Identity<SuperContestEffectsCreateInput>;

    @Field(() => SuperContestEffectsUpdateInput, {nullable:false})
    @Type(() => SuperContestEffectsUpdateInput)
    update!: Identity<SuperContestEffectsUpdateInput>;
}
