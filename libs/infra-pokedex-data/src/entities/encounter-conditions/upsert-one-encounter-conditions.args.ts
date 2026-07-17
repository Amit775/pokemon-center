import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncounterConditionsWhereUniqueInput } from './encounter-conditions-where-unique.input';
import { Type } from 'class-transformer';
import { EncounterConditionsCreateInput } from './encounter-conditions-create.input';
import { EncounterConditionsUpdateInput } from './encounter-conditions-update.input';

@ArgsType()
export class UpsertOneEncounterConditionsArgs {

    @Field(() => EncounterConditionsWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionsWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionsWhereUniqueInput, 'id'>;

    @Field(() => EncounterConditionsCreateInput, {nullable:false})
    @Type(() => EncounterConditionsCreateInput)
    create!: EncounterConditionsCreateInput;

    @Field(() => EncounterConditionsUpdateInput, {nullable:false})
    @Type(() => EncounterConditionsUpdateInput)
    update!: EncounterConditionsUpdateInput;
}
