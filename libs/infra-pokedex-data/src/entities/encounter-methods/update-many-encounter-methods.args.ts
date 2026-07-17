import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterMethodsUpdateManyMutationInput } from './encounter-methods-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EncounterMethodsWhereInput } from './encounter-methods-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyEncounterMethodsArgs {

    @Field(() => EncounterMethodsUpdateManyMutationInput, {nullable:false})
    @Type(() => EncounterMethodsUpdateManyMutationInput)
    data!: EncounterMethodsUpdateManyMutationInput;

    @Field(() => EncounterMethodsWhereInput, {nullable:true})
    @Type(() => EncounterMethodsWhereInput)
    where?: EncounterMethodsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
