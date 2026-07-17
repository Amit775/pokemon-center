import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateWithoutAbilitiesInput } from './generations-update-without-abilities.input';
import { Type } from 'class-transformer';
import { GenerationsCreateWithoutAbilitiesInput } from './generations-create-without-abilities.input';
import { GenerationsWhereInput } from './generations-where.input';

@InputType()
export class GenerationsUpsertWithoutAbilitiesInput {

    @Field(() => GenerationsUpdateWithoutAbilitiesInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutAbilitiesInput)
    update!: Identity<GenerationsUpdateWithoutAbilitiesInput>;

    @Field(() => GenerationsCreateWithoutAbilitiesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutAbilitiesInput)
    create!: Identity<GenerationsCreateWithoutAbilitiesInput>;

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: Identity<GenerationsWhereInput>;
}
