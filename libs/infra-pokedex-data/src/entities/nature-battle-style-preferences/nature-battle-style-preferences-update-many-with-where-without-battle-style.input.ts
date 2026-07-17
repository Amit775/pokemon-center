import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NatureBattleStylePreferencesScalarWhereInput } from './nature-battle-style-preferences-scalar-where.input';
import { Type } from 'class-transformer';
import { NatureBattleStylePreferencesUpdateManyMutationInput } from './nature-battle-style-preferences-update-many-mutation.input';

@InputType()
export class NatureBattleStylePreferencesUpdateManyWithWhereWithoutBattleStyleInput {

    @Field(() => NatureBattleStylePreferencesScalarWhereInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesScalarWhereInput)
    where!: NatureBattleStylePreferencesScalarWhereInput;

    @Field(() => NatureBattleStylePreferencesUpdateManyMutationInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesUpdateManyMutationInput)
    data!: NatureBattleStylePreferencesUpdateManyMutationInput;
}
