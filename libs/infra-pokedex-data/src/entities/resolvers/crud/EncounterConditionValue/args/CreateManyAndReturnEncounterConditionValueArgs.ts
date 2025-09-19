import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueCreateManyInput } from "../../../inputs/EncounterConditionValueCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnEncounterConditionValueArgs {
  @TypeGraphQL.Field(_type => [EncounterConditionValueCreateManyInput], {
    nullable: false
  })
  data!: EncounterConditionValueCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
