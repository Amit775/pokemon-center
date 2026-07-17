import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MovesUncheckedCreateNestedManyWithoutDamageClassInput } from '../moves/moves-unchecked-create-nested-many-without-damage-class.input';

@InputType()
export class MoveDamageClassesUncheckedCreateWithoutTypesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => MovesUncheckedCreateNestedManyWithoutDamageClassInput, {nullable:true})
    moves?: MovesUncheckedCreateNestedManyWithoutDamageClassInput;
}
