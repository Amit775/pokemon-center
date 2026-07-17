import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { SuperContestEffectsWhereUniqueInput } from './super-contest-effects-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneSuperContestEffectsArgs {

    @Field(() => SuperContestEffectsWhereUniqueInput, {nullable:false})
    @Type(() => SuperContestEffectsWhereUniqueInput)
    where!: Prisma.AtLeast<SuperContestEffectsWhereUniqueInput, 'id'>;
}
