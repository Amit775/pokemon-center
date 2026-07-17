import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SuperContestEffectsUpdateInput } from './super-contest-effects-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SuperContestEffectsWhereUniqueInput } from './super-contest-effects-where-unique.input';

@ArgsType()
export class UpdateOneSuperContestEffectsArgs {

    @Field(() => SuperContestEffectsUpdateInput, {nullable:false})
    @Type(() => SuperContestEffectsUpdateInput)
    data!: SuperContestEffectsUpdateInput;

    @Field(() => SuperContestEffectsWhereUniqueInput, {nullable:false})
    @Type(() => SuperContestEffectsWhereUniqueInput)
    where!: Prisma.AtLeast<SuperContestEffectsWhereUniqueInput, 'id'>;
}
