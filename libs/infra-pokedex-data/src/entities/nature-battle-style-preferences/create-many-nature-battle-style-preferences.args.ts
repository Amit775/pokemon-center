import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NatureBattleStylePreferencesCreateManyInput } from './nature-battle-style-preferences-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNatureBattleStylePreferencesArgs {

    @Field(() => [NatureBattleStylePreferencesCreateManyInput], {nullable:false})
    @Type(() => NatureBattleStylePreferencesCreateManyInput)
    data!: Array<NatureBattleStylePreferencesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
