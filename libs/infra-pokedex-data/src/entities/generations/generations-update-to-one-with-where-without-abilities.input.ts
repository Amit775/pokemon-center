import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsWhereInput } from './generations-where.input';
import { Type } from 'class-transformer';
import { GenerationsUpdateWithoutAbilitiesInput } from './generations-update-without-abilities.input';

@InputType()
export class GenerationsUpdateToOneWithWhereWithoutAbilitiesInput {

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: Identity<GenerationsWhereInput>;

    @Field(() => GenerationsUpdateWithoutAbilitiesInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutAbilitiesInput)
    data!: Identity<GenerationsUpdateWithoutAbilitiesInput>;
}
