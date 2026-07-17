import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionsUpdateInput } from './encounter-conditions-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EncounterConditionsWhereUniqueInput } from './encounter-conditions-where-unique.input';

@ArgsType()
export class UpdateOneEncounterConditionsArgs {

    @Field(() => EncounterConditionsUpdateInput, {nullable:false})
    @Type(() => EncounterConditionsUpdateInput)
    data!: EncounterConditionsUpdateInput;

    @Field(() => EncounterConditionsWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionsWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionsWhereUniqueInput, 'id'>;
}
