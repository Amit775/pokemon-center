import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionsCreateManyInput } from "../../../inputs/EncounterConditionsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEncounterConditionsArgs {
  @TypeGraphQL.Field(_type => [EncounterConditionsCreateManyInput], {
    nullable: false
  })
  data!: EncounterConditionsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
