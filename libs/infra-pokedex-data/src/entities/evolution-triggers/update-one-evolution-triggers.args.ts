import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EvolutionTriggersUpdateInput } from './evolution-triggers-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EvolutionTriggersWhereUniqueInput } from './evolution-triggers-where-unique.input';

@ArgsType()
export class UpdateOneEvolutionTriggersArgs {

    @Field(() => EvolutionTriggersUpdateInput, {nullable:false})
    @Type(() => EvolutionTriggersUpdateInput)
    data!: EvolutionTriggersUpdateInput;

    @Field(() => EvolutionTriggersWhereUniqueInput, {nullable:false})
    @Type(() => EvolutionTriggersWhereUniqueInput)
    where!: Prisma.AtLeast<EvolutionTriggersWhereUniqueInput, 'id'>;
}
