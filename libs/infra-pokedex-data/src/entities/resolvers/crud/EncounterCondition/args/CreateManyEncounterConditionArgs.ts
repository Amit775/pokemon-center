import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionCreateManyInput } from "../../../inputs/EncounterConditionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEncounterConditionArgs {
  @TypeGraphQL.Field(_type => [EncounterConditionCreateManyInput], {
    nullable: false
  })
  data!: EncounterConditionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
