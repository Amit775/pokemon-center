import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionsUpdateManyMutationInput } from './encounter-conditions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EncounterConditionsWhereInput } from './encounter-conditions-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyEncounterConditionsArgs {

    @Field(() => EncounterConditionsUpdateManyMutationInput, {nullable:false})
    @Type(() => EncounterConditionsUpdateManyMutationInput)
    data!: EncounterConditionsUpdateManyMutationInput;

    @Field(() => EncounterConditionsWhereInput, {nullable:true})
    @Type(() => EncounterConditionsWhereInput)
    where?: EncounterConditionsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
