import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacteristicsUpdateManyMutationInput } from './characteristics-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CharacteristicsWhereInput } from './characteristics-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyCharacteristicsArgs {

    @Field(() => CharacteristicsUpdateManyMutationInput, {nullable:false})
    @Type(() => CharacteristicsUpdateManyMutationInput)
    data!: CharacteristicsUpdateManyMutationInput;

    @Field(() => CharacteristicsWhereInput, {nullable:true})
    @Type(() => CharacteristicsWhereInput)
    where?: CharacteristicsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
