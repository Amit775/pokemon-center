import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncountersCreateManyInput } from './encounters-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEncountersArgs {

    @Field(() => [EncountersCreateManyInput], {nullable:false})
    @Type(() => EncountersCreateManyInput)
    data!: Array<EncountersCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
