import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValuesCreateManyInput } from "../../../inputs/EncounterConditionValuesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnEncounterConditionValuesArgs {
  @TypeGraphQL.Field(_type => [EncounterConditionValuesCreateManyInput], {
    nullable: false
  })
  data!: EncounterConditionValuesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
