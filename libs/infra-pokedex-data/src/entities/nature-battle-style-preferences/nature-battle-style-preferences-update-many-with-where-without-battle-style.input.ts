import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesScalarWhereInput } from './nature-battle-style-preferences-scalar-where.input';
import { Type } from 'class-transformer';
import { NatureBattleStylePreferencesUpdateManyMutationInput } from './nature-battle-style-preferences-update-many-mutation.input';

@InputType()
export class NatureBattleStylePreferencesUpdateManyWithWhereWithoutBattleStyleInput {

    @Field(() => NatureBattleStylePreferencesScalarWhereInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesScalarWhereInput)
    where!: Identity<NatureBattleStylePreferencesScalarWhereInput>;

    @Field(() => NatureBattleStylePreferencesUpdateManyMutationInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesUpdateManyMutationInput)
    data!: Identity<NatureBattleStylePreferencesUpdateManyMutationInput>;
}
