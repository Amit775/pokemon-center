import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EvolutionTriggersWhereUniqueInput } from './evolution-triggers-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EvolutionTriggersCreateInput } from './evolution-triggers-create.input';
import { EvolutionTriggersUpdateInput } from './evolution-triggers-update.input';

@ArgsType()
export class UpsertOneEvolutionTriggersArgs {

    @Field(() => EvolutionTriggersWhereUniqueInput, {nullable:false})
    @Type(() => EvolutionTriggersWhereUniqueInput)
    where!: Prisma.AtLeast<EvolutionTriggersWhereUniqueInput, 'id'>;

    @Field(() => EvolutionTriggersCreateInput, {nullable:false})
    @Type(() => EvolutionTriggersCreateInput)
    create!: Identity<EvolutionTriggersCreateInput>;

    @Field(() => EvolutionTriggersUpdateInput, {nullable:false})
    @Type(() => EvolutionTriggersUpdateInput)
    update!: Identity<EvolutionTriggersUpdateInput>;
}
